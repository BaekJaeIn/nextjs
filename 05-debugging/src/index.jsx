import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";
import "./index.css";

// StrictMode : 앱을 두번씩 실행
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
