import {takeLatest, put, call, all} from 'redux-saga/effects'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.action";

import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotDocsToMap, firestore} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync(){
    try{

        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotDocsToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}