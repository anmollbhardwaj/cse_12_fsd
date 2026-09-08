// console.log("hiiii")

const container=document.getElementById('container');

const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React JS');
const h1=React.createElement('h1',{},"Working on React DOM");
const img=React.createElement('img',{src:'',style:{height:'200', width:'200'}});
const div2='<div></div>';

const div=React.createElement('div',{},img,h1,h2,div2);

root.render(div);