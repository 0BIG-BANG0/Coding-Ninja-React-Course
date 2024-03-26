/** JAVASCRIPT */
// const heading = document.createElement('h2')
// heading.textContent='Hello World'

// document.getElementById('root').appendChild(heading)
// console.log("Javascript Header",heading)

/** REACT */
//create Element
const reactHeading = React.createElement("h1", {className : "head",id:"reactHead", children:"Hello React!"})
console.log("React Header : ",reactHeading)
//append Element
ReactDOM.createRoot(document.getElementById('root')).render(reactHeading)