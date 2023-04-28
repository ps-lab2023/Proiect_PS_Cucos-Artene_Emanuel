// @ts-ignore
import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import {useState} from 'react';
import tripServices from '../Api/tripsApi';

export default function AddHotelToTripForm() {

    const [tripId, setTripId] = useState("");
    const [hotelId, setHotelId] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddHotelToTrip() {
        const data = {
            tripId: tripId,
            hotelId: hotelId
        }
        tripServices.addHotelToTrip(data);
    }



    return (
        <>
            <div style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                width: '30vh',
                position: 'relative',
                display: 'inline-block'
            }}>
                <div style={inputStyle}>
                    <TextField
                        id="trip_id"
                        value={tripId}
                        defaultValue=""
                        placeholder="Trip Id"
                        fullWidth
                        onChange={e => {
                            setTripId(e.target.value)
                        }}
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="hotel_id"
                        value={hotelId}
                        defaultValue=""
                        placeholder="Hotel ID"
                        fullWidth
                        onChange={e => {
                            setHotelId(e.target.value)
                        }}
                    />
                </div>
                <div style={inputStyle}>
                    <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickAddHotelToTrip()}
                    >
                        Add Hotel to Trip
                    </Button>
                </div>
            </div>
        </>
    )
}