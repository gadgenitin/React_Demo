import React from "react";

function Assignment2() {
  const employees = [
    { id: 1, Name: "Charlie", Job: "Janitor" },
    { id: 2, Name: "Mac", Job: "Bouncer" },
    { id: 3, Name: "Dee", Job: "Actor" },
    { id: 4, Name: "Dennis", Job: "Bartender" }
  ];

  const empList = employees.map((emp_map) => (
    <table className="table">
      <tr>
        <td style={{ width: "160px" }}>{emp_map.Name}</td>
        <td style={{ width: "160px" }}>{emp_map.Job}</td>
      </tr>
    </table>
  ));
  return (
    <div>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </table>
      <table>
        <tr>
          <td>{empList}</td>
        </tr>
      </table>
    </div>
  );
}
export default Assignment2;
