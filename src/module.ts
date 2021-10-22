import { Module } from "@nuxt/types";
import { resolve } from "path";

interface Options {}

const tscss: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
  const options = Object.assign({}, this.options.tscss, moduleOptions);

  this.options.css.push(resolve(__dirname, "style.css"));

  if (!options.stylesOnly) {
    this.addPlugin({ src: resolve(__dirname, "plugin") });
  }
};

export default tscss;

module.exports.meta = require("./package.json");
