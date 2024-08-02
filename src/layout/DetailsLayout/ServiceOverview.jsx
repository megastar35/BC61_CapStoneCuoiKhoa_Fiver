
const additionalService = [
  '1 concept included',
  'Logo transparency',
  'Vector file',
  'Printable file',
  'Include source file',
];

const ServiceOverview = () => {
  return (
    <div className='border border-gray-400 p-6'>
      {/* Service Title */}
      <div className='flex justify-between items-center'>
        <span className='font-semibold'>Basic</span>
        <span className=''>US$1200</span>
      </div>
      {/* Service subtitle */}
      <div className='text-lg'>
        <span>1 Concept</span>/<span>Logo - Colors - Typography</span>
      </div>
      {/* Delivery time and revisions */}
      <div>
        <span className='text-sm font-bold'>14-day delivery</span>
        <span className='text-sm font-bold'>2 Revisions</span>
      </div>
      {/* Additional service */}
      <div>
        {additionalService.map((service, idx) => {
          return (
            <ul key={idx}>
              <li className='text-gray-400'>{service}</li>
            </ul>
          );
        })}
      </div>
      <button className='bg-black text-white'>Continue</button>
    </div>
  );
};

export default ServiceOverview;
