import React from "react";

const styles = {
    card: {
      margin: 20,
    },
    title: {
      background: "#4dd0e1",
      fontSize: "50px",
      color: "black",
      padding: "10px"
    },
    directions: {
      background: "#3f51b5",
      fontSize: "20px",
      color: "white",
      padding: "1px"
    }
  };


function Title () {
    return (
        <div style={styles.card}>
            <div style={styles.title}>Employee Directory</div>
                <div style={styles.directions}>
                  <p>Use the search box to search for an individual's first name.     Or click on Name column to alphabetize the list.</p>
                </div>
        </div>
    )
}

export default Title;


