import React, { useState, useEffect } from 'react';
import { useLoaderData, } from 'react-router';
import Apps from './Apps';
import Footer from '../Footer/Footer';
import Emptyapps from '../Emptyapps';
import Loader from '../loader/Loader';

const AllApps = () => {
  const alldata = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(alldata);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);

    const delay = setTimeout(() => {
      const normalizedSearch = searchTerm.replace(/\s+/g, '').toLowerCase();

      const filtered = alldata.filter(app => {
        const title = app.title.replace(/\s+/g, '').toLowerCase();
        const company = app.companyName.replace(/\s+/g, '').toLowerCase();
        return title.includes(normalizedSearch) || company.includes(normalizedSearch);
      });

      setFilteredApps(filtered);
      setLoading(false);
    }, 200);

    return () => clearTimeout(delay);
  }, [searchTerm, alldata]);

  return (
    <div className='bg-gray-200 p-4 text-center min-h-screen'>
      <h1 className='text-2xl font-semibold'>Our All Applications</h1>
      <p className='text-xs'>Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className='flex flex-col md:flex-row justify-between items-center py-4'>
        <h1>({filteredApps.length}) Apps Found</h1>

        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className='grid grid-cols-1 bg-gray-200 md:grid-cols-4 p-4 gap-2'>
          {
            filteredApps.length > 0 ? (
              filteredApps.map(app => (
                <Apps key={app.id} app={app} />
              ))
            ) : (
              <div className='h-full w-full md:w-[1200px] mx-auto'>
                <Emptyapps />
              </div>
            )
          }
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AllApps;
