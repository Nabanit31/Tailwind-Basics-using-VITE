import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor("var(--color-red-500)")}
          className='outline-none px-3 py-2
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"var(--color-red-500)"}}>
            Red
          </button>
          <button onClick={()=>{setColor("var(--color-yellow-300)")}} 
          className='outline-none px-3 py-2
          rounded-full text-black shadow-lg'
            style={{backgroundColor:"var(--color-yellow-300)"}}>
            Yellow
          </button>
          <button
          onClick={()=>{setColor("var(--color-emerald-700)")}}
          className='outline-none px-3 py-2
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"var(--color-emerald-700)"}}>
            Green
          </button>
          
          <button onClick={()=>{setColor("Violet")}}
          className='outline-none px-3 py-2
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"Violet"}}>
            Violet
          </button>
          <button onClick={()=>{setColor("Skyblue")}}
          className='outline-none px-3 py-2
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"SkyBlue"}}>
            Blue
            </button>

         </div>
        </div>
      </div>

    </>
  );
}

export default App;