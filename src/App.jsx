import HomePage from "./pages/HomePage"
import { GlobalProvider } from "./context/GlobalContext"
function App() {

  return (
    <>
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    </>
  )

}

export default App