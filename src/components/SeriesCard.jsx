import flags from "../assets/data/languagesFlags";

function SeriesCard(props) {
   const element = props.seriesContent;

   return (
      <>
         <div className="film-series-card">
            <div className="card-content">
               <h1>{element.name}</h1>
               <h2>{element.original_name}</h2>
               <p>Language: {element.original_language}</p>
               <p>Voto Medio: {element.vote_average}</p>
               <img src={flags[element.original_language]} alt="" />
               <img src={`https://image.tmdb.org/t/p/w200${element.poster_path}`} alt="" />
            </div>
         </div>
      </>

   )
}

export default SeriesCard