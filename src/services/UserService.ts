import { dbh } from 'config/firebaseConfig'
import { collection, query, getDocs, where } from 'firebase/firestore'

import { Service } from './Service'
import { CacheDocument } from 'types/documentTypes'
import { USER_COLLECTION } from 'constants/firestore'

export class UserService extends Service {
  constructor() {
    super(USER_COLLECTION)
  }
}
