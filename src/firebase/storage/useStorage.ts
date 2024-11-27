/*// Get the imports
import {getDownloadURL, getStorage, ref as stRef, uploadBytesResumable} from 'firebase/storage';

import { storage, scopesStorage, ocrStorage} from "../init/initFirebase";
import getUser from "./getUser";
import {ref} from "vue";

const { user } = getUser();*/

/*const useStorage = () => {
    const error = ref<string | null>(null);
    // Ref for the public URL that FB sends back after successfully adding
    const fileUrl = ref<string | null>(null);
    // Ref for FB Storage path (e.g., covers/{userId}/{fileName})
    const filePath = ref<string | null>(null);

    // ==== Create a function that will upload an image
    async function uploadImage(file: File) {
        // Q: What args will it have?
        // A: The coverImageFile ref from CreatePlaylist.vue

        // Specify where in Storage do we want to save the file
        // Update the filePath.value from passed file properties
        // NOTE Get current user via getUser() composable
        filePath.value = `covers/${user.value?.uid}/${file.name}`;

        // Create a Ref to this Storage using our filePath
        const storageRef = stRef(storage, filePath.value);

        // Upload file to storageRef using await put()
        // Use a try/catch in case of an error
        try {
            const response = await uploadBytesResumable(storageRef, file);
            // Update fileUrl from the response object
            fileUrl.value = await response..getDownloadURL();
        } catch (err) {
            console.log(err.message);
            // Update error.value
            error.value = err.message;
        }
    }

    // ==== Create a function to delete image file
    async function deleteImage(path: string) {
        // Create a storageRef so we can work with Storage
        const storageRef = storage.ref(path);

        try {
            // Delete the object/file using storageRef.delete()
            await storageRef.delete();
            console.log("SUCCESS:useStorage:deleteImage");
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { fileUrl, filePath, error, uploadImage, deleteImage };
}

export default useStorage;*/
