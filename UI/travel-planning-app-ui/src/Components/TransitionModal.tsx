import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

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

    const flightList = flights.map(flight => <li key={flight.id}>{flight.departureAirport + ' ' +
                                                    flight.departureTime + ' ' +
                                                    flight.arrivalAirport + ' ' +
                                                    flight.arrivalTime + ' ' +
                                                    flight.price}</li>);

    const hotelList = hotels.map(hotel => <li key={hotel.id}>{hotel.name + ' ' +
                                                        hotel.city + ' ' +
                                                        hotel.stars}</li>)

    const objectivesList = objectives.map(objective => <li key={objective.id}>{
                                            objective.name + ' ' +
                                            objective.city + ' ' +
                                            objective.location}</li>)

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
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}