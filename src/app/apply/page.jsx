"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";


export default function MultilineTextFields() {
  const skill = ['Java' , 'Html' , 'JavaScript' , 'MongoDb' , 'React' , 'Mysql']
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center min-h-screen ">
      <TextField id="" type="text" required label="Enter your name" multiline />
      <TextField id="" type="email" required label="Enter your email" multiline />
      <TextField id="" type="text" required label="Multiline" multiline rows={10} />
      <Autocomplete  options={skill} placement='bottom' renderInput={(params) => <TextField type="text" required  {...params} label="Services"/>}/>
    </div>
  );
}
