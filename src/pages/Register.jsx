import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
export const Register =()=>{
    
    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const {storeTokenInLs} = useAuth();
    const navigate = useNavigate();

    const handleInput =(e) =>{
        let name = e.target.name;
        let value = e.target.value
        setUser({...user,
        [name]:value,});
    };
    
const handleSubmit = async (e) =>{
    e.preventDefault();
   try{
        const response = await fetch("https://codeviq-news-default-rtdb.firebaseio.com/userName.json",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
           });

           if(response.ok){
            toast.success("Message Send..!")
            const res_data = await response.json();
            storeTokenInLs (res_data.token);
            

            setUser({
                username:"",
                email:"",
                password:"",
                phone:""
            });
            navigate("/login");
           }
        }catch(error){
            console.log(`this is error ${error}`)
           }
          
  
   //stored JWT in local storage---------
               
}        

    return( <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="reg-image">
                        <img src="./images/register.png" alt="registeration illustration" width={400} height={400} />
                    </div>
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration Form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" id="username" required autoComplete="off" value={user.username} onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" placeholder="enter your phone" id="phone" required autoComplete="off" maxLength={10} value={user.phone} onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" onChange={handleInput} value={user.password}/>
                            </div>
                            {/* <div>
                            
                                <label htmlFor="fileInput">Upload PDF File:</label>
                                <input type="file" id="fileInput" name="fileInput" accept="application/pdf" />
                            </div>
                             */}
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
)};
