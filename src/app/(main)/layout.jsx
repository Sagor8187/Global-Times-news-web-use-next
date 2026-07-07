import Header from '@/component/shared/Header'
import Navbar from '@/component/shared/Navbar'
import React from 'react'
import Footer from '../../component/shared/Footer'

export default function layout({children}) {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>

        {children}
        <Footer></Footer>
    </div>
  )
}
