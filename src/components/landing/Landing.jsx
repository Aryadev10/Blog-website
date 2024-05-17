import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";


export default function Landing({input='Explore blog',link='/login'}) {

    return (
        <div className="h-[83vh] flex justify-center items-center" > 
            <div>
            <h1 className="text-[64px] font-extrabold text-white">
                Welcome!
                Get ready to blog
                <br />
                With chaiXblog
            </h1>
            </div>
        </div>
    )
}
