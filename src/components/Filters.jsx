import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';
import { useState } from 'react';

const Filters = () => {
  const { meta, params } = useLoaderData();

  const { category, price, company, search, shipping, sort } = params;
  const [isReset, setIsReset] = useState(false);
  const sortOptions = ['a-z', 'z-a', 'high', 'low'];
  return (
    <Form className=" bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        label="Search Product"
        type="text"
        name="search"
        size="input-sm"
        defaultValue={search}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <FormSelect
        name="category"
        label="Select Category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <FormSelect
        name="company"
        label="Select Company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <FormSelect
        name="order"
        label="Sort By"
        list={sortOptions}
        size="select-sm"
        defaultValue={sort}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <FormRange
        name="price"
        label="Select Price"
        price={price}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <FormCheckbox
        name="shipping"
        label="Free shipping"
        defaultValue={shipping === 'on' ? true : false}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        SEARCH
      </button>
      <Link
        to="/products"
        onClick={() => setIsReset(true)}
        className="btn btn-accent btn-sm text-white">
        RESET
      </Link>
    </Form>
  );
};

export default Filters;
