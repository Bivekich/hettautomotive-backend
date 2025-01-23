"use strict";

/**
 * subcategory controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::subcategory.subcategory",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          image: true,
          parent_category: true,
          catalogProducts: {
            populate: ["images", "brand", "model", "modification"],
          },
          seo: true,
        },
      };

      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          image: true,
          parent_category: true,
          catalogProducts: {
            populate: ["images", "brand", "model", "modification"],
          },
          seo: true,
        },
      };

      const response = await super.findOne(ctx);
      return response;
    },
  })
);
