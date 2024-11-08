import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/scenarios',
  timeout: 120000,
  retries: 0,
  use: {
    baseURL: 'https://demo.opencart.com/', // Certifique-se de que isso está presente
    trace: 'on',
    locale: 'pt-BR',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'off'
  },
  expect: {
    timeout: 30000
  },
  reporter: [
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
  ]
});