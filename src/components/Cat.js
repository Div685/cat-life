import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Css/Cat.css';

const Cat = ({ items }) => (
  <div className="Cat">
    <div className="Cat__data">

      <figure>
        { items.image && (<img src={items.image.url} alt="img" />)}
        <figcaption className="items__data-title">{items.name}</figcaption>
      </figure>
      <p>
        <span className="font-weight-bold">
          Short Legs: &nbsp;
        </span>
        {items.short_legs}
      </p>
      <p>
        <span className="font-weight-bold">
          Affection Level: &nbsp;
        </span>
        {items.affection_level}
      </p>
    </div>
  </div>
);

Cat.propTypes = {
  items: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    name: PropTypes.string,
    short_legs: PropTypes.number,
    affection_level: PropTypes.number,
  }).isRequired,
};

export default Cat;
