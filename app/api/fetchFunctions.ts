// URL
const API_URL = "https://https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;

export const getTrendings = async () => {
  const res = await fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}`);

  const data = await res.json();
  console.log(data);

  return data;
};

export const getMovies = async (id: string) => {
  const res = await fetch(`/movies/${id}`);
};
