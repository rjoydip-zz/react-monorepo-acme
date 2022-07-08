/* @jsx h */
import { h, render } from "preact";

import App from "./app";

const node = document.getElementById("app");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, node!, node!.lastChild as Element);

// Hot Module Replacement
if ((module as any).hot) {
  (module as any).hot.accept();
}
