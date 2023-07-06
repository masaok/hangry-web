// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { dbh } from 'config/firebaseConfig'
import {
  collection,
  addDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  setDoc,
  where,
  query,
  serverTimestamp,
  FieldValue,
  and,
  deleteDoc,
} from 'firebase/firestore'
import { Document, Draft, UserExampleDraft } from 'types/documentTypes'
import { findExistingDocument, generateWhereClause } from 'utils/firestore'

export abstract class Service {
  protected collection: string

  constructor(collection: string) {
    this.collection = collection
  }

  async create(props: object) {
    const data = { ...props }
    const docRef = await addDoc(collection(dbh, this.collection), data)
    return { id: docRef.id, ...data }
  }

  async createUserDocument(userId: string, object: Draft) {
    const coll = collection(dbh, this.collection)

    const data = {
      created: serverTimestamp(),
      updated: serverTimestamp(),
      ...object,
    }

    // Find the document if it exists
    const results = await findExistingDocument(this.collection, object)

    // If it doesn't exist, create it
    let dataId: string // ID of the document in the collection to be linked to the user
    if (results.length === 0) {
      // Create the document
      const docRef = await addDoc(coll, data)
      dataId = docRef.id
    } else {
      // Else, the document already exists, so just get the existing ID
      dataId = results[0].id
    }

    // Create the linking draft
    const linkingObj: Draft = {
      userId,
    }
    linkingObj[`${this.collection}Id`] = dataId

    // TODO: Refactor this Firestore data creation template
    const linkingData = {
      created: serverTimestamp(),
      updated: serverTimestamp(),
      ...linkingObj,
    }

    const linkingCollection = `user_${this.collection}`
    const linkingResults = await findExistingDocument(linkingCollection, linkingObj)
    if (linkingResults.length === 0) {
      // Insert the linking document
      const linkingColl = collection(dbh, linkingCollection)
      const linkingDocRef = await addDoc(linkingColl, linkingData)
    } else {
      console.warn(
        'CREATE USER DOC > LINKING DOC ALREADY EXISTS: ',
        JSON.stringify(linkingResults[0], null, 2)
      )
    }
  }

  async createWithId(id: string, object: Draft): Promise<Document> {
    console.warn('CREATE WITH ID: ', this.collection)
    const data = { ...object }
    await setDoc(doc(dbh, this.collection, id), data)
    return {
      id,
      ...data,
    }
  }

  async countTests() {
    const coll = collection(dbh, this.collection)
    const snapshot = await getCountFromServer(coll)
    return snapshot.data().count
  }

  async deleteUserDocument(userId: string, dataId: string) {
    const linkingCollection = `user_${this.collection}`
    const linkingId = `${this.collection}Id`

    const coll = collection(dbh, linkingCollection)
    const q = query(coll, and(where('userId', '==', userId), where(linkingId, '==', dataId)))

    const snapshot = await getDocs(q)
    snapshot.forEach(async document => {
      try {
        await deleteDoc(doc(dbh, linkingCollection, document.id))
      } catch (e) {
        console.error('DELETE USER DOC > ERROR: ', e)
      }
    })
  }

  async fetchById(id: string): Promise<Document | undefined> {
    const docRef = doc(dbh, this.collection, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      console.warn('No such document!')
      return undefined
    }
  }

  async fetchAll() {
    const snapshot = await getDocs(collection(dbh, this.collection))
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  }
}
