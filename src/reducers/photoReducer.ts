import { PhotoActions } from "../actions/photoActionTypes";
import { PhotoModel } from "../models/PhotoModel";

export const photoReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case PhotoActions.CREATE_PHOTO: {
            const photo = action.photo;
            photo.id = `photo-${Date.now()}`

            return [
                ...prevState,
                photo
            ];
        }

        case PhotoActions.EDIT_PHOTO: {
            const updatedPhotos = prevState.map((photo: PhotoModel) => photo.id === action.key ? action.updatedPhoto : photo);
            return [
                ...updatedPhotos
            ];
        }

        case PhotoActions.DELETE_PHOTO: {
            const updatedPhotos = prevState.filter((photo: PhotoModel) => photo.id !== action.key);
            return [
                ...updatedPhotos
            ];
        }
    }
}