import React, { useDebugValue } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return <Layout></Layout>;
};

export default Profile;
