1. What do props help us accomplish?
pass values to a component, to make it realy reusable.


2. How do you pass a prop into a component?
through html attribute-like in JSX


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
yes but it will have no effect : custom prop is ignored


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}


5. What data type is `props` when the component receives it?
object