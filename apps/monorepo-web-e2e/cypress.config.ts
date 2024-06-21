import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run monorepo-web:serve',
        production: 'nx run monorepo-web:preview',
      },
      ciWebServerCommand: 'nx run monorepo-web:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
