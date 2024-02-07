import { Outlet } from "react-router-dom";
import HeaderMainPage from "../Pages/headerMainPage";
import FooterMainPage from "../Pages/footerMainPage";

const Layout = () => {
  return (
    <div>
      <HeaderMainPage  />
      <Outlet />
      <FooterMainPage />
    </div>
  );
};

export default Layout;
