import React, {useState} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Grid, Row, Col } from 'rsuite';

const mapStyles = {
    width: '100%',
    height: '100%'
};

const ServicemenMaps = (props) => {
    const [state, setState] = useState({
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}
    })

    const onMarkerClick = (props, marker, e) =>
        setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    const onClose = props => {
        if (state.showingInfoWindow) {
            setState({
                ...state,
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    return (
                        <Map
                            google={props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={
                                {
                                    lat: -1.2884,
                                    lng: 36.8233
                                }
                            }
                        >
                            <Marker
                                onClick={onMarkerClick}
                                name={'Kenyatta International Convention Centre'}
                            />
                            <InfoWindow
                                marker={state.activeMarker}
                                visible={state.showingInfoWindow}
                                onClose={onClose}
                            >
                                <div>
                                    <h4>{state.selectedPlace.name}</h4>
                                </div>
                            </InfoWindow>
                        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDZtDix3SDUmjN4-qTYjKB_kAOf3vbKKwk'
})(ServicemenMaps);