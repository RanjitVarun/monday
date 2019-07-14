import * as actionTypes from '../actions/actionTypes';

export default (state = [{
  id: 1,
name: "Spider-Man far from home",
rating: "4",
   Director: "John Watts(DIR)",
Lead: "Tom holland(Lead)",
Cinematography: "Matt Lloyd(DOP)",
image:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/spider-man-far-from-home-posters-2.jpeg",
Descp:"Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and the twenty-third film in the Marvel Cinematic Universe (MCU). The film is directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, J. B. Smoove, Jacob Batalon, Martin Starr, Marisa Tomei, and Jake Gyllenhaal. In Spider-Man: Far From Home, Parker is recruited by Nick Fury and Mysterio to face elemental threats from another dimension while he is on a school trip to Europe. "
},
{
id: 2,
name: "Pursuit of Happiness",
rating: "3",
   Director: "Gabriele Muccino(DIR)",
Lead: "Will smith(Lead)",
Cinematography: "Stanely(DOP)",
image:"https://images-na.ssl-images-amazon.com/images/I/41AoisVN16L.jpg",
Descp:"The Pursuit of Happyness is a 2006 American biographical drama film based on entrepreneur Chris Gardner's nearly one-year struggle being homeless. Directed by Gabriele Muccino, the film features Will Smith as Gardner, a homeless salesman. Smith's son Jaden Smith co-stars, making his film debut as Gardner's son, Christopher Jr. The screenplay by Steven Conrad is based on the best-selling memoir of the same name written by Gardner with Quincy Troupe. The film was released on December 15, 2006 by Columbia Pictures. For his performance, Smith was nominated for an Academy Award and a Golden Globe for Best Actor"

},
{
id: 3,
name: "The Adventures of Tintin: The Secret of the Unicorn",
rating: "4",

   Director: "Steven Speilberg(DIR)",
Lead: "Jamie bell(Lead)",
Cinematography: "Janusz Kamiński(DOP)",
image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Adventures_of_Tintin_-_Secret_of_the_Unicorn.jpg/220px-The_Adventures_of_Tintin_-_Secret_of_the_Unicorn.jpg",
Descp:"The Adventures of Tintin (also known as The Adventures of Tintin: The Secret of the Unicorn[5]) is a 2011 3D motion capture computer-animated action-adventure film based on the comic book series of the same name by Belgian cartoonist Hergé. Produced and directed by Steven Spielberg, co-produced by Peter Jackson and Kathleen Kennedy and written by Steven Moffat, Edgar Wright and Joe Cornish, the film is inspired by three of Hergé's albums: The Crab with the Golden Claws (1941), The Secret of the Unicorn (1943) and Red Rackham's Treasure (1944).[6] Starring the voices of Jamie Bell, Andy Serkis, Daniel Craig, Nick Frost and Simon Pegg, the film is intended to be the first installment in a planned The Adventures of Tintin trilogy"

},
   {
id: 4,
name: "Schindlers list",
rating: "4",

   Director: "Steven Speilberg(DIR)",
Lead: "Liam Neeson(Lead)",
Cinematography: "Janusz Kamiński(DOP)",
 Oscar:"Won",
 image:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
 Descp:"Schindler's List is a 1993 American epic historical period drama film directed and co-produced by Steven Spielberg and written by Steven Zaillian. It is based on the novel Schindler's Ark by Australian novelist Thomas Keneally. The film follows Oskar Schindler, a Sudeten German businessman, who saved the lives of more than a thousand mostly Polish-Jewish refugees from the Holocaust by employing them in his factories during World War II. It stars Liam Neeson as Schindler, Ralph Fiennes as SS officer Amon Göth, and Ben Kingsley as Schindler's Jewish accountant Itzhak Stern."


},
{
id: 5,
name: "Argo",
rating: "5",

   Director: "Ben Affleck(DIR)",
Lead: "Ben Affleck(Lead)",
Cinematography: "Rodrigo Prieto(DOP)",
Oscar:"Won",
image:"http://cafmp.com/wp-content/uploads/2012/12/Argo-Extended-Edition.jpg",
Descp:"Argo is a 2012 American historical drama film directed by Ben Affleck. Screenwriter Chris Terrio adapted the screenplay from the book by the U.S. Central Intelligence Agency operative Tony Mendez, The Master of Disguise, and the 2007 Wired article by Joshuah Bearman" 


},{
id: 6,
name: "Den of Thieves",
rating: "3",

   Director: "Ben Affleck(DIR)",
Lead: "Gerald Butler(Lead)",
Cinematography: "Rodrigo Prieto(DOP)",
image:"https://images-na.ssl-images-amazon.com/images/I/91MrWQiKhhL._SY679_.jpg",
Descp:"Den of Thieves (released in some countries as Criminal Squad) is a 2018 American heist action thriller film[1][3] written, directed, and produced by Christian Gudegast and starring Gerard Butler, Curtis 50 Cent Jackson, Pablo Schreiber, O'Shea Jackson Jr., Evan Jones, Dawn Olivieri, Mo McRae, and Max Holloway. In the film, an elite group of County Sheriff Deputies look to stop a gang of thieves planning to rob the Federal Reserve in Los Angeles "



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