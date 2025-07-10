import {Hono} from "hono";
import bcrypt from "bcryptjs";
import {decode, sign, verify} from "hono/jwt";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";

interface Env {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}
export const userRouter = new Hono<Env>();

// Signup --------------
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    });
    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json(
      {
        message: "Signup Successfull! User Created ✅",
        token: token,
      },
      200
    );
  } catch (e) {
    c.status(403);
    return c.json({error: "⚠ Error while signing up"});
  }
});

// Signin --------------
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({error: "User Not Found 🤔"});
  }
  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    c.status(401);
    return c.json({error: "Invalid password ❌"});
  }
  const token = await sign({id: user.id}, c.env.JWT_SECRET);
  return c.json({token: token});
});
