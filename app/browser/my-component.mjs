import enhance from "@enhance/element";
import render from "../elements/my-component.mjs";

enhance("my-component", {
  attrs: ["selected"],
  /**
   * @param {HTMLElement} root
   */
  init(root) {
    console.log("hook");
    root.addEventListener("change", (event) => {
      if (event.target.nodeName === "INPUT") {
        root.setAttribute("selected", event.target.value);
      }
    });
  },
  render,
  connected() {},
});
