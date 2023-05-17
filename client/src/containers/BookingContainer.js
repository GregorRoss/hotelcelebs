import { useState, useEffect } from "react";
import BookingGrid from "../components/BookingGrid";
import { getBookings, postBooking } from "./BookingService"
import AddBooking from "../components/AddBooking";

const BookingContainer = () => {

  const [celebBookings, setCelebBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
        setCelebBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    postBooking(booking);
    let newBookings = [...celebBookings]
    newBookings.push(booking)
    setCelebBookings(newBookings)
  }

  const removeBooking = (id) => {
    const bookingsToKeep = celebBookings.filter(booking => booking._id !== id)
    setCelebBookings(bookingsToKeep);
  }

  return (
    <>
    {celebBookings.length > 1 ? <BookingGrid celebBookings={celebBookings} removeBooking={removeBooking}/> : null}
    <AddBooking addBooking={addBooking} />
    </>

  )
}

export default BookingContainer;