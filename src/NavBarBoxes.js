import React, {useEffect, useState} from 'react';

function NavBarBoxes({index,setDataArray}) {
    let dataURL = './movie-data/movies-2000s.json';
    const [genreButtonClickToggle,setGenreButtonClickToggle] = useState(false);
    const [allButtonsClickToggle,setAllButtonsClickToggle] = useState(false);
    const [className,setClassName] = useState('navBarBoxes');
    const handlerClick = () => {
        if (allButtonsClickToggle === false) {
            setAllButtonsClickToggle(true)
            setClassName('navBarBoxes boxclicked')
        }
        else {
            setAllButtonsClickToggle(false)
            setClassName('navBarBoxes')
        }
        if (index.includes('Movies of the')) index = index.split(' ')[3];
        if (index === 'Genres') {
            dataURL =[[],['*']]
           if (genreButtonClickToggle === false) {
               setGenreButtonClickToggle(true)
               document.documentElement.style.setProperty('--genislikGenreBar', ' var(--genislik1)')
           }
           else {
               setGenreButtonClickToggle(false)
               document.documentElement.style.setProperty('--genislikGenreBar', '-7%')
           }
        }
        if (index === '2020s') dataURL =[['./movie-data/movies-2020s.json'],['Movies of the 2020s']];
        if (index === '2010s') dataURL =[['./movie-data/movies-2010s.json'],['Movies of the 2010s']];
        if (index === '2000s') dataURL =[['./movie-data/movies-2000s.json'],['Movies of the 2000s']];
        if (index === '1990s') dataURL =[['./movie-data/movies-1990s.json'],['Movies of the 1990s']];
        if (index === '1980s') dataURL =[['./movie-data/movies-1980s.json'],['Movies of the 1980s']];
        if (index === '1970s') dataURL =[['./movie-data/movies-1970s.json'],['Movies of the 1970s']];
        if (index === '1960s') dataURL =[['./movie-data/movies-1960s.json'],['Movies of the 1960s']];
        if (index === '1950s') dataURL =[['./movie-data/movies-1950s.json'],['Movies of the 1950s']];
        if (index === '1940s') dataURL =[['./movie-data/movies-1940s.json'],['Movies of the 1940s']];
        if (index === '1930s') dataURL =[['./movie-data/movies-1930s.json'],['Movies of the 1930s']];
        if (index === '1920s') dataURL =[['./movie-data/movies-1920s.json'],['Movies of the 1920s']];
        if (index === '1910s') dataURL =[['./movie-data/movies-1910s.json'],['Movies of the 1910s']];
        if (index === '1900s') dataURL =[['./movie-data/movies-1900s.json'],['Movies of the 1900s']];
        setDataArray(dataURL);
    }
    return (
        <>
            <button id={index} className={className} onClick={handlerClick}>
                {index}
            </button>
        </>
    );
}

export default NavBarBoxes;