import { Analytics } from "../components/Analytics"
import {useAuth} from "../store/auth"

export const Service =()=>{
    const {allServices} = useAuth();
 
   

    return (
        <>
            <section className="section-services">
            <div className="container">
            <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
            {
                allServices.map((elem) =>(
                    <div className="card" key={elem.id}>
                    <div className="card-img">
                        <img src={elem.thumbnail} alt="our services" width={500} height={500}/>
                    </div>
                    <div className="card-details">
                    <div className="grid-card-two">
                        <div>
                        <p> Price: Rs.<s>{elem.price}</s></p>
                        </div>
                        <div>
                        <p>Offer Price: Rs.{elem.offerPrice}</p>
                        </div>
                        
                    </div>
                    <div>
                        <h2>{elem.title}</h2>
                        <p>{elem.description}</p>
                    </div>

                    </div>
                </div>  
                ))
            }
                
            </div>
            </section>
            
        <Analytics/>
        </>
        )
}
