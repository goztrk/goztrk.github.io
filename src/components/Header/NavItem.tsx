import { Link } from 'react-router-dom';

type Props = {
  to: string;
  children: string;
};
export default function NavItem({ to, children }: Props) {
  return (
    <li>
      <Link to={to} className="group hover:text-cyan-600 transition-colors duration-300 p-3">
        {children}
        <span className="font-monospace group-hover:text-red-700 transition-colors duration-300">()</span>
      </Link>
    </li>
  );
}
