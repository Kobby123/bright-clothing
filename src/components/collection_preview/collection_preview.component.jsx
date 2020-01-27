import React from 'react';
import './collection_preview.styles.scss';
import CollectionItem from "../collection_item/collection_item.component";

import {withRouter} from 'react-router-dom'

const CollectionPreview = ({title, items, history, match}) => {

    return (

        <div className={'collection-preview'}>
            <h1 className={'title'} onClick={()=>history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
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

export default withRouter(CollectionPreview);