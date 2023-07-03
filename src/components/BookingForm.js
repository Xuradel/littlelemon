import React, { useState,useEffect } from 'react'
import { fetchAPI,submitAPI } from './Api'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    FormErrorMessage,
    FormControl,
} from "@chakra-ui/react";
import Footer from './Footer';

function BookingForm({props}) {
    const [date, setDate] = useState(new Date())
    const [time,setTime] = useState("17:00")
    const [guests,setGuests] = useState("1")
    const [occasion, setOccasion] = useState("Birthday")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
        e.preventDefault();
        setTimeout(() => {
            navigate('/reservation-confirmed')
        }, 1000)
    }

    const returnTimes = () => {
        const options = [];
        for(let i=0; i<setTimes().length; i++){
            options.push(<option>{setTimes()[i]}</option>)
        }
        return options
    }

    const setTimes = () => {
        return fetchAPI(new Date(date))
    }


    const formik = useFormik({
        initialValues:{
            resDate : date,
            resTime : time,
            resGuests : guests,
            resOccasion : occasion,
        },
        onSubmit: (values,actions) => {
            setTimeout(() => {
                actions.setSubmitting(false)
            }, 100)
            formik.resetForm();
            // navigate('/reservation-confirmed')

        },
        validationSchema: Yup.object({
            resDate: Yup.string().required('required'),
            resTime: Yup.string().required('required'),
            resGuests: Yup.string().required('required'),
            resOccasion: Yup.string().required('required'),
        })
    })

    return (
        <>
        <div className='reservation-section'>
        <h2 data-testid="bookingHeading">Book a table</h2>
            <form style={{display: "grid", gap: "20px"}} onSubmit={handleSubmit}>
                
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="resDate" name="resDate" value={date} onChange={e => setDate(e.target.value)}
                required />


                <label htmlFor="res-time">Choose time</label>
                <select id="resTime" name="resTime" value={time} onChange={e => setTime(e.target.value)}
                >
                    {returnTimes()}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="resGuests" name='resGuests' value={guests} onChange={e => setGuests(e.target.value)} {...formik.getFieldProps("resGuests")}/>

                <label htmlFor="occasion">Occasion</label>
                <select id="resOccasion" name='resOccasion' value={occasion} onChange={e => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" className='button-submit'/>
            </form>
        </div>
        <Footer></Footer>
        </>
    )
}

export default BookingForm

