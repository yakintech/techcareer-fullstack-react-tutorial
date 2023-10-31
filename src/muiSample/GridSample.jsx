import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
    return (<>
        <Grid container>
            <Grid item xs={12} lg={4} md={6}>
                <div style={{ backgroundColor: 'red' }}>
                    Box - 1
                </div>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
                <div style={{ backgroundColor: 'black' }}>
                    Box - 2
                </div>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
                <div style={{ backgroundColor: 'aqua' }}>
                    Box - 2
                </div>
            </Grid>
        </Grid>
    </>
    )
}

export default GridSample