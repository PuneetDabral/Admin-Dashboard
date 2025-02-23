import { Link, useLocation } from 'react-router-dom';
import { RiDashboard2Fill, RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

interface SidebarItemProps {
  to: string;
  icon: React.ComponentType;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li style={{ backgroundColor: isActive ? 'rgba(0,115,255,0.1)' : 'white' }}>
      <Link to={to} style={{ color: isActive ? 'rgba(0,115,255,1)' : 'black' }}>
        <Icon />
        {label}
      </Link>
    </li>
  );
};

const AdminSideBar: React.FC = () => {
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <SidebarItem to="/admin/dashboard" icon={RiDashboard2Fill} label="Dashboard" />
          <SidebarItem to="/admin/product" icon={RiShoppingBag3Fill} label="Product" />
          <SidebarItem to="/admin/customer" icon={IoIosPeople} label="Customer" />
          <SidebarItem to="/admin/transaction" icon={AiFillFileText} label="Transaction" />
        </ul>
      </div>
    </aside>
  );
};

export default AdminSideBar;