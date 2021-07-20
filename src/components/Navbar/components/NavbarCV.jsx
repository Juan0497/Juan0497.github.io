import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = '../node_modules/pdfjs-dist/build/pdf.worker.js'
import pdfFile from '../../../pdf/juanfernandezcv.pdf'
import arrow from '../../../styles/imgs/iconos/iconobackarrow.png'
import '../../../styles/PortfolioStyles.css'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

const NavbarCV = () => {
  const [file, setFile] = useState(pdfFile)
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="NavbarCV-container d-flex justify-content-center align-item-center">
      <div className="d-flex">
        <div>
          <Link to="/">
            <button className="Cvbtn btn ">
              <img src={arrow} alt={arrow} />
            </button>
          </Link>
        </div>
        <div className="NavbarCV-pdf">
          <button></button>
          <Document file={file} onLoadSucces={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (index) => (
              <Page pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}

export default NavbarCV
