"use strict";

/**
 * about-banner controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::about-banner.about-banner",
  ({ strapi }) => ({
    async findByPage(ctx) {
      const { page } = ctx.params;

      const entity = await strapi.db
        .query("api::about-banner.about-banner")
        .findOne({
          where: { page },
          populate: ["banner"],
        });

      if (!entity) {
        return ctx.notFound();
      }

      return {
        data: {
          title: entity.title,
          subtitle: entity.subtitle,
          banner: entity.banner,
        },
      };
    },
  })
);
