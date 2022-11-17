import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [data, setData] = useState([]);
  const submit = async () => {
    console.log("jj");

    try {
      axios
        .get("https://patrick-production.up.railway.app/api/", {})
        .then((res: any) => {
          console.log(res);
          setData(res.data.users);
          console.log(data);
        });
    } catch (error) {
      console.log("err", error);
      //setLoading((prev) => !prev);
    }
  };
  useEffect(() => {
    submit();
  }, []);
  return (
    <div className="bg-[#fefefe] w-[100vw] flex flex-col gap-10 ">
      <p className="z-10 relative text-blue-600 mt-10 mb-4 font-bold leading-10 text-center">
        T G W
      </p>
      <Link to="/">
        <p className="z-10 relative text-blue-600 mt- mb-10 font-bold leading-10 text-center">
          Add new user
        </p>
      </Link>
      {data?.map((data: any) => {
        return (
          <div
            key={data._id}
            className="bg-white drop-shadow-2xl flex flex-wrap justify-between p-4 text-black shadow-[#000000]  w-[90%] lg:w-[50vw] ml-auto mr-auto rounded-lg"
          >
            <img
              src={data.profileImg}
              className="w-[50px] h-[50px] pt-[25px] drop-shadow-xl bg-blue-600 shadow-black rounded-full"
              alt="profile"
            />
            <div className="py-4">
              <p className="font-bold ">Name</p>
              <p className="font-semibold text-center">{data.name}</p>
            </div>
            <div className="py-4">
              <p className="font-bold ">username</p>
              <p className="font-semibold text-center">{data.username}</p>
            </div>
            <div className="py-4">
              <p className="font-bold ">password</p>
              <p className="font-semibold text-center">{data.password}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
