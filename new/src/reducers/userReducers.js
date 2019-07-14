import * as actionTypes from '../actions/actionTypes';

export default (state = [{
    name: "ranjit",
    email: "ranjit@gmail.com",
    password: "ran@98",
    gender: "male",
    role: "viewer",
    mobile: "8098562745",
    address: "plot no.51,1st cross extension, Krishna Nagar, Pondicherry "
}, {
    name: "varun",
    email: "varun@gmail.com",
    password: "var@98",
    gender: "male",
    role: "viewer",
    mobile: "8098562745",
    address: "plot no.71,2st cross extension, Krishna Nagar, Pondicherry "
}
    , {
    name: "ram",
    email: "ram@gmail.com",
    password: "ram@98",
    gender: "male",
    role: "viewer",
    mobile: "8098562745",
    address: "plot no.71,2st cross extension, Krishna Nagar, chennai "
}
    , {
    name: "raj",
    email: "raj@gmail.com",
    password: "raj@98",
    gender: "male",
    role: "viewer",
    mobile: "8098562745",
    address: "plot no.71,2st cross extension, Krishna Nagar, kashmir "
}
    , {
    name: "jack",
    email: "jack@gmail.com",
    password: "jack@98",
    gender: "male",
    role: "viewer",
    mobile: "8098562745",
    address: "plot no.71,2st cross extension, Krishna Nagar, Pune "
}], action) => {
    switch (action.type){
     
      case actionTypes.REMOVE_MOVIE:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    
    }
  };