import { useEffect, useState } from 'react'
import './App.css'
import { AirlineAppContext } from './context/airline-context'
import { AirlineData, Api } from './api/airline'
import Landingpage from './components/landingpage'

function App() {
  const [airline, setAirline] = useState<AirlineData[]>([])
 const getAirLineData = async () => {
   const data = await Api.getAll()
   setAirline(data)
 }
  useEffect(() => {
    getAirLineData()
  }, [])

  const applyFilter = () => {}

  return (
    <AirlineAppContext.Provider
      value={{
        AirlineData: airline,
        applyFilter: applyFilter,
      }}
    >
      <Landingpage />
    </AirlineAppContext.Provider>
  )
}

export default App
