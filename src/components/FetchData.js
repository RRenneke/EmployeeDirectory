import React, {useState, useEffect} from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";
import EmployeeList from "../utils/EmployeeList"

const styles = {
    employeeData: {
        margin: 20,
    }
};

//Tutor drove most of this and employee data code. With the help of the thw web
//https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const FetchData = () => {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredEmployees: [],
        headings: [
          { name: "Name", width: "20%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", },
          { name: "DOB", width: "10%", }
        ]
      });
    
      const employeeSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else{
            setDeveloperState({
                order:"descend"
            })
        }

        const employeeCompare = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }
        const sortedUsers = developerState.filteredEmployees.sort(employeeCompare);

        setDeveloperState({
          ...developerState,
          filteredEmployees: sortedUsers
});

 };
   
      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ 
        ...developerState, 
        filteredEmployees: filteredList });
      };

      useEffect(() => {
        API.getUsers().then(results => {
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredEmployees: results.data.results
          });
        });
      }, []);
    
      return (
        <EmployeeList.Provider
          value={{ developerState, handleSearchChange, employeeSort }}
        >
          <Nav />
          <div style={styles.employeeData}>
            {developerState.filteredEmployees.length > 0 
    ? <Table />
     : <div></div>
     }
          </div>
        </EmployeeList.Provider>
      );
    }
    
    export default FetchData;