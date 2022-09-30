import React from 'react'
import {useSelector} from 'react-redux'
import Container from '../../Atoms/Container/Index'
import ResturentCoverPage from '../../organisms/ResturentCover'
import { StyleAllLocationalResturent } from './style.allLocationalResturent'

const AllLocationalResturent = () => {
    const {resturentReducer} = useSelector(state => state)
    return (
        <Container>
            <StyleAllLocationalResturent>
                {
                    resturentReducer?.data?.map(res => <ResturentCoverPage key={res._id} {...res} />)
                }
            </StyleAllLocationalResturent>
        </Container>
    )
}

export default AllLocationalResturent