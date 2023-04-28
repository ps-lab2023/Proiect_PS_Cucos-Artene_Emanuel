// @ts-ignore
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import flightServices from '../Api/flightsApi';

export default function FlightInputForm(props) {

    const [arrivalTime, setArrivalTime] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [flightClass, setFlightClass] = useState("");
    const [price, setPrice] = useState("");
    const [airlineId, setAirlineId] = useState("");
    const [airlineNewId, setAirlineNewId] = useState("");
    const [arrivalAirportId, setArrivalAirportId] = useState("");
    const [departureAirportId, setDepartureAirportId] = useState("");
    const [arrivalNewTime, setArrivalNewTime] = useState("");
    const [departureNewTime, setDepartureNewTime] = useState("");
    const [newFlightClass, setNewFlightClass] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [arrivalAirportNewId, setArrivalAirportNewId] = useState("");
    const [departureAirportNewId, setDepartureAirportNewId] = useState("");
    const [flightId, setFLightId] = useState("");
    const [flightDeleteId, setFLightDeleteId] = useState("");


    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddFlight() {
        const data = {
            arrivalTime: Number(arrivalTime),
            departureTime: Number(departureTime),
            flightClass: Number(flightClass),
            price: Number(price),
            airline: Number(airlineId),
            arrivalAirport: Number(arrivalAirportId),
            departureAirport: Number(departureAirportId)
        }
        flightServices.addNewFlight(data);
    }

    function onClickDeleteFlight() {
        flightServices.deleteFlight(Number(flightId));
    }

    function onClickUpdateFlight() {
        const data = {
            id: Number(flightId),
            arrivalTime: Number(arrivalNewTime),
            departureTime: Number(departureNewTime),
            flightClass: Number(newFlightClass),
            price: Number(newPrice),
            airline: Number(airlineNewId),
            arrivalAirport: Number(arrivalAirportNewId),
            departureAirport: Number(departureAirportNewId)
        }
        flightServices.updateFlight(data);
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
                            id="flight_arrival_time"
                            value={arrivalTime}
                            onChange={e => {
                                setArrivalTime(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Arrival Time"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_departure_time"
                            value={departureTime}
                            onChange={e => {
                                setDepartureTime(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Departure Time"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_class"
                            value={flightClass}
                            onChange={e => setFlightClass(e.target.value)}
                            defaultValue="Travel Class"
                            fullWidth
                            select
                        >
                            <MenuItem value="0" style={{width: '95%'}}>First Class</MenuItem>
                            <br></br>
                            <MenuItem value="1" style={{width: '95%'}}>Business Class</MenuItem>
                            <br></br>
                            <MenuItem value="2" style={{width: '95%'}}>Economy Class</MenuItem>
                        </TextField>
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_price"
                            value={price}
                            onChange={e => {
                                setPrice(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Price"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_airline_id"
                            value={airlineId}
                            onChange={e => {
                                setAirlineId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Airline ID"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_arrival_airport_id"
                            value={arrivalAirportId}
                            onChange={e => {
                                setArrivalAirportId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Arrival Airport ID"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_departure_airport_id"
                            value={departureAirportId}
                            onChange={e => {
                                setDepartureAirportId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Departure Airport ID"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickAddFlight()}
                        >
                            Add flight
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
                            id="flight_id"
                            value={flightId}
                            onChange={e => {
                                setFLightId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Flight ID to update"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_arrival_new_time"
                            value={arrivalNewTime}
                            onChange={e => {
                                setArrivalNewTime(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Arrival Time"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_departure_new_time"
                            value={departureNewTime}
                            onChange={e => {
                                setDepartureNewTime(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Departure Time"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_new_class"
                            value={newFlightClass}
                            onChange={e => setNewFlightClass(e.target.value)}
                            defaultValue="Travel Class"
                            fullWidth
                            select
                        >
                            <MenuItem value="First Class" style={{width: '95%'}}>First Class</MenuItem>
                            <br></br>
                            <MenuItem value="Business Class" style={{width: '95%'}}>Business Class</MenuItem>
                            <br></br>
                            <MenuItem value="Economy Class" style={{width: '95%'}}>Economy Class</MenuItem>
                        </TextField>
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="new_flight_price"
                            value={newPrice}
                            onChange={e => {
                                setNewPrice(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Price"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_airline_new_id"
                            value={airlineNewId}
                            onChange={e => {
                                setAirlineNewId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Airline ID"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_arrival_airport_new_id"
                            value={arrivalAirportNewId}
                            onChange={e => {
                                setArrivalAirportNewId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Arrival Airport ID"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="flight_departure_airport_new_id"
                            value={departureAirportNewId}
                            onChange={e => {
                                setDepartureAirportNewId(e.target.value)
                            }}
                            defaultValue=""
                            placeholder="Departure Airport ID"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickUpdateFlight()}
                        >
                            Update flight
                        </Button>
                    </div>
                </div>}
            {props.delete &&
                <div style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    width: '30vh',
                    position: 'relative',
                    display: 'inline-block'
                }}>
                    <div style={inputStyle}>
                        <TextField
                            id="flightId"
                            value={flightDeleteId}
                            defaultValue=""
                            placeholder="Id of flight to delete"
                            fullWidth
                            onChange={e => {
                                setFLightDeleteId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickDeleteFlight()}
                        >
                            Delete flight
                        </Button>
                    </div>
                </div>}
        </>
    )
}