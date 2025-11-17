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
                    <a href="packages.html" className="hover:text-primary text-primary font-bold">Packages</a>
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in visible">Our Tour Packages</h1>
                <p className="text-lg md:text-xl fade-in visible">Discover unforgettable journeys across the globe</p>
            </div>
        </section>
    );
}

function Packages() {
    const domesticPackages = [
        {
            title: "Kashmir Paradise",
            duration: "6 Nights / 7 Days",
            desc: "Snow-capped peaks, pristine lakes, and lush meadows",
            price: "$1,200",
            img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200"
        },
        {
            title: "Goa Beach Escape",
            duration: "4 Nights / 5 Days",
            desc: "Golden beaches, water sports, and vibrant nightlife",
            price: "$950",
            img: "https://images.unsplash.com/photo-1520607162513-77f6740bed9d?q=80&w=1200"
        },
        {
            title: "Himalayan Trek",
            duration: "7 Nights / 8 Days",
            desc: "Mountain peaks, trekking trails, and village experiences",
            price: "$1,400",
            img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200"
        },
        {
            title: "Rajasthan Royal Tour",
            duration: "5 Nights / 6 Days",
            desc: "Majestic forts, palaces, and desert safaris",
            price: "$1,100",
            img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200"
        }
    ];

    const internationalPackages = [
        {
            title: "Maldives Dream",
            duration: "7 Nights / 8 Days",
            desc: "Overwater bungalows, crystal waters, and sun-kissed beaches",
            price: "$2,499",
            img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200"
        },
        {
            title: "Paris Romance",
            duration: "5 Nights / 6 Days",
            desc: "Eiffel Tower, river cruises, and fine dining",
            price: "$1,800",
            img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200"
        },
        {
            title: "Dubai Extravaganza",
            duration: "4 Nights / 5 Days",
            desc: "Skyscrapers, desert safari, and luxury shopping",
            price: "$1,600",
            img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200"
        },
        {
            title: "Bali Tropical",
            duration: "6 Nights / 7 Days",
            desc: "Rice terraces, temples, and tropical beaches",
            price: "$1,350",
            img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200"
        },
        {
            title: "Switzerland Alps",
            duration: "6 Nights / 7 Days",
            desc: "Alpine peaks, scenic trains, and charming villages",
            price: "$2,100",
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
        },
        {
            title: "Thailand Adventure",
            duration: "5 Nights / 6 Days",
            desc: "Bangkok temples, island hopping, and Thai cuisine",
            price: "$1,450",
            img: "https://images.unsplash.com/photo-1552520554-5fefe8c9ef14?q=80&w=1200"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Domestic Packages */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-4 fade-in visible">Domestic Packages</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 fade-in visible">Explore the diverse beauty of India with our carefully curated domestic tours</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {domesticPackages.map((pkg, i) => (
                            <div key={i} className="pkg-card bg-background-light dark:bg-gray-800 rounded-lg overflow-hidden lazy-load visible flex flex-col">
                                <img src={pkg.img} alt={pkg.title} className="w-full h-48 object-cover"/>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold mb-2">{pkg.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{pkg.duration}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{pkg.desc}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-primary">{pkg.price}</span>
                                        <a href={`https://wa.me/+919304010727?text=Hi!%20I%27m%20interested%20in%20${encodeURIComponent(pkg.title)}%20package.`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">Book</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* International Packages */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 fade-in visible">International Packages</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 fade-in visible">Journey to the world's most stunning destinations with our international tours</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {internationalPackages.map((pkg, i) => (
                            <div key={i} className="pkg-card bg-background-light dark:bg-gray-800 rounded-lg overflow-hidden lazy-load visible flex flex-col">
                                <img src={pkg.img} alt={pkg.title} className="w-full h-48 object-cover"/>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold mb-2">{pkg.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{pkg.duration}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{pkg.desc}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-primary">{pkg.price}</span>
                                        <a href={`https://wa.me/+919304010727?text=Hi!%20I%27m%20interested%20in%20${encodeURIComponent(pkg.title)}%20package.`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">Book</a>
                                    </div>
                                </div>
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
                        <h4 className="font-semibold uppercase mb-4">Destinations</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Kashmir</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Maldives</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dubai</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Paris</a></li>
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
                <Packages />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
