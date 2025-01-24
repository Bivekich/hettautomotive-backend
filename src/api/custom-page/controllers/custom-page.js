"use strict";

/**
 * custom-page controller
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::custom-page.custom-page",
  ({ strapi }) => ({
    async find(ctx) {
      // If there's a slug in the query, find by slug
      if (ctx.query.filters?.slug) {
        try {
          const entity = await strapi.db
            .query("api::custom-page.custom-page")
            .findOne({
              where: { slug: ctx.query.filters.slug },
              populate: ["coverImage"],
            });

          if (!entity) {
            return ctx.notFound("Page not found");
          }

          const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
          return this.transformResponse(sanitizedEntity);
        } catch (error) {
          return ctx.badRequest("Error occurred while finding the page");
        }
      }

      // Otherwise, proceed with normal find
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },

    async create(ctx) {
      const { data, meta } = await super.create(ctx);
      return { data, meta };
    },

    async update(ctx) {
      const { data, meta } = await super.update(ctx);
      return { data, meta };
    },

    async delete(ctx) {
      const { data, meta } = await super.delete(ctx);
      return { data, meta };
    },
  })
);
