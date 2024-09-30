// vite.config.ts
import { defineConfig } from "file:///home/gabriel/projects/thirdStrike/node_modules/vite/dist/node/index.js";
import react from "file:///home/gabriel/projects/thirdStrike/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwind from "file:///home/gabriel/projects/thirdStrike/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///home/gabriel/projects/thirdStrike/node_modules/autoprefixer/lib/autoprefixer.js";
import mdx from "file:///home/gabriel/projects/thirdStrike/node_modules/@mdx-js/rollup/index.js";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      })
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9nYWJyaWVsL3Byb2plY3RzL3RoaXJkU3RyaWtlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9nYWJyaWVsL3Byb2plY3RzL3RoaXJkU3RyaWtlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2dhYnJpZWwvcHJvamVjdHMvdGhpcmRTdHJpa2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XG5pbXBvcnQgbWR4IGZyb20gXCJAbWR4LWpzL3JvbGx1cFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogXCIuL1wiLFxuICBwbHVnaW5zOiBbXG4gICAge1xuICAgICAgZW5mb3JjZTogXCJwcmVcIixcbiAgICAgIC4uLm1keCh7XG4gICAgICAgIC8qIGpzeEltcG9ydFNvdXJjZTogXHUyMDI2LCBvdGhlck9wdGlvbnNcdTIwMjYgKi9cbiAgICAgIH0pLFxuICAgIH0sXG4gICAgcmVhY3QoeyBpbmNsdWRlOiAvXFwuKGpzeHxqc3xtZHh8bWR8dHN4fHRzKSQvIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1IsU0FBUyxvQkFBb0I7QUFDclQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUNyQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFNBQVM7QUFHaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLFNBQVM7QUFBQSxNQUNULEdBQUcsSUFBSTtBQUFBO0FBQUEsTUFFUCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsTUFBTSxFQUFFLFNBQVMsNEJBQTRCLENBQUM7QUFBQSxFQUNoRDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
