import { useRef } from "react"
import emailjs from "@emailjs/browser"

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
    return(
        <div className="bg-gray-800 text-white py-6 mx-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Contact Us
                </h2>
                <p className="text-gray-400 text-center mb-10">
                    Have questions or feedback? Send us a message.
                </p>

                <form ref={form} onSubmit={sendMessages} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Your name"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="Your email"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
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