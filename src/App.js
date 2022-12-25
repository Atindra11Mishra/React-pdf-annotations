import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';
import Pdfano from './Pdfano';
function App() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage()
  }

  function changePageNext(){
    changePage()
  }

  return (
    <div className="App">
      <header className="App-header">
        
       <Pdfano></Pdfano>
        
      </header>
      <center>
        <div className='pdf'>
          <Document file="https://arxiv.org/pdf/2212.08011.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center>
      
    </div>
  );
}

export default App;
