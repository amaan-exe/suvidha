const { useState, useEffect, useRef } = React;

// OpenStreetMap Component using Leaflet
function OpenStreetMap() {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
        // Initialize map only if Leaflet is available
        if (typeof L !== 'undefined' && mapRef.current) {
            // Create map instance
            if (!mapInstance.current) {
                mapInstance.current = L.map(mapRef.current).setView([25.6113, 85.1369], 15);
                
                // Add OpenStreetMap tiles
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                    maxZoom: 19
                }).addTo(mapInstance.current);
                
                // Add marker for Suvidha Travels
                L.marker([25.6113, 85.1369], {
                    title: 'Suvidha Travels - Patna, Bihar'
                }).addTo(mapInstance.current)
                    .bindPopup('<strong>Suvidha Travels</strong><br/>Patna, Bihar - 800001<br/>📞 +91 93040 10727<br/>📧 suvidhatour@gmail.com')
                    .openPopup();
            }
            
            // Trigger resize to ensure map renders properly
            setTimeout(() => {
                if (mapInstance.current) {
                    mapInstance.current.invalidateSize();
                }
            }, 100);
        }

        return () => {
            // Cleanup is handled by React
        };
    }, []);

    return (
        <div 
            ref={mapRef}
            className="map-container bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            style={{ height: '24rem', width: '100%' }}
            title="Suvidha Travels Location Map - OpenStreetMap - Patna, Bihar"
        />
    );
}

// Particles - Optimized: Fewer particles
function Particles() {
    const canvas = useRef(null);
    const frameIdRef = useRef(null);
    useEffect(() => {
        if (!canvas.current) return;
        const ctx = canvas.current.getContext('2d');
        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;
        
        const handleResize = () => {
            if (canvas.current) {
                canvas.current.width = window.innerWidth;
                canvas.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        
        const particles = Array.from({length: 15}, () => ({ // Reduced from 25
            x: Math.random() * canvas.current.width,
            y: Math.random() * canvas.current.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.4 + 0.1
        }));
        
        const draw = () => {
            if (!canvas.current) return;
            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > canvas.current.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.current.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
                ctx.fill();
            });
            frameIdRef.current = requestAnimationFrame(draw);
        };
        draw();
        
        return () => {
            window.removeEventListener('resize', handleResize);
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
        };
    }, []);
    return <canvas ref={canvas} className="fixed inset-0 pointer-events-none z-0 opacity-15"/>;
}

// Animated Stat Item
function StatItem({ icon, target, label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                let cur = 0;
                const timer = setInterval(() => {
                    cur += target / 60;
                    if (cur >= target) { setCount(target); clearInterval(timer); }
                    else setCount(Math.floor(cur));
                }, 30);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return (
        <div ref={ref} className="stat-item group flex flex-col items-center hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-6xl text-primary/30 group-hover:text-primary transition-colors mb-4">{icon}</span>
            <div className="text-5xl font-extrabold tabular-nums">{count.toLocaleString()}+</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">{label}</p>
            <div className="mt-3 h-1 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-700"></div>
        </div>
    );
}

function StatsCounter() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stats-grid">
                    <StatItem icon="public" target={345} label="Tours" />
                    <StatItem icon="wb_sunny" target={438} label="Holidays" />
                    <StatItem icon="hotel" target={526} label="Hotels" />
                    <StatItem icon="directions_car" target={675} label="Cars" />
                </div>
            </div>
        </section>
    );
}

function Header({ dark, toggle }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <a href="index.html" className="flex items-center gap-3">
                <img
                src="images/logo.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full border-2 border-primary shadow-lg object-cover"
                loading="lazy"
                />
                <h2 className="text-xl font-bold">Suvidha Travels</h2>
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <a href="index.html" className="hover:text-primary">Home</a>
                    <a href="services.html" className="hover:text-primary">Services</a>
                    <a href="packages.html" className="hover:text-primary">Packages</a>
                    <a href="about.html" className="hover:text-primary">About</a>
                    <a href="gallery.html" className="hover:text-primary">Gallery</a>
                    <a href="contact.html" className="hover:text-primary">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button onClick={toggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle dark mode">
                        <span className="material-symbols-outlined">{dark ? 'light_mode' : 'dark_mode'}</span>
                    </button>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle menu">
                        <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                    <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services%20and%20I%20have%20a%20few%20questions.%20Could%20you%20please%20share%20some%20details%20when%20you%E2%80%99re%20free?%20Thank%20you!" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg">Plan Trip</a>
                </div>
            </div>
            {mobileMenuOpen && (
                <nav className="md:hidden bg-background-light/95 dark:bg-background-dark/95 border-t border-gray-200 dark:border-gray-800 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="container mx-auto px-4 space-y-3">
                        <a href="index.html" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Home</a>
                        <a href="services.html" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Services</a>
                        <a href="packages.html" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Packages</a>
                        <a href="about.html" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">About</a>
                        <a href="gallery.html" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Gallery</a>
                        <a href="contact.html" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium text-base">Contact</a>
                        <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20exploring%20your%20travel%20packages." target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 bg-primary text-white rounded-lg font-bold text-center hover:bg-primary/90 transition-all mt-4 text-base">Plan Trip</a>
                    </div>
                </nav>
            )}
        </header>
    );
}

function Hero() {
    const [idx, setIdx] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const videos = ['videos/pr1.mp4','videos/pr2.mp4','videos/pr3.mp4','videos/pr4.mp4'];
    const videoRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 641);

    const phrases = [
        'Explore The World With Suvidha Travels',
        'Ease Your Travel Experience ',
        'Travel Bhi , Masti Bhi',
        'Safar ka Maza with Suvidha Travels '
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 641);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let typeSpeed = isMobile ? 30 : 45;
        let deleteSpeed = isMobile ? 35 : 50;
        let pauseTime = isMobile ? 1500 : 2000;

        const handleType = () => {
            const fullText = phrases[phraseIndex];
            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
                return;
            } else {
                setCurrentText((prev) =>
                    isDeleting
                        ? prev.substring(0, prev.length - 1)
                        : fullText.substring(0, prev.length + 1)
                );
            }
        };

        const delay = isDeleting ? deleteSpeed : typeSpeed;
        if (phrases.length > 0) {
            const timer = setTimeout(handleType, delay);
            return () => clearTimeout(timer);
        }
    }, [currentText, isDeleting, phraseIndex, phrases, isMobile]);

    useEffect(() => {
        const id = setInterval(() => setIdx(i => (i+1)%videos.length), 5000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        videoRefs.current.forEach((v,i) => v && (i===idx ? v.play() : v.pause()));
    }, [idx]);

    return (
        <section className="relative h-screen min-h-[600px] overflow-hidden hero">
            <div className="carousel">
                <div className="carousel-track" style={{transform:`translateX(-${idx*100}%)`}}>
                    {videos.map((src,i) => (
                        <div key={i} className="carousel-slide">
                            <video ref={el=>videoRefs.current[i]=el} src={src} muted loop playsInline preload="next" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className={`text-5xl md:text-6xl font-oregano typing-text fade-phrase visible ${!isDeleting && currentText === phrases[phraseIndex] ? '' : ''}`}>
                    {currentText}
                    {currentText !== phrases[phraseIndex] || isDeleting ? '' : '|'}
                </h1>
                <p className="mt-4 text-lg fade-in visible">Your next unforgettable journey begins here.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <a href="packages.html"  rel="noopener noreferrer" className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors inline-block w-full sm:w-auto text-center">Explore Packages</a>
                    <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services.%20Could%20you%20please%20share%20contact%20details%20and%20available%20packages?%20Thank%20you!" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-colors inline-block w-full sm:w-auto text-center">Contact Us</a>
                </div>
            </div>
            <div id="dots" className="absolute bottom-6 flex gap-2 z-20" style={{left: '50%', transform: 'translateX(-50%)'}}>
                {videos.map((_,i)=><button key={i} onClick={()=>setIdx(i)} className={i===idx?'active':''}/>)}
            </div>
        </section>
    );
}

function Destinations() {
    const trayRef = useRef(null);
    const dests =[
    {name: "Goa", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"},
    {name: "Kashmir", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200"},
    {name: "Rajasthan", img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200"},
    {name: "Meghalaya", img: "https://images.unsplash.com/photo-1589308078056-f21a6c512da8?q=80&w=1200"},
    {name: "Assam", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"},
    
    {name: "Shimla_Kullu_Manali", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200"},
    {name: "Gangtok_Darjeeling", img: "https://images.unsplash.com/photo-1606228281437-7df9d2e1aaf4?q=80&w=1200"},
    {name: "Gangtok_Tour", img: "https://images.unsplash.com/photo-1549893073-4d7d4a3a8e30?q=80&w=1200"},
    {name: "Manali_Tour", img: "https://images.unsplash.com/photo-1614449743193-82f34154b69d?q=80&w=1200"},
    {name: "Sri_Lanka", img: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=1200"},
    {name: "Nepal", img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200"}
];


    const scrollLeft = () => {
        if (trayRef.current) {
            trayRef.current.scrollBy({ left: -220, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (trayRef.current) {
            trayRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 fade-in visible">Domestic Destinations</h2>
                <div className="tray-nav relative">
                    <div ref={trayRef} className="tray dest-tray">
                        {dests.map((d,i)=>(
                            <div key={i} className="dest-card tray-item bg-cover bg-center rounded-lg flex flex-col justify-end p-4 text-white shadow-lg relative overflow-hidden lazy-load visible" style={{backgroundImage:`linear-gradient(to top,rgba(0,0,0,0.7),transparent),url(${d.img})`, width: '200px', height: '280px'}}>
                                <p className="text-lg font-bold relative z-10">{d.name}</p>
                                <a href={`pages.html?destination=${d.name.toLowerCase()}`} className="details mt-2 px-4 py-2 bg-white text-black rounded-full text-sm font-bold relative z-10 block text-center">View Details</a>
                            </div>
                        ))}
                    </div>
                    <button onClick={scrollLeft} className="nav-arrow nav-left">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button onClick={scrollRight} className="nav-arrow nav-right">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

function Packages() {
    const trayRef = useRef(null);
    const pkgs = [
        {title:"Europe",duration:"as you ask",desc:"Overwater villa with all meals",price:"INR 80000",img:"https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200"},
        {title:"Romantic Paris Getaway",duration:"5 Nights / 6 Days",desc:"City of love with river cruise",price:"$1,800",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200"},
        {title:"Himalayan Adventure Trek",duration:"10 Nights / 11 Days",desc:"Expert guides & permits",price:"$1,550",img:"https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200"},
        {title:"Dubai Desert Safari",duration:"4 Nights / 5 Days",desc:"Thrilling adventures in the dunes",price:"$1,200",img:"https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200"},
        {title:"Swiss Alps Retreat",duration:"6 Nights / 7 Days",desc:"Scenic trains and chocolate tours",price:"$2,100",img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"}
    ];

    const scrollLeft = () => {
        if (trayRef.current) {
            trayRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (trayRef.current) {
            trayRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 fade-in visible">International Packages</h2>
                <div className="tray-nav relative">
                    <div ref={trayRef} className="tray pkg-tray">
                        {pkgs.map((p,i)=>(
                            <div key={i} className="pkg-card tray-item bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 lazy-load visible" style={{width: '320px', height: 'fit-content'}}>
                                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy"/>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold">{p.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{p.duration}</p>
                                    <p className="mt-4 flex-grow text-gray-600 dark:text-gray-400">{p.desc}</p>
                                    <div className="mt-6 flex justify-between items-center">
                                        <p className="text-2xl font-bold text-primary">{p.price}<span className="text-sm font-normal text-gray-500"> / person</span></p>
                                        <a href={`https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20the%20${encodeURIComponent(p.title)}%20package.%20Could%20you%20please%20share%20more%20details%20and%20availability?%20Thank%20you!`} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors inline-block text-center">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={scrollLeft} className="nav-arrow nav-left">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button onClick={scrollRight} className="nav-arrow nav-right">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

function WhyChoose() {
    const items = [
        {icon:"map",title:"Expert Planners",desc:"We have a team of travel consultants in Patna that provides personalized recommendations as well as great insight that can make your journey memorable"},
        {icon:"sell",title:"Customize Package",desc:"Our Customized Packages are created as per person requirements, budgets, and no of people, schedule & more"},
        {icon:"public",title:"Affordable Pricing",desc:"We offer competitive rates on flights, hotels, and tour packages to ensure you get the best value"},
        {icon:"support_agent",title:"24/7 Support",desc:"Our dedicated support team is available around the clock to assist you with any queries or last-minute changes"}
    ];
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 fade-in visible">Why Choose Suvidha Travels?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center why-grid">
                    {items.map((f,i)=>(
                        <div key={i} className="lazy-load visible">
                            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-4xl">{f.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold">{f.title}</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutUs() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 fade-in visible">About Suvidha Travels</h2>
                <div className="about-grid">
                    <div className="order-2 lg:order-1">
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 fade-in visible">Based in the heart of Patna, Bihar, Suvidha Travels has been your trusted partner in crafting unforgettable journeys since 2010. Our passionate team of travel experts specializes in personalized itineraries that blend adventure, luxury, and cultural immersion. From the serene hills of Kashmir to the vibrant streets of Dubai, we ensure every trip is seamless and extraordinary.</p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 fade-in visible">With a commitment to sustainability and local empowerment, we partner with communities worldwide to create meaningful experiences. Join thousands of satisfied travelers who have discovered the world with us.</p>
                        <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20Suvidha%20Travels%20and%20your%20travel%20services.%20Could%20you%20please%20share%20more%20details?%20Thank%20you!" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors fade-in visible inline-block">Learn More</a>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img src="images/tposter.webp" alt="About Suvidha Travels" className="about-img w-full h-full object-cover lazy-load visible" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const [idx, setIdx] = useState(0);
    const testimonials = [
        {text:"Fantastic job! Memorable trip.",author:"reema Jha"},
        {text:"Agent assisted us throughout.",author:"Punit agarwal"},
        {text:"Enjoyed every moment.",author:"Kathy"},
        {text:"Perfectly planned tour.",author:"Amaan Khan"}
    ];
    useEffect(()=>{const id=setInterval(()=>setIdx(i=>(i+1)%testimonials.length),5000);return()=>clearInterval(id);},[]);
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 fade-in visible">What Our Travelers Say</h2>
                <div className="max-w-3xl mx-auto relative h-64 overflow-hidden">
                    {testimonials.map((t,i)=>(
                        <div key={i} className={`absolute inset-0 transition-all duration-500 ${i===idx?'opacity-100':'opacity-0'}`}>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center h-full flex flex-col justify-center">
                                <p className="text-lg italic mb-4">{t.text}</p>
                                <p className="font-semibold">{t.author}</p>
                                <div className="flex justify-center mt-2">
                                    {[...Array(5)].map((_,s)=><span key={s} className="material-symbols-outlined text-yellow-500 text-sm">star</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 fade-in visible">Based in Patna - Contact Us</h2>
                <div className="contact-grid">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Our Office</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Address:</h4>
                                <a href="https://maps.app.goo.gl/czoQegqAcFLL4fsR9" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary hover:underline block">
                                    Suvidha Travels<br />
                                    5TH FLOOR, 512, JAGAT TRADE CENTRE,<br />
                                    FRAZER ROAD, PATNA, BIHAR - 800001<br />
                                    India
                                </a>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone:</h4>
                                <a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services%20and%20I%20have%20a%20few%20questions.%20Could%20you%20please%20share%20some%20details%20when%20you%E2%80%99re%20free?%20Thank%20you!" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary hover:underline">
                                    +91 9304010727
                                </a>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Email:</h4>
                                <a href="mailto:suvidhatour@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary hover:underline">
                                    suvidhatour@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <OpenStreetMap />
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
                        <h3 className="text-lg font-bold mb-4">Suvidha Travels</h3>
                        <p className="text-sm text-gray-400 mb-4">Based in Patna, Bihar. Unforgettable experiences since 2010. Your journey, our passion.</p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/suvidhatravels_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-white hover:text-primary transform hover:scale-125 transition-all duration-300"
                                aria-label="Visit our Instagram page"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/suvidha-travels-841a15184"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-white hover:text-primary transform hover:scale-125 transition-all duration-300"
                                aria-label="Visit our Instagram page"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://x.com/SuvidhaTravels"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-white hover:text-primary transform hover:scale-125 transition-all duration-300"
                                aria-label="Visit our Instagram page"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/suvidhatravelspatna/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-white hover:text-primary transform hover:scale-125 transition-all duration-300"
                                aria-label="Visit our Instagram page"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="index.html" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="packages.html" className="hover:text-white transition-colors">Destinations</a></li>
                            <li><a href="packages.html" className="hover:text-white transition-colors">Packages</a></li>
                            <li><a href="about.html" className="hover:text-white transition-colors">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="packages.html" className="hover:text-white transition-colors">Custom Tours</a></li>
                            <li><a href="services.html" className="hover:text-white transition-colors">Visa Assistance</a></li>
                            <li><a href="services.html" className="hover:text-white transition-colors">Car Rentals</a></li>
                            <li><a href="services.html" className="hover:text-white transition-colors">Taxi Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="https://maps.app.goo.gl/czoQegqAcFLL4fsR9" 
                            target="_blank"
                            className="hover:underline ml-1">
                            Suvidha Travels<br />
                            5th floor, 512, Jagat Trade center, Frazer Road, Patna, Bihar - 800001, India
                            </a></li>
                            <li><a href="mailto:suvidhatour@gmail.com" 
                            
                            className="hover:underline ml-1">
                              suvidhatour@gmail.com
                            </a></li>
                            <li><a href="https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20your%20travel%20services%20and%20I%20have%20a%20few%20questions.%20Could%20you%20please%20share%20some%20details%20when%20you%E2%80%99re%20free?%20Thank%20you!" 
                            target="_blank"
                            className="hover:underline ml-1">
                              +91 93040 10727
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-sm text-gray-500">© 2025 Suvidha Travels. All Rights Reserved.</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Designed by Ignius Studios</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

function BackToTop() {
    const [show,setShow]=useState(false);
    useEffect(()=>{
        const handleScroll = () => setShow(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);
    return (
        <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className={`fixed bottom-8 right-8 z-50 bg-primary text-white p-3 rounded-full shadow-lg transition-all ${show?'opacity-100':'opacity-0 pointer-events-none'}`}>
            <span className="material-symbols-outlined">arrow_upward</span>
        </button>
    );
}

function App() {
    const [dark,setDark]=useState(false);
    const bar=useRef(null);

    useEffect(()=>{if(localStorage.getItem('theme')==='dark'){setDark(true);document.documentElement.classList.add('dark');}},[]);
    const toggle=()=>{setDark(!dark);document.documentElement.classList.toggle('dark');localStorage.setItem('theme',dark?'light':'dark');};

    useEffect(()=>{
        let ticking = false;
        const handle=()=>{
            if(!ticking && bar.current) {
                ticking = true;
                requestAnimationFrame(() => {
                    const scrollPercent = (window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
                    bar.current.style.width = Math.min(scrollPercent, 100)+'%';
                    ticking = false;
                });
            }
        };
        window.addEventListener('scroll',handle,{passive:true});
        return ()=>window.removeEventListener('scroll',handle);
    },[]);

    useEffect(()=>{
        const obs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');obs.unobserve(en.target);}}),{threshold:0.1});
        document.querySelectorAll('.fade-in:not(.visible), .lazy-load:not(.visible)').forEach(el=>obs.observe(el));
    },[]);

    return (
        <div className="relative">
            <div ref={bar} id="scrollBar"></div>
            <Particles/>
            <Header dark={dark} toggle={toggle}/>
            <main role="main" aria-label="Main content">
                <Hero/>
                <StatsCounter/>
                <Destinations/>
                <Packages/>
                <WhyChoose/>
                <AboutUs/>
                <Testimonials/>
                <Contact/>
            </main>
            <Footer/>
            <BackToTop/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
