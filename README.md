<div align="center">
  <br>
  <header>
    <img src="https://github.com/cubanducko/playwright-i18next-fixture/blob/main/assets/logo.png?raw=true" height="64" />
  </header>
  <br>
  <h1>playwright-i18next-fixture</h1>
  <p> 📝 Use your `i18next` translations in <strong>Playwright</strong> to create multi-language selectors</p>
</div>

<div align="center">

[![Build Status][build-badge]][build-link]
[![Code Style][prettier-badge]][prettier-link]
[![Package Version][npm-badge]][npm-link]
[![MIT License][license-badge]][license-link]

</div>

<br>

## 🚀 Use case

<p>Selecting by text can be a bit risky in a e2e context, since translations may change and you may want to test with multiple languages</p>
<p>With the `i18next` you can select text by key and create re-usable multi-language test</p>

<br>

## 🌱 Installation

```bash
# Yarn
yarn add --dev playwright-i18next-fixture

# PNPM
pnpm add --D playwright-i18next-fixture

# NPM
npm install --save-dev playwright-i18next-fixture

```

<br>

## 📝 Usage

An `i18next` instance must be available in `window`. You can use this small plugin for `i18next` or expose it manually with

```ts
// With plugin

// Without plugin
```

Include the `i18nFixture` in the `@playwright/test` extend

```ts
import { test as base } from "@playwright/test";
import { i18nFixture } from "playwright-i18next-fixture";

const test = base.extend(i18nFixture);

// Context is now shared
test("my test", async ({ i18n, t }) => {});
```

<br>

## LICENSE

MIT

[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-link]: https://opensource.org/licenses/MIT
[npm-badge]: https://img.shields.io/npm/v/playwright-i18next-fixture
[npm-link]: https://www.npmjs.com/package/playwright-i18next-fixture
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier
[prettier-link]: https://prettierjs.org/en/download/
[build-badge]: https://github.com/cubanducko/playwright-i18next-fixture/actions/workflows/build.yml/badge.svg
[build-link]: https://github.com/cubanducko/playwright-i18next-fixture/actions/workflows/build.yml