/* eslint-disable no-unused-expressions */
import React,{useState,useEffect} from 'react'




import './App.css';
import axios from 'axios';
import * as fs from 'fs';

const embedElement = document.createElement('embed');

function App() {

  async function handleLoadPdf() {
   
   const response=await axios.get('http://localhost:3030/loadPdf')
   .then((res)=>{
    console.log()

    const pdfBytes =  btoa(res?.data?.binaryString);
    
    console.log(btoa(res?.data?.binaryString))
  const dataUri = 'data:application/pdf;base64,' + pdfBytes;

  embedElement.src = dataUri;
  embedElement.type = 'application/pdf';
  embedElement.width = '100%';
  embedElement.height = '100%';

  const containerElement = document.getElementById('pdf-container');
  containerElement.appendChild(embedElement);
      
    
    
   })
   .catch((err)=>{
    return err
   })

   return response
   
  }

  
  return (
    <>
    <div className="container">
        <div className="buttons">
          <button onClick={()=>handleLoadPdf()} >Load PDF</button>
          <button onClick={()=> console.log()} >Save PDF</button>
        </div>
    </div>
    <div id="pdf-container">
       
      
    </div>
    
        
  
        
  </>
  );
}

export default App;
