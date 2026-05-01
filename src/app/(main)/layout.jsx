import Header from '@/component/shared/Header'
import Navbar from '@/component/shared/Navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>

        {children}
    </div>
  )
}
