import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
// import Appbar from '../Sidebar/Appbar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      {/* <Appbar/> */}
      <div className="page">
        
        <span className="tags top-tags">&lt;body&gt;</span>
        

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout