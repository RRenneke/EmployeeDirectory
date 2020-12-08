import React from 'react';
import Search from "./Search";

function Nav() {
    return (
        <nav>
            <div className="search-area col-4">
            <Search />
            </div>
        </nav>
    );
}

export default Nav;