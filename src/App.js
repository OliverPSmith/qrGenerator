import React, { useState } from 'react';
import QRCode from 'qrcode';

const App = () => {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width: 800,
      margin: 2,
      color: {
        dark: '#000000ff',
        light: '#ffffffff'
      }
    }, (err, url) => {
      if (err) return console.error(err)

      console.log(err);
      setQrcode(url)
    })
  }

  return (
    <div className='app'>
      <h1>QR Code Generator</h1>
      <input 
        type="text" 
        placeholder='e.g https://www.google.co.uk/'
        value={url}
        onChange={(e => setUrl(e.target.value))}
         />
      <button onClick={GenerateQRCode}>Generate</button>
      { qrcode && 
      <>
        <img src={qrcode} />
        <a href={qrcode} download='qrcode.png'>Download</a>
      </>
       }
    </div>
  )
}

export default App
