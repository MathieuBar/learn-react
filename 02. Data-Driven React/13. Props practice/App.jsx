/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

import Joke from "./components/Joke"

export default function App() {
    return (
        <main className="jokes-container">
            <Joke
                setup="C'est un 0 qui rencontre un 8"
                punchline="Tiens tu as mis une ceinture ?"
            />
            <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke
                setup="Quelle est la couleur du cheval blanc d'Henry IV ?"
                punchline="Blanc !"
            />
            <Joke
                setup="Quel bruit fait un gros poussin ?"
                punchline="CUI CUI !"
            />
            <Joke
                punchline="Etre contrôlé par la police c'est plus dangereux que le saut en parachute !"
            />
        </main>
    )
}