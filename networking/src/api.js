import axios from 'axios';

async function getMovie(){
    const movie = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1");
    console.log(movie);
}
const result1 = getMovie();

async function getLatest() {
    const latest = await axios.get("https://api.themoviedb.org/3/movie/latest?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US");
    console.log(latest);
}
const result2 = getLatest();

async function getRated() {
    const Rated = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1')
    console.log(Rated);
}
const result3 = getRated();

export default result3;