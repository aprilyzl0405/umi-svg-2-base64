import { defineConfig } from 'umi';

export default defineConfig({
  inlineLimit: 100000,
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
