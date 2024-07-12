import AsyncCounter from "./components/AsyncCounter"
import AsyncDataFetcher from "./components/AsyncDataFetcher"
import DataFetcher from "./components/DataFetch"
import DebouncedSearch from "./components/DebouncedSearch"


function App() {

  return (
    <>
      <DataFetcher />
      <AsyncDataFetcher />
      <AsyncCounter />
      <DebouncedSearch />
    </>
  )
}

export default App
