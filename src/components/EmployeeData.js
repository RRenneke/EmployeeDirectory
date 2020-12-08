import React, { useContext } from "react";
import EmployeeList from "../utils/EmployeeList"

const EmployeeData = () => {
    const context = useContext(EmployeeList);

    function dateFormater(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate =[month, day, year].join("-");
        return formattedDate;
    }
    return (
        <tbody>
        {context.developerState.filteredEmployees[0] !== undefined && context.developerState.filteredEmployees[0].name !== undefined ? (
          context.developerState.filteredEmployees.map(({ login, name, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Name" className="align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {dateFormater(dob.date)}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default EmployeeData;
