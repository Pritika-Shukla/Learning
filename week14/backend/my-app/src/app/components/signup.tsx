"use client";

import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      {/* changed to password input */}
      <button
        onClick={() => {
            axios.post("http://localhost:3000/api/user", {
                name,
                password,
              });
              
        }}
      >
        {" "}
        Signup
      </button>
    </div>
  );
};
