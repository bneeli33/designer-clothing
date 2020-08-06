import React from 'react';
import PreviewItem from '../previewItem/PreviewItem';
import './Preview.scss';

function Preview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <PreviewItem key={id} {...otherItemProps}/>
          ))}
      </div>
    </div>
  );
}

export default Preview;
