import React from 'react';

let e = React.createElement;

export default class TheAvengers extends React.Component {
    render() {

        return(
            <div>
                
                <img 
                    src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" 
                    alt="The Avengers"
                    
                ></img>

                {/* <iframe 
                    width="420" 
                    height="315"
                    src="https://www.youtube.com/watch?v=xBgSfhp5Fxo"
                ></iframe> */}

                <br></br>

                <h10>
                    Rated: PG-13
                </h10>

                <br></br>

                <h10>
                    IMDb: 8/10 
                </h10>

                <br></br>

                <h10>
                    Rotten Tomatoes: 91% 
                </h10>

                <h6>
                    Synopsis: When Thor's evil brother, Loki (Tom Hiddleston),
                    gains access to the unlimited power of the energy cube called the Tesseract,
                    Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D.,
                    initiates a superhero recruitment effort to defeat the unprecedented threat to Earth.
                    Joining Fury's "dream team" are Iron Man (Robert Downey Jr.),
                    Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth),
                    the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).
                </h6>


            </div>
            
        )
    }
}