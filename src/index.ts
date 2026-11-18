import { Elysia } from "elysia";
import { healthRoutes } from "./routes/health";

const app = new Elysia()
  .get("/", () => ({
    message: "Hello from Elysia + Drizzle + MySQL!",
  }))
  .use(healthRoutes)
  .listen(Number(process.env.PORT) || 3000);

console.log(
  `🚀 Server is running at http://${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
