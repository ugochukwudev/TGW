import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./users";

const App = () => {
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
    try {
      axios
        .post(
          "https://patrick-production.up.railway.app/api/user-profile",
          formData,

          {}
        )
        .then((res: any) => {
          console.log(res);
          setError(res.data.message);
        });

      console.log(formData);
    } catch (error) {
      console.log("err", error);
      setError("all input fields are required ");
      //setLoading((prev) => !prev);
    }
    setTimeout(() => {
      reset();
    }, 5000);
  };

  //console.log(import.meta.env.VITE_API);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
