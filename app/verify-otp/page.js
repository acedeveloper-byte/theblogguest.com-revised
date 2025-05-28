import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'
import VerifyOtp from '@/components/Authentication/VerifyOtp'


const page = () => {
  return (
    <>
      <Header/>
<VerifyOtp/>
      <Footer/>
    </>
  )
}

export default page
