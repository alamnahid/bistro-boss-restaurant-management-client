import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate, useRouteError } from "react-router-dom";


const ErrorElement = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    const handleback = ()=>{
        navigate('/')
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            {
                error.status === 404 && <div>
                    <h1> <img className="w-[40vw] mx-auto pt-32" src="https://i.ibb.co/MM858gJ/a87cd3cbf82a76241fa909a3cffde711.gif" alt="" /></h1>

                    <div className="text-center">
                    <button onClick={handleback} style={{background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"}} className="btn border-none text-xl btn-neutral w-[14rem] h-[3.5rem] text-white font-bold"><FaHome/> Back to Home</button>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default ErrorElement;