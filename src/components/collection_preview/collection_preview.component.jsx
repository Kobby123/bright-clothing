import React from 'react';
import './collection_preview.styles.scss';
import CollectionItem from "../collection_item/collection_item.component";

const CollectionPreview = ({title, items}) => {

    return (

        <div className={'collection-preview'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => {
                        return <CollectionItem className={'item'} key={item.id} item={item}/>
                    }
                )}
            </div>
        </div>
    )


};

export default CollectionPreview;