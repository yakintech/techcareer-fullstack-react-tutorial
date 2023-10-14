import React from 'react'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'

function PageContent() {
    return (<>
        <div className="w3-content" style={{ maxWidth: 1100 }}>
            <About/>
            <Menu/>
            <Contact/>
        </div>
    </>
    )
}

export default PageContent