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
  ChevronDown,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  Calendar
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'coaching' | 'teamtraining' | 'teamtraining-tweedaagse' | 'teamtraining-losse-sessie' | 'teamtraining-traject-op-maat' | 'burnout' | 'contact' | 'reviews' | 'about' | 'sales-training';

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
  imageStyle?: React.CSSProperties;
  bannerUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}> = ({ title, subtitle, content, onBack, icon, imageUrl, imageStyle, bannerUrl, ctaText = "Meer info / Aanvragen", ctaLink = "https://www.detaalvan.nl/contact", onCtaClick }) => (
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
      <ChevronLeft size={20} />
      <span>Terug</span>
    </button>

    <div className="flex flex-col items-center text-center gap-6 mt-4">
      {imageUrl && (
        <div className="w-44 h-44 rounded-full overflow-hidden shadow-md border-4 border-white">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            style={imageStyle || { objectPosition: 'center 5%' }}
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {icon && (
        imageUrl ? (
          <div className="text-[#233652]">
            {React.cloneElement(icon as React.ReactElement, { size: 32 })}
          </div>
        ) : (
          <div className="bg-white p-5 rounded-full shadow-sm text-earth-primary">
            {React.cloneElement(icon as React.ReactElement, { size: 48 })}
          </div>
        )
      )}

      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-serif text-earth-accent">{title}</h2>
        {subtitle && <p className="text-earth-muted text-sm italic">{subtitle}</p>}
      </div>

      {bannerUrl && (
        <img 
          src={bannerUrl} 
          alt={title} 
          className="w-full h-[220px] object-cover object-[top_center] rounded-2xl shadow-sm"
          referrerPolicy="no-referrer"
        />
      )}

      <p className="text-lg leading-relaxed text-earth-ink/80 max-w-md whitespace-pre-wrap">
        {content}
      </p>
      
      {onCtaClick ? (
        <button 
          onClick={onCtaClick}
          className="mt-8 bg-earth-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:bg-opacity-90 transition-all active:scale-95"
        >
          {ctaText}
          <ArrowRight size={18} />
        </button>
      ) : (
        <a 
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-earth-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:bg-opacity-90 transition-all active:scale-95"
        >
          {ctaText}
          <ArrowRight size={18} />
        </a>
      )}
    </div>
  </motion.div>
);

const GoogleReviewBadge: React.FC = () => (
  <a 
    href="https://www.google.com/maps/search/DeTaalVan+Lelystad"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 mx-auto w-fit hover:shadow-md transition-all active:scale-95"
  >
    <div className="text-2xl font-bold text-earth-ink leading-none">4.7</div>
    <div className="flex flex-col justify-center">
      <div className="flex text-[#FBBC05] text-sm mb-0.5">
        <span>★</span><span>★</span><span>★</span><span>★</span>
        <div className="relative">
          <span className="text-gray-200">★</span>
          <span className="absolute top-0 left-0 w-[75%] overflow-hidden">★</span>
        </div>
      </div>
      <div className="text-[10px] text-earth-muted leading-none">
        9 reviews · Beoordeeld op
      </div>
    </div>
    <div className="flex font-bold text-lg tracking-tighter leading-none">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </div>
  </a>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>(['home']);
  const [lang, setLang] = useState<'nl' | 'en'>('nl');
  const [isIomOpen, setIsIomOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const t = (nl: string, en: string) => lang === 'nl' ? nl : en;

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
      <header className="p-8 pt-12 text-center relative">
        <div className="absolute top-8 right-8 flex items-center gap-2 text-[#233652] text-xs z-50">
          <button 
            onClick={() => setLang('nl')}
            className={`transition-all ${lang === 'nl' ? 'font-bold underline' : 'opacity-50'}`}
          >
            NL
          </button>
          <span className="opacity-20">|</span>
          <button 
            onClick={() => setLang('en')}
            className={`transition-all ${lang === 'en' ? 'font-bold underline' : 'opacity-50'}`}
          >
            EN
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-serif text-earth-primary mb-1">Sjoerd Kersten</h1>
          <p className="text-earth-muted text-sm italic">{t('Ik maak zichtbaar wat anderen missen.', 'I make visible what others miss.')}</p>
          <p className="text-[10px] text-earth-muted/60 mt-1 uppercase tracking-widest">DeTaalVan</p>
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
              <img 
                src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=925,height=1280/image/543441179/b4f07c42-4aaa-49f0-ba2d-a75ee12d6227.png" 
                alt="Sjoerd Kersten" 
                className="w-full h-auto max-h-[320px] object-contain bg-[#F5F0EB] rounded-2xl shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <p className="text-sm text-earth-muted">{t('Klik op een onderwerp om meer te lezen.', 'Click on a topic to read more.')}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Tile id="coaching" icon={<Brain />} label="Coaching" onClick={navigateTo} />
                <Tile id="teamtraining" icon={<Users />} label={t('Teamtraining', 'Team Training')} onClick={navigateTo} />
                <Tile id="burnout" icon={<Flame />} label="Burn-out" onClick={navigateTo} />
                <Tile id="contact" icon={<MessageSquare />} label="Contact" onClick={navigateTo} />
                <Tile id="reviews" icon={<Star />} label="Reviews" onClick={navigateTo} />
                <Tile id="about" icon={<Info />} label={t('Over Sjoerd', 'About Sjoerd')} onClick={navigateTo} />
              </div>

              <div className="pt-4">
                <GoogleReviewBadge />
              </div>
            </motion.div>
          )}

          {currentPage === 'coaching' && (
            <DetailPage 
              key="coaching"
              title="Coaching"
              icon={<Brain />}
              imageUrl="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=925,height=1280/image/543441174/67f7b35e-a5dc-4235-b0c9-012b8584ac1b.png"
              content={t(
                "Iedereen heeft een autopilot. Niet iedereen ervaart regie. Wordt bij DeTaalVan meester over je innerlijke dialoog. Met hoofd, hart en lijf. Zodat je keuzes maakt die écht van jou zijn.",
                "Everyone has an autopilot. Not everyone experiences control. Master your inner dialogue at DeTaalVan. With head, heart and body. So you make choices that are truly yours."
              )}
              onBack={goBack}
              ctaText={t('Meer info / Aanvragen', 'More info / Request')}
              onCtaClick={() => navigateTo('contact')}
            />
          )}

          {currentPage === 'teamtraining' && (
            <motion.div
              key="teamtraining"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="page-transition bg-earth-bg z-10 p-6"
            >
              <button 
                onClick={goBack}
                className="flex items-center gap-2 text-earth-muted mb-8 hover:text-earth-accent transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>

              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">{t('Teamtraining', 'Team Training')}</h2>
                <p className="text-lg text-earth-ink font-medium">{t('Elk team heeft een eigen taal. Wij helpen jullie die vinden.', 'Every team has its own language. We help you find it.')}</p>
                <p className="text-xs text-earth-muted italic">
                  {t(
                    'Alle trainingen zijn op maat en verzorg ik samen met Marvin Levant van ',
                    'All training sessions are tailor-made and I provide them together with Marvin Levant from '
                  )}
                  <a 
                    href="https://www.outsidetheboksacademy.nl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-[#233652]"
                  >
                    OutsidetheBoks Academy
                  </a>.
                </p>
              </div>

              <iframe
                src="https://www.youtube.com/embed/73E89pJaDWs"
                style={{
                  width: '60%',
                  aspectRatio: '9/16',
                  borderRadius: '16px',
                  border: 'none',
                  display: 'block',
                  margin: '0 auto 24px auto'
                }}
                allow="autoplay"
              />

              <div className="space-y-4 mb-10">
                {[
                  {
                    title: t("Communicatie Training", "Communication Training"),
                    description: t("Effectiever samenwerken door bewust te regisseren in communicatie.", "Collaborate more effectively by consciously directing communication.")
                  },
                  {
                    title: t("Teamdynamiek & Samenwerking", "Team Dynamics & Collaboration"),
                    description: t("Inzicht in teamdynamiek, boksen als metafoor voor communicatie, teambuilding. Sterker team, meer begrip, betere samenwerking.", "Insight into team dynamics, boxing as a metaphor for communication, teambuilding. Stronger team, more understanding, better collaboration.")
                  },
                  {
                    title: t("Sales training", "Sales training"),
                    description: t("Krachtige salestrainingen rond actuele thema's zoals klantgerichtheid, onderhandelingstechnieken, communicatie, samenwerking en persoonlijk leiderschap.", "Powerful sales training around current themes such as customer focus, negotiation techniques, communication, collaboration and personal leadership."),
                    id: 'sales-training' as Page
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white p-5 rounded-2xl shadow-sm border border-black/5 ${item.id ? 'cursor-pointer hover:border-earth-accent/30 transition-colors' : ''}`}
                    onClick={item.id ? () => navigateTo(item.id) : undefined}
                  >
                    <h3 className="font-bold text-earth-ink mb-1">{item.title}</h3>
                    <p className="text-sm text-earth-ink/80">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="w-full max-w-xs bg-earth-primary text-white px-6 py-4 rounded-full font-medium text-center shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  {t('Meer info / Aanvragen', 'More info / Request')}
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 'sales-training' && (
            <motion.div
              key="sales-training"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="page-transition bg-earth-bg z-10 p-6"
            >
              <button 
                onClick={() => navigateTo('teamtraining')}
                className="flex items-center gap-2 text-earth-muted mb-8 hover:text-earth-accent transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>

              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">{t('Sales training', 'Sales training')}</h2>
              </div>

              <iframe
                src="https://www.youtube.com/embed/73E89pJaDWs"
                width="60%"
                style={{aspectRatio: '9/16', borderRadius: '16px', border: 'none', display: 'block', margin: '0 auto 24px auto'}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <div className="space-y-8 text-earth-ink mb-12">
                <div className="px-2">
                  <p className="text-sm text-earth-muted leading-relaxed text-center max-w-sm mx-auto">
                    {t(
                      "In sales draait alles om het opbouwen van waardevolle verbindingen en vertrouwen. Het gaat niet alleen om het sluiten van deals, maar om het echt begrijpen van de behoeften van je klanten en het bieden van oplossingen die een verschil maken. Door authentiek te zijn en oprechte interesse te tonen, bouw je langdurige relaties op die verder gaan dan een enkele transactie.",
                      "In sales, it's all about building valuable connections and trust. It's not just about closing deals, but about truly understanding your customers' needs and providing solutions that make a difference. By being authentic and showing genuine interest, you build long-lasting relationships that go beyond a single transaction."
                    )}
                  </p>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsIomOpen(!isIomOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full">
                      {t("Waarom boksen en de IOM-methode?", "Why boxing and the IOM method?")}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-earth-muted transition-transform ${isIomOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isIomOpen && (
                    <div className="pt-4 pb-2">
                      <p className="text-sm text-earth-muted leading-relaxed whitespace-pre-line">
                        {t(
                          "Boksen is meer dan een fysieke sport. Het is een dynamisch spel van actie en reactie, strategie en timing. Net als in de ring draait het in salesteams om observatie, timing, actie en reactie. Het achterhalen van de behoeften van de klant staat daarbij centraal.\n\nDe IOM-methode voegt hier een cruciale laag aan toe. Waar boksen de buitenkant traint: reactie, timing en samenwerking. Richt de IOM-methode zich op de binnenkant: het innerlijk dialoog. Wie stuurt jouw reacties? De autopilot of de regisseur? Door bewust te leren schakelen tussen hoofd, hart en lijf worden salesgesprekken authentieker, effectiever en duurzamer.",
                          "Boxing is more than a physical sport. It is a dynamic game of action and reaction, strategy and timing. Just like in the ring, sales teams are all about observation, timing, action and reaction. Finding out the customer's needs is central to this.\n\nThe IOM method adds a crucial layer to this. Where boxing trains the outside: reaction, timing and cooperation. The IOM method focuses on the inside: the inner dialogue. Who controls your reactions? The autopilot or the director? By learning to consciously switch between head, heart and body, sales conversations become more authentic, effective and sustainable."
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-earth-accent px-2">{t("Thema's", "Themes")}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Verkoop en onderhandeltechnieken", "Sales and negotiation techniques")}
                      </span>
                      <span className="text-[10px] text-earth-muted leading-tight text-center mt-1">
                        {t("Overtuigend communiceren en met vertrouwen onderhandelen.", "Communicate persuasively and negotiate with confidence.")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Bouwen aan klantrelaties", "Building customer relationships")}
                      </span>
                      <span className="text-[10px] text-earth-muted leading-tight text-center mt-1">
                        {t("Klantbehoeften ontdekken en vertalen naar oplossingen.", "Discover customer needs and translate them into solutions.")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Presentatie en communicatie", "Presentation and communication")}
                      </span>
                      <span className="text-[10px] text-earth-muted leading-tight text-center mt-1">
                        {t("Actief luisteren, storytelling en impact maken.", "Active listening, storytelling and making an impact.")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Persoonlijke ontwikkeling", "Personal development")}
                      </span>
                      <span className="text-[10px] text-earth-muted leading-tight text-center mt-1">
                        {t("Groeimindset, tegenslagen overwinnen en motivatie.", "Growth mindset, overcoming setbacks and motivation.")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsResultOpen(!isResultOpen)}
                    className="flex items-center justify-between w-full text-left py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg">
                      {t("Resultaat na de training", "Result after the training")}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-earth-muted transition-transform ${isResultOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div className="pt-4 pb-2">
                    {!isResultOpen ? (
                      <div className="space-y-1">
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Verbeterde Communicatievaardigheden", "Improved Communication Skills")}
                        </p>
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Verhoogd Zelfbewustzijn en Persoonlijke Groei", "Increased Self-Awareness and Personal Growth")}
                        </p>
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Integratie van verkooptechnieken met eigen stijl", "Integration of sales techniques with own style")}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Verbeterde Communicatievaardigheden:", "Improved Communication Skills:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Deelnemers leren effectiever en authentieker te communiceren, wat leidt tot betere klantrelaties en samenwerking binnen teams.",
                              "Participants learn to communicate more effectively and authentically, leading to better customer relationships and collaboration within teams."
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Verhoogd Zelfbewustzijn en Persoonlijke Groei:", "Increased Self-Awareness and Personal Growth:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Door middel van reflectie en zelfontdekking ontwikkelen deelnemers een dieper inzicht in hun eigen gedrag en communicatiestijl, wat hen helpt om zelfverzekerder en doelgerichter te handelen.",
                              "Through reflection and self-discovery, participants develop a deeper insight into their own behavior and communication style, which helps them act more confidently and purposefully."
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Integratie van verkooptechnieken met eigen stijl:", "Integration of sales techniques with own style:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Deelnemers leren hoe ze verkooptheorieën en technieken kunnen combineren met hun eigen authentieke stijl, wat resulteert in sterkere en duurzamere klantrelaties.",
                              "Participants learn how to combine sales theories and techniques with their own authentic style, resulting in stronger and more sustainable customer relationships."
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-2">
                  <div className="w-full space-y-3">
                    <h3 className="font-serif text-earth-accent text-lg mb-4">
                      {t("Praktische informatie", "Practical information")}
                    </h3>
                    
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("Duur", "Duration")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Halve dag, hele dag of traject", "Half day, full day or trajectory")}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("Locatie", "Location")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Door heel Nederland", "Throughout the Netherlands")}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("Deelnemers", "Participants")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Minimaal 6", "Minimum 6")}
                      </span>
                    </div>

                    <div className="flex justify-between pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("Prijs", "Price")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Op maat", "Custom")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="w-full max-w-xs bg-earth-primary text-white px-6 py-4 rounded-full font-medium text-center shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  {t('Meer info / Aanvragen', 'More info / Request')}
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 'burnout' && (
            <DetailPage 
              key="burnout"
              title="Burn-out"
              subtitle={t("Altijd aan. Nooit echt uit.", "Always on. Never really off.")}
              icon={<Flame />}
              content={t(
                "Gejaagd. Grenzen kwijt. Het gevoel dat je jezelf een beetje bent verloren. Bij DeTaalVan beginnen we bij het lichaam, want daar begint herstel echt. Van regulatie naar inzicht, van inzicht naar regie. Stap voor stap, afgestemd op jouw situatie.",
                "Rushed. Lost boundaries. The feeling that you've lost yourself a bit. At DeTaalVan we start with the body, because that's where recovery really begins. From regulation to insight, from insight to control. Step by step, tailored to your situation."
              )}
              onBack={goBack}
              ctaText={t('Meer info / Aanvragen', 'More info / Request')}
              onCtaClick={() => navigateTo('contact')}
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
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">Reviews</h2>
                <p className="text-earth-muted text-sm italic">{t("Wat anderen zeggen.", "What others say.")}</p>
              </div>

              <div className="mb-8">
                <GoogleReviewBadge />
              </div>

              <div className="space-y-6 mb-12">
                {[
                  t("De coaching heeft mij meer rust en vertrouwen gegeven, waardoor ik sterker in mijn schoenen sta en de regie weer in handen voel te hebben.", "Coaching has given me more peace and confidence, making me feel stronger and in control again."),
                  t("Nu kan ik kiezen om naar mijn lichaam en grenzen te luisteren, waardoor spanning minder opbouwt en paniekaanvallen verminderen.", "Now I can choose to listen to my body and boundaries, so tension builds up less and panic attacks decrease."),
                  t("Ik ga bewuster door mijn dag heen en voel me aan het einde van de dag minder uitgeput.", "I go through my day more consciously and feel less exhausted at the end of the day.")
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
                  {t("Lees alle reviews op Google", "Read all reviews on Google")}
                </a>
                <a 
                  href="https://share.google/T64QxojHKzQTyNgGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs bg-white text-earth-accent border border-earth-accent px-6 py-3 rounded-full font-medium text-center shadow-sm hover:bg-earth-bg transition-all text-sm"
                >
                  {t("Laat zelf een review achter", "Leave a review yourself")}
                </a>
              </div>
            </motion.div>
          )}

          {currentPage === 'about' && (
            <DetailPage 
              key="about"
              title={t('Over Sjoerd Kersten', 'About Sjoerd Kersten')}
              subtitle={t('Specialist in innerlijk dialoog en regie.', 'Specialist in inner dialogue and control.')}
              imageUrl="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=13;908;2891;841,width=960,height=1280/image/404499409/3473e8e5-c864-4275-804c-e3514e40ced0.jpg"
              imageStyle={{ objectPosition: 'center 5%' }}
              content={t(
                "Sjoerd Kersten is psychomotorisch therapeut, coach en trainer met duizenden uren ervaring. Hij werkt met professionals, teams en organisaties aan één centrale vraag: wie stuurt jou, en wanneer stuur jij zelf?\n\nMet een achtergrond in de ziekenhuis psychiatrie en 8 jaar als ondernemer combineert Sjoerd Kersten psychomotorische therapie, biofeedback en de IOM-methode tot een aanpak die lichaam, hoofd en hart samenbrengt. Direct, holistisch en gericht op blijvende verandering.",
                "Sjoerd Kersten is a psychomotor therapist, coach and trainer with thousands of hours of experience. He works with professionals, teams and organizations on one central question: who directs you, and when do you direct yourself?\n\nWith a background in hospital psychiatry and 8 years as an entrepreneur, Sjoerd Kersten combines psychomotor therapy, biofeedback and the IOM method into an approach that brings body, head and heart together. Direct, holistic and focused on lasting change."
              )}
              onBack={goBack}
              ctaText={t('Stuur een bericht', 'Send a message')}
              onCtaClick={() => navigateTo('contact')}
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
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-earth-accent mb-2">{t('Neem contact op', 'Get in touch')}</h2>
                <p className="text-earth-muted italic">{t('Bel, app of mail. Direct contact. Snel reactie.', 'Call, app or mail. Direct contact. Fast response.')}</p>
              </div>

              <div className="w-full max-w-md space-y-4 mb-10">
                <a 
                  href="tel:+31643549491"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-ink">
                    <Phone size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">{t('Bellen', 'Call me')}</span>
                </a>

                <a 
                  href="mailto:info@detaalvan.nl"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-ink">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">{t('Mailen', 'Email')}</span>
                </a>

                <a 
                  href="https://wa.me/31643549491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-ink">
                    <MessageCircle size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">WhatsApp</span>
                </a>

                <a 
                  href="https://www.detaalvan.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-ink">
                    <Globe size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">{t('Website', 'Website')}</span>
                </a>

                <a 
                  href="https://calendar.app.google/mP7A8NF3ZFPoC9hFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="text-earth-ink">
                    <Calendar size={24} />
                  </div>
                  <span className="font-medium text-earth-ink">{t('Boekingen', 'Bookings')}</span>
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
          label={t('Over mij', 'About Me')} 
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
