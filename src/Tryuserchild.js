import React, { useEffect, useState } from "react";

export const Tryuserchild = ({ subnotification }) => {
  const { listing } = subnotification;
  const [alist, setAlist] = useState([]);
  useEffect(() => {
    setAlist(listing);
  }, [listing]);
  console.log("alist", alist);

  //   old

  //   useEffect(() => {
  //     const getlocalstorage = JSON.parse(localStorage.getItem("alistset"));
  //     if (getlocalstorage) setAlist(getlocalstorage);
  //   }, []);
  //   useEffect(() => {
  //     if (alist?.length) {
  //       localStorage.setItem("alistset", JSON.stringify(alist));
  //     }
  //   }, [alist]);

  // new
  useEffect(() => {
    const localval = JSON.parse(localStorage.getItem("settodokey"));
    if (localval) setAlist(localval);
  }, []);

  useEffect(() => {
    if (alist?.length) {
      localStorage.setItem("settodokey", JSON.stringify(alist));
    }
  }, [alist]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "checkAll") {
      let tempdata = alist.map((elm) => {
        return { ...elm, isChecked: checked };
      });
      setAlist(tempdata);
    } else {
      let tmpdata = alist.map((elem) =>
        elem.name === name ? { ...elem, isChecked: checked } : elem
      );
      console.log("tmpdata", tmpdata);
      setAlist(tmpdata);
    }
  };
  return (
    <div>
      <h1>Tryuserchild component</h1>
      <input
        type="checkbox"
        name="checkAll"
        onChange={handleChange}
        checked={alist.filter((elm) => elm?.isChecked !== true).length < 1}
      />{" "}
      Select All
      {console.log(alist.filter((elm) => elm?.isChecked !== true).length)}
      {alist.map((elem, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={elem.name}
              checked={elem.isChecked}
              onChange={handleChange}
            />{" "}
            {elem.name}
          </div>
        );
      })}
    </div>
  );
};
