import {connect} from 'react-redux';
import {compose} from 'redux';

import {selectIsCollectionLoaded} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";
import CollectionPage from './collection.component'

import WithSpinner from "../../components/with_spinner/with_spinner.component";



const mapStateToProps = createStructuredSelector(
    {isLoading: state => !selectIsCollectionLoaded(state)}
);

const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsContainer