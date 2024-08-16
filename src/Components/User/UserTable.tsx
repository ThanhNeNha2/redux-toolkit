import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchUserById } from "../../Redux/User/UserSlice";

function UserTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUserById());
    // ddeer cai nayf k []
  }, []);
  return <div>UserTable</div>;
}

export default UserTable;
