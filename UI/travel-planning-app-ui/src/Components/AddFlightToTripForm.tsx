// @ts-ignore
import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import {useState} from 'react';
import tripServices from '../Api/tripsApi';

export default function AddFlightToTripForm() {

    const [tripId, setTripId] = useState("");
    const [flightId, setFlightId] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddFlightToTrip() {
        const data = {
            tripId: tripId,
            flightId: flightId
        }
        tripServices.addFlightToTrip(data);
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
                            id="flight_id"
                            value={flightId}
                            defaultValue=""
                            placeholder="Flight ID"
                            fullWidth
                            onChange={e => {
                                setFlightId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickAddFlightToTrip()}
                        >
                            Add Flight to Trip
                        </Button>
                    </div>
                </div>
        </>
    )
}