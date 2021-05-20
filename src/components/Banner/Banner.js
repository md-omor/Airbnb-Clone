import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from '../Search/Search'
import { useHistory } from "react-router-dom";


const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();

    return (
      <div className="banner">
        <div className="banner__search">
          {showSearch && <Search />}
          <Button
            onClick={() => setShowSearch(!showSearch)}
            className="banner__searchbtn"
            variant="outlined"
          >
            {showSearch ? 'Hide' : 'Search Dates'}
          </Button>
        </div>
        <div className="banner__info">
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button variant="outlined" onClick={() => history.push('/search')} >Explore Nearby</Button>
        </div>
      </div>
    );
}

export default Banner
