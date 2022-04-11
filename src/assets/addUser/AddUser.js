import React from "react";

const AddUser = ({ card }) => {
  return (
    <div>
      <table>
        <tr>
          <th>First Name</th>
          <th>eMail</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default AddUser;