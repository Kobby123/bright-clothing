import React from 'react';

import CollectionsOverview from "../../components/collections_overview/collections_overview.component";

import {Route} from 'react-router-dom';
import './shop.styles.scss'
import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapshotDocsToMap, firestore} from "../../firebase/firebase.utils";
import {updateCollection} from "../../redux/shop/shop.action";
import {connect} from "react-redux";


class ShopPage extends React.Component {

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const {updateCollection} = this.props;
        const collectionRef = firestore.collection('collection');
        // console.log(collectionRef)
        collectionRef.onSnapshot( async snapshot =>
             {
                 const collectionsMap = convertCollectionsSnapshotDocsToMap(snapshot);
                 updateCollection(collectionsMap)

             }
        );


    }

    render() {
        const {match} = this.props;
        return  (
            <div className="shop-page">
                        <Route exact path={`${match.path}`}  component={CollectionsOverview}/>
                        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
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