import React, { useState } from 'react';
import { Menu, X, ArrowRight, MapPin, Clock, Search, BookOpen, Dices, Calendar, Package, Coffee, ChevronDown, ChevronUp, ExternalLink, CalendarCheck, Users } from 'lucide-react';
import Admin from './Admin';

import storefront from '@/imports/unnamed.jpg';
import warhammerTable from '@/imports/unnamed__1_.jpg';
import foodPlatter from '@/imports/unnamed__2_.jpg';
import gameNight from '@/imports/unnamed__3_.jpg';
import miniatures from '@/imports/unnamed__4_.jpg';
import dungeonTerrain from '@/imports/unnamed__5_.jpg';
import spaceGame from '@/imports/unnamed__6_.jpg';

const SafeImg = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className ?? ''} flex items-center justify-center bg-muted`} aria-label={alt} role="img">
        <Dices className="text-muted-foreground/40" size={40} />
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
};

const Nav = ({ currentScreen, setCurrentScreen }: { currentScreen: string, setCurrentScreen: (s: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'Explore', 'Games', 'Visit'];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-4 border-foreground overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentScreen('Home')}>
            <div className="bg-accent border-2 border-foreground comic-shadow px-3 py-1 transform -rotate-3 group-hover:rotate-0 transition-transform duration-200">
              <span className="font-display font-extrabold text-2xl tracking-tighter uppercase text-foreground">C&B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight uppercase leading-none">Comics & Brics</span>
              <span className="font-display font-bold text-[10px] tracking-widest text-foreground uppercase mt-1">Cafe • Comics • Games</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => {
              const isActive = currentScreen === link || (link === 'Explore' && currentScreen.startsWith('Explore'));
              return (
                <button
                  key={link}
                  onClick={() => setCurrentScreen(link)}
                  className={`font-display font-bold uppercase tracking-wider text-sm px-4 py-2 transition-all ${
                    isActive 
                      ? 'bg-accent border-2 border-foreground comic-shadow-sm text-foreground transform -rotate-2' 
                      : 'text-foreground/70 hover:text-foreground hover:-translate-y-0.5 border-2 border-transparent'
                  }`}
                >
                  {link}
                </button>
              );
            })}
            <div className="pl-4">
              <button onClick={() => setCurrentScreen('Visit')} className="bg-white text-foreground font-display font-extrabold uppercase tracking-wider text-sm px-6 py-3 border-2 border-foreground comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all">
                Plan Your Visit
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center bg-white border-2 border-foreground comic-shadow-sm p-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <button className="text-foreground pointer-events-none">
              {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t-2 border-foreground px-4 pt-4 pb-6 space-y-3 relative z-10">
          {links.map((link) => {
            const isActive = currentScreen === link || (link === 'Explore' && currentScreen.startsWith('Explore'));
            return (
              <button
                key={link}
                onClick={() => {
                  setCurrentScreen(link);
                  setIsOpen(false);
                }}
                className={`block w-full text-left font-display font-bold uppercase tracking-wider text-lg py-3 px-4 border-2 border-transparent transition-all ${
                  isActive 
                    ? 'bg-accent border-foreground comic-shadow-sm text-foreground' 
                    : 'text-foreground hover:bg-white hover:border-foreground hover:comic-shadow-sm'
                }`}
              >
                {link}
              </button>
            );
          })}
          <div className="pt-4">
            <button onClick={() => { setCurrentScreen('Visit'); setIsOpen(false); }} className="w-full bg-white text-foreground font-display font-extrabold uppercase tracking-wider text-sm px-6 py-4 border-2 border-foreground comic-shadow-sm active:translate-y-1 active:comic-shadow-none transition-all">
              Plan Your Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Home = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero Section */}
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="absolute inset-0 halftone-bg z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
            Read.<br/>Play.<br/>Hang Out.
          </h1>
          <p className="font-sans text-xl md:text-2xl font-medium max-w-lg leading-snug">
            A café for people who never really grew out of comics, games, and good conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setCurrentScreen('Explore')} className="bg-accent text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow comic-shadow-hover flex items-center justify-center gap-2">
              Explore The Cafe <ArrowRight size={20} />
            </button>
            <button onClick={() => setCurrentScreen('Games')} className="bg-white text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow comic-shadow-hover">
              See The Games
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-accent text-foreground font-display font-bold text-xs uppercase px-4 py-2 rounded-full border-2 border-foreground transform rotate-6 z-20">
            Pune's Comic & Game Hangout
          </div>
          <div className="rounded-2xl border-2 border-foreground overflow-hidden comic-shadow bg-white h-[400px] md:h-[500px]">
            <SafeImg
              src={storefront}
              alt="Comics & Brics Cafe storefront on FC Road, Pune"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Intro Section */}
    <section className="relative py-20 bg-[#EFF3FF] border-b-4 border-foreground overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 transform -rotate-2">
            <span className="bg-accent text-foreground font-display font-extrabold uppercase tracking-wider px-4 py-2 border-2 border-foreground comic-shadow-sm text-sm">The Experience</span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase mb-6 tracking-tighter">More Than A Cafe.</h2>
          <p className="font-sans text-lg md:text-xl font-bold text-muted-foreground">
            Pick up a comic. Discover a new board game. Grab a drink. Stay for hours. Comics & Brics is a space built around stories, games, and the people who love them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Comics", desc: "Thousands of stories to discover.", icon: <BookOpen size={48} strokeWidth={2} />, bg: "bg-accent", text: "text-foreground" },
            { title: "Board Games", desc: "From quick party games to serious strategy.", icon: <Dices size={48} strokeWidth={2} />, bg: "bg-blue", text: "text-white" },
            { title: "Community", desc: "Events, meetups, tournaments & more.", icon: <Calendar size={48} strokeWidth={2} />, bg: "bg-coral", text: "text-white" }
          ].map((item, i) => (
            <div key={i} className={`bg-white text-foreground rounded-2xl border-4 border-foreground overflow-hidden comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-default`}>
              <div className={`w-full py-10 flex items-center justify-center ${item.bg} ${item.text} border-b-4 border-foreground`}>
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="p-8 bg-white w-full">
                <h3 className="font-display font-extrabold text-3xl uppercase mb-3">{item.title}</h3>
                <p className={`font-sans font-bold text-muted-foreground`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Games */}
    <section className="py-20 bg-background border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-12">What Are You Playing?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Warhammer 40K", tag: "Expert", img: warhammerTable },
            { title: "Twilight Imperium", tag: "Strategy", img: spaceGame },
            { title: "D&D Campaigns", tag: "Co-op", img: dungeonTerrain },
            { title: "Mini Painting", tag: "Workshop", img: miniatures }
          ].map((game, i) => (
            <div key={i} className="bg-white rounded-xl border-2 border-foreground overflow-hidden comic-shadow group cursor-pointer">
              <div className="h-48 border-b-2 border-foreground overflow-hidden">
                <SafeImg src={game.img} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-display font-bold text-xl uppercase">{game.title}</h3>
                <span className="text-xs font-bold uppercase bg-blue text-white px-2 py-1 border-2 border-foreground rounded-full">{game.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Events Strip */}
    <section className="relative py-16 bg-coral border-b-4 border-foreground overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 justify-between relative z-10">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase max-w-md tracking-tighter text-white" style={{ textShadow: '4px 4px 0px #171717' }}>
          Something's Always Happening.
        </h2>
        <div className="flex-1 flex flex-col md:flex-row gap-6 w-full">
          <div className="bg-white p-6 rounded-xl border-4 border-foreground flex-1 comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all transform -rotate-1">
            <p className="inline-block bg-accent text-foreground font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase mb-3 transform -rotate-2">Friday, 7 PM</p>
            <h4 className="font-display font-extrabold text-2xl uppercase mb-2">Magic: Draft Night</h4>
            <p className="font-sans font-bold text-muted-foreground">Join our weekly MTG draft. Beginners welcome!</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-4 border-foreground flex-1 comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all transform rotate-1">
            <p className="inline-block bg-accent text-foreground font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase mb-3 transform rotate-2">Saturday, 3 PM</p>
            <h4 className="font-display font-extrabold text-2xl uppercase mb-2">Indie Comic Meetup</h4>
            <p className="font-sans font-bold text-muted-foreground">Discover local artists and self-published gems.</p>
          </div>
        </div>
        <button onClick={() => setCurrentScreen('Visit')} className="flex-shrink-0 bg-white text-foreground font-display font-extrabold uppercase px-6 py-4 rounded-xl border-4 border-foreground comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all flex items-center gap-2 transform -rotate-2">
          View All Events <ArrowRight size={24} strokeWidth={3} />
        </button>
      </div>
    </section>
  </div>
);

const Explore = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <div className="animate-in fade-in duration-500 bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-6 tracking-tighter">Explore Comics & Brics.</h1>
        <p className="font-sans text-xl font-bold text-muted-foreground">Comics, collectibles, food, events, and plenty of things to discover.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* COMICS */}
        <div onClick={() => setCurrentScreen('ExploreComics')} className="bg-white rounded-2xl border-4 border-foreground overflow-hidden comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
          <div className="h-56 bg-accent border-b-4 border-foreground relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 halftone-bg opacity-20"></div>
            <div className="w-full h-full border-4 border-foreground rounded-xl overflow-hidden relative z-10 comic-shadow-sm transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300">
              <SafeImg src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=600&fit=crop" alt="Comics" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <span className="inline-block bg-accent text-foreground font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase w-max mb-4">2000+ Titles</span>
            <h3 className="font-display font-extrabold text-4xl uppercase mb-3">Comics</h3>
            <p className="font-sans font-bold text-muted-foreground mb-8">Discover thousands of stories, characters and worlds.</p>
            <div className="mt-auto font-display font-extrabold uppercase text-lg flex items-center gap-2 group-hover:text-accent transition-colors">
              Explore Comics <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* LEGOS */}
        <div onClick={() => setCurrentScreen('ExploreLegos')} className="bg-white rounded-2xl border-4 border-foreground overflow-hidden comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
          <div className="h-56 bg-blue border-b-4 border-foreground relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 halftone-bg opacity-20 filter invert"></div>
            <div className="w-full h-full border-4 border-foreground rounded-xl overflow-hidden relative z-10 comic-shadow-sm transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
              <SafeImg src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&h=600&fit=crop" alt="Legos" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <span className="inline-block bg-blue text-white font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase w-max mb-4">Collection</span>
            <h3 className="font-display font-extrabold text-4xl uppercase mb-3">Legos</h3>
            <p className="font-sans font-bold text-muted-foreground mb-8">Explore complete LEGO sets and new additions.</p>
            <div className="mt-auto font-display font-extrabold uppercase text-lg flex items-center gap-2 group-hover:text-blue transition-colors">
              Explore Legos <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* FOOD */}
        <div onClick={() => setCurrentScreen('ExploreFood')} className="bg-white rounded-2xl border-4 border-foreground overflow-hidden comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
          <div className="h-56 bg-green border-b-4 border-foreground relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 halftone-bg opacity-20 filter invert"></div>
            <div className="w-full h-full border-4 border-foreground rounded-xl overflow-hidden relative z-10 comic-shadow-sm transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300">
              <SafeImg src={foodPlatter} alt="Food" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <span className="inline-block bg-green text-white font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase w-max mb-4">Menu</span>
            <h3 className="font-display font-extrabold text-4xl uppercase mb-3">Food</h3>
            <p className="font-sans font-bold text-muted-foreground mb-8">Grab a drink, a bite, or check out today's specials.</p>
            <div className="mt-auto font-display font-extrabold uppercase text-lg flex items-center gap-2 group-hover:text-green transition-colors">
              View Menu <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* EVENTS */}
        <div onClick={() => setCurrentScreen('ExploreEvents')} className="bg-white rounded-2xl border-4 border-foreground overflow-hidden comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
          <div className="h-56 bg-coral border-b-4 border-foreground relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 halftone-bg opacity-20 filter invert"></div>
            <div className="w-full h-full border-4 border-foreground rounded-xl overflow-hidden relative z-10 comic-shadow-sm transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
              <SafeImg src={gameNight} alt="Events" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <span className="inline-block bg-coral text-white font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase w-max mb-4">What's Happening</span>
            <h3 className="font-display font-extrabold text-4xl uppercase mb-3">Events</h3>
            <p className="font-sans font-bold text-muted-foreground mb-8">Tournaments, meetups, parties, workshops and more.</p>
            <div className="mt-auto font-display font-extrabold uppercase text-lg flex items-center gap-2 group-hover:text-coral transition-colors">
              See Events <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExploreComics = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <div className="animate-in fade-in duration-500 bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <button onClick={() => setCurrentScreen('Explore')} className="font-display font-bold uppercase text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
          <ArrowRight size={16} className="transform rotate-180" /> Back to Explore
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase">The Comics</h1>
          <p className="font-sans text-xl font-medium mt-2">Pick a story. Start exploring.</p>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input 
            type="text" 
            placeholder="Search the collection..." 
            className="w-full bg-white border-2 border-foreground rounded-lg py-3 pl-10 pr-4 font-sans font-medium focus:outline-none focus:ring-2 focus:ring-accent comic-shadow-sm"
          />
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 hide-scrollbar">
        {['All', 'New Additions', 'Marvel', 'DC', 'Manga', 'Indian Comics', 'Graphic Novels', 'European'].map((filter, i) => (
          <button key={filter} className={`flex-shrink-0 font-display font-bold uppercase px-4 py-2 rounded-full border-2 border-foreground ${i === 0 ? 'bg-foreground text-primary-foreground' : 'bg-background hover:bg-muted'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {[
          { title: "Saga Vol 1", pub: "Image", size: "h-[320px]", img: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop", badge: "NEW" },
          { title: "Batman: Year One", pub: "DC", size: "h-[240px]", img: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=400&fit=crop" },
          { title: "Akira Vol 1", pub: "Kodansha", size: "h-[280px]", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=500&fit=crop" },
          { title: "Watchmen", pub: "DC", size: "h-[360px]", img: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=400&h=700&fit=crop" },
          { title: "Amar Chitra Katha", pub: "ACK", size: "h-[240px]", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop", badge: "NEW" },
          { title: "Spider-Man", pub: "Marvel", size: "h-[320px]", img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&h=600&fit=crop" },
          { title: "Tintin", pub: "Casterman", size: "h-[280px]", img: "https://images.unsplash.com/photo-1588636737525-4fc14fb38561?w=400&h=500&fit=crop" },
          { title: "Sandman", pub: "Vertigo", size: "h-[240px]", img: "https://images.unsplash.com/photo-1603991206138-04fb7b4155b1?w=400&h=400&fit=crop" },
        ].map((comic, i) => (
          <div key={i} className={`bg-white rounded-xl border-2 border-foreground overflow-hidden comic-shadow-sm flex flex-col group cursor-pointer relative`}>
            {comic.badge && (
              <div className="absolute top-3 right-3 bg-accent text-foreground font-display font-extrabold text-[10px] uppercase px-2 py-1 rounded border-2 border-foreground comic-shadow-sm transform rotate-3 z-20">
                {comic.badge}
              </div>
            )}
            <div className={`border-b-2 border-foreground overflow-hidden ${comic.size} relative`}>
              <SafeImg src={comic.img} alt={comic.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="p-3">
              <h3 className="font-display font-bold uppercase leading-tight">{comic.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-medium text-muted-foreground uppercase">{comic.pub}</span>
                <span className="w-2 h-2 rounded-full bg-green border border-foreground"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExploreLegos = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <div className="animate-in fade-in duration-500 bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <button onClick={() => setCurrentScreen('Explore')} className="font-display font-bold uppercase text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
          <ArrowRight size={16} className="transform rotate-180" /> Back to Explore
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase text-blue">The Lego Collection</h1>
          <p className="font-sans text-xl font-medium mt-2">Explore complete sets and new additions.</p>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input 
            type="text" 
            placeholder="Search LEGO sets..." 
            className="w-full bg-white border-2 border-foreground rounded-lg py-3 pl-10 pr-4 font-sans font-medium focus:outline-none focus:ring-2 focus:ring-blue comic-shadow-sm"
          />
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 hide-scrollbar">
        {['All', 'Complete Sets', 'New Additions', 'Available'].map((filter, i) => (
          <button key={filter} className={`flex-shrink-0 font-display font-bold uppercase px-4 py-2 rounded-full border-2 border-foreground ${i === 0 ? 'bg-foreground text-primary-foreground' : 'bg-background hover:bg-muted'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { title: "LEGO Harry Potter", theme: "Harry Potter", status: "Available", color: "bg-green", badge: "COMPLETE SET" },
          { title: "LEGO Star Wars", theme: "Star Wars", status: "Reserved", color: "bg-coral", badge: "NEW" },
          { title: "LEGO Technic", theme: "Technic", status: "Available", color: "bg-green" },
          { title: "LEGO Architecture", theme: "Architecture", status: "Available", color: "bg-green", badge: "COMPLETE SET" }
        ].map((lego, i) => (
          <div key={i} className="bg-white rounded-xl border-2 border-foreground overflow-hidden comic-shadow flex flex-col group relative">
            {lego.badge && (
              <div className="absolute top-3 right-3 bg-accent text-foreground font-display font-extrabold text-[10px] uppercase px-2 py-1 rounded border-2 border-foreground comic-shadow-sm transform rotate-3 z-20">
                {lego.badge}
              </div>
            )}
            <div className="h-48 bg-blue/10 border-b-2 border-foreground flex items-center justify-center p-6 relative">
               {/* Mock image placeholder */}
               <Package size={64} className="text-blue opacity-50 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-bold text-muted-foreground uppercase mb-1">{lego.theme}</span>
              <h3 className="font-display font-bold text-xl uppercase mb-4">{lego.title}</h3>
              <div className="mt-auto flex justify-between items-center">
                 <span className="font-display font-bold text-xs uppercase flex items-center gap-1">
                   <span className={`w-2 h-2 rounded-full border border-foreground ${lego.color}`}></span> {lego.status}
                 </span>
                 {lego.status === 'Available' && (
                   <button className="bg-white text-foreground font-bold uppercase text-xs px-3 py-1 border-2 border-foreground rounded-md hover:bg-blue hover:text-white transition-colors">
                     Reserve
                   </button>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExploreFood = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <div className="animate-in fade-in duration-500 bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <button onClick={() => setCurrentScreen('Explore')} className="font-display font-bold uppercase text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
          <ArrowRight size={16} className="transform rotate-180" /> Back to Explore
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase text-green">The Menu</h1>
          <p className="font-sans text-xl font-medium mt-2">Something good to eat while you read, play and hang out.</p>
        </div>
      </div>

      <div className="flex gap-4 border-b-4 border-foreground mb-8">
        <button className="font-display font-extrabold uppercase text-xl pb-3 border-b-4 border-foreground -mb-1 text-foreground">Fixed Menu</button>
        <button className="font-display font-extrabold uppercase text-xl pb-3 text-muted-foreground hover:text-foreground">Daily Specials</button>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 hide-scrollbar">
        {['All', 'Drinks', 'Coffee', 'Snacks', 'Meals', 'Desserts'].map((filter, i) => (
          <button key={filter} className={`flex-shrink-0 font-display font-bold uppercase px-4 py-2 rounded-full border-2 border-foreground ${i === 0 ? 'bg-foreground text-primary-foreground' : 'bg-background hover:bg-muted'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Daily Special Highlight */}
        <div className="md:col-span-2 bg-green text-foreground rounded-2xl border-4 border-foreground p-8 comic-shadow mb-6 flex flex-col md:flex-row items-center gap-8 transform -rotate-1">
          <div className="bg-white w-32 h-32 md:w-48 md:h-48 rounded-xl border-4 border-foreground flex-shrink-0 flex items-center justify-center transform rotate-3">
             <Coffee size={48} className="text-green opacity-50" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-white text-foreground font-extrabold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase mb-3 transform -rotate-2">Today's Special</span>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-2">The Dungeon Master Burger</h3>
            <p className="font-sans font-bold text-foreground/80 mb-4 text-lg">Double patty, spicy mayo, caramelized onions, and a side of fries. Roll for initiative.</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
               <span className="font-display font-extrabold text-2xl">$12</span>
               <span className="font-display font-bold text-sm uppercase bg-white border-2 border-foreground px-3 py-1 rounded-md">Available Today</span>
            </div>
          </div>
        </div>

        {/* Regular Items */}
        {[
          { title: "Classic Cold Coffee", desc: "House blend cold brew with vanilla ice cream.", price: "$5", cat: "Coffee" },
          { title: "Loaded Fries", desc: "Crispy fries with cheese sauce and jalapeños.", price: "$7", cat: "Snacks" },
          { title: "Mushroom Melt Sandwich", desc: "Grilled sourdough with wild mushrooms and cheddar.", price: "$9", cat: "Meals" },
          { title: "Brownie Sundae", desc: "Warm chocolate brownie with salted caramel ice cream.", price: "$6", cat: "Desserts" }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl border-2 border-foreground p-6 comic-shadow flex items-start gap-4">
             <div className="w-20 h-20 bg-background border-2 border-foreground rounded-lg flex-shrink-0 flex items-center justify-center">
               <Coffee size={24} className="text-muted-foreground opacity-50" />
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-start mb-1">
                 <h3 className="font-display font-bold text-xl uppercase">{item.title}</h3>
                 <span className="font-display font-extrabold">{item.price}</span>
               </div>
               <p className="font-sans text-muted-foreground text-sm mb-3">{item.desc}</p>
               <span className="text-xs font-bold text-muted-foreground uppercase border border-muted-foreground/30 px-2 py-1 rounded-md">{item.cat}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExploreEvents = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <div className="animate-in fade-in duration-500 bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <button onClick={() => setCurrentScreen('Explore')} className="font-display font-bold uppercase text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
          <ArrowRight size={16} className="transform rotate-180" /> Back to Explore
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase text-coral">What's Happening</h1>
          <p className="font-sans text-xl font-medium mt-2">There's always something happening at Comics & Brics.</p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 hide-scrollbar">
        {['All', 'Tournaments', 'Meetups', 'Workshops', 'Parties', 'Community'].map((filter, i) => (
          <button key={filter} className={`flex-shrink-0 font-display font-bold uppercase px-4 py-2 rounded-full border-2 border-foreground ${i === 0 ? 'bg-foreground text-primary-foreground' : 'bg-background hover:bg-muted'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-6 mb-16">
        {[
          { title: "Magic: Draft Night", desc: "Join our weekly MTG draft. Beginners welcome! Booster packs included.", date: "Friday, 7 PM", cat: "Meetups", status: "Registration Open", color: "bg-green" },
          { title: "Indie Comic Meetup", desc: "Discover local artists and self-published gems. Panel discussion at 4 PM.", date: "Saturday, 3 PM", cat: "Community", status: "Upcoming", color: "bg-coral" },
          { title: "Catan Tournament", desc: "Test your trading skills. Prizes for the top 3. Entry fee applies.", date: "Sunday, 5 PM", cat: "Tournaments", status: "Full", color: "bg-blue" }
        ].map((event, i) => (
          <div key={i} className="bg-white rounded-xl border-2 border-foreground p-6 md:p-8 comic-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 hover:comic-shadow-hover hover:-translate-y-1 transition-all group">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-display font-bold text-sm uppercase bg-coral text-white border-2 border-foreground px-3 py-1 rounded-full">{event.date}</span>
                <span className="font-display font-bold text-xs uppercase text-muted-foreground border border-muted-foreground/30 px-2 py-1 rounded-md">{event.cat}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl uppercase mb-2 group-hover:text-coral transition-colors">{event.title}</h3>
              <p className="font-sans font-medium text-muted-foreground">{event.desc}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0 border-t-2 border-dashed border-foreground/20 md:border-none pt-4 md:pt-0">
               <div className="flex items-center gap-2">
                 <span className={`w-3 h-3 rounded-full border-2 border-foreground ${event.color}`}></span>
                 <span className="font-display font-bold text-sm uppercase">{event.status}</span>
               </div>
               <button className={`w-full md:w-auto font-display font-extrabold uppercase px-6 py-3 rounded-lg border-2 border-foreground comic-shadow-sm transition-all ${
                 event.status === 'Full' 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50' 
                  : 'bg-white hover:bg-foreground hover:text-white active:translate-y-1 active:comic-shadow-none'
               }`}>
                 RSVP
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Games = () => (
  <div className="animate-in fade-in duration-500 bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-4">Game Night Starts Here.</h1>
        <p className="font-sans text-xl font-medium">Whether you're here for a 20-minute game or a 4-hour campaign, find something that fits your table.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {['Party', 'Strategy', '2 Players', 'Co-op', 'Family', 'Expert'].map((filter, i) => (
          <button key={filter} className={`font-display font-bold uppercase px-5 py-2 rounded-full border-2 border-foreground ${i === 1 ? 'bg-foreground text-primary-foreground' : 'bg-background hover:bg-muted'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Prominent Help Card */}
        <div className="bg-accent text-foreground rounded-2xl border-2 border-foreground p-8 comic-shadow flex flex-col justify-center items-center text-center">
          <h3 className="font-display font-extrabold text-3xl uppercase mb-2">Never played it before?</h3>
          <p className="font-sans text-lg font-medium mb-6 text-foreground/90">No worries. We'll teach you.</p>
          <button className="bg-foreground text-primary-foreground font-display font-bold uppercase px-6 py-3 rounded-lg border-2 border-foreground flex items-center gap-2 hover:bg-opacity-90">
            Ask About A Game <ArrowRight size={18} />
          </button>
        </div>

        {[
          { title: "Warhammer 40K", players: "2", time: "180m", diff: "Expert", img: warhammerTable },
          { title: "Twilight Imperium", players: "3-6", time: "240m", diff: "Strategy", img: spaceGame },
          { title: "D&D One-Shot", players: "3-6", time: "180m", diff: "Co-op", img: dungeonTerrain },
          { title: "Mini Painting", players: "1+", time: "90m", diff: "Workshop", img: miniatures },
          { title: "Dungeon Crawl", players: "2-5", time: "120m", diff: "Family", img: gameNight }
        ].map((game, i) => (
          <div key={i} className="bg-white rounded-2xl border-2 border-foreground overflow-hidden comic-shadow flex flex-col">
            <div className="h-48 border-b-2 border-foreground overflow-hidden">
              <SafeImg src={game.img} alt={game.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display font-bold text-2xl uppercase mb-4">{game.title}</h3>
              <div className="mt-auto space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground uppercase flex items-center gap-2"><MapPin size={16}/> Players</span>
                  <span>{game.players}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground uppercase flex items-center gap-2"><Clock size={16}/> Time</span>
                  <span>{game.time}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium pt-2 border-t border-muted">
                  <span className="text-muted-foreground uppercase">Difficulty</span>
                  <span className="font-bold text-blue uppercase">{game.diff}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);



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
                  className={`rounded-2xl border-4 overflow-hidden comic-shadow cursor-pointer transition-all duration-300 flex flex-col ${
                    isSelected 
                      ? 'border-foreground bg-accent transform -translate-y-2 comic-shadow-hover' 
                      : 'border-foreground bg-white hover:-translate-y-1 hover:comic-shadow-hover'
                  }`}
                >
                  <div className="h-48 border-b-4 border-foreground overflow-hidden">
                    <SafeImg src={loc.image} alt={loc.name} className={`w-full h-full object-cover transition-transform duration-500 ${isSelected ? 'scale-105' : 'grayscale hover:grayscale-0'}`} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display font-extrabold text-3xl uppercase">{loc.name}</h3>
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-1 border-2 border-foreground rounded bg-white ${loc.status === 'OPEN TODAY' ? 'text-green' : 'text-muted-foreground'}`}>
                        {loc.status}
                      </span>
                    </div>
                    <p className="font-sans font-bold text-muted-foreground mb-4">{loc.address}</p>
                    <p className="font-display font-bold text-sm uppercase flex items-center gap-2 mb-6">
                      <Clock size={16} /> {loc.hours}
                    </p>
                    <div className="mt-auto">
                      <button className={`w-full font-display font-bold uppercase text-sm px-4 py-3 rounded border-2 border-foreground transition-colors ${isSelected ? 'bg-white text-foreground' : 'bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-white'}`}>
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
                    <div className={`w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center ${item.color}`}>
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
const Footer = ({ setCurrentScreen }: { setCurrentScreen: (s: string) => void }) => (
  <footer className="relative bg-accent text-foreground border-t-4 border-foreground py-16 overflow-hidden">
    <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left relative z-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white border-2 border-foreground comic-shadow px-3 py-1 transform -rotate-3">
            <span className="font-display font-extrabold text-2xl tracking-tighter uppercase">C&B</span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase leading-none">Comics & Brics</h2>
            <p className="font-display text-[10px] font-bold uppercase tracking-widest mt-1">Cafe • Comics • Games</p>
          </div>
        </div>
        <p className="font-sans font-bold text-foreground/80 bg-white/50 px-4 py-2 border-2 border-foreground rounded-full">Pune, Maharashtra</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-8 md:gap-16 font-display font-bold uppercase text-sm">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="inline-block px-4 py-2 border-2 border-transparent hover:bg-white hover:border-foreground hover:comic-shadow-sm hover:-rotate-2 transition-all text-foreground w-max">Instagram</a>
          <a href="#" className="inline-block px-4 py-2 border-2 border-transparent hover:bg-white hover:border-foreground hover:comic-shadow-sm hover:-rotate-2 transition-all text-foreground w-max">Google Maps</a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="inline-block px-4 py-2 border-2 border-transparent hover:bg-white hover:border-foreground hover:comic-shadow-sm hover:-rotate-2 transition-all text-foreground w-max">Contact</a>
          <a href="#" className="inline-block px-4 py-2 border-2 border-transparent hover:bg-white hover:border-foreground hover:comic-shadow-sm hover:-rotate-2 transition-all text-foreground w-max">Events</a>
          <button onClick={() => setCurrentScreen('Admin')} className="inline-block px-4 py-2 border-2 border-transparent hover:bg-white hover:border-foreground hover:comic-shadow-sm hover:rotate-2 transition-all text-foreground/70 hover:text-foreground w-max">Admin Login</button>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  if (currentScreen === 'Admin') {
    return <Admin onExit={() => setCurrentScreen('Home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-accent selection:text-foreground">
      <Nav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      
      <main className="flex-1">
        {currentScreen === 'Home' && <Home setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'Explore' && <Explore setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'ExploreComics' && <ExploreComics setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'ExploreLegos' && <ExploreLegos setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'ExploreFood' && <ExploreFood setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'ExploreEvents' && <ExploreEvents setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'Games' && <Games />}
        {currentScreen === 'Visit' && <Visit setCurrentScreen={setCurrentScreen} />}
        </main>

      <Footer setCurrentScreen={setCurrentScreen} />
    </div>
  );
}
