"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";


export default function MultilineTextFields() {
  const skill = ['Java' , 'Html' , 'JavaScript' , 'MongoDb' , 'React' , 'Mysql']
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center min-h-screen ">
     <form>
     <TextField id="" type="text" required  label="Enter your name" multiline />
      <TextField id="" type="email" required label="Enter your email" multiline />
      <TextField id="" type="text" required label="Multiline" multiline rows={10} />
      <Autocomplete  options={skill} placement='bottom' renderInput={(params) => <TextField type="text" required  {...params} label="Services"/>}/>
      <div className="flex gap-3">
            <TextField onChange={(e) => setFiles(e.target.files)} type="file" className='p-2 border w-full border-gray-300 rounded-lg' id='images' accept='image/*' multiple/>
                <button disabled={uploading} type='button' onClick={handlerImageSubmit} className='font-medium w-full text-xs  text-green-700 border rounded-xl p-3'>{uploading ? 'Uploading...' : 'Upload data'}</button>
            <p className='text-red-700 text-xs'>{imageUploadImageError &&  imageUploadImageError}</p>
        </div>
     </form>
    </div>
  );
}
