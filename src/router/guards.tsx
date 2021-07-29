import { GuardFunction } from "react-router-guards";

export const requireLogin: GuardFunction = (to, _from, next) => {
  // If guest tries to access private pages
  if (!to.meta.user && !to.meta.isPublic)
    // Then redirect to login page
    next.redirect("/");
  else next();
};

export const blockPublicPageAfterLogged: GuardFunction = (to, _from, next) => {
  // Public pages are blocked.
  // Means when you logged, you can't go to login page anymore
  // Or if you already have an account, you can't create another one
  const blockedPages = ["LOGIN", "REGISTER"];

  // If the user is logged in but tries to access blocked public pages
  if (to.meta.user && blockedPages.includes(to.meta.key) && to.meta.isPublic)
    // Then redirect to dashboard
    next.redirect("/app");
  else next();
};
