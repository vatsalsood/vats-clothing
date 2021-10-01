import React from "react";
import { collectionType } from "../../pages/ShopPage/shoppage";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

interface itemsType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionPreview = ({ title, items }: collectionType) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }: any) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
