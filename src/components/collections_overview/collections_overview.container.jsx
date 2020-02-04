import {connect} from 'react-redux';
import WithSpinner from "../with_spinner/with_spinner.component";
import CollectionsOverview from './collections_overview.component';
import {compose} from 'redux';

import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector(
    {isLoading : selectIsCollectionFetching}
);

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;