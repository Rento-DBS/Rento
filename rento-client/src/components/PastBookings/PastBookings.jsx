import React, { useEffect, useState } from "react";
import { bookingsArray } from "../MyAccount/Bookings";
import UserBooking from "../UserBooking/UserBooking";
const PastBookings = ({ bookings }) => {
    return (
        <div>
            {bookings.map((booking) => (
                <UserBooking
                    bookingId={booking.bookingId}
                    name={booking.name}
                    date={booking.date}
                    price={booking.price}
                />
            ))}
        </div>
    );
};

export default PastBookings;
