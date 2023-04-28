// @ts-ignore
import React, {useState} from "react";
import './adminPage.css';
import Button from "@mui/material/Button";
// @ts-ignore
import AirlineInputForm from "../../Components/AirlineInputForm.tsx";
import airlineServices from '../../Api/airlinesApi';
// @ts-ignore
import DataTable from "../../Components/PaginatedTable.tsx";
import {GridColDef} from "@mui/x-data-grid";
import airportServices from '../../Api/airportsApi'
import flightServices from '../../Api/flightsApi'
import hotelServices from '../../Api/hotelsApi'
import roomServices from '../../Api/roomsApi'
import objectiveServices from '../../Api/objectivesApi'
import authService from '../../Api/authApi'
// @ts-ignore
import AirportInputForm from "../../Components/AirportInputForm.tsx";
// @ts-ignore
import FlightInputForm from "../../Components/FlightInputForm.tsx";
// @ts-ignore
import HotelInputForm from "../../Components/HotelInputForm.tsx";
// @ts-ignore
import ObjectiveInputForm from "../../Components/ObjectiveInputForm.tsx";
// @ts-ignore
import RoomInputForm from "../../Components/RoomInputForm.tsx";
import {useNavigate} from "react-router-dom";

const airlineColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'name', headerName: 'Name', width: 130},
    {field: 'websiteLink', headerName: 'Website', width: 300}
];

const airportColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'city', headerName: 'City', width: 130},
    {field: 'country', headerName: 'Country', width: 130}
];

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

const roomColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    {field: 'available', headerName: 'Available', width: 130},
    {field: 'roomNumber', headerName: 'Number', width: 130},
    {field: 'hotel', headerName: 'Hotel', width: 130},
];

export default function AdminPage() {

    const navigate = useNavigate();

    const [state, setState] = useState({
        airlines: true,
        airports: false,
        flights: false,
        hotels: false,
        rooms: false,
        objectives: false
    })

    const [actionAddState, setActionAddState] = useState(true);
    const [actionUpdateState, setActionUpdateState] = useState(false);
    const [actionDeleteState, setActionDeleteState] = useState(false);

    const [showAirlinesTable, setShowAirlinesTable] = useState(false);
    const [airlines, setAirlines] = useState([])
    const [showAirportsTable, setShowAirportsTable] = useState(false);
    const [airports, setAirports] = useState([])
    const [showFlightsTable, setShowFlightsTable] = useState(false);
    const [flights, setFlights] = useState([])
    const [showHotelsTable, setShowHotelsTable] = useState(false);
    const [hotels, setHotels] = useState([])
    const [showRoomsTable, setShowRoomsTable] = useState(false);
    const [rooms, setRooms] = useState([])
    const [showObjectivesTable, setShowObjectivesTable] = useState(false);
    const [objectives, setObjectives] = useState([])

    const setAllTablesFalse = () => {
        setShowAirlinesTable(false);
        setShowAirportsTable(false);
        setShowFlightsTable(false);
        setShowHotelsTable(false);
        setShowRoomsTable(false);
        setShowObjectivesTable(false)
    }

    const onClickNavBarButton = (page: string) => {
        setState({
            airlines: false,
            airports: false,
            flights: false,
            hotels: false,
            rooms: false,
            objectives: false
        });
        setAllTablesFalse();
        const pageName = page.toLowerCase();
        switch (pageName) {
            case 'airlines':
                setState({...state, airlines: true});
                getAirlines();
                setShowAirlinesTable(true);
                break;
            case 'airports':
                setState({...state, airports: true});
                getAirports();
                setShowAirportsTable(true);
                break;
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
            case 'rooms':
                setState({...state, rooms: true});
                getRooms();
                setShowRoomsTable(true);
                break;
            case 'objectives':
                setState({...state, objectives: true});
                getObjectives();
                setShowObjectivesTable(true);
                break;
            default:
                break;
        }
    }

    function getAirlines() {
        return airlineServices.getAirlines().then(res => {
            setAirlines(res.data);
            return res.data
        });
    }

    function getAirports() {
        return airportServices.getAirports().then(res => {
            setAirports(res.data);
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

    function getRooms() {
        return roomServices.getRooms().then(res => {
            setRooms(res.data);
            return res.data
        });
    }

    function getObjectives() {
        return objectiveServices.getObjectives().then(res => {
            setObjectives(res.data);
            return res.data
        });
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
                        onClickNavBarButton('airlines')
                    }}>Airlines</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('airports')
                    }}>Airports</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('flights')
                    }}>Flights</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('hotels')
                    }}>Hotels</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('rooms')
                    }}>Rooms</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onClickNavBarButton('objectives')
                    }}>Objectives</Button>
                    <Button style={topButtonsStyle} onClick={() => {
                        onCLickLogOutUser()
                    }}>Logout</Button>
                </div>
            </div>
            <div className="row">
                <div className="admin-page-split leftSideAdmin">
                    {showAirlinesTable &&
                        <AirlineInputForm add={actionAddState} update={actionUpdateState} delete={actionDeleteState}/>}
                    {showAirportsTable &&
                        <AirportInputForm add={actionAddState} update={actionUpdateState} delete={actionDeleteState}/>}
                    {showFlightsTable &&
                        <FlightInputForm add={actionAddState} update={actionUpdateState} delete={actionDeleteState}/>}
                    {showHotelsTable &&
                        <HotelInputForm add={actionAddState} update={actionUpdateState} delete={actionDeleteState}/>}
                    {showObjectivesTable && <ObjectiveInputForm add={actionAddState} update={actionUpdateState}
                                                                delete={actionDeleteState}/>}
                    {showRoomsTable &&
                        <RoomInputForm add={actionAddState} update={actionUpdateState} delete={actionDeleteState}/>}
                </div>
                <div className="admin-page-split rightSideAdmin">
                    {showAirlinesTable &&
                        <DataTable rows={airlines} columns={airlineColumns}/>
                    }
                    {showAirportsTable &&
                        <DataTable rows={airports} columns={airportColumns}/>
                    }
                    {showFlightsTable &&
                        <DataTable rows={flights} columns={flightColumns}/>
                    }
                    {showHotelsTable &&
                        <DataTable rows={hotels} columns={hotelColumns}/>
                    }
                    {showObjectivesTable &&
                        <DataTable rows={objectives} columns={objectiveColumns}/>
                    }
                    {showRoomsTable &&
                        <DataTable rows={rooms} columns={roomColumns}/>
                    }
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
                    </div>
                </div>
            </div>
        </>
    )
}