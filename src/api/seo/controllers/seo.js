"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::seo.seo", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    const entity = await strapi.service("api::seo.seo").find(query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async findOne(ctx) {
    const { slug } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service("api::seo.seo").findOne(slug, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
