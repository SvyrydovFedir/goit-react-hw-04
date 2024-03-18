import axios from 'axios';

export const fetch = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: 'ZRB6rrH-ic_wbuS1QwO-jq8KwlqzjzWyknfJp1Bh7Jo',
      per_page: 5,
      orientation: 'squarish',
    },
  });
  return response.data;
};
