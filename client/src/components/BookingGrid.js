import React from 'react';
import BookingCard from './BookingCard';

const BookingGrid = ({celebBookings, removeBooking}) => {
    const bookingList = celebBookings.map((booking) =>{
            return(
            <BookingCard 
            booking={booking} 
            key={booking._id}
            removeBooking={removeBooking}
            />

            )
        });
        
        return (
            <>
                {bookingList}

            </>
        );
}
 
export default BookingGrid;