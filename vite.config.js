import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    // KMP_template_shared-shared is a symlink into ../KMP_template_shared;
    // resolve its deps (@js-joda/core, ...) from this project's node_modules.
    preserveSymlinks: true,
  },
});
