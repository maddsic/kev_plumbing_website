import HeaderTop from './headerTop';
import MainNav from './mainNav';

const Header = ({ logoData }: { logoData: any }) => {
  return (
    <header id="home" className="sticky top-0 z-50">
      <HeaderTop logoData={logoData} />
      <MainNav />
    </header>
  );
};

export default Header;
