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
                    <button onClick={toggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle dark mode">
                        <span className="material-symbols-outlined">{dark ? 'light_mode' : 'dark_mode'}</span>
                    </button>
                    
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle menu">
                        <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
                    </button>
                    
                    <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services." target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg">Plan Trip</a>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-background-light/95 dark:bg-background-dark/95 border-t border-gray-200 dark:border-gray-800 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="container mx-auto px-4 space-y-3">
                        <a href="index.html" onClick={() => setMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Home</a>
                        <a href="services.html" onClick={() => setMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Services</a>
                        <a href="packages.html" onClick={() => setMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Packages</a>
                        <a href="about.html" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-primary font-bold transition-colors text-base">About</a>
                        <a href="gallery.html" onClick={() => setMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Gallery</a>
                        <a href="contact.html" onClick={() => setMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Contact</a>
                        <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services." target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all text-center mt-4 text-base">Plan Trip</a>
                    </div>
                </nav>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section className="bg-gradient-to-br from-primary via-primary to-primary/70 text-white py-32 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in visible">About Suvidha Travels</h1>
                <p className="text-xl md:text-2xl fade-in visible opacity-95">Your trusted partner in creating unforgettable journeys since 2010</p>
                <div className="section-divider"></div>
            </div>
        </section>
    );
}

function Journey() {
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setStatsVisible(true);
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.1 });
        
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-32 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-20 fade-in visible">Our Journey</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                    <div className="fade-in visible space-y-6">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Founded in 2010, Suvidha Travels emerged from a simple belief: travel should be accessible, stress-free, and memorable. What started as a small office in Patna has grown into one of Bihar's most trusted travel agencies.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Over the years, we've helped thousands of travelers discover the world's most beautiful destinations. From the snow-capped peaks of Kashmir to the tropical beaches of Maldives, we've crafted journeys that go beyond just visiting places - we create experiences.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Today, we pride ourselves on our commitment to excellence, customer satisfaction, and sustainable tourism practices.
                        </p>
                        <a href="contact.html" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg btn-primary">Get Started</a>
                    </div>
                    <div className="lazy-load visible">
                        <div className="relative">
                            <img src="images/tposter.webp" alt="Suvidha Travels History" className="rounded-2xl shadow-2xl w-full h-full object-cover hover:shadow-3xl transition-shadow"/>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCard label="Years of Excellence" value="14+" delay={0} visible={statsVisible}/>
                    <StatCard label="Happy Travelers" value="5000+" delay={0.2} visible={statsVisible}/>
                    <StatCard label="Destinations" value="50+" delay={0.4} visible={statsVisible}/>
                    <StatCard label="Customer Support" value="24/7" delay={0.6} visible={statsVisible}/>
                </div>
            </div>
        </section>
    );
}

function StatCard({ label, value, delay, visible }) {
    return (
        <div className="stat-box bg-gradient-to-br from-blue-50 to-blue-25 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center lazy-load visible" style={{ transitionDelay: `${delay}s` }}>
            <div className="stat-number text-4xl md:text-5xl font-bold text-primary mb-3 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.8)' }}>
                {value}
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm md:text-base">{label}</p>
        </div>
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
        <section className="py-32 bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="fade-in visible">
                        <h2 className="text-4xl font-bold mb-8 gradient-text">Our Mission</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            To make travel accessible, affordable, and unforgettable for everyone. We believe that travel enriches lives, broadens perspectives, and creates connections across cultures. Every journey we facilitate is a step towards a more connected world.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0 mt-1">check_circle</span>
                                <p className="text-gray-600 dark:text-gray-400">Personalized itineraries tailored to your preferences</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0 mt-1">check_circle</span>
                                <p className="text-gray-600 dark:text-gray-400">Competitive pricing without compromising quality</p>
                            </div>
                        </div>
                    </div>
                    <div className="fade-in visible">
                        <h2 className="text-4xl font-bold mb-8 gradient-text">Our Vision</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            To be the most trusted travel agency in India, known for personalized service, authentic experiences, and uncompromising quality standards. We aspire to transform the way people travel by making every journey meaningful and transformative.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0 mt-1">check_circle</span>
                                <p className="text-gray-600 dark:text-gray-400">Innovation in travel planning and logistics</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0 mt-1">check_circle</span>
                                <p className="text-gray-600 dark:text-gray-400">Sustainable and responsible tourism practices</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-16 fade-in visible">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center lazy-load visible border border-primary/10 hover:border-primary/30 transition-all">
                                <div className="value-icon bg-gradient-to-br from-primary/20 to-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 relative">
                                    <span className="material-symbols-outlined text-primary text-4xl">{value.icon}</span>
                                    <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                                </div>
                                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.desc}</p>
                            </div>
                        ))}
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
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
