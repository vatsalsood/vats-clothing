import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shopData";

interface collectionsType {
  collections: { id: number; title: string; routeName: string; items: [] }[];
}
export interface collectionType {
  id?: number;
  title: string;
  routeName?: string;
  items: [];
}

class ShopPage extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections }: any = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection: collectionType) => (
          <CollectionPreview
            title={collection.title}
            items={collection.items}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
