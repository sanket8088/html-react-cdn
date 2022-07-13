// ReactDOM.render(<h1>Hello there people</h1>, document.getElementById("root"))
function DropDownList(){
    return(<ul>
        <li>Invoker</li>
        <li>Dark Seer</li>
        <li>Ember Spirit</li>
        <li>Earth Spirit</li>
    </ul>)
}
ReactDOM.render(<div><DropDownList /></div>, document.getElementById("root"))