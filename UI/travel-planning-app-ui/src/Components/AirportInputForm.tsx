// @ts-ignore
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import airportServices from '../Api/airportsApi';

export default function AirportInputForm(props) {

    const [airportCity, setAirportCity] = useState("");
    const [airportCountry, setAirportCountry] = useState("");
    const [airportId, setAirportId] = useState("");
    const [airportDeleteId, setAirportDeleteId] = useState("");
    const [airportNewCity, setAirportNewCity] = useState("");
    const [airportNewCountry, setAirportNewCountry] = useState("");
    const [message, setMessage] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddAirport() {
        if(airportCity === '' || airportCountry === '') {
            setMessage("All fields are mandatory!");
            return;
        }
        setMessage("");
        const data = {
            city: airportCity,
            country: airportCountry,
        }
        airportServices.addNewAirport(data);
    }

    function onClickDeleteAirport() {
        airportServices.deleteAirport(Number(airportId));
    }

    function onClickUpdateAirport() {
        const data = {
            id: Number(airportId),
            city: airportNewCity,
            country: airportNewCountry,
        }
        airportServices.updateAirport(data);
    }

    return (
        <>
            {props.add &&
            <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                <div style={inputStyle}>
                    <TextField
                        id="airport_city"
                        value={airportCity}
                        onChange={e => {setAirportCity(e.target.value)}}
                        defaultValue=""
                        placeholder="City Name"
                        fullWidth
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="airport_country"
                        value={airportCountry}
                        onChange={e => {setAirportCountry(e.target.value)}}
                        defaultValue=""
                        placeholder="Country Name"
                        fullWidth
                    />
                </div>
                <label>{message}</label>
                <div style={inputStyle}>
                    <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickAddAirport()}
                    >
                        Add airport
                    </Button>
                </div>
            </div>}
            {props.delete &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                    <div style={inputStyle}>
                        <TextField
                            id="airportId"
                            value={airportDeleteId}
                            defaultValue=""
                            placeholder="Id of airport to delete"
                            fullWidth
                            onChange={e => {setAirportDeleteId(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickDeleteAirport()}
                        >
                            Delete airport
                        </Button>
                    </div>
                </div>}
            {props.update &&
                <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                    <div style={inputStyle}>
                        <TextField
                            id="airlineId"
                            value={airportId}
                            defaultValue=""
                            placeholder="Airline id to update"
                            fullWidth
                            onChange={e => {setAirportId(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="airport_name"
                            defaultValue=""
                            value={airportNewCity}
                            placeholder="Airport Name"
                            fullWidth
                            onChange={e => {setAirportNewCity(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="airport_country"
                            value={airportNewCountry}
                            defaultValue=""
                            placeholder="Airport Country"
                            fullWidth
                            onChange={e => {setAirportNewCountry(e.target.value)}}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickUpdateAirport()}
                        >
                            Update airport
                        </Button>
                    </div>
                </div>}
        </>
    )
}