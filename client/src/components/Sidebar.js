import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import { Navigate } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__element'>
                <h3>Setting</h3>
            </div>
            <div className='sidebar__element'>
            <Link to="/updatePassword">Change Password</Link>
            </div>
            <div className='sidebar__element'>
            <Link to="/updateName">Change Name</Link>
            </div>
        </div>
    );
};
export default Sidebar;