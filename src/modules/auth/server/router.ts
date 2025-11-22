import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const authRoutes = createTRPCRouter({
  getUser: baseProcedure.query(({ ctx }) => {
    return {
      user: ctx.auth.user,
      isAuthenticated: ctx.auth.isAuthenticated,
      session: ctx.auth.session,
    };
  }),
});
