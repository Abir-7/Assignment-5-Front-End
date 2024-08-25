import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { router } from "./router/route.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="max-w-[1800px] mx-auto ">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
