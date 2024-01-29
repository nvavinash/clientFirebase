import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";


export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userN,setUser] = useState([]);
    const [allServices, setServices] = useState([]);

    const storeTokenInLs =(serverToken )=>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    };

    // Login and Logout Visibility on page 
    let isLoggedIn = !!token;

    //JWT authentication-------
    const userAuthentication = async( req,res)=>{
        try{
            const response = await fetch("https://codeviq-news-default-rtdb.firebaseio.com/userName.json",{
                method: "GET",
                header:{
                    "Content-Type":"application/json"
                },
            });
            if(response.ok){
                const data = await response.json();
                setUser(data);
                // console.log(`thsi is usredata ${data}`)

            }
        }catch(error){
            console.log("user data fetch error.",error)
        }
    }

    const getServices = async() =>{
        try{
            const response = await fetch("https://codeviq-news-default-rtdb.firebaseio.com/services.json",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(response.ok){
                const data = await response.json();
                // Ensure that data is an array before setting it in the state
            if (Array.isArray(data)) {
                setServices(data);
            } else {
                console.error("Received non-array data for services:", data);
            }
            }
        }catch(error){
            console.log(`this error is fetching services from db ${error}`);
        }
    }

    useEffect(()=>{
        userAuthentication();
        getServices();
    },[])

return(
    <AuthContext.Provider value ={{isLoggedIn,storeTokenInLs,LogoutUser,userN,allServices}}>
        {children}
    </AuthContext.Provider>
);
};

export const useAuth =( ) => {
    return useContext(AuthContext);
}