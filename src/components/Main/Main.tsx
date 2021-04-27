import React, { useContext } from 'react';
import { PhotoList } from '../Photo';
import AlbumList from '../Album/AlbumList';
import { Route, Switch } from 'react-router';
import { Message } from 'semantic-ui-react';
import { AlbumsContext } from '../../contexts/AlbumsContext';
import { PhotosContext } from '../../contexts/PhotosContext';

const Main = () => {
    const { albums, createAlbum, editAlbum, deleteAlbum } = useContext(AlbumsContext);
    const { photos, createPhoto, editPhoto, deletePhoto } = useContext(PhotosContext);

    const albumList = () => <AlbumList
                                albums={albums}
                                photos={photos}
                                deleteAlbum={deleteAlbum}
                                editAlbum={editAlbum}
                                createAlbum={createAlbum}
                            />;

    const photoList = () => <PhotoList
                                photos={photos}
                                deletePhoto={deletePhoto}
                                editPhoto={editPhoto}
                                createPhoto={createPhoto}
                            />;
    
    const error = () => <Message
                            icon="warning circle"
                            header="Ups... Error!"
                            content="Please go back and try again."
                        />;
    return (
        <Switch>
            <Route exact path="/" component={albumList}/>
            <Route path="/albums" render={albumList}/>
            <Route path="/photos" render={photoList}/>
            <Route render={error}/>
        </Switch>
    );
}

export default Main;