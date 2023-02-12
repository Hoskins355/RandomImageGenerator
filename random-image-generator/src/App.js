import React, { useState } from 'react';
import { fetchRandomImage } from './api';

function App() {
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [style, SetStyle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const image = await fetchRandomImage(searchTerm, style);
      setImage(image);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const dropDownOptions = [
    {label: 'text2img', value: 'text2img'},
    {label: 'cute-creature-generator', value: 'cute-creature-generator'},
    {label: 'fantasy-world-generator', value: 'fantasy-world-generator'},
    {label: 'cyberpunk-generator', value: 'cyberpunk-generator'},
    {label: 'old-style-generator', value: 'old-style-generator'},
    {label: 'renaissance-painting-generator', value: 'renaissance-painting-generator'},
    {label: 'abstract-painting-generator', value: 'abstract-painting-generator'},
    {label: 'impressionism-painting-generator', value: 'impressionism-painting-generator'},
    {label: 'surreal-graphics-generator', value: 'surreal-graphics-generator'},
    {label: '3d-objects-generator', value: '3d-objects-generator'},
    {label: 'contemporary-architecture-generator', value: 'contemporary-architecture-generator'},
    {label: 'logo-generator', value: 'logo-generator'}
  ]

   const well = {
    minHeight: '20px',
    padding: '19px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e3e3e3',
    borderRadius: '4px',
    webkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)'
  }


  return (
      <div className="App" >
        {/*<h3 style={{textAlign: 'center'}}>Random Image Generator</h3>*/}
        <div style={well}>
          <form onSubmit={handleSearch}>
            <label htmlFor="styles">Choose a style:</label>
            <select
                style={{marginLeft: '10px', marginRight: '10px'}}
                name="styles"
                id="styles"
                value={style}
                onChange={(e) => SetStyle(e.target.value)}
            >
              {dropDownOptions.map((o, i) => {
                return <option key={i} value={o.value}>{o.label}</option>
              })}
            </select>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button style={{marginLeft: '10px'}} type="submit" disabled={isLoading}>
              Search
            </button>
          </form>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {image && (
            <div style={{textAlign: 'center'}}>
              <h2>{searchTerm}</h2>
              <img src={image.output_url} alt={searchTerm} />
            </div>
        )}
      </div>
  );
}

export default App;
