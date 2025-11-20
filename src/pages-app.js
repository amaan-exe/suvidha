const { useState, useEffect, useRef } = React;

// Dynamic tour data template
const tourData = {
    kashmir: {
    title: "Explore Wonderful Kashmir",
    heroImage: "https://images.unsplash.com/photo-1524492412937-4961d66aa114?q=80&w=1200",
    description: "Discover the serene beauty of Kashmir with snow-capped mountains, peaceful lakes, lush valleys, and charming landscapes across Srinagar, Gulmarg, Pahalgam, and Sonmarg.",
    duration: "5 Nights / 6 Days",
    price: "₹19,999 per person",

    highlights: [
        { icon: "downhill_skiing", title: "Gulmarg Day Trip", desc: "Experience meadows, snow views, and optional Gondola ride." },
        { icon: "landscape", title: "Sonmarg Day Trip", desc: "Explore the 'Meadow of Gold' surrounded by glaciers and peaks." },
        { icon: "hotel", title: "Comfort Stay", desc: "Stay in Srinagar hotel, houseboat, and Pahalgam." },
        { icon: "directions_boat", title: "Shikara Experience", desc: "Optional peaceful Shikara ride on Dal Lake." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Srinagar",
            content: "Arrive at Srinagar Airport and transfer to your hotel. Enjoy a relaxing evening with optional local sightseeing around Boulevard Road or Dal Lake."
        },
        {
            title: "Day 2: Srinagar → Gulmarg → Srinagar",
            content: "Full-day trip to Gulmarg, known for its meadows and snow valleys. Optional Gondola cable car ride (at extra cost). Return to Srinagar for overnight stay."
        },
        {
            title: "Day 3: Srinagar → Sonmarg → Srinagar",
            content: "Explore Sonmarg, ‘The Meadow of Gold’. Enjoy scenic landscapes and optional pony rides (at extra cost). Return to Srinagar for overnight stay."
        },
        {
            title: "Day 4: Srinagar → Pahalgam",
            content: "Drive to Pahalgam, known for rivers, valleys, and pine forests. Visit Aru & Betaab Valley (optional). Overnight stay in Pahalgam."
        },
        {
            title: "Day 5: Pahalgam → Srinagar (Houseboat)",
            content: "Return to Srinagar and check in to a traditional houseboat. Enjoy a peaceful evening with optional Shikara ride. Overnight at the houseboat."
        },
        {
            title: "Day 6: Departure",
            content: "Check out from the houseboat and transfer to Srinagar Airport for your onward journey."
        }
    ],

    inclusions: [
        "3 Night stay at Srinagar hotel",
        "1 Night stay at Houseboat",
        "1 Night stay at Pahalgam",
        "Day trip to Gulmarg",
        "Day trip to Sonmarg",
        "Return Airport Transfer"
    ],

    exclusions: [
        "Airfare or train tickets",
        "Gondola ride, pony ride, rafting, or any adventure activities",
        "Entrance fees, guide charges",
        "Personal expenses (shopping, meals not included, snacks)",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "Available Throughout the Year", package: "Standard Kashmir Tour Package", price: "₹19,999 per person" }
    ]
}
,
andaman: {
    title: "Explore Wonderful Andaman",
    heroImage: "images/anda.jpg",
    description: "Experience serene beaches, turquoise waters, historic sites, and island adventures with this short 3 Days / 2 Nights Andaman getaway based in Port Blair.",
    duration: "3 Days / 2 Nights",
    price: "₹9,999 per person",

    highlights: [
        { icon: "island", title: "Corbyn’s Cove Beach", desc: "Relax at one of Port Blair's most peaceful beaches." },
        { icon: "history", title: "Cellular Jail", desc: "Explore the historic freedom-era prison and witness its legacy." },
        { icon: "light_mode", title: "Light & Sound Show", desc: "Attend the famous evening show at Cellular Jail." },
        { icon: "directions_boat", title: "Ross & Coral Island", desc: "Boat ride to beautiful islands known for reefs and scenery." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Port Blair",
            content: "Arrive at Port Blair Airport and transfer to hotel. Visit Corbyn’s Cove Beach followed by the iconic Light & Sound Show at Cellular Jail. Overnight stay in Port Blair."
        },
        {
            title: "Day 2: Ross Island & Coral Island Tour",
            content: "After breakfast, head for a beautiful boat trip to Ross Island and Coral Island. Enjoy beaches, nature trails, and optional water activities (extra cost). Return to Port Blair for overnight stay."
        },
        {
            title: "Day 3: Departure",
            content: "Check out from the hotel and proceed to Port Blair Airport for your departure."
        }
    ],

    inclusions: [
        "2 Nights stay at Port Blair",
        "Sightseeing at Corbyn’s Cove Beach",
        "Visit to Cellular Jail",
        "Light & Sound Show entry",
        "Ross Island & Coral Island tour",
        "Return Airport Transfer"
    ],

    exclusions: [
        "Flight Ticket",
        "Personal expenses (meals not included, drinks, shopping)",
        "Water sports charges",
        "Entry fees not mentioned",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "Available Throughout the Year", package: "Port Blair 3D/2N Tour", price: "₹9,999 per person" }
    ]
}
,
    rajasthan: {
    title: "Royal Rajasthan Heritage Tour",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
    description: "Explore the royal palaces, mighty forts, golden deserts, and vibrant culture of Rajasthan across Jaipur, Bikaner, Jaisalmer, and Jodhpur.",
    duration: "6 Nights / 7 Days",
    price: "₹80,000 – ₹95,000",

    highlights: [
        { icon: "account_balance", title: "Jaipur City Tour", desc: "Amber Fort, City Palace, Jantar Mantar, Hawa Mahal & more." },
        { icon: "fort", title: "Golden Fort - Jaisalmer", desc: "Explore the living fort built with yellow sandstone." },
        { icon: "landscape", title: "Sam Sand Dunes", desc: "Camel ride & cultural program in the Thar Desert." },
        { icon: "hotel", title: "Handpicked Hotels", desc: "Stay in curated 3-star & 4-star properties." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Jaipur",
            content: "Arrive at Jaipur Airport and transfer to the hotel. Visit Birla Temple, Patrika Gate, and Albert Hall Museum in the evening. Overnight stay in Jaipur. "
        },
        {
            title: "Day 2: Jaipur Local Sightseeing",
            content: "Full-day Jaipur tour including Amber Fort, Gaitore Cenotaphs, Jal Mahal (photo stop), City Palace, Jantar Mantar, and Hawa Mahal (photo stop). Overnight in Jaipur."
        },
        {
            title: "Day 3: Jaipur → Bikaner",
            content: "Drive to Bikaner (370 km / 7 hrs). On arrival, visit Junagarh Fort. Overnight stay in Bikaner.}"
        },
        {
            title: "Day 4: Bikaner → Jaisalmer",
            content: "Drive to Jaisalmer (330 km / 7 hrs). Visit the Golden Fort (Sonar Kella) and explore nearby markets. Overnight in Jaisalmer."
        },
        {
            title: "Day 5: Jaisalmer Local & Desert Stay",
            content: "Visit Salim Singh ki Haveli, Gadisar Lake, Patwon ki Haveli & Nathmal ki Haveli. Enjoy camel ride & Rajasthani cultural program at Sam Sand Dunes. Overnight stay in Desert Camp."
        },
        {
            title: "Day 6: Jaisalmer → Jodhpur",
            content: "Drive to Jodhpur (300 km / 5 hrs). Visit Mehrangarh Fort, Jaswant Thada & Umaid Bhawan Palace. Overnight stay in Jodhpur."
        },
        {
            title: "Day 7: Departure from Jodhpur",
            content: "After breakfast, check out and drop at Jodhpur Airport. Journey ends with beautiful memories. "
        }
    ],

    hotelOptions: [
        {
            type: "4-Star Package",
            price: "₹95,000",
            hotels: {
                jaipur: "Ramada by Wyndham Jaipur North / Similar",
                bikaner: "Hotel Chirag / Similar",
                jaisalmer_city: "Sairafort / Similar",
                jaisalmer_desert: "Oasis Desert Camp / Similar",
                jodhpur: "Madhuram Royal / Similar"
            }
        },
        {
            type: "3-Star Package",
            price: "₹80,000",
            hotels: {
                jaipur: "Hotel Wall Street / Similar",
                bikaner: "Hotel Sagar / Similar",
                jaisalmer_city: "Antra Inn / Similar",
                jaisalmer_desert: "Oasis Desert Camp / Similar",
                jodhpur: "Shri Ram Empire / Similar"
            }
        }
    ],

    inclusions: [
        "Accommodation for 6 Nights with Breakfast & Dinner ",
        "1 Triple Sharing Room (for sample quotation) ",
        "Dzire/Etios AC Vehicle for transfers & sightseeing",
        "Fuel Charges, Parking, Toll Taxes, Driver Allowances",
        "Airport Pickup (Jaipur) & Drop (Jodhpur)"
    ],

    exclusions: [
        "Auto-rickshaw, Jeep ride, Elephant ride etc. ",
        "Personal expenses (Laundry, Tips, Drinks) ",
        "Meals not mentioned",
        "Camera/Video fees",
        "Optional/Extra activities",
        "Personal & Travel Insurance",
        "GST 5% "
    ],

    dates: [
        { date: "Mar 30, 2026", package: "Family Trip", price: "₹80,000 – ₹95,000" }
    ]
}
,

    
meghalaya: {
    title: "Mesmerising Meghalaya & Assam Tour",
    heroImage: "https://images.unsplash.com/photo-1589308078056-f21a6c512da8?q=80&w=1200",
    description: "Experience the breathtaking canyons, crystal-clear rivers, living root bridges, charming villages, and vibrant culture across Shillong, Cherrapunji, Dawki, and Guwahati.",
    duration: "5 Nights / 6 Days",
    price: "₹1,11,245 – ₹1,53,577",

    highlights: [
        { icon: "landscape", title: "Laitlum Canyons", desc: "Unmatched panoramic views from Meghalaya’s grand canyon." },
        { icon: "waterfall", title: "Krang Suri Falls", desc: "Swim in crystal blue waters and witness waterfalls up close." },
        { icon: "eco", title: "Cleanest Village – Mawlynnong", desc: "Explore Asia’s cleanest village and Living Root Bridge." },
        { icon: "waves", title: "Dawki River Boating", desc: "Boat over the transparent emerald waters of Umngot River." }
    ],

    days: [
        {
            title: "Day 1: Guwahati → Shillong",
            content: "Arrive at Guwahati Airport/Railway Station and proceed to Shillong. En route stop at Umiam Lake. Evening visit Police Bazar. Overnight in Shillong. (Meals not specified)"
        },
        {
            title: "Day 2: Shillong → Laitlum → Krang Suri → Shillong",
            content: "Visit Laitlum Canyons for panoramic cliff views, then continue to Krang Suri Falls, one of Meghalaya’s most stunning waterfalls. Return to Shillong. "
        },
        {
            title: "Day 3: Shillong → Mawlynnong → Dawki → Shillong",
            content: "Visit Mawlynnong, the cleanest village in India, see the Living Root Bridge, then continue to Dawki for boating on the crystal-clear Umngot River. Return to Shillong."
        },
        {
            title: "Day 4: Shillong → Cherrapunji → Shillong",
            content: "Visit Cherrapunji attractions: Eco Park, Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, Arwah Cave, and Garden of Caves (time permitting). Return to Shillong. "
        },
        {
            title: "Day 5: Shillong → Guwahati",
            content: "Drive to Guwahati with stops at Elephant Falls, Don Bosco Museum, and Ward’s Lake. Evening options: Brahmaputra River Cruise or shopping at Fancy Bazar. Overnight in Guwahati."
        },
        {
            title: "Day 6: Departure",
            content: "Early morning visit to Kamakhya Temple. After darshan, transfer to Guwahati Airport/Railway Station for departure."
        }
    ],

    hotelOptions: [
        {
            type: "Option 1",
            price: "₹1,11,245",
            hotels: {
                shillong: "The Eee Cee (4 Nights) - Deluxe",
                guwahati: "Aarian Aatithya (1 Night) - Executive"
            }
        },
        {
            type: "Option 2",
            price: "₹1,39,969",
            hotels: {
                shillong: "Nirvana Orchid (4 Nights) - Executive",
                guwahati: "The Kalyaniz (1 Night) - Corporate"
            }
        },
        {
            type: "Option 3",
            price: "₹1,53,577",
            hotels: {
                shillong: "Windermere Inn (4 Nights) - Deluxe",
                guwahati: "Ratnamouli Palace (1 Night) - Premier"
            }
        }
    ],

    inclusions: [
        "3 Rooms on double sharing basis + 2 extra beds/mattress ",
        "Daily Breakfast",
        "Exclusive AC vehicle for transfers & sightseeing",
        "Experienced driver",
        "Parking, tolls, driver allowance"
    ],

    exclusions: [
        "Personal expenses (Laundry, tips, drink",
        "Additional sightseeing or extra vehicle use",
        "Camera fees, Guide charges, Entrance fees",
        "Tour escort charges",
        "Costs due to natural calamities, political issues, road blocks",
        "Increase in fuel/taxes",
        "GST & Insurance",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "May (Last Week) 2026", package: "Family Group Tour", price: "₹1,11,245 – ₹1,53,577" }
    ]
}
,
shimla_kullu_manali: {
    title: "Shimla - Kullu - Manali",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    description: "No info available",
    duration: "No info available",
    price: "₹19,999",

    highlights: ["No info available"],

    days: ["No info available"],

    hotelOptions: ["No info available"],

    inclusions: ["No info available"],

    exclusions: ["No info available"],

    dates: ["No info available"]
}
,
gangtok_darjeeling: {
    title: "Explore Wonderful Gangtok & Darjeeling",
    heroImage: "images/darj.jpg",
    description: "Experience the charm of the Eastern Himalayas with this scenic Gangtok and Darjeeling tour, featuring breathtaking viewpoints, monasteries, tea gardens, and the world-famous toy train.",
    duration: "4 Nights / 5 Days",
    price: "₹18,999 per person",

    highlights: [
        { icon: "terrain", title: "Gangtok City Tour", desc: "Explore monasteries, viewpoints, and cultural landmarks." },
        { icon: "train", title: "Darjeeling Toy Train", desc: "Optional ride on the UNESCO Heritage Himalayan Railway." },
        { icon: "photo_camera", title: "Tiger Hill Sunrise", desc: "Witness the golden sunrise over Mt. Kanchenjunga." },
        { icon: "local_florist", title: "Tea Garden Views", desc: "Walk through picturesque Darjeeling tea estates." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Gangtok",
            content: "Arrive at Bagdogra Airport/NJP Railway Station and transfer to Gangtok. Check in at the hotel and enjoy the evening at MG Marg. Overnight stay in Gangtok."
        },
        {
            title: "Day 2: Gangtok Sightseeing",
            content: "Visit Tashi Viewpoint, Ganesh Tok, Hanuman Tok, Bakthang Waterfall, Do Drul Chorten, Flower Exhibition Centre, and Ropeway (optional). Overnight in Gangtok."
        },
        {
            title: "Day 3: Gangtok → Darjeeling",
            content: "Drive to Darjeeling via scenic mountain routes. Evening free for strolls at Mall Road or local cafés. Overnight in Darjeeling."
        },
        {
            title: "Day 4: Darjeeling Sightseeing",
            content: "Early morning visit to Tiger Hill for sunrise, followed by visits to Ghoom Monastery, Batasia Loop, Himalayan Mountaineering Institute, Tea Garden, and Japanese Temple. Overnight stay in Darjeeling."
        },
        {
            title: "Day 5: Departure",
            content: "Check out and transfer to Bagdogra Airport/NJP Railway Station for onward journey."
        }
    ],

    inclusions: [
        "4 Nights / 5 Days stay",
        "2 Nights stay in Gangtok",
        "2 Nights stay in Darjeeling",
        "Sightseeing in Gangtok & Darjeeling",
        "Comfortable vehicle for transfers",
        "Airport/Railway station pickup and drop"
    ],

    exclusions: [
        "Airfare or train tickets",
        "Nathula Pass visit (optional, extra cost)",
        "Toy train ride (optional ticket)",
        "Personal expenses (shopping, food not included)",
        "Guide charges & entry fees",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "Available Throughout the Year", package: "Standard Gangtok–Darjeeling Tour", price: "₹18,999 per person" }
    ]
}

,
gangtok_tour: {
    title: "Explore Wonderful Gangtok",
    heroImage: "images/gang.jpg",
    description: "Discover the beauty of the Eastern Himalayas with this affordable Gangtok tour featuring stunning viewpoints, monasteries, snow peaks, and peaceful landscapes.",
    duration: "3 Nights / 4 Days (standard, customizable)", 
    price: "₹9,499 per person",

    highlights: [
        { icon: "terrain", title: "Tashi View Point", desc: "Panoramic views of Mt. Kanchenjunga." },
        { icon: "account_balance", title: "Ganesh Tok & Hanuman Tok", desc: "Popular hilltop temples with scenic views." },
        { icon: "waterfall", title: "Bakthang Waterfall", desc: "Beautiful natural waterfall ideal for photography." },
        { icon: "museum", title: "Do Drul Chorten & Museum", desc: "Explore sacred chorten and local culture exhibits." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Gangtok",
            content: "Arrive at Bagdogra Airport or NJP Railway Station and transfer to Gangtok. Check in and spend the evening at MG Marg. Overnight stay in Gangtok."
        },
        {
            title: "Day 2: Gangtok Local Sightseeing",
            content: "Visit Tashi View Point, Ganesh Tok, Hanuman Tok, Bakthang Waterfall, Do Drul Chorten, Flower Exhibition Centre, Ropeway (optional), and local markets."
        },
        {
            title: "Day 3: Optional Excursion (Tsomgo Lake & Baba Mandir)",
            content: "Drive to the stunning Tsomgo Lake and visit Baba Harbhajan Mandir. (Additional cost; subject to permits and weather). Return to Gangtok for overnight stay."
        },
        {
            title: "Day 4: Departure",
            content: "Check out from the hotel and transfer to Bagdogra Airport/NJP Railway Station."
        }
    ],

    inclusions: [
        "Accommodation in Gangtok",
        "Daily breakfast",
        "Local sightseeing as per itinerary",
        "Pickup & drop (Airport/Railway Station)",
        "Comfortable vehicle for sightseeing"
    ],

    exclusions: [
        "Airfare or train tickets",
        "Tsomgo Lake & Baba Mandir (optional, extra cost)",
        "Entry fees, guide charges",
        "Personal expenses (shopping, meals not included)",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "Available Throughout the Year", package: "Gangtok Budget Tour", price: "₹9,499 per person" }
    ]
}

,

manali_tour: {
    title: "Wonderful Manali Tour",
    heroImage: "images/manali.jpg",
    description: "Enjoy snow-covered mountains, pine forests, adventure sports, scenic valleys, and peaceful rivers with this affordable Manali tour package.",
    duration: "3 Nights / 4 Days (standard plan)",
    price: "₹9,999 per person",

    highlights: [
        { icon: "ac_unit", title: "Solang Valley", desc: "Adventure activities like paragliding, ATV, skiing (seasonal)." },
        { icon: "landscape", title: "Rohtang/Atal Tunnel (Optional)", desc: "Snow views and breathtaking mountain drives." },
        { icon: "temple_hindu", title: "Hadimba Temple", desc: "Ancient wooden temple surrounded by cedar forests." },
        { icon: "nature_people", title: "Club House & Vashisht", desc: "Hot springs, Tibetan monasteries, and river views." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Manali",
            content: "Arrive in Manali by bus/cab and check in to hotel. After rest, explore Mall Road, Tibetan Market, and Van Vihar. Overnight stay in Manali."
        },
        {
            title: "Day 2: Solang Valley / Atal Tunnel Excursion",
            content: "Visit Solang Valley for adventure sports. Optional visit to Atal Tunnel & Sissu (extra charges may apply). Return to hotel for overnight stay."
        },
        {
            title: "Day 3: Manali Local Sightseeing",
            content: "Visit Hadimba Devi Temple, Vashisht Hot Springs, Club House, Jogini Waterfall viewpoint, and Old Manali Café street. Overnight in Manali."
        },
        {
            title: "Day 4: Departure",
            content: "Check out and depart for return journey via private cab or Volvo bus."
        }
    ],

    inclusions: [
        "Accommodation in Manali",
        "Daily breakfast and dinner (depending on hotel)",
        "Local sightseeing",
        "Pickup & drop (Volvo stand or Manali city)",
        "All taxes included"
    ],

    exclusions: [
        "Transport from Delhi/Chandigarh to Manali (optional add-on)",
        "Rohtang Pass permit charges",
        "Adventure activities (paragliding, skiing, ATV etc.)",
        "Entry fees, guide charges",
        "Personal expenses",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "Available Throughout the Year", package: "Budget Manali Tour", price: "₹9,999 per person" }
    ]
}

,
sri_lanka: {
    title: "Sri Lanka Tour",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=1200",
    description: "No info available",
    duration: "No info available",
    price: "₹20,000",

    highlights: ["No info available"],
    days: ["No info available"],
    hotelOptions: ["No info available"],
    inclusions: ["No info available"],
    exclusions: ["No info available"],
    dates: ["No info available"]
}
,
nepal: {
    title: "Nepal Tour",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
    description: "No info available",
    duration: "No info available",
    price: "₹19,999",

    highlights: ["No info available"],
    days: ["No info available"],
    hotelOptions: ["No info available"],
    inclusions: ["No info available"],
    exclusions: ["No info available"],
    dates: ["No info available"]
}
,
goa: {
    title: "Explore Wonderful Goa",
    heroImage: "images/goa.jpg",
    description: "Relax on golden beaches, enjoy vibrant nightlife, explore historic churches, and experience the coastal charm of North and South Goa with this curated 3 Nights / 4 Days package.",
    duration: "3 Nights / 4 Days",
    price: "₹9,999 per person",

    highlights: [
        { icon: "beach_access", title: "North Goa Tour", desc: "Discover the famous beaches, forts, and vibrant markets of North Goa." },
        { icon: "temple_hindu", title: "South Goa Tour", desc: "Visit serene beaches, heritage churches, and scenic viewpoints." },
        { icon: "hotel", title: "Comfortable Stay", desc: "3-night stay at a hotel with daily breakfast included." },
        { icon: "airport_shuttle", title: "Airport Transfer", desc: "Smooth and hassle-free round-trip airport transfers." }
    ],

    days: [
        {
            title: "Day 1: Arrival in Goa",
            content: "Arrive at Goa Airport and receive a warm welcome. Transfer to your hotel for check-in. Spend the rest of the day relaxing on the beach or exploring nearby cafés and markets."
        },
        {
            title: "Day 2: North Goa Tour",
            content: "Explore Calangute Beach, Baga Beach, Anjuna Beach, Fort Aguada, and local flea markets. Enjoy water sports (optional, at personal cost). Return to hotel for overnight stay."
        },
        {
            title: "Day 3: South Goa Tour",
            content: "Visit Miramar Beach, Dona Paula View Point, Basilica of Bom Jesus, Se Cathedral, and Mangueshi Temple. Spend the evening at Colva Beach. Overnight in Goa."
        },
        {
            title: "Day 4: Departure",
            content: "Check out from the hotel. Enjoy some leisure time until transfer to the airport for your onward journey."
        }
    ],

    inclusions: [
        "3 Night stay at Hotel with Breakfast",
        "Return Airport Transfer",
        "1 Day South Goa Tour",
        "1 Day North Goa Tour"
    ],

    exclusions: [
        "Airfare or train tickets",
        "Personal expenses (shopping, meals not mentioned, drinks)",
        "Water sports or additional activities",
        "Entrance fees at monuments",
        "Anything not mentioned in inclusions"
    ],

    dates: [
        { date: "Available Throughout the Year", package: "Standard Goa Tour Package", price: "₹9,999 per person" }
    ]
}

,
default: {
    title: "Kerala Tour",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=1200",
    description: "No info available",
    duration: "No info available",
    price: "₹50,000",

    highlights: ["No info available"],
    days: ["No info available"],
    hotelOptions: ["No info available"],
    inclusions: ["No info available"],
    exclusions: ["No info available"],
    dates: ["No info available"]
}
,
    defkerala: {
    title: "Kerala Tour",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=1200",
    description: "No info available",
    duration: "No info available",
    price: "₹50,000",

    highlights: ["No info available"],
    days: ["No info available"],
    hotelOptions: ["No info available"],
    inclusions: ["No info available"],
    exclusions: ["No info available"],
    dates: ["No info available"]
}
}
;

function Header({ dark, toggle, tour }) {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-voyage-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-voyage-tan/20 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="index.html" className="flex items-center gap-3">
                    <img src="images/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full border-2 border-primary shadow-lg object-cover" loading="lazy"/>
                    <h2 className="text-xl font-bold">Suvidha Travels</h2>
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <a href="index.html" className="text-voyage-dark dark:text-voyage-sand hover:text-voyage-blue dark:hover:text-voyage-blue transition-colors">Home</a>
                    <a href="#" className="text-voyage-dark dark:text-voyage-sand hover:text-voyage-blue dark:hover:text-voyage-blue transition-colors">Destinations</a>
                    <a href="#" className="text-voyage-dark dark:text-voyage-sand hover:text-voyage-blue dark:hover:text-voyage-blue transition-colors">Packages</a>
                    <a href="#" className="text-voyage-dark dark:text-voyage-sand hover:text-voyage-blue dark:hover:text-voyage-blue transition-colors">About</a>
                    <a href="#" className="text-voyage-dark dark:text-voyage-sand hover:text-voyage-blue dark:hover:text-voyage-blue transition-colors">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button onClick={toggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                        <span className="material-symbols-outlined">{dark ? 'light_mode' : 'dark_mode'}</span>
                    </button>
                    <a href={`https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20booking%20${tour ? encodeURIComponent(tour.title) : 'a tour'}.%20Could%20you%20please%20share%20availability%20and%20pricing%20details?%20Thank%20you!`} target="_blank" rel="noopener noreferrer" className="bg-voyage-orange hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded-full transition-colors inline-block">Book Now</a>
                </div>
            </div>
        </header>
    );
}

function Hero({ tour }) {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4 relative overflow-hidden" 
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${tour.heroImage}")`
                }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative flex flex-col gap-4 text-center max-w-4xl px-4 z-10">
                <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight fade-in visible">{tour.title}</h1>
                <p className="text-white/90 text-lg md:text-xl font-light fade-in visible">Explore ancient temples, vibrant cities, and breathtaking landscapes on this once-in-a-lifetime adventure.</p>
            </div>
        </section>
    );
}

function TourOverview({ tour }) {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center border-b border-voyage-tan/30 pb-8 fade-in visible">
                        <h2 className="text-4xl font-bold text-voyage-dark dark:text-white mb-2">An Unforgettable Journey</h2>
                        <div className="flex items-center justify-center space-x-6 text-voyage-dark/70 dark:text-voyage-sand/70">
                            <span>{tour.duration}</span>
                            <span className="text-voyage-tan">|</span>
                            <span>Starting from <strong className="text-voyage-orange font-semibold">{tour.price}</strong></span>
                        </div>
                        <p className="text-voyage-dark/80 dark:text-voyage-sand/80 text-lg mt-6 max-w-3xl mx-auto">
                            {tour.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KeyHighlights({ highlights }) {
    return (
        <section className="py-16 container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-10 text-voyage-dark dark:text-white fade-in visible">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {highlights.map((h, i) => (
                    <div key={i} className="flex flex-col items-center text-center lazy-load visible">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-voyage-blue/10 mb-4">
                            <span className="material-symbols-outlined text-voyage-blue text-3xl">{h.icon}</span>
                        </div>
                        <h4 className="font-semibold text-lg text-voyage-dark dark:text-white">{h.title}</h4>
                        <p className="text-voyage-dark/70 dark:text-voyage-sand/70 text-sm">{h.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DailyItinerary({ days }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-16 container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-10 text-voyage-dark dark:text-white fade-in visible">Daily Itinerary</h3>
            <div className="space-y-4 max-w-4xl mx-auto">
                {days.map((day, i) => (
                    <div key={i} className={`group rounded-xl bg-gray-50 dark:bg-voyage-dark/70 p-6 cursor-pointer border border-transparent hover:border-voyage-blue/50 transition-all ${openIndex === i ? 'accordion-open' : ''}`}>
                        <div 
                            className="accordion-summary flex items-center justify-between font-semibold text-voyage-dark dark:text-white text-lg" 
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        >
                            {day.title}
                            <span className="accordion-icon material-symbols-outlined text-voyage-blue text-3xl font-light transform">+</span>
                        </div>
                        {openIndex === i && (
                            <div className="mt-4">
                                <p className="text-voyage-dark/80 dark:text-voyage-sand/80">{day.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function InclusionsExclusions({ inclusions, exclusions }) {
    return (
        <section className="py-16 container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-10 text-voyage-dark dark:text-white fade-in visible">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                <div>
                    <h4 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400">Inclusions</h4>
                    <ul className="space-y-3 text-voyage-dark/90 dark:text-voyage-sand/90">
                        {inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400 mr-3 mt-0.5">check_circle</span>
                                {inc}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-xl mb-4 text-red-600 dark:text-red-400">Exclusions</h4>
                    <ul className="space-y-3 text-voyage-dark/90 dark:text-voyage-sand/90">
                        {exclusions.map((exc, i) => (
                            <li key={i} className="flex items-start">
                                <span className="material-symbols-outlined text-red-600 dark:text-red-400 mr-3 mt-0.5">cancel</span>
                                {exc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function PricingDates({ dates, tour }) {
    return (
        <section className="py-16 container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-10 text-voyage-dark dark:text-white fade-in visible">Pricing & Dates</h3>
            <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200 dark:border-voyage-tan/20">
                <table className="w-full text-left bg-white dark:bg-voyage-dark/70">
                    <thead className="bg-gray-50 dark:bg-voyage-dark/80">
                        <tr>
                            <th className="p-4 md:p-6 font-semibold text-voyage-dark dark:text-white">Departure Date</th>
                            <th className="p-4 md:p-6 font-semibold text-voyage-dark dark:text-white">Package</th>
                            <th className="p-4 md:p-6 font-semibold text-voyage-dark dark:text-white">Price / Person</th>
                            <th className="p-4 md:p-6 font-semibold text-voyage-dark dark:text-white"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-voyage-tan/20">
                        {dates.map((d, i) => (
                            <tr key={i} className={d.special ? "bg-voyage-blue/10 dark:bg-voyage-blue/20" : ""}>
                                <td className="p-4 md:p-6">
                                    {d.date}
                                    {d.special && <span className="text-xs font-medium text-voyage-blue ml-2">{d.special}</span>}
                                </td>
                                <td className="p-4 md:p-6">{d.package}</td>
                                <td className="p-4 md:p-6 font-semibold text-voyage-dark dark:text-white">{d.price}</td>
                                <td className="p-4 md:p-6 text-right">
                                    <a href={`https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20booking%20${tour ? encodeURIComponent(tour.title) : 'a tour'}.%20Date:%20${encodeURIComponent(d.date)}.%20Package:%20${encodeURIComponent(d.package)}.%20Could%20you%20confirm%20availability%20and%20finalize%20the%20booking?%20Thank%20you!`} target="_blank" rel="noopener noreferrer" className="bg-voyage-orange hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded-full transition-colors text-sm inline-block">Book Now</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function CTAFooter({ tour }) {
    return (
        <footer className="sticky bottom-0 w-full bg-white/90 dark:bg-voyage-dark/90 backdrop-blur-sm border-t border-gray-200 dark:border-voyage-tan/20 p-4 z-40">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-lg text-voyage-dark dark:text-white">From {tour.price}</p>
                        <p className="text-sm text-voyage-dark/70 dark:text-voyage-sand/70">per person</p>
                    </div>
                    <a href={`https://wa.me/+919304010727?text=Hi%20there!%20I%E2%80%99m%20interested%20in%20booking%20${encodeURIComponent(tour.title)}.%20Could%20you%20please%20share%20the%20best%20dates%20and%20pricing%20for%20this%20tour?%20Thank%20you!`} target="_blank" rel="noopener noreferrer" className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-voyage-orange hover:bg-opacity-90 text-white text-base font-bold leading-normal tracking-wide shadow-lg transition-colors">
                        <span className="truncate">Book This Tour</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

function App() {
    const [dark, setDark] = useState(false);
    const [tour, setTour] = useState(null);
    const bar = useRef(null);

    useEffect(() => {
        // Read URL param
        const urlParams = new URLSearchParams(window.location.search);
        const destination = urlParams.get('destination')?.toLowerCase() || 'kashmir';
        const selectedTour = tourData[destination] || tourData.default;
        
        // Update SEO meta tags dynamically
        document.getElementById('page-title').textContent = `${selectedTour.title} | Suvidha Travels`;
        document.getElementById('page-description').setAttribute('content', `${selectedTour.description}`);
        document.getElementById('og-title').setAttribute('content', `${selectedTour.title} | Suvidha Travels`);
        document.getElementById('og-description').setAttribute('content', `${selectedTour.description}`);
        document.getElementById('og-image').setAttribute('content', selectedTour.heroImage);
        document.getElementById('og-url').setAttribute('content', `https://suvidhatravels.com/pages.html?destination=${destination}`);
        document.getElementById('twitter-title').setAttribute('content', `${selectedTour.title} | Suvidha Travels`);
        document.getElementById('twitter-desc').setAttribute('content', `${selectedTour.description}`);
        document.getElementById('twitter-image').setAttribute('content', selectedTour.heroImage);
        document.getElementById('canonical-url').setAttribute('href', `https://suvidhatravels.com/pages.html?destination=${destination}`);
        
        setTour(selectedTour);
    }, []);

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
        const handle = () => { bar.current.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%'; };
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(e => e.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('visible');
                obs.unobserve(en.target);
            }
        }), { threshold: 0.1 });
        document.querySelectorAll('.fade-in:not(.visible), .lazy-load:not(.visible)').forEach(el => obs.observe(el));
    }, []);

    if (!tour) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div ref={bar} id="scrollBar"></div>
            <Header dark={dark} toggle={toggle} tour={tour} />
            <main className="w-full">
                <Hero tour={tour} />
                <TourOverview tour={tour} />
                <KeyHighlights highlights={tour.highlights} />
                <DailyItinerary days={tour.days} />
                <InclusionsExclusions inclusions={tour.inclusions} exclusions={tour.exclusions} />
                <PricingDates dates={tour.dates} tour={tour} />
            </main>
            <CTAFooter tour={tour} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
