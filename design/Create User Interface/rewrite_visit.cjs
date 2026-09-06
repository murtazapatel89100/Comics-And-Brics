const fs = require('fs');

const file = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove FranchiseHarryPotter
let newFile = file.replace(/const FranchiseHarryPotter[\s\S]*?};\n\n/m, '');

// 2. Remove FranchiseHarryPotter from App routes
newFile = newFile.replace(/\{currentScreen === 'FranchiseHarryPotter' && <FranchiseHarryPotter setCurrentScreen=\{setCurrentScreen\} \/>\}\n\s*/m, '');

// 3. Define the new Visit component
const newVisitComponent = `
const Visit = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => {
  const [selectedLocation, setSelectedLocation] = useState('PUNE');

  const locations = [
    { id: 'PUNE', name: 'PUNE', address: 'Koregaon Park', hours: '12 PM - 11 PM', status: 'OPEN TODAY', image: storefront },
    { id: 'MUMBAI', name: 'MUMBAI', address: 'Bandra West', hours: '11 AM - 10 PM', status: 'OPEN TODAY', image: gameNight },
    { id: 'COMING_SOON', name: 'COMING SOON', address: 'Bangalore', hours: '-', status: 'BUILDING', image: 'https://images.unsplash.com/photo-1541888082405-b10886a87754?w=800&h=600&fit=crop' }
  ];

  const currentLoc = locations.find(l => l.id === selectedLocation) || locations[0];

  return (
    <div className="animate-in fade-in duration-500 bg-background min-h-screen">
      {/* 1. HERO */}
      <section className="relative bg-background border-b-4 border-foreground overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display font-extrabold text-6xl md:text-8xl uppercase mb-6 tracking-tighter" style={{ textShadow: '4px 4px 0px #171717', color: 'var(--color-accent, #FFD447)' }}>
              COME HANG OUT.
            </h1>
            <p className="font-sans text-xl md:text-2xl font-bold max-w-xl mb-10 text-foreground">
              Find a Comics & Brics near you and come read, play and hang out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow comic-shadow-hover hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                FIND A LOCATION <ArrowRight size={20} />
              </button>
              <button onClick={() => document.getElementById('plan-visit')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow-sm hover:bg-muted transition-all flex justify-center items-center gap-2">
                PLAN YOUR VISIT <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
             <div className="rounded-2xl border-4 border-foreground overflow-hidden comic-shadow h-[300px] md:h-[450px]">
               <SafeImg src={storefront} alt="Comics & Brics" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-green text-foreground font-display font-extrabold text-xl uppercase px-6 py-3 border-4 border-foreground comic-shadow transform -rotate-3 z-20">
               Open Daily
             </div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR LOCATION */}
      <section id="locations" className="py-20 bg-muted border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase mb-4 tracking-tighter">FIND YOUR C&B.</h2>
            <p className="font-sans text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Choose a location to see what's available and plan your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => {
              const isSelected = selectedLocation === loc.id;
              return (
                <div 
                  key={loc.id} 
                  onClick={() => setSelectedLocation(loc.id)}
                  className={\`rounded-2xl border-4 overflow-hidden comic-shadow cursor-pointer transition-all duration-300 flex flex-col \${
                    isSelected 
                      ? 'border-foreground bg-accent transform -translate-y-2 comic-shadow-hover' 
                      : 'border-foreground bg-white hover:-translate-y-1 hover:comic-shadow-hover'
                  }\`}
                >
                  <div className="h-48 border-b-4 border-foreground overflow-hidden">
                    <SafeImg src={loc.image} alt={loc.name} className={\`w-full h-full object-cover transition-transform duration-500 \${isSelected ? 'scale-105' : 'grayscale hover:grayscale-0'}\`} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display font-extrabold text-3xl uppercase">{loc.name}</h3>
                      <span className={\`text-[10px] font-extrabold uppercase px-2 py-1 border-2 border-foreground rounded bg-white \${loc.status === 'OPEN TODAY' ? 'text-green' : 'text-muted-foreground'}\`}>
                        {loc.status}
                      </span>
                    </div>
                    <p className="font-sans font-bold text-muted-foreground mb-4">{loc.address}</p>
                    <p className="font-display font-bold text-sm uppercase flex items-center gap-2 mb-6">
                      <Clock size={16} /> {loc.hours}
                    </p>
                    <div className="mt-auto">
                      <button className={\`w-full font-display font-bold uppercase text-sm px-4 py-3 rounded border-2 border-foreground transition-colors \${isSelected ? 'bg-white text-foreground' : 'bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-white'}\`}>
                        {isSelected ? 'SELECTED LOCATION' : 'VIEW LOCATION →'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LOCATION DETAILS */}
      <section className="py-20 bg-background border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full">
              <div className="rounded-2xl border-4 border-foreground overflow-hidden comic-shadow">
                <SafeImg src={currentLoc.image} alt={currentLoc.name} className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div className="flex-1 w-full space-y-8">
              <div>
                <span className="inline-block bg-accent text-foreground font-display font-extrabold uppercase px-3 py-1 border-2 border-foreground comic-shadow-sm text-sm mb-4 transform -rotate-2">Location Information</span>
                <h2 className="font-display font-extrabold text-5xl uppercase tracking-tighter mb-2">COMICS & BRICS — {currentLoc.name}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-extrabold text-xl uppercase mb-2">ADDRESS</h4>
                  <p className="font-sans font-medium text-muted-foreground">{currentLoc.address}, India</p>
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xl uppercase mb-2">HOURS TODAY</h4>
                  <p className="font-sans font-medium text-muted-foreground">{currentLoc.hours}</p>
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xl uppercase mb-2">CONTACT</h4>
                  <p className="font-sans font-medium text-muted-foreground">+91 98765 43210</p>
                  <p className="font-sans font-medium text-muted-foreground">hello@{currentLoc.name.toLowerCase()}.comicsandbrics.com</p>
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xl uppercase mb-2">SERVICES</h4>
                  <p className="font-sans font-medium text-muted-foreground">Cafe, Retail, Table Booking</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t-2 border-foreground">
                <button className="flex-1 bg-white text-foreground font-display font-bold uppercase px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm hover:bg-muted transition-all">
                  GET DIRECTIONS →
                </button>
                <button onClick={() => document.getElementById('plan-visit')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-foreground text-primary-foreground font-display font-bold uppercase px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm hover:bg-opacity-90 transition-all">
                  RESERVE A TABLE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT'S AT THIS LOCATION */}
      <section className="py-20 bg-muted border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase mb-4 tracking-tighter">WHAT'S HERE.</h2>
            <p className="font-sans text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Everything available at {currentLoc.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "COMICS", status: "Available", icon: <BookOpen size={32} />, color: "bg-accent", link: "ExploreComics" },
              { title: "BOARD GAMES", status: "400+ Games", icon: <Dices size={32} />, color: "bg-blue text-white", link: "Games" },
              { title: "LEGOS", status: "Available", icon: <Package size={32} />, color: "bg-white", link: "ExploreLegos" },
              { title: "ACTION FIGURES", status: "New Additions", icon: <Users size={32} />, color: "bg-coral text-white", link: "Explore" },
              { title: "FOOD & DRINKS", status: "Full Menu", icon: <Coffee size={32} />, color: "bg-green text-foreground", link: "ExploreFood" },
              { title: "EVENTS", status: "3 Upcoming", icon: <Calendar size={32} />, color: "bg-foreground text-white", link: "ExploreEvents" }
            ].map((item, i) => (
              <div key={i} onClick={() => setCurrentScreen(item.link)} className="bg-white rounded-xl border-4 border-foreground p-6 comic-shadow flex items-center justify-between group cursor-pointer hover:comic-shadow-hover hover:-translate-y-1 transition-all">
                 <div className="flex items-center gap-4">
                    <div className={\`w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center \${item.color}\`}>
                       {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-xl uppercase mb-1">{item.title}</h3>
                      <p className="text-xs font-bold uppercase text-muted-foreground">{item.status}</p>
                    </div>
                 </div>
                 <ArrowRight size={20} className="text-muted-foreground transform group-hover:translate-x-1 group-hover:text-foreground transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UPCOMING EVENTS */}
      <section className="py-20 bg-coral border-b-4 border-foreground relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase tracking-tighter text-white" style={{ textShadow: '4px 4px 0px #171717' }}>WHAT'S HAPPENING.</h2>
              <p className="font-sans text-xl font-bold text-white mt-4">See what's happening at this location.</p>
            </div>
            <button onClick={() => setCurrentScreen('ExploreEvents')} className="bg-white text-foreground font-display font-bold uppercase px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm hover:-translate-y-1 transition-all flex items-center gap-2 w-max">
              SEE ALL EVENTS <ArrowRight size={18}/>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "MAGIC: DRAFT NIGHT", date: "Friday", time: "7 PM", spots: "18 / 24 spots", type: "Tournament" },
              { title: "INDIE COMIC MEETUP", date: "Saturday", time: "3 PM", spots: "Open", type: "Community" },
              { title: "D&D ONE-SHOT", date: "Sunday", time: "5 PM", spots: "2 / 6 spots", type: "Game Night" }
            ].map((ev, i) => (
              <div key={i} className="bg-white rounded-xl border-4 border-foreground p-6 comic-shadow flex flex-col relative transform hover:-translate-y-2 transition-all">
                <div className="absolute -top-4 -right-4 bg-accent border-2 border-foreground font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full transform rotate-6 comic-shadow-sm">
                  {currentLoc.name}
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-coral uppercase border border-coral px-2 py-1 rounded">{ev.type}</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl uppercase mb-2 leading-tight">{ev.title}</h3>
                <p className="font-sans font-bold text-muted-foreground flex items-center gap-2 mb-4">
                  <Calendar size={16} /> {ev.date} · {ev.time}
                </p>
                <div className="mt-auto pt-4 border-t-2 border-dashed border-foreground/20 flex items-center justify-between">
                  <span className="font-sans text-sm font-bold text-muted-foreground">{ev.spots}</span>
                  <button className="font-display font-bold uppercase text-sm text-foreground hover:text-coral transition-colors flex items-center gap-1">
                    RSVP <ArrowRight size={16}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLAN YOUR VISIT */}
      <section id="plan-visit" className="py-20 bg-background border-b-4 border-foreground">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase tracking-tighter mb-4">READY TO HANG OUT?</h2>
              <p className="font-sans text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Pick a location, bring your friends, and we'll take care of the rest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "RESERVE A TABLE", desc: "Book a spot for your group.", icon: <CalendarCheck size={48}/>, action: "RESERVE A TABLE →" },
                { title: "RESERVE A GAME", desc: "Make sure a specific game is waiting for you.", icon: <Dices size={48}/>, action: "RESERVE A GAME →" },
                { title: "REQUEST A GAME", desc: "Looking for a game we don't have yet?", icon: <Search size={48}/>, action: "REQUEST A GAME →" }
              ].map((card, i) => (
                <div key={i} className="bg-accent rounded-xl border-4 border-foreground p-8 comic-shadow text-center flex flex-col items-center group">
                   <div className="w-20 h-20 bg-white rounded-full border-4 border-foreground flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                      {card.icon}
                   </div>
                   <h3 className="font-display font-extrabold text-3xl uppercase mb-2">{card.title}</h3>
                   <p className="font-sans font-bold text-foreground/80 mb-8">{card.desc}</p>
                   <button className="mt-auto bg-foreground text-white font-display font-bold uppercase px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm hover:bg-opacity-90 transition-all w-full">
                     {card.action}
                   </button>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 7. FIND US / DIRECTIONS */}
      <section className="py-20 bg-muted border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 bg-white rounded-2xl border-4 border-foreground overflow-hidden comic-shadow">
             <div className="flex-1 bg-background flex flex-col items-center justify-center p-12 relative border-b-4 md:border-b-0 md:border-r-4 border-foreground">
                <div className="absolute inset-0 halftone-bg opacity-10"></div>
                <MapPin size={64} className="text-muted-foreground mb-4 relative z-10" />
                <h3 className="font-display font-extrabold text-2xl uppercase text-muted-foreground relative z-10">MAP PLACEHOLDER</h3>
             </div>
             <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-display font-extrabold text-5xl uppercase tracking-tighter mb-8">FIND YOUR WAY TO C&B.</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                     <MapPin size={24} className="text-foreground shrink-0 mt-1" />
                     <div>
                       <h4 className="font-display font-bold uppercase">ADDRESS</h4>
                       <p className="font-sans font-medium text-muted-foreground">{currentLoc.address}, India</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Clock size={24} className="text-foreground shrink-0 mt-1" />
                     <div>
                       <h4 className="font-display font-bold uppercase">HOURS</h4>
                       <p className="font-sans font-medium text-muted-foreground">{currentLoc.hours}</p>
                     </div>
                  </div>
                </div>
                <button className="bg-white text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow-sm hover:bg-muted transition-all w-max flex items-center gap-2">
                  GET DIRECTIONS <ExternalLink size={18}/>
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
`;

const visitRegex = /const Visit = \(\{ setCurrentScreen \}: \{ setCurrentScreen: \(s: string\) => void \}\) => \{[\s\S]*?(?=const Footer =)/;
newFile = newFile.replace(visitRegex, newVisitComponent);

fs.writeFileSync('src/App.tsx', newFile);
