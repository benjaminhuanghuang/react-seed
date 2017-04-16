import React, { Component } from 'react';
import './app.css'

class Profile extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     name: ""
        // }
    }
    render() {
        let artist = {
            name: '', 
            followers: { total: '' },
            images: [{ url: '' }],
            genres:[]
        };
        artist = this.props.artist !== null ? this.props.artist : artist;
        return (<div>
            <img alt="Profile" className="profile-img" src={artist.images[0].url} />
            <div className="profile-info">
                <div className="profile-name"> {artist.name} </div>
                <div className="profile-followers"> {artist.followers.total}  followers</div>
                <div className="profile-genres"> {
                        artist.genres.map((genre, k)=>{
                            genre = genre !== artist.genres[genres.length -1] ? `${genre },`: `${genre}`;
                            return(<span key={k}>{genres}</span>)
                        })
                    }
                </div>
            </div>
        </div>);
    }  
}
export default Profile;
