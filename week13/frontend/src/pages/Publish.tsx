import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { BACKEND_URL } from "../config";

const Publish = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const config = {
    height: 600,
    width: "100%",
  };

  const handlePublish = async () => {
    try {
      // Create a temporary div element to strip HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = content;
      const plainTextContent = tempDiv.textContent; // Removes HTML tags

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content: plainTextContent, // Send plain text
        },
        {
          headers: {
            Authorization: localStorage.getItem("jwt") || "",
          }
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing blog:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-10">
        <div className="w-9/12">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 outline-none text-xl font-semibold mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => setContent(newContent)}
          />
          <button
            onClick={handlePublish}
            type="submit"
            className="font-semibold mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
