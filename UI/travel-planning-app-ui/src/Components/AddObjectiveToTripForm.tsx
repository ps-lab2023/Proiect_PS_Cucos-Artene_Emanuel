// @ts-ignore
import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import {useState} from 'react';
import tripServices from '../Api/tripsApi';

export default function AddObjectiveToTripForm() {

    const [tripId, setTripId] = useState("");
    const [objectiveId, setObjectiveId] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddObjectiveToTrip() {
        const data = {
            tripId: tripId,
            objectiveId: objectiveId
        }
        tripServices.addObjectiveToTrip(data);
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
                        id="objective_id"
                        value={objectiveId}
                        defaultValue=""
                        placeholder="Objective ID"
                        fullWidth
                        onChange={e => {
                            setObjectiveId(e.target.value)
                        }}
                    />
                </div>
                <div style={inputStyle}>
                    <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickAddObjectiveToTrip()}
                    >
                        Add Objective to Trip
                    </Button>
                </div>
            </div>
        </>
    )
}