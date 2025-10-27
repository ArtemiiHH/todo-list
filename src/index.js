// Entry point
import "./styles.css";
import { init } from "./modules/controller";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded — starting app");
  init();
});
