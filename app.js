window.addEventListener("load", () => {
    const write = document.getElementById('write');
    const read = document.getElementById('read');
    
    write.addEventListener('click', () => {
      console.log('writing to local storage');
      localStorage.setItem('nyckel', 'hejsan!');
    });
    
    read.addEventListener('click', () => {
      console.log('reading from local storage');
      const varde = localStorage.getItem('nyckel');
      const visa = document.getElementById('visa');
      if (visa) {
        visa.innerHTML = visa;
      }
    });    
});
