export const getDiscoverMovie = async (page, year, sort) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&primary_release_year=${year}`,
  );
  const resJSON = await res.json();
  return resJSON;
};

export const getDiscoverTv = async (page, year, sort) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&sort_by=${sort}&first_air_date_year=${year}&page=${page}`,
  );
  const resJSON = await res.json();
  return resJSON;
};

export const getSingleMovie = async id => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&append_to_response=videos%2Ccasts%2Crecommendations%2Cexternal_ids`,
  );
  const resJSON = await res.json();
  return resJSON;
};

export const getSingleTv = async id => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&append_to_response=external_ids%2Cvideos%2Crecommendations%2Ccredits`,
  );
  const resJSON = await res.json();
  return resJSON;
};

export const getPopularMovies = async page => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&page=${page}`,
  );
  const resJSON = res.json();
  return resJSON;
};

export const getTopRatedMovies = async page => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&page=${page}`,
  );
  const resJSON = res.json();
  return resJSON;
};

export const getPopularTvs = async page => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&page=${page}`,
  );
  const resJSON = res.json();
  return resJSON;
};

export const getTopRatedTvs = async page => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&page=${page}`,
  );
  const resJSON = res.json();
  return resJSON;
};

export const getSearchQueryMovie = async (page, query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY
    }&language=en-US&query=${query}&page=${page}&include_adult=false`,
  );
  const resJSON = await res.json();
  return resJSON;
};

export const getSearchQueryTv = async (page, query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY
    }&language=en-US&query=${query}&page=${page}&include_adult=false`,
  );
  const resJSON = await res.json();
  return resJSON;
};

export const addToWatchList = async (account_id, body, session_id) => {

  const url = `https://api.themoviedb.org/3/account/${account_id}/watchlist?api_key=${process.env.REACT_APP_API_KEY
    }&?session_id=${session_id}`;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(body)
  };
  const res = await fetch(url, options);
  const resJSON = await res.json();
  return resJSON;
};

export const getToWatchListData = async (account_id, session_id, page, sort, type) => {

  const res = await fetch(
    `https://api.themoviedb.org/3/account/${account_id}/watchlist/${type}?api_key=${process.env.REACT_APP_API_KEY
    }&language=en&sort_by=${sort}&page=${page}&?session_id=${session_id}`,
  );
  const resJSON = await res.json();
  return resJSON;
};