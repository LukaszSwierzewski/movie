import Api from "./Api";
export default {
  getMovies(val) {
    return Api().get(`?s=${val}&page=2&apikey=7a603458`);
  },
  getMovie(val) {
    return Api().get(`?i=${val}&apikey=7a603458`);
  }
};
