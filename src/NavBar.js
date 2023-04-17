import React, {useState} from 'react';
import NavBarBoxes from "./NavBarBoxes";

function NavBar({setDataArray}) {
    const moviesOriginal =
        ['2020s','2010s','2000s','1990s','1980s','1970s','1960s','1950s','1940s','1930s','1920s','1910s','1900s'];

    const [movies,setMovies] = useState([...moviesOriginal]);
    const [genislik, setGenislik] = useState('3.5%');

    const handleClick = () => {
        if (genislik === '3.5%') {
            document.documentElement.style.setProperty('--genislik1', '10%');
            setGenislik('10%');
            setTimeout(() => {
                setMovies(movies.map((x)=> {
                    return 'Movies of the ' + x;
                }));
            },100)

        } else {
            document.documentElement.style.setProperty('--genislik1', '3.5%');
            setGenislik('3.5%');
                setMovies(moviesOriginal);
            }
        }
    return (
        <div>
            <div className={'navbar'}>
                <button className='more' onClick={handleClick}><div className="logo"></div>&#x2252;</button>
                <NavBarBoxes index = 'Popular' setDataArray = {setDataArray}/>
                <NavBarBoxes index = 'Genres'  setDataArray = {setDataArray}/>
                {
                    movies.map((x,i)=> {
                        return <NavBarBoxes
                            key = {i}
                            index = {x}
                            setDataArray = {setDataArray}
                        />
                    })
                }
            </div>

        </div>


    );
}

export default NavBar;