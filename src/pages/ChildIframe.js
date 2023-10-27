import { useEffect, useState } from "react";

const ChildIframe = () => {
    const [recieveMessage, setRecieveMessage] = useState('')

    useEffect(() => {
        window.addEventListener('message', function(e) {
            console.log(e.origin, e.data);
            if(e.origin !== 'http://localhost:3000') {
                console.log('message is no from a trusted origin')
                return
            } 

            setRecieveMessage('Got this message from parent ' + e.data)
        })
    }, [])

    const sendMessage = () => {
        window.parent.postMessage('Hi Parent', 'http://localhost:3000')
    }

    return ( 
        <>
        <div>child iframe</div>
        <p>{recieveMessage}</p>

        <button onClick={sendMessage}>Send to parent</button>
        </>
    );
}
 
export default ChildIframe;