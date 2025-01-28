import { useGlobalContext } from "../context/GlobalContext"
import FilmSeriesCard from "./FilmSeriesCard"

function FilmSeriesList() {

   const { filmData } = useGlobalContext()

   return (
      <section>
         <div className="film-container">
            {filmData.map(element => (
               <FilmSeriesCard key={element.id} filmContent={element} />
            ))}
         </div>
      </section>
   )

}

export default FilmSeriesList