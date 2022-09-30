import React from 'react'
import Header from '../../organisms/Headers/InnerPage'
import AllCollections from '../../Templates/AllCollections'
import AllLocationalResturent from '../../Templates/AllLocationalResturent'
import AllOtherOptions from '../../Templates/AllOtherOptions'

const Resturents = () => {
  return (
    <>
      <Header />
      <AllLocationalResturent />
      <AllCollections />
      <AllOtherOptions />
    </>
  )
}

export default Resturents