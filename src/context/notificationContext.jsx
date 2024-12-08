import { useState, createContext } from "react";

export const Notificationcontext = createContext();

export const NotificationProvider = ({children})=> 
{   
    const [message, setMessage] = useState("");

    const setNotification = (msg)=>
        
        {
            setMessage(msg);
            setTimeout(()=>{
                setMessage("")
            },2500)
        }

            return (
                <Notificationcontext.Provider value={{setNotification}}>
                    <Notification message={message}/>
                        {children}
                </Notificationcontext.Provider>
            )


}

const Notification = ({message})=>{

    const notificationStyle = 
        {
            position: 'absolute',
            zIndex: 100, 
            top: 100,
            right: 30,
            padding: '20px',
            border:'solid black 2px',
            backgroundcolor: 'beige'
        };

        if(message === "") return 

        return(
            <div style={notificationStyle}>
                {message}
            </div>
        )
}