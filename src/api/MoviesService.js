// import axios from "axios";
// import { withBaseUrl } from "../utils/api";

// export class MoviesService {
//   getPopularMovies() {
//     return axios(withBaseUrl('movie/popular'))
//   }
// }


import axios from "axios";
import { withBaseUrl } from "../utils/api";

export class MoviesService {
  static get() {
    return axios(withBaseUrl("movie/popular"))
  }
}