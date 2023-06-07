import React, { FC, PropsWithChildren } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      height: "100vh",
      width: "100%",
      padding: "200px 100px",
    }}
  >
    {children}
  </div>
);

export default Layout;
