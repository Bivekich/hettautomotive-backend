import axios from "axios";

interface TelegramConfig {
  botToken: string;
  chatId: string;
}

export default {
  async sendMessage(data: any) {
    const { botToken, chatId } = strapi.config.get(
      "telegram"
    ) as TelegramConfig;

    if (!botToken || !chatId) {
      throw new Error("Telegram configuration is missing");
    }

    const message = `
📬 Новая заявка с сайта:

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
📧 Email: ${data.email}
💬 Сообщение: ${data.message}
    `.trim();

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      });
      return { success: true };
    } catch (error) {
      console.error("Telegram API Error:", error);
      throw error;
    }
  },
};
