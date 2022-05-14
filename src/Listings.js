import React, { useState } from "react";

export const Listings = ({ category, checked, setChecked }) => {
  const toggleClick = (data) => {
    // const mydata = tmptodo.find((elem) => elem.id === id);
    // mydata.complete = !mydata.complete;
    // Settodolist(tmptodo);

    console.log(category);
    console.log(data);
    data.checked = !data.checked;
    console.log(setChecked(!checked));
  };
  return (
    <div>
      <ul>
        {category.map((data) => (
          <li>
            {/* <input type="checkbox" checked={checked} /> {data} */}
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                toggleClick(data);
              }}
            />{" "}
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};
