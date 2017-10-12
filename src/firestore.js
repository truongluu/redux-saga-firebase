import { call } from 'redux-saga/effects'

function * getCollection (collectionRef) {
  const collection = this._getCollection(collectionRef)
  return yield call([collection, collection.get])
}

function * getDocument (collectionRef, docRef) {
  const doc = this._getCollection(collectionRef).doc(docRef)
  return yield call([doc, doc.get])
}

export default {
  getCollection,
  getDocument
}