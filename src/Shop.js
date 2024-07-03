import './App.css'
import ArtItems from './components/ArtComponents/ArtItems';
import AllCategories from './components/Filter/AllCategories';
import Cart from './components/Cart/Cart';


function Shop() {
  return (
    <div className="Shop">
      <div className="block">
        <AllCategories/>
        <Cart/>
      </div>
      <div className="block">
        <ArtItems />
      </div>
    </div>
  );
}

export default Shop;