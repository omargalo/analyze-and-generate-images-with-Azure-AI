import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyzeImage = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await analyzeImage(imageUrl);
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleAnalyzeImage}>Analyze Image</button>
      {loading && <div>Loading...</div>}
      {result && (
        <div>
          <h2>Image Analysis Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
