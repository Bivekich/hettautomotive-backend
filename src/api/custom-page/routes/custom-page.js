"use strict";

/**
 * custom-page router
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreRouter("api::custom-page.custom-page", {
  config: {
    find: { auth: false },
    findOne: { auth: false },
    create: { auth: false },
    update: { auth: false },
    delete: { auth: false },
  },
});
