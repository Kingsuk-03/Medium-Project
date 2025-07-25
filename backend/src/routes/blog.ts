import {Hono} from "hono";
import {decode, sign, verify} from "hono/jwt";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";
import {createBlogInput, updateBlogInput} from "@kingsuk100x/medium-common";
import Groq from "groq-sdk";

interface Env {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    GROQ_API_KEY: string;
  };
  Variables: {
    jwtPayload: string;
  };
}
export const blogRouter = new Hono<Env>();

// Middleware

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith(`Bearer`)) {
    c.status(401);
    return c.json({error: "Invalid Token"});
  }
  const token = authHeader.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  console.log(payload);
  if (!payload) {
    c.status(401);
    return c.json({error: "unauthorized"});
  }
  c.set("jwtPayload", payload.id);
  await next();
});

// Routes

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const userId = c.get("jwtPayload");
    console.log(userId);

    const blogbody = await c.req.json();
    console.log(blogbody);
    const {success} = createBlogInput.safeParse(blogbody);
    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs are not Correct!",
      });
    }
    const post = await prisma.post.create({
      data: {
        title: blogbody.title,
        content: blogbody.content,
        authorId: userId,
      },
    });
    c.status(200);
    return c.json({
      message: "Blog Created Successfully 📝",
      id: post.id,
    });
  } catch (e) {
    c.status(403);
    return c.json({error: "Something Unexpected Occured!"});
  }
});
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const userId = c.get("jwtPayload");
    console.log(userId);

    const blogbody = await c.req.json();
    const {success} = updateBlogInput.safeParse(blogbody);
    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs are not Correct!",
      });
    }
    await prisma.post.update({
      where: {
        id: blogbody.id,
        authorId: userId,
      },
      data: {
        title: blogbody.title,
        content: blogbody.content,
      },
    });
    c.status(200);
    return c.json({
      message: "Blog Updated Successfully 📝",
    });
  } catch (e) {
    c.status(403);
    return c.json({error: "Can't Update! Something Unexpected Occured!"});
  }
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    console.log("Using userId:", c.get("jwtPayload"));
    const posts = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(posts);
    return c.json({posts});
  } catch (e) {
    c.status(411);
    console.log(e);
  }
});
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  const blog = await prisma.post.findUnique({
    where: {
      id: id,
    },
    select: {
      title: true,
      content: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  c.status(200);
  console.log(blog);
  return c.json(blog);
});

blogRouter.post("/generate-blog", async (c) => {
  const groq = new Groq({apiKey: c.env.GROQ_API_KEY});

  try {
    const {title} = await c.req.json();

    if (!title || !title.trim()) {
      return c.json({error: "Enter a title to generate content!"}, 400);
    }

    const response = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {role: "system", content: "You are a helpful blog writer."},
        {
          role: "user",
          content: `Write a detailed blog on: "${title}". Use only plain text. Do not use any HTML, markdown, links, lists, headings, or code snippets. Separate paragraphs clearly using new lines.`,
        },
      ],
    });

    const aiContent = response.choices[0].message.content;
    return c.json({content: aiContent});
  } catch (err) {
    console.error("Groq error:", err);
    return c.json({error: "AI generation failed"}, 500);
  }
});
