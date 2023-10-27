import { useEffect, useRef, useState } from "react";

const ParentIframe = () => {
    const iFrameRef = useRef(null)

    const [recieveMessage, setRecieveMessage] = useState('')

    useEffect(() => {
        window.addEventListener('message', function(e) {
            console.log(e.origin, e.data);
            if(e.origin !== 'http://localhost:3000') {
                console.log('message is no from a trusted origin')
                return
            } 

            setRecieveMessage('Got this message from parent ' + e.data)
            console.log('hdldkdlk', e.data)
        })
    }, [])



    const sendMessage = () => {
        console.log('heloo', iFrameRef)
        if(!iFrameRef.current) {
            console.log('iframe is empty');
            return
        } 

        iFrameRef.current.contentWindow.postMessage(
            'Hello son!',
            'http://localhost:3000'

        )
    }

    var childWindow

    const openWindow = () => {
        childWindow = window.open(
            'http://127.0.0.1:5500/index.html',
            'childwindow',
            'toolbar=no, statusbar=no, scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400'
        )
    }

    return ( 
        <>
            <div>parent iframe</div>

            <button onClick={sendMessage}>Send message to iframe</button>
            <br />
            <br />
            <div className="">
                <iframe 
                ref={iFrameRef}
                src="http://127.0.0.1:5500/index.html" 
                width='600'
                height='300'
                frameborder="0"></iframe>
                
            </div>
            <button onClick={openWindow}>Open window</button>
            {/* {recieveMessage} */}
        </>
    );
}
 
export default ParentIframe;