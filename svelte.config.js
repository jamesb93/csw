import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import '${filePath}/src/app.scss';`
		}
	}),

	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
