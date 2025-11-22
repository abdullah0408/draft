import { createTRPCRouter } from "../init";
import { authRoutes } from "@/modules/auth/server/router";

export const appRouter = createTRPCRouter({
  auth: authRoutes,
});

export type AppRouter = typeof appRouter;
