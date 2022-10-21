import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <h5 style={{fontSize:"20px"}}>
                <title>{headerData.name} - Porfolio</title>
            </h5>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            {/* <Experience /> */}
            <Projects />
             <Achievement />
            {/* <Services />  */}
           
            <Blog />
            {/* <Testimonials /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
