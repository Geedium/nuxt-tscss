import { Module } from "@nuxt/types";
import { resolve } from "path";

import { DisplayType, Styles } from "./types";

interface Options {}

const tscss: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
  const options = Object.assign({}, this.options.tscss, moduleOptions);

  this.options.css.push(resolve(__dirname, "style.sass"));

  if (!options.stylesOnly) {
    if (!this.options.render.bundleRenderer.directives) {
      this.options.render.bundleRenderer.directives = {};
    }

    this.options.render.bundleRenderer.directives.css = (
      vnode: any,
      binding: any
    ) => {
      const style = vnode.data.style || (vnode.data.style = {});
      const classList = vnode.data.class || (vnode.data.class = []);

      for (const [key, value] of Object.entries<any>(binding.value)) {
        switch (key as keyof Styles) {
          case "color":
            if (["primary", "secondary", "accent"].indexOf(value) !== -1) {
              classList.push(`text-${value}`);
            } else {
              style.color = value;
            }
            break;
          case "backgroundColor":
            if (["primary", "secondary", "accent"].indexOf(value) !== -1) {
              classList.push(`bg-${value}`);
            } else {
              style.backgroundColor = value;
            }
            break;
          case "display":
            switch (value as DisplayType) {
              case "block":
                classList.push("is-block");
                break;
              case "inline":
                classList.push("is-inline");
                break;
              case "inlineBlock":
                classList.push("is-inline-block");
                break;
              case "flex":
                classList.push("is-flex");
                break;
              case "inlineFlex":
                classList.push("is-inline-flex");
                break;
              case "grid":
                classList.push("is-grid");
                break;
              case "table":
                classList.push("is-table");
                break;
            }
            break;
        }
      }
    };
  }

  // this.addPlugin({ src: resolve(__dirname, "plugin.js") });
};

export default tscss;

module.exports.meta = require("../package.json");
