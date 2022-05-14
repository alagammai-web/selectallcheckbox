import React, { useEffect, useState } from "react";
import { Tryuserchild } from "./Tryuserchild";
import { notificationdata } from "./utils/notificationdata";

export const Tryuser = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(notificationdata);
  }, []);
  console.log("list", list);

  return (
    // <div>
    //   {list?.map((elem, index) => {
    //     return (
    //       <div key={index}>
    //         {elem?.listing.map((subelem, subindex) => {
    //           return (
    //             <div key={subindex}>
    //               <input
    //                 type="checkbox"
    //                 name={subelem.name}
    //                 checked={subelem?.isChecked}
    //                 onChange={checkElem}
    //               />{" "}
    //               {subelem.name}
    //             </div>
    //           );
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>
    <>
      {list.map((subnotification, index) => (
        <Tryuserchild subnotification={subnotification} key={index} />
      ))}
    </>
  );
};
