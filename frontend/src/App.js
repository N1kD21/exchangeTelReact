import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState({
    path: '',
    files: []
  });

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('tt');
          setData(result);
        },
        (error) => {

        }
      )
  }, []);
  return (
    <div className='file-manager'>
      <ul className='folder-list'>
        {data.files.map(item => {

          if (item.dir) {
            return <li className='folder' key={item.name}>{item.name}</li>
          } else {
            return <li key={item.name} className='file'>{item.name}</li>
          }

        })}
      </ul> 
    </div>
  );
}

export default App;
