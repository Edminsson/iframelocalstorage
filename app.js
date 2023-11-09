window.addEventListener("load", () => {
    const write = document.getElementById('write');
    const read = document.getElementById('read');
    const reset = document.getElementById('reset');
    const sendMessage = document.getElementById('sendMessage');

    window.addEventListener('message', event => {
      if (event.origin !== 'https://rad-choux-97d2d8.netlify.app') {
        console.log('MESSAGE:', event) 
      }
    });
    
    write.addEventListener('click', () => {
      console.log('writing to local storage');
      localStorage.setItem('nyckel', 'hejsan!');
    });
    
    read.addEventListener('click', () => {
      console.log('reading from local storage');
      const varde = localStorage.getItem('nyckel');
      const visa = document.getElementById('visa');
      if (varde) {
        visa.innerHTML = varde;
      } else {
        visa.innerHTML = "<värde saknas>";
      }
    });    

    reset.addEventListener('click', () => {
      console.log('reset local storage');
      localStorage.removeItem('nyckel');
    });    

    sendMessage.addEventListener('click', () => {
      console.log('sendMessage');
      window.postMessage('HELLO from iframelocalstorage');
    });    

  });
