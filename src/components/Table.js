import React, { useContext } from "react";
import EmployeeData from "./EmployeeData";
import EmployeeList from "../utils/EmployeeList";



const Table = () => {
    const context = useContext(EmployeeList);
    return (
        <div>
            <table id="table" className="table table-striped table-hover table-condensed" >
                <thead>
                    <tr> {context.developerState.headings.map(({name, width}) => {
                    return (
                            <th
                                key={name}
                                style={{width}}
                                onClick={() => {context.handleSort(name.toLowerCase());}}
                            >
                                {name}
                    </th>
                    );
                    })}
                    </tr>
                </thead>

                <EmployeeData />
            </table>
        </div>
    );
}

export default Table;