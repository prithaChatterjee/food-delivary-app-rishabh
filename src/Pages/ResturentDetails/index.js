import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../../organisms/Headers/InnerPage'
import { loadresturents } from '../../Store/resturents'
import ResturentAllDetails from '../../Templates/ResturentAllDetails'

const ResturentDetails = () => {
  const param = useParams()
  const location = useLocation()
  const city = new URLSearchParams(location.search).get('name')
//   const category = new URLSearchParams(location.search).get('category')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadresturents({ url: `/resturents/${param.resturentId}?search=${city, "categories"}` }))
  }, [dispatch])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <ResturentAllDetails />
    </>
  )
}

export default ResturentDetails