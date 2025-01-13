"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/seo/:slug",
      handler: "seo.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/seo",
      handler: "seo.find",
      config: {
        auth: false,
      },
    },
  ],
};
