/* @jsx h */
import { h, Component } from "preact";
import { SVG } from "@svgdotjs/svg.js";

import "../styles/app.css";
import Rect from "./components/rect";

class App extends Component {
  render() {
    const draw = SVG().addTo("#app").size("100%", "100%");
    return (
      <Rect
        draw={draw}
        width={100}
        height={100}
        mx={100}
        my={50}
        fill={"#f06"}
      />
    );
  }
}

export default App;
