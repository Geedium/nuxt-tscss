import { Module } from "@nuxt/types";
import { resolve } from "path";

import { Styles } from "./types";

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
      el: any,
      binding: any
    ) => {
      const style = el.data.style || (el.data.style = {});

      let computedClass: string[] = [];

      for (const [key, value] of Object.entries<any>(binding.value)) {
        switch (key as keyof Styles) {
          case "color":
            if (["primary", "secondary", "accent"].indexOf(value) !== -1) {
              computedClass.push(`text-${value}`);
            } else {
              style.color = value;
            }
            break;
        }
      }

      el.classList.add(...computedClass);
    };
  }

  // this.addPlugin({ src: resolve(__dirname, "plugin.js") });
};

export default tscss;

module.exports.meta = require("../package.json");
