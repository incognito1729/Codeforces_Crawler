import React from 'react'

function BasicInfo(props) {
    return (
        <div>
            {console.log(props.handle)}
            <h1>{props.handle}</h1>
            <p>{props.rating}</p>
            <p>{props.rank}</p>
        </div>
    )
}

export default BasicInfo;
