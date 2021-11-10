import moment from 'moment';


function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className='relative boder rounded-md'>
      <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm'>
        <div>
          <p className='font-bold text-xs'>ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>
        <div>
          <p className='text-xs font-bold'>TOTAL</p>
          <p>
            <span className='font-bold'>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'USD',
              }).format(amount)}
            </span>
            - Next Day Delivery{' '}
            <span className='font-bold'>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'USD',
              }).format(amountShipping)}
            </span>
          </p>
        </div>
        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
          {items.length} items
        </p>
        <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
          ORDER #{id}
        </p>
      </div>
      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {images.map((image) => (
            <img src={image} alt='' className='h-28 object-contain sm:h-32' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
