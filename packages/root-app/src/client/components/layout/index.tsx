import { Outlet } from "react-router-dom";

import Footer from "../footer";
import Header from "../header";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ padding: " 100px 20px" }}>{children || <Outlet />}</div>
      <Footer />
    </>
  );
};

export default Layout;
