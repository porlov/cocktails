import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import './Layout.scss';

const Layout = () => (
  <>
    <Sidebar pages={['margarita', 'mojito', 'a1', 'kir']} />
    <section className="content">
      <Outlet />
    </section>
  </>
);

export default Layout;
