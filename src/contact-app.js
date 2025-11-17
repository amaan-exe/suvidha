const { useState, useEffect, useRef } = React;

function Header({ dark, toggle }) {
    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <a href="index.html" className="flex items-center gap-3">
                    <img src="images/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full border-2 border-primary shadow-lg object-cover" loading="lazy"/>
                    <h2 className="text-xl font-bold">Suvidha Travels</h2>
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <a href="index.html" className="hover:text-primary">Home</a>
                    <a href="services.html" className="hover:text-primary">Services</a>
                    <a href="packages.html" className="hover:text-primary">Packages</a>
                    <a href="gallery.html" className="hover:text-primary">Gallery</a>
                    <a href="contact.html" className="hover:text-primary text-primary font-bold">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button onClick={toggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                        <span className="material-symbols-outlined">{dark ? 'light_mode' : 'dark_mode'}</span>
                    </button>
                    <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services.%20Could%20you%20please%20share%20some%20details?" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 inline-block">Plan Trip</a>
                </div>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in visible">Contact Us</h1>
                <p className="text-lg md:text-xl fade-in visible">We're here to help with all your travel needs</p>
            </div>
        </section>
    );
}

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = `Hi! I'd like to inquire about a trip.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/+919304010727?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
            setSubmitted(false);
        }, 2000);
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="fade-in visible">
                        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                        
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl mt-1">location_on</span>
                                    <div>
                                        <h3 className="font-bold mb-2 text-lg">Our Office</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Suvidha Travels<br />
                                            5TH FLOOR, 512, JAGAT TRADE CENTRE<br />
                                            FRAZER ROAD, PATNA<br />
                                            BIHAR - 800001, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl mt-1">call</span>
                                    <div>
                                        <h3 className="font-bold mb-2 text-lg">Phone</h3>
                                        <a href="https://wa.me/+919304010727" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg font-semibold">
                                            +91 93040 10727
                                        </a>
                                        <p className="text-gray-600 dark:text-gray-400">Available 24/7</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl mt-1">mail</span>
                                    <div>
                                        <h3 className="font-bold mb-2 text-lg">Email</h3>
                                        <a href="mailto:suvidhatour@gmail.com" className="text-primary hover:underline text-lg font-semibold">
                                            suvidhatour@gmail.com
                                        </a>
                                        <p className="text-gray-600 dark:text-gray-400">We'll reply within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl mt-1">schedule</span>
                                    <div>
                                        <h3 className="font-bold mb-2 text-lg">Business Hours</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 4:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="map-container bg-gray-200 mt-8">
                            <iframe
                                title="Suvidha Travels Location Map - Patna, Bihar"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2906364133873!2d85.1369320509922!3d25.611394492553675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585ca49ba17b%3A0x7fea4825391451c7!2sSuvidha%20Tour%20And%20Travels!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="fade-in visible">
                        <h2 className="text-3xl font-bold mb-8">Send Us An Enquiry</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6 bg-background-light dark:bg-gray-800 p-8 rounded-lg">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Destination Interest *</label>
                                <select
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                                >
                                    <option value="">Select a destination</option>
                                    <option value="Kashmir">Kashmir</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Bali">Bali</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Custom">Custom Destination</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary resize-none"
                                    placeholder="Tell us about your travel plans..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
                            >
                                {submitted ? '✓ Redirecting to WhatsApp...' : 'Send Enquiry via WhatsApp'}
                            </button>

                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                Your information will be sent directly to our WhatsApp for quick response.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="footer-top">
                    <div>
                        <h4 className="font-semibold uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="index.html" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="services.html" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="packages.html" className="hover:text-white transition-colors">Packages</a></li>
                            <li><a href="gallery.html" className="hover:text-white transition-colors">Gallery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="services.html" className="hover:text-white transition-colors">Taxi Services</a></li>
                            <li><a href="services.html" className="hover:text-white transition-colors">Visa Assistance</a></li>
                            <li><a href="services.html" className="hover:text-white transition-colors">Cab Rentals</a></li>
                            <li><a href="packages.html" className="hover:text-white transition-colors">Tour Packages</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>📍 Patna, Bihar - 800001</li>
                            <li>📞 +91 93040 10727</li>
                            <li>📧 suvidhatour@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-sm text-gray-500">© 2024 Suvidha Travels. All Rights Reserved.</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function BackToTop() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`fixed bottom-8 right-8 z-50 bg-primary text-white p-3 rounded-full shadow-lg transition-all ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <span className="material-symbols-outlined">arrow_upward</span>
        </button>
    );
}

function App() {
    const [dark, setDark] = useState(false);
    const bar = useRef(null);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggle = () => {
        setDark(!dark);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', dark ? 'light' : 'dark');
    };

    useEffect(() => {
        let ticking = false;
        const handle = () => {
            if (!ticking && bar.current) {
                ticking = true;
                requestAnimationFrame(() => {
                    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                    bar.current.style.width = Math.min(scrollPercent, 100) + '%';
                    ticking = false;
                });
            }
        };
        window.addEventListener('scroll', handle, { passive: true });
        return () => window.removeEventListener('scroll', handle);
    }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (e) => e.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.classList.add('visible');
                    obs.unobserve(en.target);
                }
            }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.fade-in:not(.visible), .lazy-load:not(.visible)').forEach(el => obs.observe(el));
    }, []);

    return (
        <div className="relative">
            <div ref={bar} id="scrollBar"></div>
            <Header dark={dark} toggle={toggle} />
            <main role="main" aria-label="Main content">
                <Hero />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
