import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
    adapter: adapter({
      // 启用 Node.js 兼容性标志
      platform: {
        compatibilityFlags: ['nodejs_compat'] 
      }
    })
  }
};

export default config;
