import * as actionTypes from '../actions/actionTypes';

export default (state = [{
    name: "PVR VR Chennai Anna Nagar",
    address: "PVR Cinemas, 3Rd Floor , VR Mall, Metrozone N",
    showtime: "8.00pm 9.45pm",
    showdate: "MON 15 ",
    
},
{
    name: "Devicineplex",
    address: "48, Anna Salai",
    showtime: "6.00pm 9.45pm",
    showdate: "TUE 16 ",
    
},
{
    name: "PVR Ampa Mall - Nelson Manickam Road",
    address: "1 Nelson Manickam Road, Amijikarai",
    showtime: "8.00pm 9.45pm",
    showdate: "MON 15 ",
    
},
{
    name: "Carnival Cinemas EVP - Chennai",
    address: "08, Survey No 167/4A, 3A, EVP Santhosha Nagar,Chennai - Bangalore National Highway, Chembarambakkam",
    showtime: "6.45pm 9.45pm",
    showdate: "MON 15 ",
    
},
{
    name: "AGS Cinemas T. Nagar",
    address: "No: 24/1, GN Chetty Road, T. Nagar, Opposite Dr. M.G.R. Educational and Research Institute",
    showtime: "6.00pm 9.00pm",
    showdate: "MON 15 ",
    
} ], action) => {
    switch (action.type){
     
      case actionTypes.REMOVE_MOVIE:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    
    }
  };