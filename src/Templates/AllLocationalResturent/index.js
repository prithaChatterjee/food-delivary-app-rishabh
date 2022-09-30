import React from 'react'
import Container from '../../Atoms/Container/Index'
import ResturentCoverPage from '../../organisms/ResturentCover'
import { StyleAllLocationalResturent } from './style.allLocationalResturent'

const AllLocationalResturent = () => {
    return (
        <Container>
            <StyleAllLocationalResturent>
                <ResturentCoverPage />
                <ResturentCoverPage />
                <ResturentCoverPage />
                <ResturentCoverPage />
                <ResturentCoverPage />
                <ResturentCoverPage />
                <ResturentCoverPage />
                <ResturentCoverPage />
            </StyleAllLocationalResturent>
        </Container>
    )
}

export default AllLocationalResturent