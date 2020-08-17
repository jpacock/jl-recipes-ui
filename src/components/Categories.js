import React from 'react';
import { Flex } from 'rebass';

import './Categories.scss';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        'Cocktails',
        'Appetizers',
        'Soups',
        'Mains',
        'Sides/Vegetables',
        "Sauces",
        "Breakfast",
        "Snacks",
        "Desserts",
        "All"
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(category) {
    window.open(`/recipes/categories/${category}`);
  }

  render() {
    const categoryItems = this.state.categories.map(category => (
      <div className="category__list__item" key={category}>
        <a 
          href={`/recipes/categories/${category.toLowerCase()}`}
          style={{ textDecoration: 'none' }}>
        <div className="category__list__item__content"> 
          <div className="category__list__item__vr" /> 
          <div className="category__list__item__label">
            {category}
          </div>
        </div>
        </a>
        <div className="category__list__item__hr" />
      </div>
    ));

    return (
      <Flex
        className="container"
        width="100%"
        flexDirection="column"
        alignItems='center'
        alignContent='center'>
        {categoryItems}
      </Flex>
    )
  }
}

export default Categories;
