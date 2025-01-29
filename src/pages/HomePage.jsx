import FilmSeriesList from "../components/FilmSeriesList"
import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext";

function HomePage() {

   const { fetchData } = useGlobalContext()

   const [searchedItem, setSearchedItem] = useState(" ");

   function handleChange(e) {
      setSearchedItem(e.target.value)
   }

   function handleFormSend(e) {
      e.preventDefault()
   }

   return (
      <>
         <header>
            <div className="header-content">
               <div className="navbar">
                  <div className="logo">
                     <a href="#"><img src="img/logo.png" alt="" /></a>
                  </div>
                  <div className="nav">
                     <nav>
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Serie TV</a></li>
                           <li><a href="#">Film</a></li>
                           <li><a href="#">La mia lista</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="searchbar">
                  <form action="" onSubmit={handleFormSend}>
                     <input name="searchbar" placeholder="Cerca..." id="searchbar" type="text" value={searchedItem} onChange={handleChange} />
                     <button onClick={() => fetchData(searchedItem)}><i className="fa-solid fa-magnifying-glass"></i></button>
                  </form>
               </div>
            </div>
         </header>



         <main>
            <FilmSeriesList />
         </main>



         <footer>

         </footer>
      </>
   )

}

export default HomePage