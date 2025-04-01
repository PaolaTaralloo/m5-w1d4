import { useState } from 'react'
import React from 'react'
import WelcomeAlertComp from '../components/WelcomeAlertComp'
import AllTheBooksComp from '../components/AllTheBooksComp'


function Homepage({search}) {

    return (
        <>
          <WelcomeAlertComp />
          <AllTheBooksComp search={search} />
          
        </>
    )
}


export default Homepage