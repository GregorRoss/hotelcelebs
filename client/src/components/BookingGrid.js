import React from 'react';
import BookingCard from './BookingCard';
import EditBooking from './EditBooking';

const BookingGrid = ({celebBookings, removeBooking, handleEditClicked, bookingToEdit, handleBookingUpdate}) => {
    const bookingList = celebBookings.map((booking) =>{
        if(bookingToEdit != null){
            console.log('booking._id', booking._id);
            console.log('bookingToEdit._id', bookingToEdit._id);
            if(booking._id == bookingToEdit._id){
                console.log('match triggered');
                return(
                    <EditBooking bookingToEdit={bookingToEdit} handleBookingUpdate={handleBookingUpdate} handleEditClicked={handleEditClicked}/>
                )
            }else{
                return <BookingCard
                booking={booking} 
                key={booking._id}
                removeBooking={removeBooking}
                handleEditClicked={handleEditClicked}
                bookingToEdit={bookingToEdit}
                handleBookingUpdate={handleBookingUpdate}/>
            
            }
        }else{
            return(
                <BookingCard 
                booking={booking} 
                key={booking._id}
                removeBooking={removeBooking}
                handleEditClicked={handleEditClicked}
                bookingToEdit={bookingToEdit}
                handleBookingUpdate={handleBookingUpdate}/>
            )
         }
        });
        
        return (
            <>
                {bookingList}

            </>
        );
}
 
export default BookingGrid;