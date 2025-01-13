"use strict";

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::seo.seo", ({ strapi }) => ({
  async find(params = {}) {
    return strapi.entityService.findMany("api::seo.seo", {
      ...params,
      populate: ["metaImage"],
    });
  },

  async findOne(slug, params = {}) {
    const entries = await strapi.entityService.findMany("api::seo.seo", {
      ...params,
      filters: { slug },
      populate: ["metaImage"],
    });
    return entries[0] || null;
  },
}));
