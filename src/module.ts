import { Module } from "@nuxt/types";
import { resolve } from "path";

import styled from "./styled";

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
      styled(binding.value, style, classList);
    };
  }
};

export default tscss;

module.exports.meta = require("../package.json");
