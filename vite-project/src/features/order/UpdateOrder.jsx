import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';

function UpdateOrder({ order, orderPrice }) {
  const fetcher = useFetcher();
  const priorityPrice = orderPrice * 0.2;

  return (
    <fetcher.Form method="PATCH" className=" text-right">
      <Button type="primary">
        Make Priority ({formatCurrency(Math.floor(priorityPrice))})
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
