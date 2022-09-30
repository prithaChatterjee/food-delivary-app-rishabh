import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import AllCategories from '../../Templates/AllCategories'
import AllIndiaResturents from '../../Templates/AllIndiaResturents'
import AllCollections from '../../Templates/AllCollections'
import AllOtherOptions from '../../Templates/AllOtherOptions'
import Banner from '../../Templates/Banner'
import { loadlocation } from '../../Store/locations'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadlocation({url: `/locations`}))
  }, [dispatch])
  
  return (
    <>
      <Banner />
      <AllIndiaResturents />
      <AllCategories />
      <AllCollections />
      <AllOtherOptions />
    </>
  )
}

export default Home