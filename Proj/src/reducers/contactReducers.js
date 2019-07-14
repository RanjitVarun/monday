import * as actionTypes from '../actions/actionTypes';

export default (state = [{
  id: 1,
name: "Spider-Man far from home",
rating: "4",
   Director: "John Watts(DIR)",
Lead: "Tom holland(Lead)",
Cinematography: "Matt Lloyd(DOP)",
Descp:"Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and the twenty-third film in the Marvel Cinematic Universe (MCU). The film is directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, J. B. Smoove, Jacob Batalon, Martin Starr, Marisa Tomei, and Jake Gyllenhaal. In Spider-Man: Far From Home, Parker is recruited by Nick Fury and Mysterio to face elemental threats from another dimension while he is on a school trip to Europe. "
},
{
id: 2,
name: "Pursuit of Happiness",
rating: "3",
   Director: "Gabriele Muccino(DIR)",
Lead: "Will smith(Lead)",
Cinematography: "Stanely(DOP)",
Descp:"The Pursuit of Happyness is a 2006 American biographical drama film based on entrepreneur Chris Gardner's nearly one-year struggle being homeless. Directed by Gabriele Muccino, the film features Will Smith as Gardner, a homeless salesman. Smith's son Jaden Smith co-stars, making his film debut as Gardner's son, Christopher Jr. The screenplay by Steven Conrad is based on the best-selling memoir of the same name written by Gardner with Quincy Troupe. The film was released on December 15, 2006 by Columbia Pictures. For his performance, Smith was nominated for an Academy Award and a Golden Globe for Best Actor"

},
{
id: 3,
name: "The Adventures of Tintin: The Secret of the Unicorn",
rating: "4",

   Director: "Steven Speilberg(DIR)",
Lead: "Jamie bell(Lead)",
Cinematography: "Janusz Kamiński(DOP)"


},
   {
id: 4,
name: "Schindlers list",
rating: "4",

   Director: "Steven Speilberg(DIR)",
Lead: "Liam Neeson(Lead)",
Cinematography: "Janusz Kamiński(DOP)",
 Oscar:"Won",


},
{
id: 5,
name: "Argo",
rating: "5",

   Director: "Ben Affleck(DIR)",
Lead: "Ben Affleck(Lead)",
Cinematography: "Rodrigo Prieto(DOP)",
Oscar:"Won"


},{
id: 6,
name: "Den of Thieves",
rating: "3",

   Director: "Ben Affleck(DIR)",
Lead: "Gerald Butler(Lead)",
Cinematography: "Rodrigo Prieto(DOP)"



}], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_MOVIE:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];


      case actionTypes.REMOVE_MOVIE:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    
    }
  };