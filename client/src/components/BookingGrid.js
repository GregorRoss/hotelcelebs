import React from 'react';
import BookingCard from './BookingCard';

const BookingGrid = ({celebBookings}) => {
    const bookingList = celebBookings.map((booking) =>{
            return(
            <BookingCard booking={booking} key={booking._id}/>
            )
        });
        
        return (
            <>
                {bookingList}
            </>
        );
}
 
export default BookingGrid;