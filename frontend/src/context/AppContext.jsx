import { createContext } from "react";
import { doctors } from "../assets/assets";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currencysym = '₹'
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [doctors,setdoctors] = useState([])

    const [token,settoken] = useState('');

    

    const getdoctorsdata =async() =>{
        try{
            const {data} = await axios.get(backendurl+"/api/doctor/list")
            if(data.success){

                setdoctors(data.doctors)

            }
            else {
                toast.error(data.message)
            }
        }
        catch(error){

            console.log(error);
            toast.error(error.message);
            

        }
    }

    const value = {
        doctors,currencysym, token , settoken, backendurl
    }

    useEffect(()=>{
        getdoctorsdata()
    },[])

    

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider