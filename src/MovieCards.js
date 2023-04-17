import React, {useEffect} from 'react';
import Stars from "./Stars";
import Genres from "./Genres";
import Casts from "./Casts";

function MovieCard({title, year ,cast ,genres ,description ,thumbnail}) {
    const setDescription = () => description?.slice(0,110) + '...';
    let description_card = setDescription();

    return (
        <div className={'container_mc'}>
            <div className={'movie-card'} style={{
                background: `url(${thumbnail})`,
                backgroundRepeat : "no-repeat",
                backgroundSize : "cover",

            }}>
                <div className="content">
                    <h2>{title}</h2>
                    <div><Stars/></div>
                    <div><Genres genres = {genres} /></div>
                    <p className={'description'}>{description_card}</p>
                    <div className="cast">
                        <div><Casts castList ={cast}/></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieCard;