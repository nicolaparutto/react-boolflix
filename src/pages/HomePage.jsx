import FilmSeriesList from "../components/FilmSeriesList"
import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext";

function HomePage() {

   const { fetchData } = useGlobalContext()

   const [searchedItem, setSearchedItem] = useState(" ");

   function handleChange(e) {
      setSearchedItem(e.target.value)
      /*Probabilmente qui devi scrivere la logica per adattare 
      la stringa e fare in modo che diventi "corretta" 
      al momento del passaggio come query string alla chiamata.*/
   }

   return (
      <>
         <header>
            <div className="navbar">
               logo --- navbar
            </div>
            <div className="searchbar">
               <input name="searchbar" id="searchbar" type="text" value={searchedItem} onChange={handleChange} />
               <button onClick={() => fetchData(searchedItem)}>Cerca</button>
            </div>
         </header>

         <hr />

         <main>
            <FilmSeriesList />
         </main>

         <hr />

         <footer>
            Footer Della Pagina
         </footer>
      </>
   )

}

export default HomePage