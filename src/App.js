
import { useState, useEffect } from 'react';
import axios from 'axios';
import PieceOfArt from './PieceOfArt.js';
import './App.css';

function App() {

  const [art, setArt] = useState([]);

  useEffect( () => {
    axios({
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        key: `niueD5uk`,
        imgonly: true
      }
    })
      .then( (response) => {
        // console.log(response.data.artObjects);
        setArt(response.data.artObjects);
      });
  }, []);

  return (
    <div className="App">
      <h1>art again</h1>

      {
        art.map( (individualPiece) => {
          return(
            <PieceOfArt 
              key={individualPiece.id}
              image={individualPiece.webImage.url}
              title={individualPiece.longTitle}
            />
          )
        })
      }

      {
        // art.map( (individualPiece) => {
        //   return(
        //     <img key={individualPiece.id} src={individualPiece.webImage.url} alt={individualPiece.longTitle}/>
        //   )
        // })
      }
    </div>
  );
}

export default App;
