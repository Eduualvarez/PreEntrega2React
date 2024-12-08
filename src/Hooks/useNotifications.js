import { useContext } from "react";
import { Notificationcontext } from "../context/notificationContext";

export const useNotification = ()=>{
    return useContext(Notificationcontext)
}