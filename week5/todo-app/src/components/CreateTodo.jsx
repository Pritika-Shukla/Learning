import React, { useState } from "react";

const CreateTodo = () => {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  return (
    <div className="w-full h-full flex justify-center m-4 flex-col gap-4">
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={function(e)
           { const value = e.target.value;
            setTitle(value);
          }} />
          <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
            Title
          </label>
        </div>
      </div>
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
        
         onChange={function(e){
            const value = e.target.value;
            setDescription(value);
          }}/>
          <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
            Description
          </label>
        </div>

        <button className=" m-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300  " onClick={
          () => {
           fetch("http://localhost:3000/todo" ,{
            method:"Post",
            body: JSON.stringify({
              title:title,
              description:description
            }),
            headers:{
              "Content-Type":"application/json"
            }
           })
           .then(async function(res){
            const json=await res.json();
            alert("Todos added successfully")
           })
          }
        }>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Add Todo
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
