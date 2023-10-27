import { createContext, useState } from "react";


export const DisplaySidebarContext = createContext()

const DisplaySidebarProvider = (props) => {
    const [sideNav, setSideNav] = useState(false)


    const toggleSideNav = () => {
        setSideNav(!sideNav)
    }

    return ( 
        <DisplaySidebarContext.Provider value={{sideNav, toggleSideNav}}>
            {props.children}
        </DisplaySidebarContext.Provider>

    );
}
 
export default DisplaySidebarProvider;