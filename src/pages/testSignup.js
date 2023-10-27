import { useContext, useEffect, useReducer, useState } from "react";
import { ACTIONS } from "../state/actions/authActions";
import { AuthContext } from "../state/contexts/AuthContext";
import authReducer from "../state/reducers/AuthReducer";

const TestSignUp = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const  { state, signUp, authSuccess, signIn, updateState, error, createAccount } = useContext(AuthContext)
    // const [ device, setDevice] = useState([
    //     {deviceName: 'proxie kitchen', deviceLocation: 'office'},
    //     {deviceName: 'airsyn room', deviceLocation: 'office'},
    //     {deviceName: 'birsyn room', deviceLocation: 'office'},
    // ])

    const [allData,setAllData] = useState([
        {deviceName: 'proxie kitchen', deviceLocation: 'office'},
        {deviceName: 'airsyn room', deviceLocation: 'office'},
        {deviceName: 'birsyn room', deviceLocation: 'office'},
    ]);
    
    const [filteredData,setFilteredData] = useState(allData);

    const handleSearch = (value) =>{
        let result = [];
        result = allData.filter((data) => {
            return data.deviceName.includes(value)
        })
        setFilteredData(result);
    }   

    
    useEffect(() => {
        handleSearch(email)
    }, [email])

    // console.log(filterd)


    // const device = [
    //     {deviceName: 'proxie kitchen', deviceLocation: 'office'},
    //     {deviceName: 'airsyn room', deviceLocation: 'office'},
    //     {deviceName: 'birsyn room', deviceLocation: 'office'},
    // ]

    // const h = device.sort((a, b) => a.deviceName > b.deviceName ? 1 : -1);

    // console.log(h, 'this is it')

    const handleSignUp = () => {
        console.log(email, password)
        console.log(state)
        signUp(email, password)
    }

    const handleSignIn = () => {
        signIn(email, password)
    }
    
    return ( 
        <div className="flex flex-col space-y-5 items-center justify-center h-[100vh]">
            {state.account.email} {state.account.userId} account
            {error.isError && error.errorMsg}
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-500 text-white'/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='text-white bg-gray-500'/>
            {authSuccess && 'signing...' }
            <button className="bg-blue-900 text-white px-6 py-3" onClick={handleSignUp}>Sign up</button>
            <button className="bg-blue-900 text-white px-6 py-3" onClick={handleSignIn}>Sign in</button>
            <button className="bg-blue-900 text-white px-6 py-3" onClick={() => createAccount('preshy@gmail.com', '1292183182dfsd')}>Create account</button>
            {
                filteredData.sort((a, b) => a.deviceName > b.deviceName ? 1 : -1).map((d) => (
                    <div key={d.deviceName}>{d.deviceName}</div>
                ))
                
            }
        </div>
    );
}
 
export default TestSignUp;