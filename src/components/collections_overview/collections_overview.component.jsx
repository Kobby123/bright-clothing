import React from "react";

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
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
    {collections: selectCollectionsForPreview}
);

export default connect(mapStateToProps)(CollectionsOverview)