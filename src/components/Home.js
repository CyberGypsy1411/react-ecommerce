
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching data......");
    const fetchProducts = async () => {
      const productsCol = collection(db, 'products');
      const productSnapshot = await getDocs(productsCol);
      setProducts(productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <h2>🛍 Products</h2>
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>{p.price} ₹</p>
          <Link to={`/product/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
