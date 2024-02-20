import { NavLink, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice, range } from '../util';
import { useState } from 'react';

export const loader = async ({ params }) => {
  const id = params.id;
  const url = `products/${id}`;
  const { data } = await customFetch.get(url);
  return data.data;
};
const SingleProduct = () => {
  const data = useLoaderData();
  const { company, description, image, price, title, colors } = data.attributes;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  // eslint-disable-next-line no-unused-vars
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const dollarsAmmount = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="font-bold text-3xl capitalize">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className='mt-3 text-xl"'>{dollarsAmmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="mt-2 flex gap-2">
              {colors.map((color, id) => {
                return (
                  <button
                    key={id}
                    className={`badge w-6 h-6 ${
                      selectedColor === color ? 'border-2 border-secondary' : ''
                    }`}
                    onClick={() => setSelectedColor(color)}
                    style={{ background: color }}></button>
                );
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              name="amount"
              id="amount"
              className="select select-secondary select-bordered select-md"
              onChange={handleAmount}>
              {range(1, 21).map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">ADD TO BAG</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
