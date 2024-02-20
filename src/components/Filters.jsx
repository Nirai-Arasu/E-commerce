import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData();

  const { category, price, company, search, shipping, sort } = params;

  const sortOptions = ['a-z', 'z-a', 'high', 'low'];
  return (
    <Form className=" bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        label="Search Product"
        type="text"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        name="category"
        label="Select Category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        name="company"
        label="Select Company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        name="order"
        label="Sort By"
        list={sortOptions}
        size="select-sm"
        defaultValue={sort}
      />
      <FormRange name="price" label="Select Price" price={price} />
      <FormCheckbox
        name="shipping"
        label="Free shipping"
        defaultValue={shipping === 'on' ? true : false}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        SEARCH
      </button>
      <Link to="/products" className="btn btn-accent btn-sm text-white">
        RESET
      </Link>
    </Form>
  );
};

export default Filters;
