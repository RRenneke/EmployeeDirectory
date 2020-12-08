import React, { useContext } from "react";
import EmployeeList from "../utils/EmployeeList";

const Search = () => {
//class activity week 19, numbers 19 and 20
    const context = useContext(EmployeeList);

    return (
        <div>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search First Name"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}

export default Search;