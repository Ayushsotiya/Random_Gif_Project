import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_Key = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
  const Tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&tag=${tag}`;
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? (Tagurl) : (Randomurl));
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('car');
  }, [])
  return { gif, loading, fetchData }
}
export default useGif;