import React from 'react'
import { Flex } from 'rebass';
import './SlideDrawer.scss'


export default class SlideDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ['Appetizers', 'Cocktails', 'Mains',]
    };
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
      drawerClasses = 'side-drawer open'
    }

    const menuItems = this.state.items.map(item => (
      <div className="item__list__item" key={item}>
        <a 
          href={`/recipes/categories/${item.toLowerCase()}`}
          style={{ textDecoration: 'none' }}>
        <div className="item__list__item__content"> 
          <div className="item__list__item__vr" /> 
          <div className="item__list__item__label">
            {item}
          </div>
        </div>
        </a>
      </div>
    ));

    return (
      <div className={drawerClasses}>
       <Flex
        className="container"
        width="100%"
        flexDirection="column"
        alignItems='center'
        marginTop='20px'
        alignContent='center'>
        {menuItems}
      </Flex>
      </div>
    )
  }

  

  onClick(item) {
    window.open(`/recipes/categories/${item}`);
  }
}