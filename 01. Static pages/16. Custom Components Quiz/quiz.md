1. What is a React component?
A reusable and parametrizable piece of React code.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The component should be named PascalCase, with a capital first letter.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
This is valid code, but the standard way is to render the component as an html tag.
