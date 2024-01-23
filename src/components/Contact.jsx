function Contact() {
    return (
        <div className="contact">
            <h3>Contact</h3>

            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name.."></input>

                <label htmlFor="email">Email Address:</label>
                <input type="text" id="email" name="email" placeholder="Your email.."></input>

                <label htmlFor="message">Message:</label>
                <input type="text" id="message" name="email" placeholder="Your message.."></input>

                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Contact;