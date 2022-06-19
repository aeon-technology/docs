import { article } from "./components/article";
import { sideNav } from "./components/side-nav";
import "./style.css";

main();

async function main() {
  await article();
  await sideNav();
}
