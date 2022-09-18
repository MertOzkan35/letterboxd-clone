import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Profile() {
  const favorite = useSelector((state) => state.favorite.favoriteMovies);
  const watch = useSelector((state) => state.forwatch.watchMovies);
  console.log(favorite);
  return <div className="w-full h-96 ">profile BURASI</div>;
}

export default Profile;
