// src/components/Home.js
import Product from './Product'; // Importa el componente de producto
import './Home.css';
import Navbar from './Navbar'; // Importa el componente Navbar
import React, { useState } from 'react';

function Home() {
 
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Camisa de Algodón Premium',
      price: 499,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F69%2F3a%2F7f%2F693a7f1f7014d3a000fd0254c5e882c7.jpg&f=1&nofb=1&ipt=6097ba21c10b85891c75a103ba1a8fff67ea8fb4dd0950a034a33f1274e13918&ipo=images',
      descrip: 'Camisa de alta calidad hecha de algodón 100%. Suave, transpirable y cómoda para uso diario. Ideal para ocasiones formales e informales.',
      talla: 'S, M, L, XL',
    },
    {
      id: 2,
      name: 'Suéter de Lana Merin',
      price: 799,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F5394052%2Fr%2Fil%2Ffc0278%2F2052872292%2Fil_1588xN.2052872292_gq05.jpg&f=1&nofb=1&ipt=993a0467d3a26ac3d07600c9593f86b3b714f2cd6d6df14fa5781462c4c4c61f&ipo=images',
      descrip: ' Suéter de lana merino de alta calidad. Cálido, suave y elegante. Perfecto para los días fríos de invierno.',
      talla: 'Tallas Disponibles:  XS, S, M, L',
    },
    {
      id: 3,
      name: 'Shorts de Playa de Secado Rápido',
      price: 299,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71qXqyTh2lL._AC_UX679_.jpg&f=1&nofb=1&ipt=77c932bf1b4bf60944adedc893780a9ee91b3c248463c2d4187f6c066233d694&ipo=images',
      descrip: ' Shorts de playa resistentes al agua y de secado rápido. Tejido ligero y cómodo para días soleados en la playa.',
      talla: 'Tallas Disponibles:  M, L, XL',
    },
    {
      id: 4,
      name: 'Blusa de Seda Natural',
      price: 649,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F58%2F26%2F32%2F58263255db3cd82a34b8eb58c047c5b2--cheap-blouses-womens-blouses.jpg&f=1&nofb=1&ipt=823477d8c6dfbcf71d0880403d00585e325abc1dc16351743e1c475fa0d8fdff&ipo=images',
      descrip: ' Blusa de seda natural suave y elegante. Perfecta para ocasiones especiales o para un look sofisticado en el trabajo.',
      talla: 'Tallas Disponibles:  S, M, L',
    },
    {
      id: 5,
      name: 'Traje de Baño de Dos Piezas',
      price: 659,
      image: 'https://www-s.mlo.me/upen/v/2021/202108/20210802/202108021719301845933.jpg',
      descrip: ' Traje de baño de dos piezas con diseño moderno. Fabricado con material resistente al cloro y de secado rápido.',
      talla: 'Tallas Disponibles:  S, M, L',
    },
    {
      id: 6,
      name: 'Sombrero de Paja Tejido a Mano',
      price: 199,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FENTDvTKv6Lk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=c63c4fed9d41c308ae15740864967a89e6ea1320adbb48856f145d751dc65505&ipo=images',
      descrip: ' Sombrero de paja natural tejido a mano. Ligero y transpirable, perfecto para protegerte del sol durante el verano.',
      talla: 'Tallas Disponibles:   Un tamaño (ajustable)',
    },
  ];
  const [cart, setCart] = useState([]);

  return (
    <div className="home">
            <Navbar /> {/* Agrega la barra de navegación */}

      <header>
        
        <h1>Bienvenido a Mi Tienda en Línea</h1>
        <p>Tu destino para las mejores compras en línea.</p>
      </header>
        

   <section className="video-container">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oXug70DPTLY?si=fB5nedExa9OuDyT-&amp;controls=0&amp;start=234" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
      <section className="featured-products">
        {featuredProducts.map((product) => (
          <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          descrip={product.descrip}
          talla={product.talla}
          cart={cart} // Pasa el estado del carrito al componente de producto
          setCart={setCart} // Pasa la función para actualizar el carrito al componente de producto
        />
        ))}
      </section>
      
    </div>
  );
}

export default Home;
