import React from 'react';
import PropTypes from 'prop-types';

const Cat = ({ items }) => (
  <div>
    <div className="item__data">

      <figure>
        { items.image && (<img src={items.image.url} alt="img" />)}
        <figcaption className="items__data-title">{items.name}</figcaption>
      </figure>
      <p>
        {' '}
        Short Legs:
        {' '}
        {items.short_legs}
        {' '}
      </p>
      <p>
        {' '}
        affect Level:
        {' '}
        {items.affection_level}
        {' '}
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
