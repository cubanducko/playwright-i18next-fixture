import i18next, { i18n } from "i18next";
import { I18nPlaywrightOptions } from "./fixture";

let storedI18n: i18n | undefined;

export async function initI18n({
  plugins,
  options,
  cache,
}: Required<
  Pick<I18nPlaywrightOptions, "plugins" | "options" | "cache">
>): Promise<i18n> {
  if (!cache || !storedI18n || !storedI18n.isInitialized) {
    const i18n = plugins.reduce(
      (i18n, plugin) => (i18n = i18n.use(plugin)),
      i18next.createInstance()
    );
    await i18n.init(options);
    storedI18n = i18n;
  }
  return storedI18n;
}

export function getI18nInstance() {
  if (!storedI18n) {
    throw new Error("No i18n instance initialized");
  }

  return storedI18n;
}
