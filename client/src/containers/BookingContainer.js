import { useState, useEffect } from "react";
import BookingGrid from "../components/BookingGrid";
import { getBookings, postBooking, putBooking } from "./BookingService"
import AddBooking from "../components/AddBooking";


const BookingContainer = () => {

  const [celebBookings, setCelebBookings] = useState([]);
  const [bookingToEdit, setBookingToEdit] = useState(null)

  useEffect(() => {
    getBookings().then((allBookings) => {
        setCelebBookings(allBookings);
    })
  }, [bookingToEdit]);

  const addBooking = (booking) => {
    postBooking(booking);
    let newBookings = [...celebBookings]
    newBookings.push(booking)
    setCelebBookings(newBookings)
  }

  const handleEditClicked = (booking) => {
    setBookingToEdit(booking);
  }

  const handleBookingUpdate = (id, booking) => {
    putBooking(id, booking);
  }

  const removeBooking = (id) => {
    const bookingsToKeep = celebBookings.filter(booking => booking._id !== id)
    setCelebBookings(bookingsToKeep);
  }

  return (
    <>
    {celebBookings.length > 1 ? <BookingGrid 
    celebBookings={celebBookings} 
    removeBooking={removeBooking} 
    handleEditClicked={handleEditClicked} 
    bookingToEdit={bookingToEdit}
    handleBookingUpdate={handleBookingUpdate}
    /> : null}
    <AddBooking addBooking={addBooking} />
    </>

  )
}

export default BookingContainer;