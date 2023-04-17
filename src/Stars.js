import React from 'react';
import star1 from './assets/images/stars/star1.png'
import star2 from './assets/images/stars/star2.png'
import star3 from './assets/images/stars/star3.png'
import star4 from './assets/images/stars/star4.png'
import star5 from './assets/images/stars/star5.png'

function Stars(props) {
    let randomNumber = Math.floor(Math.random()*4) +1;
    const starObject = {
        1 : star1,
        2 : star2,
        3 : star3,
        4 : star4,
        5 : star5
    }
    return (
        <div>
            <img className={'star'} src={starObject[randomNumber]} alt={'star4'}/>
        </div>
    );
}

export default Stars;