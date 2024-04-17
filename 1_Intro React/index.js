/** JAVASCRIPT */
// const heading = document.createElement('h2')
// heading.textContent='Hello World'

// document.getElementById('root').appendChild(heading)
// console.log("Javascript Header",heading)

/** REACT with JS*/
//create Element
// const reactHeading = React.createElement("h1", {className : "head",id:"reactHead", children:"Hello React!"})
// console.log("React Header : ",reactHeading)
// //append Element

//**React with JSX */
const jsxHeading  = <><h1 className="head"> Hello JSX </h1>
<p>This is created with JSX</p>
</>
ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading)