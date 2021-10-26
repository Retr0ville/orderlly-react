import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Content from '../../layout/content'

const SmartphoneAccessoryList = (props) => {
  return (
    <div>
      <Header />
      <div className="main">
        <Content 
        endpoint = ""/>
      </div>
      <Footer />
    </div>
  )
}

export default SmartphoneAccessoryList
