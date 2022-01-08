import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser",
  password: "testpass",
  
};

const UserProvider =
    ({ currentUser = demoUser}) => (
    <UserContext.Provider value={{ currentUser }}>
      
    </UserContext.Provider>
);

export { UserProvider };