function dis(){
   let data =  document.getElementById('inp').value;
   document.getElementById("box").innerHTML += `<h1 class="grp">${data}</h1>`;
   document.getElementById('inp').value=''
} 