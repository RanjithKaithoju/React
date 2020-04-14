import React from 'react'

export default function User({match}) {
    return (
        <div>
            <h2>Welcome {match.params.username}</h2>
        </div>
    )
}
