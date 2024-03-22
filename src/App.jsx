import './App.css'
import {InputField,Button} from './components/index.js'
import {useApi} from './hooks/useApi.js'
import { useState } from 'react';




function App() { 

  // const [url, setUrl] = useState('');
  // const [sentnum, setSentnum] = useState(8);

  // const summary = useApi(url, sentnum);

  // const handleUrlChange = (event) => {
  //     setUrl(event.target.value);
  // };

  // const handleSentnumChange = (event) => {
  //     setSentnum(parseInt(event.target.value));
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <InputField />
      <Button onClick={useApi}/>
    </div>

//     <div>
//     <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL" />
//     <input type="number" value={sentnum} onChange={handleSentnumChange} placeholder="Number of sentences" />
//     <div>{summary}</div>
// </div>
  )
}

export default App


