import {defineStore} from 'pinia'
import {addDoc, collection} from "firebase/firestore";
import {firestore} from "@/firebase/init/initFirebase";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
    // a function that returns a fresh state
    state: () => ({
        logo: {
            wide: {
                light: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2Flogo%2FThe%20Plant%20Lady%20Inc.%20(1080%20x%20200%20px).png?alt=media&token=a29ff805-cf9b-4ca6-8e73-d3f6f7313fd6',
                dark: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2Flogo%2FThe%20Plant%20Lady%20Inc.%20(1080%20x%20200%20px)%20-%20dark.png?alt=media&token=13ef9115-6053-4359-baa8-b8d9f7024793'
            },
            square: {
                light: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2Flogo%2FThe%20Plant%20Lady%20Logo%20-%20(500%20x%20400%20px).png?alt=media&token=1ff4dd16-62a4-460d-9ee6-96a42dac8b91',
                dark: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2Flogo%2FThe%20Plant%20Lady%20Logo%20-%20(500%20x%20400%20px)%20-%20dark.png?alt=media&token=2be56338-a692-4f55-9257-dcc62c1b3855'
            }
        },
        open: false,
        lead: {
            Id: '',
            Name: '',
            Type: '',
            Company: '',
            Role: '',
            Phone: '',
            Email: '',
            Addresses: '',
            Method: '',
            Services: '',
            Other: ''
        }
    }),
    // optional getters
    getters: {
        getOpenState: (state) => state.open,
        getLogo: (state) => state.logo,
        getLead: (state) => state.lead,
        getLogoWide: (state) => state.logo.wide,
        getLogoSquare: (state) => state.logo.square,
        getLogoDark: (state) => state.logo.dark,
        getLogoLight: (state) => state.logo.light,
        getLogoDarkSquare: (state) => state.logo.dark.square,
        getLogoDarkWide: (state) => state.logo.dark.wide,
        getLogoLightSquare: (state) => state.logo.light.square,
    },
    // optional actions
    actions: {
        openModal() {
            (this.open = true)
        },
        closeModal() {
            (this.open = false)
        },
        toggleModal() {
            (this.open = !this.open)
        },
        async createLead(lead) {
            const docRef = await addDoc(collection(firestore, "leads"), lead);
            console.log("Document written with ID: ", docRef.id);
            /*            const userRef = doc(firestore, "users", auth.currentUser.uid);*/
            lead.id = docRef.id;
            /*            const userDocRef = await addDoc(collection(userRef, "user_scopes"), scope);
                        console.log("User Document written with ID: ", userDocRef.id);*/
            return docRef.id;
        },
    },
})
