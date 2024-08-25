import { IRouteOption } from "../interface/global.interface";

export type TSidebarItem = {
  key: string;
  label: string;
  children?: TSidebarItem[];
} | null;

export const sideNavLinkGenerator = (routes: IRouteOption[], role: string) => {
  const sideNavLink = routes.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.element && item.name) {
      acc.push({
        key: item.name,
        label: `/${role}/${item.path}`,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: `/${role}/${child.path}`,
            };
          } else {
            return null;
          }
        }),
      });
    }
    return acc;
  }, []);
  return sideNavLink;
};
