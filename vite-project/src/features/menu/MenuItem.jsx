/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import RemoveItem from '../cart/RemoveItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const inCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col ">
        <p className="font-medium">{name}</p>
        <p className="text-sm font-light capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-end  justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <div className="flex items-center gap-3 sm:gap-8">
            {inCart && (
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
            )}
            {inCart && <RemoveItem pizzaId={id} />}
            {!soldOut && !inCart && (
              <Button type="small" onClick={handleAddToCart}>
                add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
