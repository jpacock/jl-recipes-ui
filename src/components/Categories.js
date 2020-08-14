import React from 'react';
import { Link } from 'react-router-dom';
import { Flex} from 'rebass';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: ['Appetizers', 'Cocktails', 'Mains',]
    };
  }

  render() {
    const categoryItems = this.state.categories.map(category => (
      <Link key={category}
        to={{ pathname: `/recipes/categories/${category.toLowerCase()}` }}>
        <Flex
          width="100%"
          bg='white'
          color='#eeeeee'
          textAlign="center"
          color="darkgray"
          minHeight='80px'
          verticalAlign='middle'
          justifyContent='center'
          alignItems='center'>
          {category}
        </Flex>
      </Link>
    ));

    return (
      <Flex
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
