import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../../organisms/Headers/InnerPage'
import { loadresturents } from '../../Store/resturents'
import AllCollections from '../../Templates/AllCollections'
import AllLocationalResturent from '../../Templates/AllLocationalResturent'
import AllOtherOptions from '../../Templates/AllOtherOptions'

const Resturents = () => {
  const param = useParams()
  const location = useLocation()
  const city = new URLSearchParams(location.search).get('name')
  const category = new URLSearchParams(location.search).get('category')
  const dispatch = useDispatch()
  console.log(param)
  useEffect(() => {
    dispatch(loadresturents({ url: `/resturents/${param.resturentId}?search=${{city, category}}` }))
  }, [dispatch])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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