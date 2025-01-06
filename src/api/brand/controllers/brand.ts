import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::brand.brand",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, populate: "models" };
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      ctx.query = { ...ctx.query, populate: "models" };
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },
  })
);
