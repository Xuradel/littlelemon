import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
function ConfirmedBooking() {
    const navigate = useNavigate()
    return (
        <>
        <div className='order-section'>
            <h2>Your order has been confirmed, you will receive a confirmation through Email</h2>
            <button onClick={()=> navigate('/littlelemon')}>Back Home</button>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ConfirmedBooking
