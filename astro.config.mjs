import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.tobilobaadeyemo.com',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
