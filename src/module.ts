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
      vnode: any,
      binding: any
    ) => {
      console.log(vnode.data);

      const style = vnode.data.style || (vnode.data.style = {});
      const classList = vnode.data.class || (vnode.data.class = []);

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

      classList.push(...computedClass);
    };
  }

  // this.addPlugin({ src: resolve(__dirname, "plugin.js") });
};

export default tscss;

module.exports.meta = require("../package.json");
