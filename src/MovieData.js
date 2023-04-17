import React, {useEffect, useState} from 'react';
import RowContainer from "./RowContainer";

function MovieData({dataURL,genrePack}) {
    const [data, setData] = useState([]);
    const [movies,setMovies] = useState([])
    // const [horrorMovies, setHorrorMovies] = useState([]);
    // const [comedyMovies, setComedyMovies] = useState([]);
    // const [eroticMovies, setEroticMovies] = useState([]);
    // const [warMovies, setWarMovies] = useState([]);
    // const [danceMovies, setDanceMovies] = useState([]);
    // console.log(genrePack)
    useEffect(() => {

            fetch(dataURL)
                .then(response => response.json())
                .then(result => setData(result));

    },[]);

    useEffect(() => {
        genrePack = [].concat.apply([], genrePack)
        // console.log('genrePack',genrePack, typeof genrePack)
        genrePack.map((x) => {
            let moviesByGenre = data.filter((a) => a.genres.includes(x) && a.title.length < 15)?.slice(0,15)
            setMovies((prevMovies) => [...prevMovies, moviesByGenre])
        })

    }, [data]);


    console.log('movies',movies)
    console.log('----------------------------------')
    return (
        <div>
            {
                movies
                    .filter((x) => x.length !== 0)
                    .map((x,i) => <RowContainer
                        key = {i}
                        containerTitle = {genrePack[i]}
                        movies = {x}
                    />)
            }
        </div>
    );
}

export default MovieData;