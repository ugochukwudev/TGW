import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({
    profileImg: "",
    username: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const setUserdata = (e: any, value: any) => {
    setUser((prev) => {
      return { ...prev, [e]: value };
    });
  };
  const reset = () => {
    return setLoading((prev) => !prev);
  };

  //setInput to state
  const submit = async () => {
    console.log("jj");
    reset();

    const formData = new FormData();
    formData.append("profileImg", user.profileImg);
    formData.append("name", user.name);
    formData.append("username", user.username);
    formData.append("password", user.password);
    setError("all input fields are required please fill them  ");
    try {
      axios
        .post(
          "https://patrick-production.up.railway.app/api/user-profile",
          formData,

          {}
        )
        .then((res: any) => {
          //console.log("OOOP", res);
          setError(res.data.message);
          if (res.data.message) {
            window.location.assign("/users");
          } else {
            setError("all input fields are required please fill them  ");
          }
          setError("all input fields are required please fill them  ");
        });

      console.log(formData);
    } catch (error) {
      console.log("err", error);
      setError("all input fields are required please fill them  ");
      //setLoading((prev) => !prev);
    }
    setTimeout(() => {
      reset();
    }, 5000);
  };

  //console.log(import.meta.env.VITE_API);
  return (
    <div className="bg-[#4C3AEF] py-10 w-[99vw] overflow-x-hidden scrollbar-hide ">
      <div className="flex items-center w-full h-10  justify-center  mb-[63px]">
        <p className="z-10 relative text-white font-bold leading-10 ">TGW</p>
      </div>
      <div className="w-full h-screen bg-[#4C3AEF] text-white justify-center  flex">
        <div className=" h-fit w-[90%] lg:w-[500px] bg-white border-[1px] border-[#E9E9E9] rounded-[9px] flex flex-col drop-shadow-[-10.6297px_8.1767px_40.8835px_rgba(57,58,63,0.25)] gap-[40px] p-[41px] mb-10">
          {/* welcome admin */}
          <div className=" flex flex-col items-center gap-[18px]  ">
            <p className="text-[#4C3AEF]  font-[21.953px] leading-[20px] ">
              Welcome onboard
            </p>
            <p className=" text-black font-normal text-[14px] leading-[20px] ">
              Please log in your credentials
            </p>
            <p className=" text-red-700 font-normal text-[14px] leading-[20px] ">
              {error}
            </p>
          </div>
          {/* inputs */}

          <div className="flex flex-col items-start gap-2.5 text-black w-full ">
            {/* username */}
            <div className="w-full flex flex-col gap-2.5">
              <p className="font-bold text-[16px] leading-[20px] text-[#747474] ">
                Username
              </p>
              <input
                name="username"
                onChange={(e) => {
                  setUserdata(e.target.name, e.target.value);
                }}
                value={user.username}
                type="text"
                className="w-full outline-0 bg-[#EFEFEF] h-[52.69px] p-4 font-medium text-[16px] leading-[20px] rounded-[5.01783px] "
                placeholder="enter your username"
              />
            </div>
            {/* password */}
            <div className="w-full flex flex-col gap-2.5">
              <p className="font-bold text-[16px] leading-[20px] text-[#747474] ">
                Password
              </p>
              <input
                name="password"
                onChange={(e) => {
                  setUserdata(e.target.name, e.target.value);
                }}
                value={user.password}
                type="password"
                className="w-full outline-0 bg-[#EFEFEF] h-[52.69px] p-4 font-medium text-[16px] leading-[20px] rounded-[5.01783px] "
                placeholder="enter your password"
              />
            </div>
            {/* next 1 */}
            <div className="w-full flex flex-col gap-2.5">
              <p className="font-bold text-[16px] leading-[20px] text-[#747474] ">
                Name
              </p>
              <input
                name="name"
                onChange={(e) => {
                  setUserdata(e.target.name, e.target.value);
                }}
                value={user.name}
                type="password"
                className="w-full outline-0 bg-[#EFEFEF] h-[52.69px] p-4 font-medium text-[16px] leading-[20px] rounded-[5.01783px] "
                placeholder="enter your name"
              />
            </div>
            {/* next  2 */}
            <div className="w-full flex flex-col gap-2.5">
              <p className="font-bold text-[16px] leading-[20px] text-[#747474] ">
                profile picture
              </p>
              <input
                name="profileImg"
                onChange={(e) => {
                  setUserdata(e.target.name, e.target.files?.[0]);
                }}
                multiple={false}
                //value={Image}
                accept="image/png, image/jpeg , image/jpg"
                type="file"
                className="w-full outline-0 bg-[#EFEFEF] h-[52.69px] p-4 font-medium text-[16px] leading-[20px] rounded-[5.01783px] "
                placeholder="pick your profile picture"
              />
            </div>
          </div>

          <button
            //onClick={login}
            onClick={submit}
            className="bg-[#4C3AEF] w-full h-[56px] rounded-lg text-white font-bold text-[16px] leading-[20px] "
          >
            {loading ? " Loading" : "Add user"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
