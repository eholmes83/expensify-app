import React from 'react'

const PortolioItem = (props) => (
    <div>
        <h1>A Think I've done</h1>
        <p>Looking at item {props.match.params.id}</p>
    </div>
)

export default PortolioItem