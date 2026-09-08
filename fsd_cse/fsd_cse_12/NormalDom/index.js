// console.log("Hii....")

const root=document.getElementById('container')
const button=document.getElementById('btn');
console.log(root)

const h2=document.createElement('h2');
h2.innerHTML='Resume Builder';
const loader=document.createElement('h1')
root.appendChild(loader);
const img=document.createElement('img');
function buildResume(){
    try{
    loader.innerHTML='Building...'  
    img.src='';
    img.setAttribute('height',100);
    img.setAttribute('width',100);
    root.appendChild(img);
    h2.style.color='red';
    root.appendChild(h2);
    }catch(e){
        console.log(e)
        loader.innerHTML='Error in building resume' 
    }
    finally{
      root.removeChild(loader);
    }
}
button.addEventListener('click',buildResume);