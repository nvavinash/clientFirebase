import { Analytics } from "../components/Analytics";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Home =()=>{
    const {userN} = useAuth;

    return (
    <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Congratulations to  <strong>{!userN? "You": userN.username} </strong>as You Got the Best IT Developers Here</p>
                        <h1>Welcome to CodeViq</h1>
                        <p>Are You Ready to take Your Business to the next level with Cutting-edge IT Solutions? Look no further..! as We Specialize in providing Innovative IT services and solutions tailored to meet your Unique needs</p>
                        <div className="btn-btn-group">
                            <NavLink to="/contact">
                                <button className="btn">Connect Now</button>
                            </NavLink>
                            <NavLink to="/service">
                                <button className="secondary-btn">Know More</button>
                            </NavLink>
                        </div>
                    </div>
                    {/* hero images section------------------------- */}
                    <div className="hero-image">
                        <img src="/images/home.png" alt="coding together" width={400} height={400}/>                       
                    </div>
                </div>
            </section>
            {/* section -2--------------------------------- */}
            <Analytics/>
            {/* section-3--------------------------------------- */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                   
                    <div className="hero-image">
                        <img src="/images/design.png" alt="coding together" width={350} height={350}/>                       
                    </div>
                     {/* hero images section-------------------------end here */}
                    <div className="hero-content">
                        <p>We are here to help You</p>
                        <h1> Get Started today</h1>
                        <p>Ready to take the first step towards a more efficient and secure IT Insfrastructure? Contact us today for a free consultation and let's discuss how We can help your Business thrive in the digital age.</p>
                        <div className="btn-btn-group">
                            <NavLink to="/contact">
                                <button className="btn">Connect Now</button>
                            </NavLink>
                            <NavLink to="/service">
                                <button className="secondary-btn">Know More</button>
                            </NavLink>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
  
    </>)
}
