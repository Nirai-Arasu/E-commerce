/* eslint-disable react/prop-types */
import { formatPrice, range } from '../util';
import FormSelect from './FormSelect';

const CartItem = ({ image, title, color, company, amount, price }) => {
  console.log(color, 'sds');
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
        alt=""
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span style={{ background: color }} className="badge badge-sm"></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <FormSelect
          name="amount"
          label="Amount"
          list={range(1, amount + 5)}
          size="select-xs"
          defaultValue={amount}
        />
        <button className="mt-2 link link-primary link-hover text-sm">
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
