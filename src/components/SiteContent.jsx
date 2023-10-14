import React from 'react'
import LeftMenu from './LeftMenu'
import RigthMenu from './RigthMenu'

function SiteContent() {
    return (<>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <LeftMenu />
            <RigthMenu />
        </div>
    </>
    )
}

export default SiteContent