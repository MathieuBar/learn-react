import Header from "./components/Header"
import Entry from "./components/Entry"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

import data from "./data.js"

export default function App() {
    const entries = data.map(entryData => 
        <Entry
            img={entryData.img}
            title={entryData.title}
            country={entryData.country}
            googleMapsLink={entryData.googleMapsLink}
            dates={entryData.dates}
            text={entryData.text}
        />
    )
    return (
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    )
}