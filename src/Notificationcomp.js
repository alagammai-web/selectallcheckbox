import React, { useEffect, useState } from "react";
import { Singlenotification } from "./Singlenotification";
import { notificationdata } from "./utils/notificationdata";

const Notificationcomp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(notificationdata);
  }, []);
  return (
    <>
      <div className="container bxdesign mt-4 mb-4">
        {notificationdata.map((item) => (
          <Singlenotification
            item={item}
            users={users}
            setUsers={setUsers}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Notificationcomp;
