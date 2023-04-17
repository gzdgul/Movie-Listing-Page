import React from 'react';

function Casts({castList}) {

    let a = `${castList[0]}, ${castList[1]}, ${castList[2]}`
    return (
        <div>
           <p className={'cast'}> Casts: {a}</p>
        </div>
    );
}

export default Casts;