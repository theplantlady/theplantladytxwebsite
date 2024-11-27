/*
import { onSnapshot } from '@firebase/firestore'
import {scopesCol} from "../useDb";

export const logAllAuthorNamesWhenAnyAuthorChanges = () => {
    return onSnapshot(scopesCol, (snap) => {
        const authors = snap.docs.map(x => x.data())
        const authorNames = authors.map(x => `${x} ${x}`)
        console.log(authorNames)
    })
}*/
