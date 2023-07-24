import Brand from './Brand';
import NavItem from './NavItem';

export default function Container() {
  return (
    <header className="w-full backdrop-blur flex">
      <div className="container mx-auto">
        <div className="py-4 lg:px-8 lg:mx-0">
          <div className="relative flex items-center">
            <div className="flex-grow">
              <Brand />
            </div>
            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold">
                <ul className="flex space-x-8">
                  <NavItem to="/">home</NavItem>
                  <NavItem to="/blog">blog</NavItem>
                  <NavItem to="/contact">contact</NavItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
