import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: true,
    env: {
      allure: true,
      allureResultsPath: 'allure-results',
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);

      on('before:run', (details) => {
        const resultsPath = path.resolve(__dirname, 'allure-results');

        if (!fs.existsSync(resultsPath)) {
          fs.mkdirSync(resultsPath, { recursive: true });
        }

        const envContent = `BaseUrl=${config.baseUrl}\nBrowser=${
          details.browser?.displayName || 'N/A'
        }\nEnvironment=UAT`;

        fs.writeFileSync(path.join(resultsPath, 'environment.properties'), envContent);

        const executorContent = {
          name: 'Cypress',
          type: 'jenkins',
          buildName: 'Cypress-Build-' + Date.now(),
        };

        fs.writeFileSync(path.join(resultsPath, 'executor.json'), JSON.stringify(executorContent));
      });

      on('task', {
        appendToFile({ fileName, data }: { fileName: string; data: unknown }) {
          const content = JSON.stringify(data, null, 2) + ',\n';
          fs.appendFileSync(fileName, content);
          return null;
        },
      });

      return config;
    },
  },
});
