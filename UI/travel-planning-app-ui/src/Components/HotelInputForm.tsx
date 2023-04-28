// @ts-ignore
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import hotelServices from '../Api/hotelsApi'

export default function HotelInputForm(props) {

    const [name, setName] = useState("");
    const [stars, setStars] = useState("");
    const [city, setCity] = useState("");
    const [newName, setNewName] = useState("");
    const [newStars, setNewStars] = useState("");
    const [newCity, setNewCity] = useState("");
    const [hotelId, setNewHotelId] = useState("");
    const [hotelDeletionId, setNewHotelDeletionId] = useState("");


    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddHotel() {
        const data = {
            city: city,
            name: name,
            stars: Number(stars),
        }
        hotelServices.addNewHotel(data);
    }

    function onClickDeleteHotel() {
        hotelServices.deleteHotel(Number(hotelDeletionId));
    }

    function onClickUpdateHotel() {
        const data = {
            id: Number(hotelId),
            city: city,
            name: name,
            stars: Number(stars),
        }
        hotelServices.updateHotel(data);
    }

    return (
        <>
            {props.add &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                <div style={inputStyle}>
                    <TextField
                        id="hotel_name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        defaultValue=""
                        placeholder="Hotel Name"
                        fullWidth
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="hotel_stars"
                        value={stars}
                        onChange={e => setStars(e.target.value)}
                        defaultValue=""
                        placeholder="Hotel Stars"
                        fullWidth
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="hotel_city"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        defaultValue=""
                        placeholder="Hotel City"
                        fullWidth
                    />
                </div>
                <div style={inputStyle}>
                    <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickAddHotel()}
                    >
                        Add Hotel
                    </Button>
                </div>
            </div>}
            {props.update &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                    <div style={inputStyle}>
                        <TextField
                            id="hotel_id"
                            value={hotelId}
                            onChange={e => setNewHotelId(e.target.value)}
                            defaultValue=""
                            placeholder="Hotel id to update"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="hotel_new_name"
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                            defaultValue=""
                            placeholder="Hotel Name"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="hotel_new_stars"
                            value={newStars}
                            onChange={e => setNewStars(e.target.value)}
                            defaultValue=""
                            placeholder="Hotel Stars"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="hotel_new_city"
                            value={newCity}
                            onChange={e => setNewCity(e.target.value)}
                            defaultValue=""
                            placeholder="Hotel City"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickUpdateHotel()}
                        >
                            Update Hotel
                        </Button>
                    </div>
                </div>}
            {props.delete &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                    <div style={inputStyle}>
                        <TextField
                            id="hotelID"
                            value={hotelDeletionId}
                            defaultValue=""
                            placeholder="Id of hotel to delete"
                            fullWidth
                            onChange={e => {setNewHotelDeletionId(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickDeleteHotel()}
                        >
                            Delete hotel
                        </Button>
                    </div>
                </div>}
        </>
    )
}