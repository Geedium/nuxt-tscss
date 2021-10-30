import { Module } from "@nuxt/types";
import { resolve } from "path";

interface Options {}

const tscss: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
  const options = Object.assign({}, this.options.tscss, moduleOptions);

  this.options.css.push(resolve(__dirname, "style.sass"));

  if (!this.options.render.bundleRenderer.directives) {
    this.options.render.bundleRenderer.directives = {};
  }

  this.options.render.bundleRenderer.directives.css = (
    element: any,
    binding: any
  ) => {
    console.log("running loading directive server side");
  };

  if (!options.stylesOnly) {
    this.addPlugin({ src: resolve(__dirname, "plugin.js") });
  }
};

export default tscss;

module.exports.meta = require("../package.json");
