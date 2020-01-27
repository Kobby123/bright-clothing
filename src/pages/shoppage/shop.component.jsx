import React from 'react';

import CollectionsOverview from "../../components/collections_overview/collections_overview.component";

import {Route} from 'react-router-dom';
import './shop.styles.scss'
import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapshotDocsToMap, firestore} from "../../firebase/firebase.utils";
import {updateCollection} from "../../redux/shop/shop.action";
import {connect} from "react-redux";
import WithSpinner from "../../components/with_spinner/with_spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner     = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state ={
        loading : true
    };

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const {updateCollection} = this.props;
        const collectionRef = firestore.collection('collection');
        // console.log(collectionRef)
        collectionRef.onSnapshot( async snapshot =>
             {
                 const collectionsMap = convertCollectionsSnapshotDocsToMap(snapshot);
                 updateCollection(collectionsMap);
                 this.setState({loading :false})

             }
        );


    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return  (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
                }/>
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props)=> <CollectionsPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => (
    {
        updateCollection : (collectionMap) => dispatch(updateCollection(collectionMap))
    }
);


export default connect(null, mapDispatchToProps)(ShopPage);