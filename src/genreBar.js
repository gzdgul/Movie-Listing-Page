import React, {useEffect, useState} from 'react';

function GenreBar({setGenreArray}) {
        const [data,setData] = useState([])
        const [filteredData,setFilteredData] = useState([])
        const [inputValue, setInputValue] = useState('');

        useEffect(() => {
            console.log(1);
                fetch('./movie-data/genres.json')
                    .then(response => response.json())
                    .then(result => {
                        setData(result)
                    });
        },[]);

        useEffect(() => {
            if (!inputValue) {
                setFilteredData(data.slice(0,6))
            }
        }, [data, inputValue])
        const handleInput = (event) => {
                setFilteredData(data.filter((x) => x.toLowerCase().includes((event.target.value).toLowerCase()))?.slice(0,6))
                setInputValue(event.target.value)
                console.log(inputValue);
        }
        const handleClick = (event) => {
            setGenreArray([event.target.id])
        }

    return (
        <div className={'genreBar'}>
            <p>Genres: </p>
            <input id={'searchInput'} type={'text'} onInput={handleInput} placeholder={'Search...'} autoComplete={'off'} autoFocus={true}/>
                {
                        filteredData.map((x) => {
                                return <button id={x} className={'navBarBoxes'} onClick={handleClick}>{x}</button>
                        })
                }
        </div>
    );
}

export default GenreBar;