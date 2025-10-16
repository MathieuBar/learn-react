1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
In the DOM element referenced by the variable `root`


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
A react element object, something like : 
`Object { type: "h1", key: null, props: {...} }`

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
There are two parent elements

4. What does it mean for something to be "declarative" instead of "imperative"?
It requires to write expected result rather than actions to obtain expected result.


5. What does it mean for something to be "composable"?
That reusable and independant componants can be created.
