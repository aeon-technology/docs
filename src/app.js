import { article } from "./components/article";
import { sideNav } from "./components/side-nav";

main();

async function main() {
  await article();
  await sideNav();
}
