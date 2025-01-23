"use strict";

/**
 * product-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::product-category.product-category",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          image: true,
          subcategories: {
            populate: ["image"],
          },
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
          subcategories: {
            populate: ["image"],
          },
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
