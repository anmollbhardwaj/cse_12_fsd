// console.log("hiiii")

const container=document.getElementById('container');

const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React JS');
// const h1=React.createElement('h1',{},"Working on React DOM");
// const img=React.createElement('img',{src:'',style:{height:'200', width:'200'}});
//const h11=<h1>Hello Using Babel </h1>;

// const div=React.createElement('div',{},img,h1,h2,h11);

const h1=<h1>Welcome to React</h1>;
const img=<img src='' height={} width={}></img>;
// const div=[h1,img];
const div=<div>{h1}{img}</div>;
const h3=<h3>Resume Builder </h3>
const div1=
    <>
    <div style={{border:'2px solid red', height:'300', width:'400'}}>
    {h3}
    {div}
    </div>
    </>


root.render(div1);