import React from 'react';
import AmazonLogo from '../Amazon_logo.png';
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai';


const NavBar = () => {
  const [search, setSearch] = React.useState("");
  const buttonstyle = {
    color: "white",
    backgroundColor : "inherit",

  }
  return (
    <div className='navbar--container'>
      <button className='navbar--container--button--0'>ECOMMERCE</button>
      <div className='navbar--container--input--0'>
        <select name="Appliances">
          <option value="Mobile">Mobile</option>
          <option value="Tablets">Tablets</option>
          <option value="Computer">Computer</option>
          <option value="HeadPhones">HeadPhones</option>
          <option value="AirPods">AirPods</option>
        </select>
        <input type="text" placeholder='Search Product' onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button className='navbar--container--search--button'><AiOutlineSearch size={25} style={buttonstyle}/></button>
      </div>
      <button>language</button>
      <button><p>Hello, sign in <b>Account & Lists</b></p></button>
      <button>Returns <b>& Orders</b></button>
      <button><AiOutlineShoppingCart size={42}/></button>
    </div>
  )
}

export default NavBar
