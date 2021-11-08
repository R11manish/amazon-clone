import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch(addToBasket);

  // pushing items into redux store
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  // remove item from basket
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' />
      {/* middle section contains proiduct details */}
      <div className='col-span-3 mx-5'>
        <p className='font-medium'>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <p className='font-bold'>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'USD',
          }).format(price)}
        </p>
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src='/images/prime-tag.png'
              alt=''
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove buttons */}
      <div className='flex flex-col space-y-2 my-2 justify-self-end'>
        <button className='button' onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className='button' onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
