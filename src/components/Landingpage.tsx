import { FunctionComponent, useContext } from 'react'
import { AirlineAppContext } from '../context/airline-context'
import Header from './Header'
import Actions from './Actions'
import Tiles from './tiles/Tiles'

const Landingpage: FunctionComponent<{}> = () => {
  const { AirlineData } = useContext(AirlineAppContext)

  return (
    <>
      <Header />
      <Actions/>
      <Tiles airlineData={AirlineData}/>
    </>
  )
}
export default Landingpage
