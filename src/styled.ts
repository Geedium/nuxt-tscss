import { DisplayType, Alignment, Styles } from "./types";

const styled = (bindingValue: any, style: any, classList: any) => {
  for (const [key, value] of Object.entries<any>(bindingValue)) {
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
      case "justifyContent":
        switch (value as Alignment) {
          case "start":
            classList.push("is-content-justified-at-start");
            break;
          case "end":
            classList.push("is-content-justified-at-end");
            break;
          case "flexStart":
            classList.push("is-content-justified-at-flex-start");
            break;
          case "flexEnd":
            classList.push("is-content-justified-at-flex-end");
            break;
          case "center":
            classList.push("is-content-justified-centered");
            break;
          case "left":
            classList.push("is-content-justified-left");
            break;
          case "right":
            classList.push("is-content-justified-right");
            break;
          case "spaceBetween":
            classList.push("is-content-justified-between");
            break;
          case "spaceAround":
            classList.push("is-content-justified-around");
            break;
          case "spaceEvenly":
            classList.push("is-content-justified-evenly");
            break;
        }
        break;
      case "marginLeft":
      case "ml":
        classList.push(`ml-${value}`);
        break;
      case "marginTop":
      case "mt":
        classList.push(`mt-${value}`);
        break;
      case "marginRight":
      case "mr":
        classList.push(`mr-${value}`);
        break;
      case "marginBottom":
      case "mb":
        classList.push(`mb-${value}`);
        break;
    }
  }
};

export default styled;
