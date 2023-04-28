// @ts-ignore
import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import {useState} from 'react'
import roomServices from '../Api/roomsApi'

export default function RoomInputForm(props) {

    const [roomNumber, setRoomNumber] = useState("");
    const [hotelId, setHotelId] = useState("");
    const [roomAvailability, setRoomAvailability] = useState("");
    const [newRoomNumber, setNewRoomNumber] = useState("");
    const [newHotelId, setNewHotelId] = useState("");
    const [newRoomAvailability, setNewRoomAvailability] = useState("");
    const [roomId, setRoomId] = useState("");
    const [roomDeletionId, setRoomDeletionId] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddRoom() {
        const data = {
            isAvailable: Boolean(roomAvailability),
            roomNumber: Number(roomNumber),
            hotel: Number(hotelId),
        }
        roomServices.addNewRoom(data);
    }

    function onClickDeleteRoom() {
        roomServices.deleteRoom(Number(roomDeletionId));
    }

    function onClickUpdateRoom() {
        const data = {
            id: Number(roomId),
            isAvailable: Boolean(newRoomAvailability),
            roomNumber: Number(newRoomNumber),
            hotel: Number(newHotelId),
        }
        roomServices.updateRoom(data);
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
                            id="room_number"
                            value={roomNumber}
                            defaultValue=""
                            placeholder="Room Number"
                            fullWidth
                            onChange={e => {
                                setRoomNumber(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="room_hotel_id"
                            value={hotelId}
                            defaultValue=""
                            placeholder="Room Hotel ID"
                            fullWidth
                            onChange={e => {
                                setHotelId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="room_is_available"
                            value={roomAvailability}
                            defaultValue=""
                            placeholder="Is Room Available"
                            fullWidth
                            onChange={e => {
                                setRoomAvailability(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickAddRoom()}
                        >
                            Add room
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
                            id="room_id"
                            value={roomId}
                            defaultValue=""
                            placeholder="Room id to update"
                            fullWidth
                            onChange={e => {
                                setRoomId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="new_room_number"
                            value={newRoomNumber}
                            defaultValue=""
                            placeholder="Room Number"
                            fullWidth
                            onChange={e => {
                                setNewRoomNumber(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="room_new_hotel_id"
                            value={newHotelId}
                            defaultValue=""
                            placeholder="Room Hotel ID"
                            fullWidth
                            onChange={e => {
                                setNewHotelId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="room_new_is_available"
                            value={roomAvailability}
                            defaultValue=""
                            placeholder="Is Room Available"
                            fullWidth
                            onChange={e => {
                                setNewRoomAvailability(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickUpdateRoom()}
                        >
                            Update room
                        </Button>
                    </div>
                </div>}
            {props.delete &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                    <div style={inputStyle}>
                        <TextField
                            id="roomId"
                            value={roomDeletionId}
                            defaultValue=""
                            placeholder="Id of room to delete"
                            fullWidth
                            onChange={e => {setRoomDeletionId(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickDeleteRoom()}
                        >
                            Delete room
                        </Button>
                    </div>
                </div>}
        </>
    )
}