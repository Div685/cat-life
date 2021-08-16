import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fetchData from '../api/fetchData';
import Cat from '../components/Cat';
import '../assets/Css/Cat.css';

const CatLists = () => {
  const [catList, setCatList] = useState([]);

  const items = useSelector((state) => state.items.items);

  const heatMap = () => (
    <>
      <div className="photo__details-heatmap">
        <div className="image" />
        <div className="figcaption" />
        <div className="figcaption1" />
      </div>

      <div className="photo__details-heatmap">
        <div className="image" />
        <div className="figcaption" />
        <div className="figcaption1" />
      </div>

      <div className="photo__details-heatmap">
        <div className="image" />
        <div className="figcaption" />
        <div className="figcaption1" />
      </div>
    </>

  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCatList(items);
  }, [items]);

  return (
    <div className="CatList">
      {
          catList && catList.length
            ? catList.map((cat) => (
              <Cat key={cat.id} items={cat} />
            ))
            : (heatMap())
        }

    </div>
  );
};

export default CatLists;
