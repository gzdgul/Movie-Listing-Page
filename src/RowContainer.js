import React, {useEffect, useState} from 'react';
import MovieCard from "./MovieCards";

function RowContainer({movies,containerTitle}) {
    const [movieDiv, setMovieDiv] = useState('movies')
    const handleMouseRight = () => {
        setMovieDiv('movies clicked');
    }
    const handleMouseLeft = () => {
        setMovieDiv('movies clicked2');
    }
    const handleMouseLeftLeave = () => {
        setMovieDiv('movies');
    }
    const handleMouseRightLeave = () => {
        setMovieDiv('movies leave');
    }
    return (
        <div>
            <div className={'containerTitle'}> {containerTitle} </div>
            <div className={'row'}>
                <div className="left-handle" onMouseMove={handleMouseLeft} onMouseLeave={handleMouseLeftLeave}><div className="arrowDivRight">&#171;</div></div>
                <div className="right-handle" onMouseMove={handleMouseRight} onMouseLeave={handleMouseRightLeave}><div className="arrowDivLeft">&#187;</div></div>
                <div className={movieDiv}>
                    {
                        movies.map((x,i) => {
                         return <MovieCard
                             key = {i}
                             title = {x.title}
                             year = {x.year}
                             cast = {x.cast}
                             genres = {x.genres}
                             description = {x.extract}
                             thumbnail = {x.thumbnail}/>
                        })
                    }
                </div>

            </div>

        </div>
    );
}

export default RowContainer;