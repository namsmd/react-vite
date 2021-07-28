import { useAuth } from "@hooks/useAuth";

export const requireLogin = (to: any, from: any, next: any) => {
  if (to.meta.isPublic) return next();

  const auth = useAuth();

  if (!auth.user) return next.redirect("/");
  return next();
};
