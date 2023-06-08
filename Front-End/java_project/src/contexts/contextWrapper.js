import React from "react";
import { UserProvider } from "./userContext";

const ContextWrapper = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};
export default ContextWrapper;
