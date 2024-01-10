import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);
    //  check if Online

    useEffect(()=>{
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
    },[])

    // boolean value

    return onlineStatus;
}

export default useOnlineStatus; 