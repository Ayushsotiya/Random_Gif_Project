import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);
 
  return (
    <div className='w-1/2 h-full bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 '>
      <h1 className='mt-[15px] underline text-2xl font-bold'> RANDOM GIF</h1>
      {loading ? (<Spinner/>) : (<img src={gif} width="450" alt='hello duniya ther is nothing to show'></img>)}
      <input className='w-10/12 p-4 bg-yellow-50 text-lg py-2 rounded-lg mb-[10px]' onChange={(event) => setTag(event.target.value)} value={tag} placeholder='Enter the Gif you want to see'></input>
      <button onClick={() => fetchData()} className='w-10/12 bg-red-400 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}
export default Tag;