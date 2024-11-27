

import {doc, setDoc, getDoc, getDocs, onSnapshot, updateDoc} from '@firebase/firestore'
import { leadsCol} from "../useDb";
import {DocumentData} from "firebase/firestore";
import firebase from "firebase/compat";
import UpdateData = firebase.firestore.UpdateData;

export const setLead = async (leadObj) => {
    const leadRef = doc(leadsCol, 'leads');
    await setDoc(leadRef, leadObj);
}

export const getLead = async () => {
    const leadDocRef = doc(leadsCol, 'leads');
    const leadDoc = await getDoc(leadDocRef);
    const leadData = leadDoc.data();
    if (leadData) console.log(leadData);
}

import {doc, updateDoc} from '@firebase/firestore';
import {firestore} from './path-to-firestore-config';
import {leadsCol} from './path-to-create-collection';
import {UpdateData, FieldValue, NestedUpdateFields, DocumentData} from 'firebase/firestore';

// Extract path to a constant
const LEADS_COLLECTION_PATH = 'leads';

type LeadUpdate = {
    [p: string]: DocumentData[string] | FieldValue | undefined;
} & NestedUpdateFields<DocumentData>;

export const getLeadDocRef = () => doc(leadsCol, LEADS_COLLECTION_PATH);

export const updateLead = async (leadUpdate: LeadUpdate | string): Promise<void> => {
    const leadDocRef = getLeadDocRef();
    if (typeof leadUpdate === 'string') {
        throw new Error('Invalid argument: leadUpdate must be of type LeadUpdate, not string');
    }
    await updateDoc(leadDocRef, leadUpdate);
};

export const getLeads = async () => {
    const leadDocs = await getDocs(leadsCol)
    leadDocs.docs.forEach((leadDoc) => {
        const lead = leadDoc.data();
        console.log(lead);
    })
}

export const snapshotLeads = () => {
    return onSnapshot(leadsCol, (snap) => {
        const leads = snap.docs.map(x => x.data());
        const leadNames = leads.map(x => `${x.Name} ${x.Id}`);
        console.log(leadNames);
    })
}


