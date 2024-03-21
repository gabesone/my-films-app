// URL
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;

export const getTrendings = async () => {
  try {
    const res = await fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}`, {
      cache: "no-cache",
    });

    const data = await res.json();
    // console.log(data);

    return data.results;
  } catch (error) {
    console.log(error);
    return { message: "Failed to Fetch Trendings" };
  }
};

export const getMovies = async (id: string) => {
  const res = await fetch(`/movies/${id}`);
};
