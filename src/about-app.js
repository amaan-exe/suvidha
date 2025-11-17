const { useState, useEffect, useRef } = React;

function Header({ dark, toggle, menuOpen, setMenuOpen }) {
    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <a href="index.html" className="flex items-center gap-3">
                    <img src="images/logo.jpg" alt="Suvidha Travels Logo" className="h-12 w-12 rounded-full border-2 border-primary shadow-lg object-cover" loading="lazy"/>
                    <h2 className="text-xl font-bold">Suvidha Travels</h2>
                </a>

                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <a href="index.html" className="hover:text-primary transition-colors">Home</a>
                    <a href="services.html" className="hover:text-primary transition-colors">Services</a>
                    <a href="packages.html" className="hover:text-primary transition-colors">Packages</a>
                    <a href="about.html" className="hover:text-primary text-primary font-bold transition-colors">About</a>
                    <a href="gallery.html" className="hover:text-primary transition-colors">Gallery</a>
                    <a href="contact.html" className="hover:text-primary transition-colors">Contact</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button onClick={toggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <span className="material-symbols-outlined">{dark ? 'light_mode' : 'dark_mode'}</span>
                    </button>
                    
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
                    </button>
                    
                    <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services." target="_blank" rel="noopener noreferrer" className="hidden md:inline-block px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">Plan Trip</a>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-4">
                    <div className="container mx-auto px-4 space-y-3">
                        <a href="index.html" className="block py-2 hover:text-primary transition-colors font-medium">Home</a>
                        <a href="services.html" className="block py-2 hover:text-primary transition-colors font-medium">Services</a>
                        <a href="packages.html" className="block py-2 hover:text-primary transition-colors font-medium">Packages</a>
                        <a href="about.html" className="block py-2 text-primary font-bold transition-colors">About</a>
                        <a href="gallery.html" className="block py-2 hover:text-primary transition-colors font-medium">Gallery</a>
                        <a href="contact.html" className="block py-2 hover:text-primary transition-colors font-medium">Contact</a>
                        <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services." target="_blank" rel="noopener noreferrer" className="block py-3 px-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors text-center mt-4">Plan Trip</a>
                    </div>
                </nav>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in visible">About Suvidha Travels</h1>
                <p className="text-lg md:text-xl fade-in visible">Your trusted partner in creating unforgettable journeys since 2010</p>
            </div>
        </section>
    );
}

function Journey() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 fade-in visible">Our Journey</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in visible">
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            Founded in 2010, Suvidha Travels emerged from a simple belief: travel should be accessible, stress-free, and memorable. What started as a small office in Patna has grown into one of Bihar's most trusted travel agencies.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            Over the years, we've helped thousands of travelers discover the world's most beautiful destinations. From the snow-capped peaks of Kashmir to the tropical beaches of Maldives, we've crafted journeys that go beyond just visiting places - we create experiences.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Today, we pride ourselves on our commitment to excellence, customer satisfaction, and sustainable tourism practices.
                        </p>
                    </div>
                    <div className="lazy-load visible">
                        <img src="images/tposter.webp" alt="Suvidha Travels Office" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    <div className="stat-box bg-background-light dark:bg-gray-800 rounded-lg p-8 text-center lazy-load visible">
                        <div className="text-4xl font-bold text-primary mb-2">14+</div>
                        <p className="text-gray-600 dark:text-gray-400 font-semibold">Years of Excellence</p>
                    </div>
                    <div className="stat-box bg-background-light dark:bg-gray-800 rounded-lg p-8 text-center lazy-load visible">
                        <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                        <p className="text-gray-600 dark:text-gray-400 font-semibold">Happy Travelers</p>
                    </div>
                    <div className="stat-box bg-background-light dark:bg-gray-800 rounded-lg p-8 text-center lazy-load visible">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <p className="text-gray-600 dark:text-gray-400 font-semibold">Destinations</p>
                    </div>
                    <div className="stat-box bg-background-light dark:bg-gray-800 rounded-lg p-8 text-center lazy-load visible">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <p className="text-gray-600 dark:text-gray-400 font-semibold">Customer Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Mission() {
    const values = [
        {
            icon: "favorite",
            title: "Passion for Travel",
            desc: "We genuinely love helping people explore the world and create lasting memories."
        },
        {
            icon: "verified_user",
            title: "Trust & Integrity",
            desc: "Your satisfaction and safety are our top priorities in every journey."
        },
        {
            icon: "stars",
            title: "Excellence",
            desc: "We continuously strive to exceed expectations and deliver superior service."
        },
        {
            icon: "public",
            title: "Sustainability",
            desc: "We're committed to responsible tourism that benefits local communities."
        }
    ];

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="fade-in visible">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            To make travel accessible, affordable, and unforgettable for everyone. We believe that travel enriches lives, broadens perspectives, and creates connections across cultures.
                        </p>
                    </div>
                    <div className="fade-in visible">
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            To be the most trusted travel agency in India, known for personalized service, authentic experiences, and uncompromising quality standards.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-16 fade-in visible">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center lazy-load visible">
                            <div className="value-icon bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-primary text-4xl">{value.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Team() {
    const team = [
        {
            name: "Rajesh Kumar",
            role: "Founder & CEO",
            img: "https://i.pravatar.cc/150?img=1"
        },
        {
            name: "Priya Singh",
            role: "Head of Operations",
            img: "https://i.pravatar.cc/150?img=5"
        },
        {
            name: "Amit Sharma",
            role: "Travel Consultant Lead",
            img: "https://i.pravatar.cc/150?img=3"
        },
        {
            name: "Neha Patel",
            role: "Customer Service Manager",
            img: "https://i.pravatar.cc/150?img=9"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 fade-in visible">Our Expert Team</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="team-card bg-background-light dark:bg-gray-800 rounded-lg overflow-hidden lazy-load visible">
                            <img src={member.img} alt={member.name} className="w-full h-64 object-cover"/>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-primary font-semibold">{member.role}</p>
                            </div>
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
    const [menuOpen, setMenuOpen] = useState(false);
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
            <Header dark={dark} toggle={toggle} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main role="main" aria-label="Main content">
                <Hero />
                <Journey />
                <Mission />
                <Team />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
