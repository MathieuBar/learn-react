export default function ContactCard() {
    return (
        <article className="contact-card">
            <img
                src="./images/fluffykins.png"
                alt="Photo of Fluffykins"
            />
            <h3>Fluffykins</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>(212) 555-2345</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>fluff@me.com</p>
            </div>
        </article>
    )
}