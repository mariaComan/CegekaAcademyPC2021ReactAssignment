import { PhotoModel } from '../models/PhotoModel'
import { PhotoActions } from "./photoActionTypes";

export const createPhoto = (photo: PhotoModel) => {
    const key = `album-${Date.now()}`;

    return ({
        type: PhotoActions.CREATE_PHOTO,
        photo,
        key
    });
}

export const editPhoto = (key: string, updatedPhoto: PhotoModel) => ({
    type: PhotoActions.EDIT_PHOTO,
    updatedPhoto,
    key
})

export const deletePhoto = (key: string) => ({
    type: PhotoActions.DELETE_PHOTO,
    key
})