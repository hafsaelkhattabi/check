import React from 'react';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';



const myname = 'hafsa'

function App() {
  return (
    <div className="block justify-center items-center min-h-screen bg-slate-400">
      <h1 className='text-center text-blue-700'>Product info</h1>
      <div className='text-center text-gray-800'>
      <>
      <Name/>
      <Price/>
      <Description/>
      <Image/>
      
      </>
      </div>
      <p className='text-center mt-5 text-lg text-blue-600'>Hello , {myname} !</p>
    </div>
  );
}

export default App;
