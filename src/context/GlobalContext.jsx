import axios from "axios";
import { useState, useContext, createContext } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

   const myApiKey = "b167445376101eff701e058cb616faa9"
   const defaultApiUrl = "https://api.themoviedb.org/3/search"

   const [filmData, setFilmData] = useState([]);
   const [seriesData, setSeriesData] = useState([]);

   const fetchData = (searchedItem) => {
      const searchedItemTranslated = searchedItem.split(" ").join("+");
      //CHIAMATA X I FILM:
      axios.get(`${defaultApiUrl}/movie?api_key=${myApiKey}&language=it&query=${searchedItemTranslated}`)
         .then(res => {
            setFilmData(res.data.results)
         })

      //CHIAMATA X LE SERIE:
      axios.get(`${defaultApiUrl}/tv?api_key=${myApiKey}&query=${searchedItemTranslated}`)
         .then(res => {
            setSeriesData(res.data.results)
         })
   }

   return (
      <GlobalContext.Provider value={{ fetchData, filmData, seriesData }}>
         {children}
      </GlobalContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }
