import React, { useState } from 'react';

function Product({ id,name, price, image, descrip, talla,cart,setCart }) {
  const [selectedSize, setSelectedSize] = useState(''); // Estado para la talla seleccionada
  const [selectedPrice, setSelectedPrice] = useState(price); // Estado para el precio seleccionado

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    // Aquí puedes agregar lógica para actualizar el precio según la talla seleccionada
    // Por ejemplo, si tienes un objeto de precios por talla, puedes buscar el precio correspondiente.
    // selectedPrice = preciosPorTalla[event.target.value]
  };

  const handleBuyClick = () => {
    if (selectedSize) {
      // Copiar el contenido actual de cart en un nuevo array y agregar el nuevo producto
      const updatedCart = [...cart, {
        name,
        size: selectedSize,
        price: selectedPrice,
      }];
  
      setCart(updatedCart); // Actualizar el carrito con el nuevo array
  
      alert(`Has agregado "${name}" al carrito con talla ${selectedSize}.`);
      
      // Restablecer los valores originales
      setSelectedSize('');
      setSelectedPrice(price);
    } else {
      alert('Por favor, selecciona una talla.');
    }
  };
  
  
  

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price} MXN</p>
      <p>Descripción: {descrip}</p>
      <label>
        Talla:
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="">Selecciona una talla</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </label>
      <button onClick={handleBuyClick}>Comprar</button>
    </div>
  );
}

export default Product;
