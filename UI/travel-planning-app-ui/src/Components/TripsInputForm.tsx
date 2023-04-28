// @ts-ignore
import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import {useState} from 'react'
import tripServices from '../Api/tripsApi'
import emailServices from '../Api/emailApi'

export default function TripInputForm(props) {

    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [tripId, setTripId] = useState("");
    const [tripDeletionId, setTripDeletionId] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddTrip() {
        const data = {
            name: name,
            user: localStorage.getItem('user')
        }
        tripServices.addNewTrip(data);
        const emailData = {
            recipient: localStorage.getItem('email').replace('/"', ''),
            msgBody: 'Trip with name ' + name + ' was created successfully! Enjoy!',
            subject: 'Trip created'
        }
        emailServices.sendSimpleMail(emailData)
    }

    function onClickDeleteTrip() {
        tripServices.deleteTrip(Number(tripDeletionId));
    }

    function onClickUpdateTrip() {
        const data = {
            name: newName
        }
        tripServices.updateTrip(data);
    }

    return (
        <>
            {props.add &&
                <div style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    width: '30vh',
                    position: 'relative',
                    display: 'inline-block'
                }}>
                    <div style={inputStyle}>
                        <TextField
                            id="trip_name"
                            value={name}
                            defaultValue=""
                            placeholder="Trip name"
                            fullWidth
                            onChange={e => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickAddTrip()}
                        >
                            Add trip
                        </Button>
                    </div>
                </div>}
            {props.update &&
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
                            placeholder="Trip id to update"
                            fullWidth
                            onChange={e => {
                                setTripId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="trip_name"
                            value={newName}
                            defaultValue=""
                            placeholder="Trip name"
                            fullWidth
                            onChange={e => {
                                setNewName(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickUpdateTrip()}
                        >
                            Update trip
                        </Button>
                    </div>
                </div>}
            {props.delete &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                    <div style={inputStyle}>
                        <TextField
                            id="tripId"
                            value={tripDeletionId}
                            defaultValue=""
                            placeholder="Id of trip to delete"
                            fullWidth
                            onChange={e => {setTripDeletionId(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickDeleteTrip()}
                        >
                            Delete trip
                        </Button>
                    </div>
                </div>}
        </>
    )
}