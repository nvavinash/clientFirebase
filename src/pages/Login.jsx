import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login =()=>{

    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const handleInput =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
       setUser({...user,[name]:value
       })
    }
    //-------useNavigate----
    const navigate = useNavigate();
    const {storeTokenInLs} = useAuth(); //using {} because we are not using as function and we didnt passed it in default export

    //----handleSubmit -----

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`https://codeviq-news-default-rtdb.firebaseio.com/user.json`,{
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            
            if(response.ok){
                // alert("Login Successfully..");
                const res_data = await response.json();
                storeTokenInLs(res_data.token);

                setUser ({
                    email: "",
                    password:""
                })
                toast.success("login Successfull");
                navigate("/");
            }else{
                console.log("invalid Credintials");
                toast.error("Invalid Credentials");
            }

        }catch(error){
            console.log("login error",error);
        }
//storing data to LocalStorege---------
    

       
    }
  
    return(
    <>
    <section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image">
                        <img src="./images/login.png" alt="login-illustration" width={400} height={400} />
                    </div>
                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login Form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input name="email" type= "email" id="email" placeholder="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                            </div> 
                            <div>
                                <label htmlFor="passowore">Password</label>
                                <input type="password" name="password" placeholder="enter the password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                            </div>
                            <br />
                                <button className="btn btn-submit" type="submit">Login Now</button>  
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
)};
