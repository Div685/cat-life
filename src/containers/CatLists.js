import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fetchData from '../api/fetchData';
import Cat from '../components/Cat';

const CatLists = () => {
  const [catList, setCatList] = useState([]);

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCatList(items);
  }, [items]);

  return (
    <div>
      {
          catList && catList.length
            ? catList.map((cat) => (
              <Cat key={cat.id} items={cat} />
            ))
            : <h1>Loading</h1>
        }

    </div>
  );
};

export default CatLists;
