import { useState,useRef } from "react";
import { useAuth } from "../store/auth";
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";

export const Contact =()=>{

    const defaltContact = {
        username :"",
        email:"",
        phone:"",
        message:"",
    }
    const [contact,setContact] = useState(defaltContact);

    const form = useRef();

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
       setContact({...contact,[name]:value});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
       try{
            const response = await fetch("https://codeviq-news-default-rtdb.firebaseio.com/userContactRecord.json",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
               });

               if(response.ok){
                setContact(defaltContact);
                toast.success("Message Send..!")
               }

               emailjs.sendForm('service_34gvz6j', 'template_w5aobyt', form.current, '04JaXZe5duLsRwsJf')
               .then((result) => {
                   console.log(result.text);
               }, (error) => {
                   console.log(error.text);
               });
       }catch(error){
        console.log(`this is error ${error}`)
       }
    }
    const [userData, setUserData] = useState(true);
    const {userN} = useAuth();

    if(userData && userN){
        setContact({
            username: userN.username,
            email: userN.email,
            message:""
        });

        setUserData(false);
    }
    
    return (
        <>
        <section>
            <main>
                <div className="section-contact">
                    <div className="container grid grid-two-cols">
                    
                        <div className="contact-image">
                            <h1>Contact Us</h1>
                            <br />
                            <img src="./images/support.png" alt="support.png" width={400} height={400} />
                        </div>
                        <div className="contact-form">  
                            <form ref={form} onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Name</label>
                                    <input type="text" id="username" placeholder="Enter Your Name here.." name="username" autoComplete="off" value={contact.username} onChange={handleInput} required/>
                                </div>
                                <div>
                                    <label htmlFor="username">Email</label>
                                    <input type="email" id="email" placeholder="Enter Your Email here.." name="email" autoComplete="off" value={contact.email} onChange={handleInput} required/>
                                </div>
                                <div>
                                    <label htmlFor="Phone No">Phone No</label>
                                    <input type="tel" id="phone" placeholder="Enter Your Contact no. here.." name="phone" autoComplete="off" value={contact.phone} onChange={handleInput} required maxLength={10}/>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder="Drop Your Message Here.." cols="50" rows="6" autoComplete="off" maxLength={120} value={contact.message} onChange={handleInput} required></textarea>
                                </div>
                                <br />
                                <button className="btn btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1955302176007!2d80.93366967561172!3d26.833732563479952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd15f15582bf%3A0x33c00515a209da85!2scodeviq!5e0!3m2!1sen!2sin!4v1704471623954!5m2!1sen!2sin" width="100%" height="350" allowFullScreen="yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            
                </div>

            </main>
        </section>
        </>
    )
}
