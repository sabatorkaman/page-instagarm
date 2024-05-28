import vituum from "vituum";
import tailwindcss from "@vituum/vite-plugin-tailwindcss";

import posthtml from "@vituum/vite-plugin-posthtml";
import postcss from "@vituum/vite-plugin-postcss";

export default {
  plugins: [
    tailwindcss(),
    postcss(),
    posthtml()],
};
