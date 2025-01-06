/**
 * about-banner router
 */

import { factories } from "@strapi/strapi";

const defaultRouter = factories.createCoreRouter(
  "api::about-banner.about-banner"
);

// Add custom routes
const customRoutes = [
  {
    method: "GET",
    path: "/about-banners/page/:page",
    handler: "about-banner.findByPage",
    config: {
      auth: false,
    },
  },
];

export default {
  routes: [
    {
      method: "GET",
      path: "/about-banners",
      handler: "about-banner.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/about-banners/:id",
      handler: "about-banner.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/about-banners/page/:page",
      handler: "about-banner.findByPage",
      config: {
        auth: false,
      },
    },
  ],
};
