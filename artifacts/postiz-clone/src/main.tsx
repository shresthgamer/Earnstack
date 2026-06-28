import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.documentElement.style.background = "#0e0e0e";
document.body.style.background = "#0e0e0e";
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(<App />);
