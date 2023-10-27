import { createContext, useReducer } from "react";
import HeaderReducer from "../reducers/HeaderReducer";

export const HeaderContext = createContext();

const HeaderContextProvider = (props) => {
  const [pageTitle, dipsatchPageTitle] = useReducer(
    HeaderReducer,
    "Welcome Onboard"
  );

  return (
    <HeaderContext.Provider value={{ pageTitle, dipsatchPageTitle }}>
      {props.children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
