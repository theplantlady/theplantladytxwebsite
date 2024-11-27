// Get the imports
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore';
import {firestore} from "../init/initFirebase";



// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(firestore, collectionName) as CollectionReference<T>
}

// Import all your model types
import { Lead } from '../types/Lead';


// export all your collections
export const leadsCol = createCollection<Lead>('leads')
