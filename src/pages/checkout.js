import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import { uid } from 'react-uid';
import CheckoutProduct from '../components/CheckoutProduct';

function checkout() {
  const items = useSelector(selectItems);
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='/images/prime-day-banner.png'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0
                ? 'Your Amazon Basket is empty.'
                : 'Shopping Basket'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={uid(item, i)}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
}

export default checkout;
