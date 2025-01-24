/**
 * custom-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::custom-page.custom-page",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.entityService.findOne(
        "api::custom-page.custom-page",
        id,
        {
          populate: ["coverImage"],
        }
      );
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    async findBySlug(ctx) {
      try {
        const { slug } = ctx.params;
        const entities = await strapi.entityService.findMany(
          "api::custom-page.custom-page",
          {
            filters: { slug },
            populate: ["coverImage"],
          }
        );

        if (!entities || entities.length === 0) {
          return ctx.notFound("Page not found");
        }

        const sanitizedEntity = await this.sanitizeOutput(entities[0], ctx);
        return this.transformResponse(sanitizedEntity);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
