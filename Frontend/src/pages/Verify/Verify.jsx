import React, { useContext } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Storecontext } from '../../components/context/Storecontext';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(Storecontext);
    const navigate = useNavigate();

    const verifyPayment = async() => {
        const resonse = await axios.post(url + "/api/order/verify",{success,orderId});
        if(resonse.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }
    

  return (
    <div className="verify">
        <div className="spinner">

        </div>
    </div>
  )
}

export default Verify