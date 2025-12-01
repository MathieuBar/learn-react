import ReactDOM from 'react-dom/client';

function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function handleImgOvering() {
    console.log("image was hovered")
  }

  /**
   * Challenge: add our new function to the button
   */

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button
        onClick={handleClick}
        onMouseOver={handleImgOvering}>
        Click me
      </button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);