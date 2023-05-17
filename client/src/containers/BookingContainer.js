import { useState, useEffect } from "react";
import BookingGrid from "../components/BookingGrid";
import { getBookings } from "./BookingService"

const BookingContainer = () => {

  const [celebBookings, setCelebBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
        setCelebBookings(allBookings);
    })
  }, []);


  return (
    <>
    {celebBookings.length > 1 ? <BookingGrid celebBookings={celebBookings}/> : null}
    </>

  )
}

export default BookingContainer;