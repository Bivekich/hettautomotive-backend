export default ({ env }) => ({
  botToken: env("TELEGRAM_BOT_TOKEN"),
  chatId: env("TELEGRAM_CHAT_ID"),
});
