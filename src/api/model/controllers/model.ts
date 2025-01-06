import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::model.model",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, populate: ["brand", "modifications"] };
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      ctx.query = { ...ctx.query, populate: ["brand", "modifications"] };
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },
  })
);
