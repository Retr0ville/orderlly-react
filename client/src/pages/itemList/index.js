import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Content from '../../layout/content'

const itemList = ({url}) => {
  // const endpoint = url === "/pcs"? "" : url === "/pc-accessories"? "" : url === "/smartphones"? "" : url === "/smartphone-accessories"? "" : ""
  return (
    <div className="body">
      <Header />
      <div className="main">
        <Content
        endpoint = {url} />
      </div>
      <Footer />
    </div>
  )
}

export default itemList
