import { Link } from 'react-router-dom';
import Username from '../user/Username';
import Button from '../../ui/Button';

function CartOverview() {
  return (
    <div
      className="flex items-center justify-between
     bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Button to="/cart" type="small">
        Open cart &rarr;
      </Button>
    </div>
  );
}

export default CartOverview;
