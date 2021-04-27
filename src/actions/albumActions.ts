import { AlbumModel } from '../models/AlbumModel'
import { AlbumActions } from "./albumActionTypes";

export const createAlbum = (album: AlbumModel) => {
    const key = `album-${Date.now()}`;

    return ({
        type: AlbumActions.CREATE_ALBUM,
        album,
        key
    });
}

export const editAlbum = (key: string, updatedAlbum: AlbumModel) => ({
    type: AlbumActions.EDIT_ALBUM,
    updatedAlbum,
    key
})

export const deleteAlbum = (key: string) => ({
    type: AlbumActions.DELETE_ALBUM,
    key
})