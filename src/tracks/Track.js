import React from 'react'
import {Link} from 'react-router-dom';
function Track(props) {
    const {track} = props
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
    <strong>Track : {track.track_name}</strong>
    <strong>Track : {track.album_name}</strong>
                    </p>

                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">View lyrics</Link>
                </div>
            </div>
        </div>
    )
}

export default Track
