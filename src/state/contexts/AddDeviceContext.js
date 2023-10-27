import { createContext, useState } from "react";


export const AddDeviceContext = createContext()


const AddDeviceProvider = ({children}) => {
    const [deviceType, setAddDeviceType] = useState({
        deviceName: '',
        deviceRoute: '/add_device'
    })



    function switchDevice (deviceName, deviceRoute) {
        setAddDeviceType(prevState => {
            return {
                deviceName,
                deviceRoute
            }
        })
        console.log(deviceType, 'na the bastard be this')
    }


    return (
        <AddDeviceContext.Provider 
        value={{deviceType, switchDevice}}>
            {children}
        </AddDeviceContext.Provider>
    ) 
        
}

export default AddDeviceProvider