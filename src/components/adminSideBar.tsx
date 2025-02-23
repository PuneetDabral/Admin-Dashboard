import { Link, useLocation } from 'react-router-dom';
import { RiDashboard2Fill, RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

const AdminSideBar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li style={{ backgroundColor: location.pathname === '/admin/dashboard' ? 'rgba(0,115,255,0.1)' : 'white' }}>
            <Link to={'/admin/dashboard'}>
              <RiDashboard2Fill />
              Dashboard
            </Link>
          </li>
          <li style={{ backgroundColor: location.pathname === '/admin/product' ? 'rgba(0,115,255,0.1)' : 'white' }}>
            <Link to={'/admin/product'}>
              <RiShoppingBag3Fill />
              Product
            </Link>
          </li>
          <li style={{ backgroundColor: location.pathname === '/admin/customer' ? 'rgba(0,115,255,0.1)' : 'white' }}>
            <Link to={'/admin/customer'}>
              <IoIosPeople />
              Customer
            </Link>
          </li>
          <li style={{ backgroundColor: location.pathname === '/admin/transaction' ? 'rgba(0,115,255,0.1)' : 'white' }}>
            <Link to={'/admin/transaction'}>
              <AiFillFileText />
              Transaction
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSideBar;