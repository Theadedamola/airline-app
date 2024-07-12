import { FunctionComponent } from 'react'
import { AirlineData } from '../../api/airline'
import TilesItem from './TilesItem'

type TileListProps = {
  airlineData: AirlineData[]
}

const Tiles: FunctionComponent<TileListProps> = ({
  airlineData,
}: TileListProps) => {
  console.log(airlineData)
  return (
    <div className="conatiner w-3/4 py-2 flex-row mx-auto grid grid-cols-4 gap-2">
      {airlineData.map((i: AirlineData) => {
        return <TilesItem data={i} key={i.code} />
      })}
      {airlineData.length === 0 && <span>Loading ...</span>}
    </div>
  )
}

export default Tiles
