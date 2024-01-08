import { createContext } from "react";

const authContext = createContext({
  authenticated: {
    userData: {},
    loggedIn: false
  },
  setAuthenticated: (auth) => {}
});

export default authContext;