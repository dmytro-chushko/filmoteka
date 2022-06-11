const axios = require('axios');

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `476dab1d501621899284a1a134c160d7`;


// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
// login: project-group-6, password: project-group-6
// API key:  3c9b3437ebab156a512248e157c99300

export default class NewsApiService {

    constructor() {
        this.searchQuery = 'wood';
        this.page = 1;
     }
 
    async fetchTrend() {
        const url = `${BASE_URL}/trending/movie/week?api_key=${KEY}&page=${this.page}`

      const response = await axios.get(url);
        const data = response;
      
        
        return data;
    };

    // incrementPage() {
    //     this.page += 1;
    // };

    resetPage() {
        this.page = 1;
    }

   async fetchSerchQuery() {
        const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${this.searchQuery}`

      const response = await axios.get(url);
        const data = response;
             
        return data;
    };
  
  get query() {
        return this.searchQuery;
    };

  set query(newQuery) {
        this.searchQuery = newQuery;
    }

}
