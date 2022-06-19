import { viteSingleFile } from "vite-plugin-singlefile";
import remarkHtml from "vite-remark-html";

export default {
  plugins: [remarkHtml(), viteSingleFile()],
};
