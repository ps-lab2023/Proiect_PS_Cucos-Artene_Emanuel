// @ts-ignore
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import airlineServices from "../Api/airlinesApi";

export default function AirlineInputForm(props) {

    const [airlineName, setAirlineName] = useState("");
    const [airlineWebsite, setAirlineWebsite] = useState("");
    const [airlineId, setAirlineId] = useState("");
    const [airlineDeleteId, setAirlineDeleteId] = useState("");
    const [airlineNewWebsite, setAirlineNewWebsite] = useState("");
    const [airlineNewName, setAirlineNewName] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddAirline() {
        const data = {
            websiteLink: airlineWebsite,
            name: airlineName,
        }
        airlineServices.addNewAirline(data);
    }

    function onClickDeleteAirline() {
        airlineServices.deleteAirline(Number(airlineDeleteId));
    }

    function onClickUpdateAirline() {
        const data = {
            id: Number(airlineId),
            websiteLink: airlineNewWebsite,
            name: airlineNewName,
        }
        airlineServices.updateAirline(data);
    }

    return (
        <>  {props.add &&
            <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                <div style={inputStyle}>
                    <TextField
                        id="airline_name"
                        defaultValue=""
                        value={airlineName}
                        placeholder="Airline Name"
                        fullWidth
                        onChange={e => {setAirlineName(e.target.value)}}
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="airline_website"
                        value={airlineWebsite}
                        defaultValue=""
                        placeholder="Airline Website"
                        fullWidth
                        onChange={e => {setAirlineWebsite(e.target.value)}}
                    />
                </div>
                <div style={inputStyle}>
                    <Button 
                        fullWidth 
                        variant="contained" 
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickAddAirline()}
                    >
                        Add airline
                    </Button>
                </div>
            </div>}
            {props.delete &&
            <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                <div style={inputStyle}>
                    <TextField
                        id="airlineId"
                        value={airlineDeleteId}
                        defaultValue=""
                        placeholder="Id of airline to delete"
                        fullWidth
                        onChange={e => {setAirlineDeleteId(e.target.value)}}
                    />
                </div>
                <div style={inputStyle}>
                    <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickDeleteAirline()}
                    >
                        Delete airline
                    </Button>
                </div>
            </div>}
            {props.update &&
            <div style={{paddingLeft: '20px', paddingRight: '20px', width: '30vh', position: 'relative', display: 'inline-block'}}>
                <div style={inputStyle}>
                    <TextField
                        id="airlineId"
                        value={airlineId}
                        defaultValue=""
                        placeholder="Airline id to update"
                        fullWidth
                        onChange={e => {setAirlineId(e.target.value)}}
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="airline_name"
                        defaultValue=""
                        value={airlineNewName}
                        placeholder="Airline Name"
                        fullWidth
                        onChange={e => {setAirlineNewName(e.target.value)}}
                    />
                </div>
                <div style={inputStyle}>
                    <TextField
                        id="airline_website"
                        value={airlineNewWebsite}
                        defaultValue=""
                        placeholder="Airline Website"
                        fullWidth
                        onChange={e => {setAirlineNewWebsite(e.target.value)}}
                    />
                </div>
                <div style={inputStyle}>
                    <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                        onClick={() => onClickUpdateAirline()}
                    >
                        Update airline
                    </Button>
                </div>
            </div>}
        </>
    )
}