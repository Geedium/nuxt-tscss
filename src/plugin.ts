import Vue, { VNodeDirective } from "vue";
import { DisplayType, Alignment, Styles } from "./types";

export interface StyleDirective extends VNodeDirective {
  value?: Partial<Styles>;
}

Vue.directive("css", {
  bind: function (el, binding: StyleDirective): void {
    if (typeof binding.value !== "object") return;

    let computedClass: string[] = [];

    for (const [key, value] of Object.entries<any>(binding.value)) {
      switch (key as keyof Styles) {
        case "display":
          switch (value as DisplayType) {
            case "block":
              computedClass.push("is-block");
              break;
            case "inline":
              computedClass.push("is-inline");
              break;
            case "inlineBlock":
              computedClass.push("is-inline-block");
              break;
            case "flex":
              computedClass.push("is-flex");
              break;
            case "inlineFlex":
              computedClass.push("is-inline-flex");
              break;
            case "grid":
              computedClass.push("is-grid");
              break;
            case "table":
              computedClass.push("is-table");
              break;
          }
          break;
        case "justifyContent":
          switch (value as Alignment) {
            case "start":
              computedClass.push("is-content-justified-at-start");
              break;
            case "end":
              computedClass.push("is-content-justified-at-end");
              break;
            case "flexStart":
              computedClass.push("is-content-justified-at-flex-start");
              break;
            case "flexEnd":
              computedClass.push("is-content-justified-at-flex-end");
              break;
            case "center":
              computedClass.push("is-content-justified-centered");
              break;
            case "left":
              computedClass.push("is-content-justified-left");
              break;
            case "right":
              computedClass.push("is-content-justified-right");
              break;
            case "spaceBetween":
              computedClass.push("is-content-justified-between");
              break;
            case "spaceAround":
              computedClass.push("is-content-justified-around");
              break;
            case "spaceEvenly":
              computedClass.push("is-content-justified-evenly");
              break;
          }
          break;
        case "marginLeft":
        case "ml":
          computedClass.push(`ml-${value}`);
          break;
        case "marginTop":
        case "mt":
          computedClass.push(`mt-${value}`);
          break;
        case "marginRight":
        case "mr":
          computedClass.push(`mr-${value}`);
          break;
        case "marginBottom":
        case "mb":
          computedClass.push(`mb-${value}`);
          break;
      }
    }
    el.classList.add(...computedClass);
  },
});
