// import React, {useEffect, useState} from 'react'
//
// const Servicemen = () => {
//     const [places, setPlaces] = useState([]);
//     const [coordinates, setCoordinates] = useState({});
//     const [bounds, setBounds] = useState(null);
//     const [childClicked, setChildClicked] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
//             setCoordinates({ lat: latitude, lng: longitude });
//         });
//     }, []);
//
//     useEffect(() => {
//         setIsLoading(true)
//         if (bounds) {
//             getPlacesData(type, bounds.sw, bounds.ne)
//                 .then((data) => {
//                     setPlaces(data);
//                     setIsLoading(false);
//                 })
//         }
//     }, [coordinates, bounds, type])
//     return (
//         <div>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_TRAVEL_ADVISOR_KEY}` }}
//                 defaultCenter={coordinates}
//                 center={coordinates}
//                 defaultZoom={14}
//                 margin={[50, 50, 50, 0]}
//                 options={''}
//                 onChange={(e) => {
//                     setCoordinates({ lat: e.center.lat, lng: e.center.lng });
//                     setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
//                 }}
//                 onChildClick={(child) => setChildClicked(child)}
//             >
//                 {places?.map((place, i) => (
//                     <div
//                         className={classes.markerContainer}
//                         lat={Number(place.latitude)}
//                         lng={Number(place.longitude)}
//                         key={i}
//                     >
//                         {!isMobile
//                             ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
//                             : (
//                                 <Paper elevation={3} className={classes.paper}>
//                                     <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
//                                     <img
//                                         className={classes.pointer}
//                                         src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//                                         alt=""
//                                     />
//                                     <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
//                                 </Paper>
//                             )}
//                     </div>
//                 ))}
//             </GoogleMapReact>
//         </div>
//     )
// }
//
// export default Servicemen
