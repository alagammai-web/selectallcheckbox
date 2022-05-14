import React, { useEffect, useState } from "react";

export const Singlenotification = ({ item, users, setUsers }) => {
  const { title, category } = item;
  const [isActive, setIsActive] = useState(false);

  const [alist, setAlist] = useState([]);

  useEffect(() => {
    setAlist(category);
  }, [category]);
  // useEffect(() => {
  //   const getvalaue = JSON.parse(localStorage.getItem("keyy"));
  //   if (getvalaue) setAlist(getvalaue);
  // }, []);

  // useEffect(() => {
  //   if (alist?.length) {
  //     localStorage.setItem("keyy", JSON.stringify(alist));
  //   }
  // }, [alist]);

  // console.log("alust", alist);

  // useEffect(() => {
  //   const localval = JSON.parse(localStorage.getItem("settodokey"));
  //   if (localval) setAlist(localval);
  // }, []);

  // useEffect(() => {
  //   if (alist?.length) {
  //     localStorage.setItem("settodokey", JSON.stringify(alist));
  //   }
  // }, [alist]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = alist.map((elm) => {
        return { ...elm, isChecked: checked };
      });
      setAlist(tempUser);
    } else {
      let tempUser = alist.map((elem) =>
        elem.name === name ? { ...elem, isChecked: checked } : elem
      );
      setAlist(tempUser);
    }
  };

  return (
    <div className="accordion-item col-sm-12 border-bottom  ">
      <div
        className="accordion-title titlepart"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={
              alist.filter((elem) => elem?.isChecked !== true).length < 1
            }
            onChange={handleChange}
          />{" "}
          <span onClick={() => setIsActive(!isActive)}>&nbsp; {title}</span>
        </div>
        <div>
          {isActive ? (
            <i className="fa fa-angle-up downarrow" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-down downarrow" aria-hidden="true"></i>
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content listings">
          <ul>
            {alist.map((elem, index) => (
              <li className="form-check" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  name={elem.name}
                  checked={elem.isChecked || false}
                  onChange={handleChange}
                />
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
