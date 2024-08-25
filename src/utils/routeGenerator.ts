import { ReactNode } from "react";
import { IRouteOption } from "../interface/global.interface";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export const routeGenerator = (routes: IRouteOption[]) => {
  const finalRoutes = routes.reduce((acc: TRoute[], item) => {
    console.log(item);
    if (item.name && item.element) {
      acc.push({ path: item.path, element: item.element });
    }
    if (item.children) {
      item.children.forEach((item) => {
        acc.push({ path: item.path, element: item.element });
      });
    }
    return acc;
  }, []);
  return finalRoutes;
};
