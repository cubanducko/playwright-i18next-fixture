import {
  Fixtures,
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
} from "@playwright/test";
import {
  i18n,
  InitOptions,
  Module,
  NewableModule,
  Newable,
  TFunction,
} from "i18next";
import { initI18n } from "./i18n";

export type I18nPlaywrightFixture = {
  i18n: i18n;
  t: TFunction;
};

export type I18nPlaywrightOptions = {
  plugins?: (Module | NewableModule<Module> | Newable<Module>)[];
  options?: InitOptions;
  cache?: boolean;
};

export const createI18nFixture = ({
  plugins = [],
  options = {},
  cache = true,
}: I18nPlaywrightOptions): Fixtures<
  I18nPlaywrightFixture,
  PlaywrightWorkerArgs & PlaywrightWorkerOptions,
  PlaywrightTestArgs & PlaywrightTestOptions,
  PlaywrightWorkerArgs & PlaywrightWorkerOptions
> => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    i18n: async ({ page: _ }, use) => {
      const i18nInitialized = await initI18n({ plugins, options, cache });
      await use(i18nInitialized);
    },
    t: async ({ i18n }, use) => {
      await use(i18n.t);
    },
  };
};
