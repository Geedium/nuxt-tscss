import { Module } from "@nuxt/types";
import { resolve } from "path";

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
      dir: any
    ) => {
      const style = vnode.data.style || (vnode.data.style = {});
      style.background = "#a3a3a3";
      console.log("running loading directive server side");
    };
  }

  // this.addPlugin({ src: resolve(__dirname, "plugin.js") });
};

export default tscss;

module.exports.meta = require("../package.json");
