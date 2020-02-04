import React from 'react';

import CollectionsOverviewContainer from "../../components/collections_overview/collections_overview.container";

import {Route} from 'react-router-dom';
import './shop.styles.scss'
import CollectionsContainer from "../collection/collection.container";

import {connect} from "react-redux";

import {fetchCollectionsStart} from "../../redux/shop/shop.action";



class ShopPage extends React.Component {
    state ={
        loading : true
    };

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();

        /*OBSERVABLE PATTERN*/
        // collectionRef.onSnapshot(  snapshot =>
        //      {
        //          const collectionsMap = convertCollectionsSnapshotDocsToMap(snapshot);
        //          updateCollection(collectionsMap);
        //          this.setState({loading :false})
        //
        //      }
        // );

    }

    render() {
        const {match} = this.props;
        return  (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}/>
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionsContainer}/>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => (
    {
        fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
    }
);


export default connect(null, mapDispatchToProps)(ShopPage);