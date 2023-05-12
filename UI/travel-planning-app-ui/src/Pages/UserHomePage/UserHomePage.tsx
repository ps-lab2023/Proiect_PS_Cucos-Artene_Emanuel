// @ts-ignore
import React, {useState} from "react";
import './userHomePage.css';
import Button from "@mui/material/Button";
// @ts-ignore
import DataTable from "../../Components/PaginatedTable.tsx";
import {GridColDef} from "@mui/x-data-grid";
import flightServices from '../../Api/flightsApi'
import hotelServices from '../../Api/hotelsApi'
import objectiveServices from '../../Api/objectivesApi'
import authService from '../../Api/authApi'
import tripServices from '../../Api/tripsApi'
import {useNavigate} from "react-router-dom";
// @ts-ignore
import TripInputForm from "../../Components/TripsInputForm.tsx";
// @ts-ignore
import DataTripsTable from "../../Components/TripsTable.tsx";
// @ts-ignore
import TransitionsModal from "../../Components/TransitionModal.tsx";
import {IModalTrip} from "../../Model/trip";
// @ts-ignore
import AddFlightToTripForm from "../../Components/AddFlightToTripForm.tsx";
// @ts-ignore
import AddHotelToTripForm from "../../Components/AddHotelToTripForm.tsx";
// @ts-ignore
import AddObjectiveToTripForm from "../../Components/AddObjectiveToTripForm.tsx";
// @ts-ignore
import PopChat from "../PopChat/PopChat.tsx";

const flightColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'arrivalTime', headerName: 'Arrival Time', width: 130},
    {field: 'departureTime', headerName: 'Departure Time', width: 130},
    {field: 'flightClass', headerName: 'Flight Class', width: 130},
    {field: 'price', headerName: 'Price', width: 130},
    {field: 'airline', headerName: 'Airline ID', width: 130},
    {field: 'arrivalAirport', headerName: 'Arrival Airport ID', width: 130},
    {field: 'departureAirport', headerName: 'Departure Airport ID', width: 160},
];

const hotelColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'city', headerName: 'City', width: 130},
    {field: 'name', headerName: 'Name', width: 130},
    {field: 'stars', headerName: 'Stars', width: 130},
];

const objectiveColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'city', headerName: 'City', width: 130},
    {field: 'name', headerName: 'Name', width: 130},
    {field: 'openingHour', headerName: 'Opening Hour', width: 130},
    {field: 'closingHour', headerName: 'Closing Hour', width: 130},
    {field: 'description', headerName: 'Description', width: 130},
    {field: 'objectiveType', headerName: 'Type', width: 130},
    {field: 'location', headerName: 'Location', width: 130},
];

const tripColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'name', headerName: 'Name', width: 300},
];

export default function UserHomePage() {

    const navigate = useNavigate();

    const [state, setState] = useState({
        trips: true,
        flights: false,
        hotels: false,
        objectives: false,
        support: false
    })

    const pull_data = (row: IModalTrip, shouldOpenModal: boolean) => {
        setOpenModal(shouldOpenModal);
        setModalTripName(row.name);
        flightServices.getFlightsByTripId(String(row.id)).then(res => {setModalFlights(res.data)});
        hotelServices.getHotelsByTripId(String(row.id)).then(res => {setModalHotels(res.data)});
        objectiveServices.getObjectivesByTripId(String(row.id)).then(res => {setModalObjectives(res.data)})
        setModalTripId(row.id);
    }

    const [actionAddState, setActionAddState] = useState(true);
    const [actionUpdateState, setActionUpdateState] = useState(false);
    const [actionDeleteState, setActionDeleteState] = useState(false);

    const [showFlightsTable, setShowFlightsTable] = useState(false);
    const [flights, setFlights] = useState([])
    const [showHotelsTable, setShowHotelsTable] = useState(false);
    const [hotels, setHotels] = useState([])
    const [showObjectivesTable, setShowObjectivesTable] = useState(false);
    const [objectives, setObjectives] = useState([])
    const [showTripsTable, setShowTripsTable] = useState(false);
    const [trips, setTrips] = useState([])

    const [openModal, setOpenModal] = useState(false);

    const [modalTripName, setModalTripName] = useState("");
    const [modalTripId, setModalTripId] = useState(0);
    const [modalFlights, setModalFlights] = useState([]);
    const [modalHotels, setModalHotels] = useState([]);
    const [modalObjectives, setModalObjectives] = useState([]);

    const [userMessages, setUserMessages] = useState([]);

    const handleClose = () => setOpenModal(false);
    const setAllTablesFalse = () => {
        setShowFlightsTable(false);
        setShowHotelsTable(false);
        setShowObjectivesTable(false);
        setShowTripsTable(false);
    }

    const onClickNavBarButton = (page: string) => {
        setState({
            trips: false,
            flights: false,
            hotels: false,
            objectives: false,
            support: false
        });
        setAllTablesFalse();
        const pageName = page.toLowerCase();
        switch (pageName) {
            case 'flights':
                setState({...state, flights: true});
                getFlights();
                setShowFlightsTable(true);
                break;
            case 'hotels':
                setState({...state, hotels: true});
                getHotels();
                setShowHotelsTable(true);
                break;
            case 'objectives':
                setState({...state, objectives: true});
                getObjectives();
                setShowObjectivesTable(true);
                break;
            case 'trips':
                setState({...state, trips: true});
                getTrips();
                setShowTripsTable(true);
                break;
            case 'support':
                setState({...state, support: true});
                navigate("/support");
                break;
            default:
                break;
        }
    }

    function getTrips() {
        return tripServices.getTrips(localStorage.getItem('user')).then(res => {
            setTrips(res.data);
            return res.data
        });
    }

    function getFlights() {
        return flightServices.getFlights().then(res => {
            setFlights(res.data);
            return res.data
        });
    }

    function getHotels() {
        return hotelServices.getHotels().then(res => {
            setHotels(res.data);
            return res.data
        });
    }

    function getObjectives() {
        return objectiveServices.getObjectives().then(res => {
            setObjectives(res.data);
            return res.data
        });
    }

    function getUserMessages() {

    }

    function onCLickLogOutUser() {
        authService.logoutUser();
        navigate('/');
    }

    function onClickAddButton() {
        setActionAddState(true);
        setActionUpdateState(false);
        setActionDeleteState(false);
    }

    function onClickUpdateButton() {
        setActionAddState(false);
        setActionUpdateState(true);
        setActionDeleteState(false);
    }

    function onClickDeleteButton() {
        setActionAddState(false);
        setActionUpdateState(false);
        setActionDeleteState(true);
    }

    const leftButtonsStyle = {
        width: '20%',
        margin: '5px',
        paddingRight: '30px',
        backgroundColor: '#4db5ff'
    };

    const topButtonsStyle = {
        marginLeft: '10px',
        color: 'white',
        fontSize: '20px'
    };

    const navbarStyle = {
        height: '50px',
        backgroundColor: '#4db5ff'
    }

    const navbarStyleLeft = {
        textAlign: 'center' as const,
    }

    return (
        <>
            <div style={navbarStyle}>
                <div style={navbarStyleLeft}>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('trips')
                    }}>My Trips</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('flights')
                    }}>Flights</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('hotels')
                    }}>Hotels</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('objectives')
                    }}>Objectives</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('support')
                    }}>Support</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onCLickLogOutUser()
                    }}>Logout</Button>
                </div>
            </div>
            <div className="row">
                <div className="admin-page-split leftSideAdmin">
                    {showTripsTable &&
                    <TripInputForm add={actionAddState} update={actionUpdateState} delete={actionDeleteState}/>}
                    {showFlightsTable && <AddFlightToTripForm/>}
                    {showHotelsTable && <AddHotelToTripForm/>}
                    {showObjectivesTable && <AddObjectiveToTripForm/>}
                </div>
                <div className="admin-page-split rightSideAdmin">
                    {showFlightsTable &&
                        <DataTable rows={flights} columns={flightColumns}/>
                    }
                    {showHotelsTable &&
                        <DataTable rows={hotels} columns={hotelColumns}/>
                    }
                    {showObjectivesTable &&
                        <DataTable rows={objectives} columns={objectiveColumns}/>
                    }
                    {showTripsTable &&
                        <DataTripsTable rows={trips} columns={tripColumns} func={pull_data}/>
                    }
                    {showTripsTable &&
                    <div style={{paddingTop: '20px'}}>
                        <Button variant='contained' style={leftButtonsStyle} onClick={() => {
                            onClickAddButton()
                        }}>Add</Button>
                        <Button variant='contained' style={leftButtonsStyle} onClick={() => {
                            onClickUpdateButton()
                        }}>Update</Button>
                        <Button variant='contained' style={leftButtonsStyle} onClick={() => {
                            onClickDeleteButton()
                        }}>Delete</Button>
                    </div>}
                    {openModal &&
                        <TransitionsModal open={openModal} tripName={modalTripName} tripId={modalTripId} flights={modalFlights} hotels={modalHotels} objectives={modalObjectives} handleClose={handleClose}/>
                    }
                    <PopChat messages={userMessages}/>
                </div>
            </div>
        </>
    )
}