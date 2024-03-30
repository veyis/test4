'use client';

import { useState, useEffect } from 'react';
import propertiesData from '@/constants/properties'; // Adjust the import path to your properties data file
import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [paginatedProperties, setPaginatedProperties] = useState([]);

  useEffect(() => {
    // Calculate start and end indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // Update state with the properties for the current page
    setPaginatedProperties(propertiesData.slice(startIndex, endIndex));

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setLoading(true);
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {paginatedProperties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={propertiesData.length}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Properties;
