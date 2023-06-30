import React, { useState } from 'react'

function BookingForm({props}) {
    const [date, setDate] = useState("")
    const [time,setTime] = useState("17:00")
    const [guests,setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleSubmit = (e) => {
        console.log('form submited');
        console.log(date);
        console.log(time);
        console.log(guests);
        console.log(occasion);
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
        e.preventDefault();
    }

    const returnTimes = () => {
        const options = [];
        for(let i=0; i<props.length; i++){
            options.push(<option>{props[i]}</option>)
        }
        return options
    }

    return (
        <>
        <h2 data-testid="bookingHeading">Book a table</h2>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="res-date" value={date} onChange={e => setDate(e.target.value)}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    {returnTimes()}
                    {/* <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option> */}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm
