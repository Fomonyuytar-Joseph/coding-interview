import React from "react";
import SideBar from "./sidebar/SideBar";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex ">
      <div className="flex-1 ">
        <SideBar />
      </div>

      <div className="flex-6 w-full">{children}</div>
    </div>
  );
};

export default Layout;
