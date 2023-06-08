import React from "react";
import { useState, createContext } from "react";

export const userContext = createContext({
  user: { firstName: "", lastName: "", email: "", password: "" },
  setUser: (user) => {},
});

export const UserProvider = (props) => {
  const [user, setUser] = useState("");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};
