

const BookingCard = ({booking}) => {
    return ( 
        <>
        <h1>{booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>Checked in?: {booking.checked_in}</p>
        <hr></hr>
    </>

     );
}
 
export default BookingCard;