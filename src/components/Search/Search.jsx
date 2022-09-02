import React from 'react';
import "./style.css"
import Footer from "../Footer/Footer"
import { Icon } from '@iconify/react';
const Search = () => {
    return (
        <>
            <div id='search-cont'>
                <div></div>
                <div>
                    <h1>Search</h1>
                </div>
                <div>
                    <div id='search-main'>
                        <input type="text" placeholder='Search'/>
                        <Icon id='icon-search' icon="bi:search" />
                    </div>
                </div>
                <div></div>
            </div> 
            <Footer/>
        </>
    );
};

export default Search;