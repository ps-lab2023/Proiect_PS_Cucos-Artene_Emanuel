import * as React from 'react';
import {DataGrid, GridEventListener} from "@mui/x-data-grid";

export default function DataTripsTable(props) {

    const handleEvent: GridEventListener<'rowClick'> = (
        params
    ) => {
        props.func(params.row, true)
    };


    return (
        <div style={{height: 423, width: '95%', paddingLeft: '30px', paddingTop: '15px', paddingRight: '30px'}}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                onRowClick={handleEvent}
            />
        </div>
    );
}