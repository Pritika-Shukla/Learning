import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, UserRound, KeyRound } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth: React.FC<{ type: "signup" | "signin" }> = ({ type }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        {
          ...(type === "signup" && { username }),
          password,
          email,
        }
      );
      const jwt = response.data;
      localStorage.setItem("jwt", jwt);
      navigate("/blogs");
    } catch (e: any) {
      alert(e.message);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center flex-col w-1/2">
      <div>
        <h1 className="font-extrabold text-3xl mb-3">
          {type === "signup" ? "Create an account" : "Sign in to your account"}
        </h1>
      </div>
      <div>
        <p className="text-gray-400 font-semibold mb-4">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}
          <Link
            className="pl-2 underline"
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 mb-6">
        {type === "signup" && (
          <div>
            <label
              htmlFor="username"
              className="block mb-3 text-base font-semibold text-gray-900"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserRound className="text-gray-400" />
              </span>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
                placeholder="Enter your username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-base font-semibold text-gray-900"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="text-gray-400" />
            </span>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="m@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-base font-semibold text-gray-900"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <KeyRound className="text-gray-400" />
            </span>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-black p-2 text-white rounded-lg"
            onClick={sendRequest}
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
