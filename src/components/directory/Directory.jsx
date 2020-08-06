import React, { Component } from 'react';
import MenuItem from '../menuItems/MenuItem';
import './Directory.scss';

export class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageURL:
            'https://static.cdn.printful.com/static/v773/images/landing/custom-embroidered-hats/design-your-own-hat-mobile.jpg',
          id: '1',
        },
        {
          title: 'jackets',
          imageURL:
            'https://www.peta.org/wp-content/uploads/2018/12/Down-free-featured-image-2-668x336-1573667965.jpg?20191113055925',
          id: '2',
        },
        {
          title: 'sneakers',
          imageURL:
            'https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg',
          id: '3',
        },
        {
          title: 'womens',
          imageURL:
            'https://bidunart.com/wp-content/uploads/2019/12/Portrait064a-1280x640.jpg',
          size: 'large',
          id: '4',
        },
        {
          title: 'mens',
          imageURL:
            'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2018/11/pexels-photo-842811-1024x620.jpeg',
          size: 'large',
          id: '5',
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageURL, id, size }) => (
          <MenuItem key={id} title={title} image={imageURL} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
