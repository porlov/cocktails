import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

export interface SidebarProps {
  pages: string[];
}

const Sidebar = ({ pages }: SidebarProps) => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link to={page} className={location.pathname === `/${page}` ? 'active' : ''}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Sidebar };
