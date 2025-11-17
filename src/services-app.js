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
                    <a href="services.html" className="hover:text-primary text-primary font-bold">Services</a>
                    <a href="packages.html" className="hover:text-primary">Packages</a>
                    <a href="gallery.html" className="hover:text-primary">Gallery</a>
                    <a href="contact.html" className="hover:text-primary">Contact</a>
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in visible">Our Services</h1>
                <p className="text-lg md:text-xl fade-in visible">Comprehensive travel solutions tailored to your needs</p>
            </div>
        </section>
    );
}

function Services() {
    const services = [
        {
            icon: "directions_car",
            title: "Taxi Service",
            desc: "Reliable and comfortable taxi services for airport transfers, city tours, and outstation trips. Professional drivers, well-maintained vehicles, and 24/7 availability.",
            features: ["Airport Transfers", "City Tours", "Outstation Trips", "24/7 Service"]
        },
        {
            icon: "public",
            title: "Visa Service",
            desc: "Expert visa assistance for multiple countries. We handle documentation, submission, and follow-up to ensure smooth visa processing.",
            features: ["Document Guidance", "Application Support", "Embassy Coordination", "Fast Processing"]
        },
        {
            icon: "airport_shuttle",
            title: "Cab Rental",
            desc: "Affordable cab rental services for your travel needs. Hourly, daily, or monthly packages available with flexible booking options.",
            features: ["Hourly Rental", "Daily Packages", "Monthly Plans", "Flexible Booking"]
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 fade-in visible">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <div key={i} className="service-card bg-background-light dark:bg-gray-800 rounded-lg p-8 lazy-load visible">
                            <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary text-5xl">{service.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{service.desc}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 w-full px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">Enquire Now</button>
                        </div>
                    ))}
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
                            <li><a href="#" className="hover:text-white transition-colors">Taxi Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Visa Assistance</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cab Rentals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tour Packages</a></li>
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
                <Services />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
