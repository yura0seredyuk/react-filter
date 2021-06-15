import React, { useState, useEffect } from "react";
import "./style.css";

  const products = [
    {country: 'Russia', img: 'link.img', genre: 'Comedy', name: 'Вишнёвый сад'},
    {country: 'France', img: 'link.img', genre: 'Novel', name: 'Oberman'},
    {country: 'Italy', img: 'link.img', genre: 'Adventures', name: 'Il cimitero di Praga'},
    {country: 'USA', img: 'link.img', genre: 'Comedy', name: 'The Ransom of Red Chief'}
  ];

  let newArrFilter = [];

  export default function App() {
    const [filters, setFilters] = useState({country: ['USA', 'Italy', 'France', 'Russia']});

  const [filterdProducts, setFilterdProducts] = useState([]);

  function filter(array = [], filters = {}) {
    const keys = Object.keys(filters).filter(key => filters.hasOwnProperty(key));
    return array.filter(elem => {
        const commonKeys = keys.filter(key => elem.hasOwnProperty(key));
        return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
    });
  }

  const handleClick = (location) => {
    newArrFilter.push(location);
    console.log(newArrFilter);
    setFilters({ country: newArrFilter });
  } 

  useEffect(() => {
     setFilterdProducts(filter(products, filters));
  }, [filters])

  return (
    <div>
      {console.log(filterdProducts)}
      {filterdProducts.map(product => (
        <ul key={product.name}>
          <li>{product.country}</li>
          <li>{product.genre}</li>
          <li>{product.name}</li>
        </ul>
      ))}
      <button onClick={() => handleClick('USA')}>Add USA</button>
      <button onClick={() => handleClick('France')}>Add France</button>
    </div>
  );
}
