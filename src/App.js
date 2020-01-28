import React, { useState, useCallback, Component, useEffect }  from 'react';
import './App.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from 'axios';
import Loader from 'react-loader-spinner'

function Photos(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [sortedPhotos, setSortedPhotos] = useState([]);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    useEffect(() => {
        // Update the document title using the browser API
        setSortedPhotos(props.photos.sort((a,b) => {
            return a.index > b.index ? 1 : -1;
        }))
    });

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div>
            <Gallery photos={sortedPhotos} direction={"column"}  onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={props.photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

class MediaGallery extends Component {
    // set initial state of elements
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        var _this = this;
        this.serverRequest = axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=ca3783111609d69139840916b7a01ad2&format=json&nojsoncallback=1&user_id=186661056@N03')
                .then(function(result) {
                    result.data.photos.photo.forEach((p, i) => {
                        const img = new Image();
                        img.onload = function(){
                            p.width = this.width;
                            p.height = this.height;
                            _this.setState(oldState => ({
                                ...oldState,
                                items: [...oldState.items, p]
                            }))
                        };
                        p.src = _this.imageURL(p);
                        p.index = i;
                        img.src = p.src;
                    });
                })
    }

    // assemble image URL
    imageURL(item) {
        return 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg'
    }

    // render the app
    render() {
        return this.state.items.length > 0 ? (
            <Photos photos={this.state.items} />
        ) : (<Loader
            type="Grid"
            color="#ED553b"
            className="loader"
            height={"20%"}
            width={"20%"}
            timeout={0} //3 secs
        />);
    }
}

export default MediaGallery;
