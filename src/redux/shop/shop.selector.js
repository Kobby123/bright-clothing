import {createSelector} from 'reselect';


export const selectShop = state=> state.shop;


export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionPreview = createSelector(

    [selectShopCollections],
    collections => Object.keys(collections).map(key=> collections[key])

);

export const selectCollection = collectionUrlParam => (

    createSelector(
        [selectShopCollections],
        (collections)=> collections[collectionUrlParam]
    )
);