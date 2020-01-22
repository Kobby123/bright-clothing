import React from "react";

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionPreview} from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection_preview/collection_preview.component";

import './collections_overview.styles.scss'


const CollectionsOverview = ({collections}) => (

    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                }
            )
        }

    </div>
);
const mapStateToProps = createStructuredSelector(
    {collections: selectCollectionPreview}
);

export default connect(mapStateToProps)(CollectionsOverview)