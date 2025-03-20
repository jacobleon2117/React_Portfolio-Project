const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "*",
    label: "Not Found",
    hideInNav: true,
  },
];

export default routes;
