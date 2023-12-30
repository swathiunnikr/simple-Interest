import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  //JSCODE
  const [Interest , setInterest]= useState(0)
  const [Principle , setPrinciple]= useState(0)
  const [Rate , setRate]= useState(0)
  const [Year , setYear]= useState(0)
  const [isPrinciple , setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsYear] = useState(true)

  const validate = (e)=>{
   const {name , value}= e.target
  //  console.log(name , value);
  // console.log(typeof(value));
  // console.log(value.match(/^[0-9]+$/));
  if(!!value.match(/^[0-9]+$/)){   // !! - to convert into boolean value
   if(name==='Principle'){
    setPrinciple(value)
   setIsPrinciple(true)
  }
  else if(name==='Rate'){
    setRate(value)
    setIsRate(true)
  }
  else{
    setYear(value)
    setIsYear(true)
  }
}
  else{
    if(name==='Principle'){
      setPrinciple(value)
    setIsPrinciple(false)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  }
  else{
    setYear(value)
    setIsYear(false)
  }

  }
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div style={{width:'500px'}} className='bg-light p-5 rounded'> 
      <h1>Simple Interest App</h1> 
      <p>Calculate your Simple Interest Easily</p>
      <div style={{height:'150px'}} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
        <h1>$ {' '} {Interest}  </h1>
        <p>Total simple Interest</p>
      </div>
      <form className='mt-5'>
        <div className='mb-3'>
        <TextField name='Principle' className='w-100 ' value={Principle || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="$ Principle Amount" variant="outlined" />
        </div>
        {!isPrinciple &&
        <div>
          <p className='text-danger fw-bolder'>Invalid Input</p>
        </div>}
        <div className='mb-3'>
        <TextField name='Rate' className='w-100 ' value={Rate || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
        </div>
        {!isRate &&
        <div>
          <p className='text-danger fw-bolder'>Invalid Input</p>
        </div>}
        <div className='mb-3'>
        <TextField name='Year' className='w-100 ' value={Year || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined" />
        </div>
        {!isYear &&
        <div>
          <p className='text-danger fw-bolder'>Invalid Input</p>
        </div>}
        <div className='mt-5'>
        <Stack direction="row" spacing={2}>
        <Button className='bg-success' style={{width:'200px' , height:'50px'}} variant="contained">Calculate</Button>
        <Button style={{width:'200px',height:'50px'}} variant="outlined">Reset</Button>
        </Stack>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
