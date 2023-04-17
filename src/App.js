import './App.css';
import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import MovieData from "./MovieData";
import GenreBar from "./genreBar";

function App() {
    const [dataArray,setDataArray] = useState([[],[]]);
    const [filtersURLArray,setFilterURLsArray] = useState([])
    const [filtersArray,setFiltersArray] = useState([])
    const [genreArray,setGenreArray] = useState([['Comedy']])

    useEffect(() => {
        //filtersArray in subArrayleri dataArrayden gelen kategoriye uyuyorsa
        (filtersArray.some((subarr) => subarr.includes(dataArray[1][0])))
            ? setFiltersArray(filtersArray
                .map((subarr) => subarr
                .filter((x =>x !== dataArray[1][0])))
                .filter((y) => y.length !== 0))
            : setFiltersArray(dataArray[1].length > 0 ? [...filtersArray, dataArray[1]] : [...filtersArray]);

        (filtersURLArray.some((subarr) => subarr.includes(dataArray[0][0])))
            ? setFilterURLsArray(filtersURLArray
                .map((subarr) => subarr
                .filter((x =>x !== dataArray[0][0])))
                .filter((y) => y.length !== 0))
            : setFilterURLsArray(dataArray[0].length > 0 ? [...filtersURLArray, dataArray[0]] : [...filtersURLArray]);

    },[dataArray])


    // console.log('dataArray1: ',dataArray[1])
    // console.log('filtersArray: ',filtersArray)
     console.log('filtersURLArray: ',filtersURLArray)
    // console.log('genreArray: ',genreArray)

    return (
      <>
        <div className="container">
            <div className='navbarContainer'><NavBar setDataArray = {setDataArray}/></div>
            <div className="genreBarContainer"><GenreBar setGenreArray = {setGenreArray}/></div>
            <div className="rowContainers">
                <div className="titleDiv"> <span className={'filters'}>FILTERS:</span>
                    { filtersArray.length }
                    {
                        filtersArray.map((x) => {
                            return <span className={'title'}>{x}</span>
                        })
                    }
                </div>
                {
                    filtersURLArray.map((x) => {
                        return <MovieData dataURL={x} genrePack = {genreArray}/>
                    })

                }
            </div>
        </div>
      </>
  );
}

export default App;
