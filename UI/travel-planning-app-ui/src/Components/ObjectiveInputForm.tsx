// @ts-ignore
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import objectiveServices from '../Api/objectivesApi'

export default function ObjectiveInputForm(props) {

    const [city, setCity] = useState("");
    const [closingHour, setClosingHour] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [objectiveType, setObjectiveType] = useState("");
    const [openingHour, setOpeningHour] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newClosingHour, setNewClosingHour] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newName, setNewName] = useState("");
    const [newObjectiveType, setNewObjectiveType] = useState("");
    const [newOpeningHour, setNewOpeningHour] = useState("");
    const [objectiveDeletionId, setObjectiveDeletionId] = useState("");
    const [objectiveId, setObjectiveId] = useState("");

    const inputStyle = {
        paddingTop: '10px',
    }

    function onClickAddObjective() {
        const data = {
            city: city,
            closingHour: Number(closingHour),
            description: description,
            location: location,
            name: name,
            objectiveType: Number(objectiveType),
            openingHour: Number(openingHour),
        }
        objectiveServices.addNewObjective(data);
    }

    function onClickDeleteObjective() {
        objectiveServices.deleteObjective(Number(objectiveDeletionId));
    }

    function onClickUpdateObjective() {
        const data = {
            id: Number(objectiveId),
            city: newCity,
            closingHour: Number(newClosingHour),
            description: newDescription,
            location: newLocation,
            name: newName,
            objectiveType: Number(newObjectiveType),
            openingHour: Number(newOpeningHour),
        }
        objectiveServices.updateObjective(data);
    }

    return (
        <>
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
                            id="objective_id"
                            value={objectiveId}
                            onChange={e => setObjectiveId(e.target.value)}
                            defaultValue=""
                            placeholder="Objective id to update"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_name"
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Name"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_type"
                            value={newObjectiveType}
                            onChange={e => setNewObjectiveType(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Type"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_description"
                            value={newDescription}
                            onChange={e => setNewDescription(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Description"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_city"
                            value={newCity}
                            onChange={e => setNewCity(e.target.value)}
                            defaultValue=""
                            placeholder="Objective City"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_location"
                            value={newLocation}
                            onChange={e => setNewLocation(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Location"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_opening_hour"
                            value={newOpeningHour}
                            onChange={e => setNewOpeningHour(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Opening Hour"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_new_closing_hour"
                            value={newClosingHour}
                            onChange={e => setNewClosingHour(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Closing Hour"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickUpdateObjective()}
                        >
                            Update Objective
                        </Button>
                    </div>
                </div>}
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
                            id="objective_name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Name"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_type"
                            value={objectiveType}
                            onChange={e => setObjectiveType(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Type"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Description"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            defaultValue=""
                            placeholder="Objective City"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Location"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_opening_hour"
                            value={openingHour}
                            onChange={e => setOpeningHour(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Opening Hour"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <TextField
                            id="objective_closing_hour"
                            value={closingHour}
                            onChange={e => setClosingHour(e.target.value)}
                            defaultValue=""
                            placeholder="Objective Closing Hour"
                            fullWidth
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickAddObjective()}
                        >
                            Add Objective
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
                            id="objectiveDeletionId"
                            value={objectiveDeletionId}
                            defaultValue=""
                            placeholder="Id of airline to delete"
                            fullWidth
                            onChange={e => {
                                setObjectiveDeletionId(e.target.value)
                            }}
                        />
                    </div>
                    <div style={inputStyle}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white', width: '220px'}}
                            onClick={() => onClickDeleteObjective()}
                        >
                            Delete objective
                        </Button>
                    </div>
                </div>}
        </>
    )
}