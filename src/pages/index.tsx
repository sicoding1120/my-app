import axios from "axios";
import React, { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my-app-one-pi-53.vercel.app/api/users",
        {
          name,
          password,
        }
      );
      if (typeof window !== "undefined") {
        window.location.reload();
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setPassword(e.target.value)}
      />
      \<button onClick={handleUser}>create</button>
    </div>
  );
};

export default Index;
