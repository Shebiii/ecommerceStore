import React from 'react'

function Title(props) {
    return (
        <div className="row w-100">
            <div className="col-12 bg-primary text-white"><h1>{ props.name}</h1></div>
        </div>
    )
}

export default Title
