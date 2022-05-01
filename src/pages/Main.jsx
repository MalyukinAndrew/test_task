import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="main_menu">
      <NavLink to={"/task-1"}>Task 1</NavLink>
      <NavLink to={"/task-2"}>Task 2</NavLink>
      <NavLink to={"/task-3"}>Task 3</NavLink>
    </div>
  );
}

export default Main;
