import flags from "../assets/data/languagesFlags";
import StarsRating from "./starsRating";
import { useState } from "react";

function SeriesCard(props) {

   const element = props.seriesContent;

   const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w200${element.poster_path}`)

   const [hover, setHover] = useState(false)

   return (

      <>
         <div className="film-series-card">
            <div className="card-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
               <div className="card-image">
                  <img src={imgSrc} alt="" onError={() => setImgSrc("img/placeholder-img.jpg")} />
               </div>

               <div className={`overlay ${hover ? "show" : ""}`}>
                  <div className="card-info">
                     <h2>{element.original_name}</h2>
                     <div className="language-info">
                        <span>Lingua:</span>
                        <div className="flag-container">
                           <img src={flags[element.original_language]} alt={element.original_language} />
                        </div>
                     </div>
                     <div className="rating-info">
                        <span>Valutazione media:</span>
                        <StarsRating vote={element.vote_average} />
                     </div>
                     <div className="overview-info">
                        <span>Trama:</span>
                        <div className="overview-text">{element.overview}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>

   )
}

export default SeriesCard