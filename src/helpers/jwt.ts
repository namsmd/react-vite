// TODO: manage user token with browser's cookies

export const setToken = (token: string) =>
  localStorage.setItem("IMI_TOKEN", token);

export const getToken = () => localStorage.getItem("IMI_TOKEN");

export const destroyToken = () => localStorage.removeItem("IMI_TOKEN");
