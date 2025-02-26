export default function Contact() {
    return (
        <div className="w-screen min-h-screen bg-gray-100 text-gray-900 pt-20">
            <div className="container mx-auto py-10">
                <h2 className="text-3xl font-semibold text-center mb-6 font-playfairDisplay">Contact Us</h2>
                
                {/* Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                    <h3 className="text-2xl font-bold mb-4 font-playfairDisplay">Get in Touch</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded outline-none" required />
                        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded outline-none" required />
                        <textarea placeholder="Your Message" className="w-full p-3 border rounded outline-none" rows="5" required></textarea>
                        <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-400 transition duration-200">Send Message</button>
                    </form>
                </div>
                
                {/* Contact Information */}
                <div className="text-center mt-10">
                    <h3 className="text-2xl font-bold mb-2">Our Contact Details</h3>
                    <p><strong>Phone:</strong> +30 123 456 7890</p>
                    <p><strong>Email:</strong> contact@luxurysuites.gr</p>
                    <p><strong>Address:</strong> 123 Luxury Street, Athens, Greece</p>
                </div>
            </div>
        </div>
    );
}