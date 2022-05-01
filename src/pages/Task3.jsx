import React, { useEffect } from "react";
import { getData } from "../api/getApi";

function Task3() {
  useEffect(() => {
    getData("/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    try {
      getData("/posts");
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div>Output is in console</div>;
}

export default Task3;
