import { useLoaderData } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const OrderList = () => {
  const { data, meta } = useLoaderData();
  console.log(data, meta);
  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        total orders : {meta.pagination.total}
      </h4>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden md:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                row.attributes;
              return (
                <tr key={row.id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden md:block">
                    {dayjs(createdAt).format('hh:mm a - MMM Do, YYYY')}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
