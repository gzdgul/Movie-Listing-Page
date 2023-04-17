import React from 'react';

function Genres({genres}) {
    return (
        <div>
            {
                genres
                    .sort((a, b) => a.localeCompare(b))
                    .map((genre,i) => {
                        return <span key={i} className="genre">{genre}</span>
                    })
            }
        </div>
    );
}

export default Genres;