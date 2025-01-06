export default {
  async sendContactForm(ctx) {
    try {
      const { data } = ctx.request.body;

      // Basic validation
      if (!data.name || !data.phone || !data.email || !data.message) {
        return ctx.badRequest("All fields are required");
      }

      // Send to Telegram
      await strapi.service("api::telegram.telegram").sendMessage(data);

      return { success: true };
    } catch (error) {
      console.error("Contact form submission error:", error);
      return ctx.internalServerError("Failed to send message");
    }
  },
};
