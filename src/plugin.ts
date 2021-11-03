import Vue, { VNodeDirective } from "vue";
import { Styles } from "./types";

import styled from "./styled";

export interface StyleDirective extends VNodeDirective {
  value?: Partial<Styles>;
}

Vue.directive("css", {
  bind: function (el, binding: StyleDirective) {
    let computedClass: string[] = [];
    styled(binding.value, el.style, computedClass);
    el.classList.add(...computedClass);
  },
});
