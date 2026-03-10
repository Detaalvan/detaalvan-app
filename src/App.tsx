import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Users, 
  Flame, 
  MessageSquare, 
  Star, 
  Info, 
  Home, 
  User, 
  ChevronLeft,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'coaching' | 'teamtraining' | 'teamtraining-tweedaagse' | 'teamtraining-losse-sessie' | 'teamtraining-traject-op-maat' | 'burnout' | 'contact' | 'reviews' | 'about';

interface TileProps {
  id: Page;
  icon: React.ReactNode;
  label: string;
  onClick: (id: Page) => void;
  subtitle?: string;
}

// --- Components ---

const Tile: React.FC<TileProps> = ({ id, icon, label, onClick, subtitle }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(id)}
    className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-3 transition-shadow hover:shadow-md w-full"
  >
    <div className="text-earth-primary w-10 h-10 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-earth-ink">{label}</span>
      {subtitle && <span className="text-[10px] text-earth-muted leading-tight">{subtitle}</span>}
    </div>
  </motion.button>
);

const DetailPage: React.FC<{ 
  title: string; 
  subtitle?: string;
  content: string; 
  onBack: () => void; 
  icon?: React.ReactNode;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}> = ({ title, subtitle, content, onBack, icon, imageUrl, ctaText = "Meer info / Aanvragen", ctaLink = "https://www.detaalvan.nl/contact" }) => (
  <motion.div
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    className="page-transition bg-earth-bg z-10 p-6"
  >
    <button 
      onClick={onBack}
      className="flex items-center gap-2 text-earth-muted mb-8 hover:text-earth-accent transition-colors"
    >
      <ChevronLeft size={20} className="text-earth-primary" />
      <span>Terug</span>
    </button>

    <div className="flex flex-col items-center text-center gap-6 mt-4">
      {imageUrl ? (
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="bg-white p-5 rounded-full shadow-sm text-earth-primary">
          {icon && React.cloneElement(icon as React.ReactElement, { size: 48 })}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-serif text-earth-accent">{title}</h2>
        {subtitle && <p className="text-earth-muted text-sm italic">{subtitle}</p>}
      </div>
      <p className="text-lg leading-relaxed text-earth-ink/80 max-w-md">
        {content}
      </p>
      
      <a 
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-earth-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:bg-opacity-90 transition-all active:scale-95"
      >
        {ctaText}
        <ArrowRight size={18} className="text-earth-primary" />
      </a>
    </div>
  </motion.div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>(['home']);

  const navigateTo = (page: Page) => {
    setHistory(prev => [...prev, page]);
    setCurrentPage(page);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentPage(newHistory[newHistory.length - 1]);
    } else {
      setCurrentPage('home');
    }
  };

  // Handle bottom nav clicks
  const handleNavClick = (page: Page) => {
    if (page === 'home') {
      setHistory(['home']);
      setCurrentPage('home');
    } else {
      navigateTo(page);
    }
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-earth-bg relative shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <header className="p-8 pt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-serif text-earth-primary mb-2">DeTaalVan</h1>
          <p className="text-earth-muted text-sm italic">Wij maken zichtbaar wat anderen missen.</p>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-6 pb-24">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-earth-ink">Welkom bij DeTaalVan</p>
            <img 
  src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=925,height=1280/image/543441179/b4f07c42-4aaa-49f0-ba2d-a75ee12d6227.png"
  alt="Sjoerd Kersten"
  style={{width: '100%', maxHeight: '320px', objectFit: 'contain', borderRadius: '16px', background: '#F5F0EB'}}
/>
                <p className="text-sm text-earth-muted">Psychomotorische therapie, coaching en teamtraining. Kies een onderwerp om meer te lezen.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Tile id="coaching" icon={<Brain />} label="Coaching" onClick={navigateTo} />
                <Tile id="teamtraining" icon={<Users />} label="Teamtraining" onClick={navigateTo} />
                <Tile id="burnout" icon={<Flame />} label="Burn-out" onClick={navigateTo} />
                <Tile id="contact" icon={<MessageSquare />} label="Contact" onClick={navigateTo} />
                <Tile id="reviews" icon={<Star />} label="Reviews" onClick={navigateTo} />
                <Tile id="about" icon={<Info />} label="Over Sjoerd" onClick={navigateTo} />
              </div>
            </motion.div>
          )}

          {currentPage === 'coaching' && (
            <DetailPage 
              key="coaching"
              title="Coaching"
              imageUrl="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=925,height=1280/image/543441174/67f7b35e-a5dc-4235-b0c9-012b8584ac1b.png"
              icon={<Brain />}
              content="Iedereen heeft een autopilot. Niet iedereen ervaart regie. Word bij DeTaalVan meester over je innerlijk dialoog — met hoofd, hart en lijf. Minder reageren, meer kiezen. Zodat je keuzes maakt die écht van jou zijn. Gemiddeld 4 sessies. Vaak vergoed door je werkgever."
              onBack={goBack}
              ctaLink="mailto:info@detaalvan.nl"
            />
          )}

          {currentPage === 'teamtraining' && (
            <motion.div
              key="teamtraining"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="page-transition bg-earth-bg p-6"
            >
              <button onClick={goBack} className="flex items-center gap-2 text-earth-muted mb-8">
                <ChevronLeft size={20} className="text-earth-primary" />
                <span>Terug</span>
              </button>
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">Teamtraining</h2>
                <p className="text-lg text-earth-ink font-medium">Elk team heeft een eigen taal. Wij helpen jullie die vinden.</p>
                <p className="text-xs text-earth-muted italic">Alle trainingen verzorgen wij samen met Marvin Levant van OutsidetheBoks Academy.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Tile id="teamtraining-tweedaagse" icon={<Users />} label="Tweedaagse" subtitle="Twee sessies. Eén doorlopende ervaring." onClick={navigateTo} />
                <Tile id="teamtraining-losse-sessie" icon={<Users />} label="Losse sessie" subtitle="Drie uur. Direct effect." onClick={navigateTo} />
                <Tile id="teamtraining-traject-op-maat" icon={<Users />} label="Traject op maat" subtitle="Van inzicht naar duurzame gedragsverandering." onClick={navigateTo} />
              </div>
            </motion.div>
          )}

          {currentPage === 'teamtraining-tweedaagse' && (
            <DetailPage 
              key="teamtraining-tweedaagse"
              title="Tweedaagse"
              icon={<Users />}
              content="Dag 1: bewegen, ontdekken en reflecteren — met boksen en de IOM-methode als basis. Dag 2 vormt zich vanuit dag 1: verdieping door video- en foto-analyse, en de thema's die jouw team zelf aandraagt. Geen theorielessen met powerpoints. Wel een ervaring die blijft."
              onBack={goBack}
              ctaLink="mailto:info@detaalvan.nl"
            />
          )}

          {currentPage === 'teamtraining-losse-sessie' && (
            <DetailPage 
              key="teamtraining-losse-sessie"
              title="Losse sessie"
              icon={<Users />}
              content="Boksen als vertrekpunt voor communicatie, verbinding en teamdynamiek. In drie uur leert je team de eigen communicatiestijl herkennen en effectief inzetten in interacties, versterkt de onderlinge dynamiek en krijgen leidinggevenden concrete handvatten. Ervaringsgericht, direct toepasbaar op de werkvloer."
              onBack={goBack}
              ctaLink="mailto:info@detaalvan.nl"
            />
          )}

          {currentPage === 'teamtraining-traject-op-maat' && (
            <DetailPage 
              key="teamtraining-traject-op-maat"
              title="Traject op maat"
              icon={<Users />}
              content="Sommige teams hebben meer nodig dan één of twee dagen. In een traject op maat werken we stap voor stap van inzicht naar overzicht naar regie — met boksen, IOM-methode en video-analyse als vaste kern. De thematiek bepaal jij: sales, communicatie, leiderschap of teamdynamiek. Het resultaat is concreet, direct en blijvend."
              onBack={goBack}
              ctaLink="mailto:info@detaalvan.nl"
            />
          )}

          {currentPage === 'burnout' && (
            <DetailPage 
              key="burnout"
              title="Burn-out"
              subtitle="Altijd aan. Nooit echt uit."
              icon={<Flame />}
              content="Gejaagd. Grenzen kwijt. Het gevoel dat je jezelf een beetje bent verloren. Bij DeTaalVan beginnen we bij het lichaam, want daar begint herstel echt. Van regulatie naar inzicht, van inzicht naar regie. Stap voor stap, afgestemd op jouw situatie."
              onBack={goBack}
              ctaLink="mailto:info@detaalvan.nl"
            />
          )}

          {currentPage === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="page-transition bg-earth-bg p-6"
            >
              <button onClick={goBack} className="flex items-center gap-2 text-earth-muted mb-8">
                <ChevronLeft size={20} className="text-earth-primary" />
                <span>Terug</span>
              </button>
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">Reviews</h2>
                <p className="text-earth-muted text-sm italic">Wat anderen zeggen.</p>
              </div>
              <div className="space-y-6 mb-12">
                {[
                  "De coaching heeft mij meer rust en vertrouwen gegeven, waardoor ik sterker in mijn schoenen sta en de regie weer in handen voel te hebben.",
                  "Nu kan ik kiezen om naar mijn lichaam en grenzen te luisteren, waardoor spanning minder opbouwt en paniekaanvallen verminderen.",
                  "Ik ga bewuster door mijn dag heen en voel me aan het einde van de dag minder uitgeput."
                ].map((text, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 italic text-earth-ink/80">
                    "{text}"
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 items-center">
                <a 
                  href="https://share.google/T64QxojHKzQTyNgGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs bg-earth-accent text-white px-6 py-3 rounded-full font-medium text-center shadow-md hover:bg-opacity-90 transition-all text-sm"
                >
                  Lees alle reviews op Google
                </a>
                <a 
                  href="https://share.google/T64QxojHKzQTyNgGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs bg-white text-earth-accent border border-earth-accent px-6 py-3 rounded-full font-medium text-center shadow-sm hover:bg-earth-bg transition-all text-sm"
                >
                  Laat zelf een review achter
                </a>
              </div>
            </motion.div>
          )}

          {currentPage === 'about' && (
            <DetailPage 
              key="about"
              title="Over Sjoerd Kersten"
              subtitle="Specialist in innerlijk dialoog en regie."
              imageUrl="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=13;908;2891;841,width=960,height=1280/image/404499409/3473e8e5-c864-4275-804c-e3514e40ced0.jpg"
              content="Sjoerd Kersten is psychomotorisch therapeut, coach en trainer met duizenden uren ervaring. Hij werkt met professionals, teams en organisaties aan één centrale vraag: wie stuurt jou, en wanneer stuur jij zelf? Met een achtergrond in de ziekenhuis psychiatrie en 8 jaar als ondernemer combineert Sjoerd Kersten psychomotorische therapie, biofeedback en de IOM-methode tot een aanpak die lichaam, hoofd en hart samenbrengt. Direct, holistisch and gericht op blijvende verandering."
              onBack={goBack}
              ctaText="Meer over Sjoerd Kersten"
              ctaLink="https://www.detaalvan.nl/over-mij/"
            />
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="page-transition bg-earth-bg p-6 flex flex-col items-center"
            >
              <button onClick={goBack} className="self-start flex items-center gap-2 text-earth-muted mb-8">
                <ChevronLeft size={20} className="text-earth-primary" />
                <span>Terug</span>
              </button>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-earth-accent mb-2">Contact</h2>
                <p className="text-earth-muted italic">Bel, app of mail. Direct contact. Snel reactie.</p>
              </div>

              <div className="w-full max-w-md space-y-4 mb-10">
                <a 
                  href="tel:+31643549491"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-primary">
                    <Phone size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">Bellen</span>
                </a>

                <a 
                  href="mailto:info@detaalvan.nl"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-primary">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">Mailen</span>
                </a>

                <a 
                  href="https://wa.me/31643549491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-primary">
                    <MessageCircle size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">WhatsApp</span>
                </a>

                <a 
                  href="https://www.detaalvan.nl/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-primary">
                    <Globe size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">Contactformulier</span>
                </a>
              </div>

              <div className="w-full max-w-md border-t border-black/10 pt-8 flex flex-col items-center">
                <p className="text-earth-muted text-sm font-medium uppercase tracking-widest mb-6">Volg DeTaalVan</p>
                <div className="flex gap-8">
                  <a 
                    href="https://www.instagram.com/detaalvan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-earth-primary hover:scale-110 transition-transform"
                  >
                    <Instagram size={28} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/detaalvan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-earth-primary hover:scale-110 transition-transform"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a 
                    href="https://www.detaalvan.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-earth-primary hover:scale-110 transition-transform"
                  >
                    <Globe size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-black/5 px-8 py-4 flex justify-between items-center z-50">
        <NavButton 
          active={currentPage === 'home'} 
          icon={<Home size={24} />} 
          label="Home" 
          onClick={() => handleNavClick('home')} 
        />
        <NavButton 
          active={currentPage === 'contact'} 
          icon={<MessageSquare size={24} />} 
          label="Contact" 
          onClick={() => handleNavClick('contact')} 
        />
        <NavButton 
          active={currentPage === 'about'} 
          icon={<User size={24} />} 
          label="Over mij" 
          onClick={() => handleNavClick('about')} 
        />
      </nav>
    </div>
  );
}

const NavButton: React.FC<{ 
  active: boolean; 
  icon: React.ReactNode; 
  label: string; 
  onClick: () => void 
}> = ({ active, icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-earth-accent' : 'text-earth-muted'}`}
  >
    <div className={active ? 'text-earth-primary' : 'text-earth-muted'}>
      {icon}
    </div>
    <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
  </button>
);
