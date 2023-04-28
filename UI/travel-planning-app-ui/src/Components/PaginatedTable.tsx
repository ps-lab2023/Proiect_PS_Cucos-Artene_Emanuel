import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";

export default function DataTable(props) {

    return (
        <div style={{height: 423, width: '95%', paddingLeft: '30px', paddingTop: '15px', paddingRight: '30px'}}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
            />
        </div>
    );
}