import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataGridSample() {

    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                console.log(res);
                setsuppliers(res.data)
            })

    }, [])

    const columns = [
        { field: 'companyName', headerName: 'Şirket Adı', width: 150 },
        { field: 'contactName', headerName: 'Şirket İletişim', width: 150 },
        { field: 'contactTitle', headerName: 'Şirket İletişim - 2', width: 150 },

    ]
    return (<>

        <DataGrid
            columns={columns}
            rows={suppliers}
        />

    </>
    )
}

export default DataGridSample