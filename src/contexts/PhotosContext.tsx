import React, { useReducer, useEffect, createContext } from 'react';
import { PhotoModel } from '../models/PhotoModel';
import * as api from "../api";
import { photoReducer } from "../reducers/photoReducer";
import { PhotoActions } from '../actions/photoActionTypes';

let dispacher = {
    createPhoto: (photo: PhotoModel) => {},
    editPhoto: (key: string, updatedPhoto: PhotoModel) => {},
    deletePhoto: (key: string) => {}
};

export const loadState = () => {
    const localPhotos = localStorage.getItem('photos');
    if (localPhotos) {
        return JSON.parse(localPhotos);
    }

    return api.getPhotos();
}

export const PhotosContextProvider: React.FC = ({ children }) => {
    const [photos, dispatch] = useReducer(photoReducer, loadState());

    useEffect(() => {
        localStorage.setItem('photos', JSON.stringify(photos));
    }, [photos]);

    dispacher = {
        createPhoto: (photo: PhotoModel) => {
            dispatch({
                type: PhotoActions.CREATE_PHOTO,
                photo: photo
            })
        },
        editPhoto: (key: string, updatedPhoto: PhotoModel) => {
            dispatch({
                type: PhotoActions.EDIT_PHOTO,
                updatedPhoto: updatedPhoto,
                key: key
            });
        },
        deletePhoto: (key: string) => {
            dispatch({
                type: PhotoActions.DELETE_PHOTO,
                key: key
            });
        }
    };

    const photosContext = {
        photos,
        ...dispacher
    };

    return (
        <PhotosContext.Provider value={photosContext}>
            {children}
        </PhotosContext.Provider>
    )
}

export const PhotosContext = createContext({
    photos: loadState(),
    ...dispacher
})