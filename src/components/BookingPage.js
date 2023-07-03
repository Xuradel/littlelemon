import React,{useEffect, useReducer, useState} from 'react'
import BookingForm from './BookingForm'
import { fetchAPI,submitAPI } from './Api'
const date = '02/02/2023'

const reducer = (state,action) => {
    if(date === '02/02/2023') return {}
}

function BookingPage() {

    const [availableTimes,setAvailableTimes] = useState([])
    const [state,dispatch] = useReducer(reducer, availableTimes);

    

    const updateTimes = () => {
        return availableTimes
    }
    const initializeTimes = (date) => {
        setAvailableTimes([
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ])
    }

    
    useEffect(()=>{
        initializeTimes()
    },[])

    return (
        <>
        <BookingForm props={availableTimes}></BookingForm>
        </>
    )
}

export default BookingPage
