import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
    return (
        <ol>
            <li>To work with at my work</li>
            <li>Improve my employability</li>
            <li>Progress on front end dev</li>
        </ol>
    )
}

root.render(
    <Page />
)
