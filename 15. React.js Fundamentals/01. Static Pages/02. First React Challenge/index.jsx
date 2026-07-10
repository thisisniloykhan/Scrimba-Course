/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>React makes the code more easier to manage</li>
    <li>It's easier to copy the code multiple times</li>
    <li>
      React is a popular frontend library so it is a great tool for career
      development
    </li>
  </ul>,
);
