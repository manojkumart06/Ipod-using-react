import React from "react";
import "./component-style/artist.css";

class Artists extends React.Component {
  render() {
    return (
      // artist full container
      <div className="artist-container">
        {/* title bar div */}
        <div className="title-bar">
          <p className="titleBar-p">iPod</p>
        </div>

        {/* artist information div */}
        <div className="artist-info">
          <img
            className="artist-image"
            src="https://pbs.twimg.com/profile_images/1727703655514595328/xmNR2I1p_400x400.jpg"
            alt=""
          ></img>
          <h4>Anirudh Ravichander</h4>
        </div>
        <div className="artist-info">
          <img
            className="artist-image"
            src="https://wallpapers.com/images/hd/the-weeknd-digital-art-fo4wstrsbepkxabv.jpg"
            alt=""
          ></img>
          <h4>The Weeknd</h4>
        </div>
        
      </div>
    );
  }
}

export default Artists;
