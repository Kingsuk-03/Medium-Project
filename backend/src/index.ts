import {Hono} from "hono";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";

// export interface Env {
//   DATABASE_URL: string;
// }
interface Env {
  Bindings: {
    DATABASE_URL: string;
  };
}
const app = new Hono<Env>();

app.post("/api/v1/user/signup", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  // console.log(id);
  return c.text("Hello Hono!");
});
app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello Hono!");
});

export default app;
