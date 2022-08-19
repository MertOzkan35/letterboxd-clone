import React from "react";
import { useSelector } from "react-redux";
function Journal() {
  const data = useSelector((state) => state.mert.data);
  console.log(data);
  return <div>Journal</div>;
}

export default Journal;
