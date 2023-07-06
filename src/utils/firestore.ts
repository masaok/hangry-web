import { dbh } from 'config/firebaseConfig'
import { QueryFieldFilterConstraint, collection, getDocs, query, where } from 'firebase/firestore'
import { Document, Draft, ExampleDocument, UserExampleDocument } from 'types/documentTypes'

export const generateWhereClause = (object: Draft) => {
  const clauses: QueryFieldFilterConstraint[] = []
  for (const [key, value] of Object.entries(object)) {
    clauses.push(where(key, '==', value))
  }
  return clauses
}

export const findExistingDocument = async (
  collectionName: string,
  object: Draft
): Promise<Document[]> => {
  const coll = collection(dbh, collectionName)
  const whereClause = generateWhereClause(object)
  const q = query(coll, ...whereClause)
  const snapshot = await getDocs(q) // map does not work on snapshots, only forEach (not sure why?)
  const results: Document[] = []
  snapshot.forEach(doc => {
    results.push({ id: doc.id, ...doc.data() })
  })
  if (results.length > 1) throw new Error(`More than one document found in ${collectionName}.`)
  return results
}
