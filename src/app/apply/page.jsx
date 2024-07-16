"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";


export default function MultilineTextFields() {
  const skill = ['Java' , 'Html' , 'JavaScript' , 'MongoDb' , 'React' , 'Mysql']
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center min-h-screen ">
      <TextField id="" label="Multiline is me " multiline />
      <TextField id="" label="Multiline" multiline rows={10} />
      <Autocomplete  options={skill} placement='bottom' renderInput={(params) => <TextField  {...params} label="Services"/>}/>
    </div>
  );
}
