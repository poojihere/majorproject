// import { useEffect, useState } from "react";

// function useTextSummarization(url, sentnum) {
//     const [summary, setSummary] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             const options = {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json',
//                     'X-RapidAPI-Key': '8fbd89dd13msh4baea6dea4a877ep18e69djsnbe73215dc59e',
//                     'X-RapidAPI-Host': 'textanalysis-text-summarization.p.rapidapi.com'
//                 },
//                 body: JSON.stringify({
//                     url: url,
//                     text: '',
//                     sentnum: sentnum
//                 })
//             };

//             try {
//                 const response = await fetch('https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer', options);
//                 const result = await response.text();
//                 setSummary(result);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         if (url && sentnum) {
//             fetchData();
//         }
//     }, [url, sentnum]);

//     return summary;
// }

// export default useTextSummarization;


import React from 'react'


function useApi(){
    const formdata = new FormData();
    formdata.append("key", "10896098bec0c09192087b91cb55e654");
formdata.append("txt", "YOUR TEXT HERE ");
formdata.append("sentences", "8");

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));

}


export default useApi