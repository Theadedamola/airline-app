import { FunctionComponent } from 'react' // importing FunctionComponent
import logo from '../assets/logo.svg'
const Header: FunctionComponent<{}> = () => {
  return (
    <div className="container flex p-4 mx-auto bg-indigo-100	">
      <div className="branding">
        <img className="w-24 h-8" src={logo} alt="" />
      </div>
    </div>
  )
}

export default Header
