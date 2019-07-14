import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
    return {
      type: actionTypes.CREATE_NEW_MOVIE,
      contact: contact
    }
}
  


  export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_MOVIE,
        id: id
    }
}

    

