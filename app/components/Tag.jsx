import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import Spinner from './Spinner';

const API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

const Random = () => {
  const [gifs, setGifs] = useState(Array.from({ length: 3 }, () => ''));
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');

  const fetchData = async () => {
    setLoading(true);
    const numberOfGifs = 3; // Number of gifs to fetch
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=${numberOfGifs}`;

    try {
      const { data } = await axios.get(url);
      const gifResults = data.data.map((gif) => gif.images.downsized_large.url);
      setGifs(gifResults);
    } catch (error) {
      console.error('Error fetching data:', error);
      setGifs(Array.from({ length: 3 }, () => ''));
    } finally {
      setLoading(false);
    }
  };

  const generateGifs = () => {
    if (tag.trim() !== '') {
      fetchData();
    }
  };

  const changeHandler = (event) => {
    setTag(event.target.value);
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen pt-10 bg-gray-100">
      <div className="w-4/5 flex items-center p-24px gap-20px">
        <div className="w-screen p-24px gap-10px bg-gray-100 mb-5 flex rounded-lg">
          <div className="flex items-center rounded-lg w-full">
            <FaSearch className="text-gray-400 ml-2 mr-4" />
            <input
              className="w-full text-lg py-2 rounded-lg pl-2 pr-1"
              onChange={changeHandler}
              value={tag}
              placeholder="Article name or keywords..."
            />
          </div>
          <button
            onClick={generateGifs}
            className="w-110px h-74px bg-black text-white p-2 rounded-lg ml-2 flex items-center justify-center"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center">
        {gifs.map((gif, index) => (
          <div key={index} className="w-1/4 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8">
            <img src={gif}  className="w-full h-auto" />
          </div>
        ))}
      </div>

      {loading && <Spinner />}
    </div>
  );
};

export default Random;