function FilmSeriesCard(props) {
   const filmSeriesElement = props.filmContent

   const flags = {
      it: "languages-flags/italian.png",
      en: "languages-flags/english.png"
   }

   return (
      <>
         {filmSeriesElement.map(element => (
            <div className="film-series-card" key={element.id}>
               <div className="card-content">
                  <h1>{element.title}</h1>
                  <h2>{element.original_title}</h2>
                  <p>Language: {element.original_language}</p>
                  <p>Voto Medio: {element.vote_average}</p>
                  <img src={flags[element.original_language]} alt="" />
               </div>
            </div>
         ))}
      </>

   )
}

export default FilmSeriesCard