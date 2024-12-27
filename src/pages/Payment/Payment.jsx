import React, { useContext, useState } from 'react'
import './Payment.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Payment = () => {


    const { food_list, cartItems, url, getTotalCartAmount,token } = useContext(StoreContext);
    const [pay,setPay] = useState("false");

    const navigate = useNavigate()
    const onPay =async (event)=>{
        event.preventDefault();
        setPay("true");
        let pay_data ={
            payment:pay
        };
       
        let response = await axios.post(url+"/api/order/verify",pay_data,{headers:{token}})
        console.log(response)
    if(response.data.success){
      navigate('/');
      alert("Payment Suceess");
    }
    else{
      alert("Error")
    }
    }

    return (
        <div className='payment-content'>
            <div className="payment-content-left">
                <>
                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div className='items'>
                                    <img src={`${url}/images/${item.image}`} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                </div>
                            )
                        }
                    })}
                    <div className="total">
                        <p>Total</p>
                        <h2>{getTotalCartAmount() + 2}</h2>
                    </div>
                </>

            </div>
            <form onSubmit={onPay}><div className="payment-content-right">
                <h2>Pay with card</h2>
                <div className="box">
                    <p>Email</p>
                    <input required type="email" placeholder='email' />
                </div>
                <div className="box card-number">
                    <p>Card Number</p>
                    <div className="card">
                        <input required type="text" placeholder='xxxx-xxxx-xxxx-xxxx' />
                        <img src={assets.visa} alt="" />
                    </div>

                </div>
                <div className="box1">
                    <div className="box exp-data">
                        <p>EX-Data</p>
                        <input required type="date" />
                    </div>
                    <div className=" box cvv">
                        <p>CVV</p>
                        <input required type="number" placeholder='...' />
                    </div>
                </div>
                <div className="box">
                    <p>Holder Name</p>
                    <input required type="text" placeholder='Name' />
                </div>
                <button type='submit'>Pay</button>
            </div>
            </form>

        </div>


    )
}

export default Payment
