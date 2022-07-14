// ReactDOM.render(<h1>Hello there people</h1>, document.getElementById("root"))


/*
// adding from function to render
function DropDownList(){
    return(<ul>
        <li>Invoker</li>
        <li>Dark Seer</li>
        <li>Ember Spirit</li>
        <li>Earth Spirit</li>
    </ul>)
}
ReactDOM.render(<div><DropDownList /></div>, document.getElementById("root"))
*/


/*
// creating element from vanilla js

var tag = document.createElement("h1")
tag.textContent = "Added in imperative way"
tag.className = "header"

var element = document.getElementById("root")
element.appendChild(tag)

*/


/*
// Creating a nav bar

var navbar = (<nav><h1>Dota website</h1>
                    <ul>
                        <li>Invoker</li>
                        <li>Bloodseeker</li>
                        <li>Dark seer</li>
                        <li>PA</li>
                        </ul></nav>)

var header1 = <h1>Header 1</h1>
var header2 = <h1>Header 2</h1>

document.getElementById("root").append(navbar)

*/


// create a React list down

function Header() {
    return (
        <header className = "header">
            <nav className="nav">
                <img src="https://cdn-icons-png.flaticon.com/512/306/306717.png?w=1380" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2021 Sanket development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
