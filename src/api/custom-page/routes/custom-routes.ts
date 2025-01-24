export default {
  routes: [
    {
      method: "GET",
      path: "/api/custom-pages/by-slug/:slug",
      handler: "api::custom-page.custom-page.findBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
