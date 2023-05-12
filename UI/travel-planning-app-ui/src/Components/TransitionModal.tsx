import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Button} from "@material-ui/core";
import tripServices from '../Api/tripsApi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props) {

    const {open, tripName, tripId, flights, hotels, objectives, handleClose} = props;

    function onClickDownloadTrip() {
        const data = {
            id: tripId,
            name: tripName,
            hotels: hotels,
            flights: flights,
            objectives: objectives,
        }
        tripServices.sendTripData(data)
    }

    const flightList = flights.map(flight =>
        <li key={flight.id}>
            <ul>{'Flight Id: ' + flight.id}
                <li>{'Departure Airport: ' + flight.departureAirport}</li>
                <li>{'Departure Time: ' + flight.departureTime}</li>
                <li>{'Arrival Airport: ' + flight.arrivalAirport}</li>
                <li>{'Arrival Time: ' + flight.arrivalTime}</li>
                <li>{'Price: ' + flight.price}</li>
            </ul>
        </li>
    );

    const hotelList = hotels.map(hotel =>
        <li key={hotel.id}>
            <ul>{'Hotel Id: ' + hotel.id}
                <li>{'Name: ' + hotel.name}</li>
                <li>{'City: ' + hotel.city}</li>
                <li>{'Stars: ' + hotel.stars}</li>
            </ul>
        </li>
    );

    const objectivesList = objectives.map(objective =>
        <li key={objective.id}>
            <ul>{'Objective Id: ' + objective.id}
                <li>{'Name: ' + objective.name}</li>
                <li>{'City: ' + objective.city}</li>
                <li>{'Location: ' + objective.location}</li>
            </ul>
        </li>
    );

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {'#' + tripId + ' ' + tripName}
                        </Typography>
                        <div id="transition-modal-description">
                            <h4>Flights</h4>
                            <ul>
                                {flightList}
                            </ul>
                            <h4>Hotels</h4>
                            <ul>
                                {hotelList}
                            </ul>
                            <h4>Objectives</h4>
                            <ul>
                                {objectivesList}
                            </ul>
                        </div>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#4db5ff', color: 'white'}}
                            onClick={() => onClickDownloadTrip()}>
                            Download Trip Planner
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}