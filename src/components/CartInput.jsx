import { useState } from "react";

function CartInput() {
  const [formData, setFormData] = useState({
    product: "",
    description: "",
    price: "",
    sizes: {
      L: false,
      M: false,
      S: false,
    },
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { id } = e.target;
    setFormData({
      ...formData,
      sizes: {
        L: id === "L" ? true : false,
        M: id === "M" ? true : false,
        S: id === "S" ? true : false,
      },
    });
  };

  const { product, description, price, sizes } = formData;

  return (
    <div>
      <form action="" className="flex justify-evenly m-5 border p-2">
        <input
          type="text"
          id="product"
          placeholder="enter"
          className="border rounded"
          value={product}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="description"
          placeholder="description"
          className="border rounded"
          value={description}
          onChange={handleInputChange}
        />
        <input
          id="price"
          type="number"
          placeholder="price"
          className="border rounded"
          value={price}
          onChange={handleInputChange}
        />
        <div className="w-32 flex justify-evenly">
          <div className="flex flex-col">
            <label htmlFor="">L</label>
            <input
              type="checkbox"
              id="L"
              checked={sizes.L}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">M</label>
            <input
              type="checkbox"
              id="M"
              checked={sizes.M}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">S</label>
            <input
              type="checkbox"
              id="S"
              checked={sizes.S}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-400 px-1 text-white rounded hover:bg-blue-300 active:scale-95"
        >
          Add To Cart
        </button>
      </form>
    </div>
  );
}

export default CartInput;
