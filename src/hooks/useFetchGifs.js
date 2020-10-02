import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifts = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchGifts = async () => {
      const images = await getGifs(category);
      setState({ data: images, loading: false });
    };

    fetchGifts();
  }, [category]);

  return state;
};
