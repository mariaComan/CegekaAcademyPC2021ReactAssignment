import { AlbumActions } from "../actions/albumActionTypes";
import { AlbumModel } from "../models/AlbumModel";

export const albumReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case AlbumActions.CREATE_ALBUM: {
            const album = action.album;
            album.id = `album-${Date.now()}`

            return [
                ...prevState,
                album
            ];
        }

        case AlbumActions.EDIT_ALBUM: {
            const updatedAlbums = prevState.map((album: AlbumModel) => album.id === action.key ? action.updatedAlbum : album);
            return [
                ...updatedAlbums
            ];
        }

        case AlbumActions.DELETE_ALBUM: {
            const updatedAlbums = prevState.filter((album: AlbumModel) => album.id !== action.key);
            return [
                ...updatedAlbums
            ];
        }
    }
}