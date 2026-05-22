import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMailBulk, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const form = useRef();
    const sendMessages = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_API_EMAIL_SERVICE_ID,
            import.meta.env.VITE_API_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_API_EMAIL_KEY
        )
            .then(() => {
                alert("Message sent");
            })
            .catch((error) => {
                alert("Failed to send message");
                console.log(error.text);
            });
    };
    return (
        <div className="bg-gradient-to-t md:bg-gradient-to-r from-gray-900 to-blue-800 text-white mt-6 py-6 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row justify-between mx-auto">
                <div className="w-full md:w-2/5 px-4">
                    <h2 className="text-4xl text-center md:text-start font-bold mb-4">
                        Contact
                    </h2>
                    <p className="mb-10">
                        Email, contact, or complete the form to learn Movieapp can reach you to solve your problem.
                    </p>
                    <div className="flex md:flex-col flex-wrap justify-around">
                        <p className="text-justify mb-10">
                            <a href="mailto:dehyaeev@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> dehyaeev@gmail.com</a>
                        </p>
                        <p className="text-justify mb-10">
                            <a href="https://instagram.com/eevyx00"><FontAwesomeIcon icon={faInstagram} /> eevyx00</a>
                        </p>
                        <p className="text-justify mb-10">
                            <a href="https://tiktok.com/@eevyx43"><FontAwesomeIcon icon={faTiktok} /> eevyx34</a>
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendMessages} className="w-full md:w-3/5 space-y-2 px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Let's get in touch
                    </h2>
                    <p className="text-center mb-4">
                        Have questions or feedback? Send a message.
                    </p>
                    <div>
                        <label className="block mb-2 text-sm">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Your name"
                            className="w-full p-3 rounded-lg bg-gray-600 border border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="Your email"
                            className="w-full p-3 rounded-lg bg-gray-600 border border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full p-3 rounded-lg bg-gray-600 border border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/30">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact