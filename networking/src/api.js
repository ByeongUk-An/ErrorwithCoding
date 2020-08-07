import axios from 'axios';

async function getMovie(){
    const movie = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1");
    // console.log(movie);
}
const result1 = getMovie();




export default result1;