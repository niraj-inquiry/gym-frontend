import React from 'react'
import { Header } from '../Element/Header'
import Multiplesection_footer from '../Element/Multiplesection_footer'

const ThankYou = () => {
  return (
    <>
    <Header/>
      <div className="container py-5">
          <div className="row">
            <div className="col-lg-5 mx-auto text-center">
               <h1>Thank You For</h1>
            </div>
          </div>
      </div>
      <Multiplesection_footer />
    </>
  )
}

export default ThankYou