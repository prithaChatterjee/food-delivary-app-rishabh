import React from 'react'
import { StyleSearchItems } from './style.searchItems'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchItems = () => {
    return (
        <StyleSearchItems>
            <input type="search" placeholder="Enter your choice..." />
            <div className="searchIcon">
                <AiOutlineSearch />
            </div>
        </StyleSearchItems>
    )
}

export default SearchItems