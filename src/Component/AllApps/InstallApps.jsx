import React, { useEffect, useState } from 'react';
import Installed from './Installed';
import Footer from '../Footer/Footer';

const InstallApps = () => {
  const [installed, setInstalled] = useState([]);
  const [shortorder, setShortorder] = useState("none");

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("installlist") || "[]");
    setInstalled(datas);
  }, []);

  const selectitem = () => {
    if (shortorder === "rating-asc") {
      return [...installed].sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (shortorder === "rating-desc") {
      return [...installed].sort((a, b) => b.ratingAvg - a.ratingAvg);
    }
    return installed;
  };

  return (
    <>
      <div className="text-center bg-gray-200 min-h-screen">
        <h1 className="text-3xl font-semibold p-2 md:pt-8">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>

        <div className="flex flex-row md:justify-between pt-2 md:pt-20 p-2 md:p-12">
          <h1 className="pl-2 md:pl-20">({installed.length}) Apps Found</h1>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={shortorder}
              onChange={e => setShortorder(e.target.value)}
            >
              <option value="none">Sorted by</option>
              <option value="rating-asc">Rating — Low to High</option>
              <option value="rating-desc">Rating — High to Low</option>
            </select>
          </label>
        </div>

        <div className="space-y-2">
          {selectitem().map((apps) => (
            <Installed
              key={apps.id}
              apps={apps}
              onRemove={(id) => {
                setInstalled(prev => prev.filter(app => app.id !== id));
              }}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InstallApps;
