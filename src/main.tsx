import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { router } from "./router/route.tsx";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import ScrollToTopButton from "./Component/ScrollToTopButton.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="max-w-[1800px] mx-auto ">
          <RouterProvider router={router} />
          <Toaster position="top-center" />
          <ScrollToTopButton /> {/* Add ScrollToTopButton here */}
        </div>
      </PersistGate>
    </Provider>
  </StrictMode>
);
