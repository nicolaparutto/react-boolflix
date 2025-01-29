import { useGlobalContext } from "../context/GlobalContext"
import FilmCard from "./FilmCard"
import SeriesCard from "./SeriesCard"

function FilmSeriesList() {

   const { filmData, seriesData } = useGlobalContext()

   return (
      <>
         <section>
            <h1>Film</h1>
            <hr />
            <div className="series-film-container">
               {filmData.map(element => (
                  <FilmCard key={element.id} filmContent={element} />
               ))}
            </div>
         </section>
         <br />
         <br />
         <br />
         <br />
         <br />
         <section>
            <h1>Serie TV</h1>
            <hr />
            <div className="series-film-container">
               {seriesData.map(element => (
                  <SeriesCard key={element.id} seriesContent={element} />
               ))}
            </div>
         </section>
      </>
   )

}

export default FilmSeriesList