'use client'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <div className='max-w-4xl mx-auto flex flex-col justify-center min-h-screen '>
      
        <TextField
          id=""
          label="Multiline is me "
          multiline
          
        />
       
        <TextField
          id=""
          label="Multiline"
          multiline
          rows={10}
        />
   </div>
  );
}

