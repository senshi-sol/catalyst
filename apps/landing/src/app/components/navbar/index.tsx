import { useState } from 'react';
import {Button} from '../../../components/ui/button';
import SearchBar from '../Input/SearchBar';
import { Catalyst, SearchIcon, MenuIcon } from '../../../components/assets/index';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6 bg-transparent">
      <div className="flex items-center justify-between">
        <Catalyst />

        <div className="hidden md:block">
          <SearchIcon />
        </div>

        <div className="hidden md:flex space-x-4">
          <Button variant="solid">Articles</Button>
          <Button variant="border">Learn</Button>
          <Button variant="solid">Sign Up!</Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block hamburger"
        >
          {isOpen ? <Cross className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col items-center space-y-4'>
          <Button variant="solid">Docs</Button>
          <Button variant="solid">Articles</Button>
          <Button variant="border">Learn</Button>
          <Button variant="solid">Sign Up!</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
