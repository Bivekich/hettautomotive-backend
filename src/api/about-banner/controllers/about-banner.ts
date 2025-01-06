/**
 * about-banner controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::about-banner.about-banner",
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },

    async findByPage(ctx) {
      const { page } = ctx.params;

      const entries = await strapi.entityService.findMany(
        "api::about-banner.about-banner",
        {
          filters: { page: { $eq: page } },
          populate: "*",
        }
      );

      if (!entries || entries.length === 0) {
        return ctx.notFound("Banner not found for this page");
      }

      return { data: entries[0] };
    },
  })
);
