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
  Calendar,
  RefreshCw,
  Lightbulb,
  Hand,
  Share2,
  Copy,
  Check,
  X,
  Facebook
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'coaching' | 'teamtraining' | 'teamtraining-tweedaagse' | 'teamtraining-losse-sessie' | 'teamtraining-traject-op-maat' | 'burnout' | 'contact' | 'reviews' | 'about' | 'sales-training' | 'communicatie-training' | 'teamdynamiek-training' | 'reintegratie' | 'iom-methode';

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
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(id)}
    className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-3 w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
    className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 mx-auto w-fit transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
  >
    <div className="text-2xl font-bold text-earth-ink leading-none">4.8</div>
    <div className="flex flex-col justify-center">
      <div className="flex text-[#FBBC05] text-sm mb-0.5">
        <span>★</span><span>★</span><span>★</span><span>★</span>
        <div className="relative">
          <span className="text-gray-200">★</span>
          <span className="absolute top-0 left-0 w-[80%] overflow-hidden">★</span>
        </div>
      </div>
      <div className="text-[10px] text-earth-muted leading-none">
        12 reviews · Beoordeeld op
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
  const [isLeidinggevendenOpen, setIsLeidinggevendenOpen] = useState(false);
  const [isVastlooptOpen, setIsVastlooptOpen] = useState(false);
  const [isVoorWieOpen, setIsVoorWieOpen] = useState(false);
  const [isReintegratieResultOpen, setIsReintegratieResultOpen] = useState(false);
  const [isFilosofieOpen, setIsFilosofieOpen] = useState(false);
  const [isWaaromAndersOpen, setIsWaaromAndersOpen] = useState(false);
  const [isCoachingResultOpen, setIsCoachingResultOpen] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const t = (nl: string, en: string) => lang === 'nl' ? nl : en;

  const shareUrl = "https://www.detaalvan.nl";
  const shareTitle = "Sjoerd Kersten - DeTaalVan";
  const shareText = t(
    "Ik maak zichtbaar wat anderen missen. Bekijk de website van Sjoerd Kersten (DeTaalVan) voor coaching, teamtraining en re-integratie.",
    "I make visible what others miss. Check out Sjoerd Kersten's website (DeTaalVan) for coaching, team training, and re-integration."
  );

  const handleShare = (platform: 'whatsapp' | 'linkedin' | 'facebook' | 'email' | 'copy') => {
    switch (platform) {
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`, '_self');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        });
        break;
    }
  };

  const triggerShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setIsShareOpen(true);
        }
      }
    } else {
      setIsShareOpen(true);
    }
  };

  const navigateTo = (page: Page) => {
    setHistory(prev => [...prev, page]);
    setCurrentPage(page);
  };

  const goBack = () => {
    setHistory(prev => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, -1);
        setCurrentPage(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      setCurrentPage('home');
      return ['home'];
    });
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
        <div className="absolute top-8 left-8 flex items-center z-50">
          <button 
            onClick={triggerShare}
            className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm hover:bg-white border border-black/5 rounded-full px-3 py-1.5 shadow-sm text-earth-primary text-xs font-semibold transition-all active:scale-95"
            aria-label="Deel website"
          >
            <Share2 size={13} className="text-earth-primary" />
            <span>{t('Delen', 'Share')}</span>
          </button>
        </div>
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
          <p className="text-earth-muted text-sm italic">{t('Van automatisch reageren naar bewust kiezen.', 'From automatic reaction to conscious choice.')}</p>
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
                <Tile id="reintegratie" icon={<RefreshCw />} label="Re-integratie" onClick={navigateTo} />
                <Tile 
                  id="iom-methode"
                  icon={
                    <div className="relative flex flex-col items-center">
                      <Brain size={20} className="text-earth-primary" />
                      <Hand size={20} className="text-earth-primary mt-[-4px]" />
                    </div>
                  }
                  label="IOM methode"
                  onClick={navigateTo}
                />
                <Tile id="contact" icon={<MessageSquare />} label="Contact" onClick={navigateTo} />
                <Tile id="reviews" icon={<Star />} label="Reviews" onClick={navigateTo} />
                <Tile id="about" icon={<Info />} label={t('Over Sjoerd', 'About Sjoerd')} onClick={navigateTo} />
              </div>

              <div className="pt-4 flex flex-col items-center gap-3">
                <GoogleReviewBadge />
                
                <button
                  onClick={triggerShare}
                  className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-black/5 text-earth-primary text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] mx-auto w-fit"
                >
                  <Share2 size={16} />
                  <span>{t('Deel deze website', 'Share this website')}</span>
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 'reintegratie' && (
            <motion.div
              key="reintegratie"
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
                <h2 className="text-3xl font-serif text-earth-accent">
                  {t("Van inzicht naar actie in re-integratie", "From insight to action in re-integration")}
                </h2>
                <p className="text-sm text-earth-muted italic">
                  {t(
                    "Een aanvullende, praktische en activerende aanpak die cliënten helpt met inzicht om te zetten in duurzaam gedrag richting werk.",
                    "An additional, practical and activating approach that helps clients translate insight into sustainable behavior towards work."
                  )}
                </p>
              </div>

              <div className="space-y-8 text-earth-ink mb-12">
                <div className="px-2">
                  <p className="text-sm text-earth-muted leading-relaxed text-center max-w-sm mx-auto">
                    {t(
                      "Binnen re-integratietrajecten wordt vaak gewerkt aan inzicht, structuur en opbouw. Toch blijkt in de praktijk dat dit niet altijd automatisch leidt tot consistent gedrag richting werk.\n\nCoaching met de Image of the Mind (IOM)-methode richt zich op dit overgangspunt. Het moment waarop iemand weet wat nodig is, maar dit nog niet volledig weet om te zetten in actie.",
                      "Within re-integration processes, work is often done on insight, structure and build-up. However, practice shows that this does not always automatically lead to consistent behavior towards work.\n\nCoaching with the Image of the Mind (IOM) method focuses on this transition point. The moment when someone knows what is needed, but does not yet fully know how to translate this into action."
                    )}
                  </p>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsVastlooptOpen(!isVastlooptOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full">
                      {t("Waar het vaak vastloopt", "Where it often gets stuck")}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-earth-muted transition-transform ${isVastlooptOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div className="pt-4 pb-2">
                    {isVastlooptOpen && (
                      <div className="space-y-2">
                        <p className="text-sm text-earth-muted text-center">
                          {t("• Terugval en uitval", "• Relapse and dropout")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("• Blokkades in gesprekken", "• Blocks in conversations")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("• Vermijding, overdenken, perfectionisme", "• Avoidance, overthinking, perfectionism")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("• Twijfel of spanning (vaak rondom solliciteren)", "• Doubt or tension (often around applying)")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("• Moeite om inzicht om te zetten naar duurzame gedragsverandering", "• Difficulty translating insight into sustainable behavioral change")}
                        </p>
                        
                        <div className="h-4" /> {/* Lege regel */}
                        
                        <p className="text-sm text-earth-muted text-center">
                          {t(
                            "Dit zijn geen onwil of onkunde, maar processen die samenhangen met hoe gedrag tot stand komt.",
                            "These are not unwillingness or incompetence, but processes related to how behavior is established."
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsReintegratieResultOpen(!isReintegratieResultOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full">
                      {t("Wat het oplevert", "What it delivers")}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-earth-muted transition-transform ${isReintegratieResultOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div className="pt-4 pb-2">
                    {!isReintegratieResultOpen ? (
                      <div className="space-y-1">
                        <p className="text-sm text-earth-muted text-center">
                          {t("Meer grip op hun gedrag", "More grip on their behavior")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("Consistentie in actie richting werk", "Consistency in action towards work")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("Stabiliteit bij tegenslag", "Stability in case of setback")}
                        </p>
                        <p className="text-sm text-earth-muted text-center">
                          {t("Meer zelfstandigheid in hun proces", "More independence in their process")}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex flex-col items-center">
                          <p className="text-sm font-medium text-earth-ink text-center">
                            {t("Meer grip op hun gedrag", "More grip on their behavior")}
                          </p>
                          <p className="text-xs text-earth-muted text-center mt-1 mb-3">
                            {t(
                              "Cliënten leren herkennen wat hun gedrag stuurt en kunnen daar bewust op sturen. Dat geeft rust én richting.",
                              "Clients learn to recognize what drives their behavior and can consciously steer it. That gives peace and direction."
                            )}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-sm font-medium text-earth-ink text-center">
                            {t("Consistentie in actie richting werk", "Consistency in action towards work")}
                          </p>
                          <p className="text-xs text-earth-muted text-center mt-1 mb-3">
                            {t(
                              "Niet alleen goede dagen benutten, maar ook op moeilijke momenten in beweging blijven. Dat is waar duurzame re-integratie begint.",
                              "Not only using good days, but also staying in motion at difficult moments. That is where sustainable re-integration begins."
                            )}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-sm font-medium text-earth-ink text-center">
                            {t("Stabiliteit bij tegenslag", "Stability in case of setback")}
                          </p>
                          <p className="text-xs text-earth-muted text-center mt-1 mb-3">
                            {t(
                              "Een afwijzing, een lastig gesprek of een terugval hoeft geen einde te zijn. Cliënten leren hierop anticiperen en er doorheen te bewegen.",
                              "A rejection, a difficult conversation or a relapse does not have to be an end. Clients learn to anticipate and move through it."
                            )}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-sm font-medium text-earth-ink text-center">
                            {t("Meer zelfstandigheid in hun proces", "More independence in their process")}
                          </p>
                          <p className="text-xs text-earth-muted text-center mt-1 mb-3">
                            {t(
                              "Minder afhankelijk van begeleiding, motivatie of de juiste stemming. Cliënten nemen het roer zelf in handen.",
                              "Less dependent on guidance, motivation or the right mood. Clients take the helm themselves."
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">{t("Thema's", "Themes")}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { nl: "Zelfvertrouwen in handelen", en: "Confidence in acting" },
                      { nl: "Stressregulatie en omgaan met druk", en: "Stress regulation and dealing with pressure" },
                      { nl: "Doorbreken van patronen in denken, voelen en doen", en: "Breaking patterns in thinking, feeling and doing" },
                      { nl: "Omgaan met afwijzing", en: "Dealing with rejection" },
                      { nl: "Vergroten van eigenaarschap en regie", en: "Increasing ownership and control" },
                      { nl: "Duurzaam functioneren op de werkvloer", en: "Sustainable functioning in the workplace" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-earth-card p-4 rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-center h-24"
                      >
                        <span className="text-xs font-medium text-earth-ink leading-tight">
                          {t(item.nl, item.en)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsVoorWieOpen(!isVoorWieOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full">
                      {t("Voor wie", "For whom")}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-earth-muted transition-transform ${isVoorWieOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div className="pt-4 pb-6">
                    <div className="space-y-3 max-w-[280px] mx-auto">
                      {[
                        { nl: "Gebaat zijn bij een aanpak die verder gaat dan alleen praten", en: "Benefit from an approach that goes beyond just talking" },
                        { nl: "Vastlopen in het proces", en: "Getting stuck in the process" },
                        { nl: "Moeite hebben met het omzetten van inzicht naar actie", en: "Having difficulty translating insight into action" },
                        { nl: "Last hebben van stress, spanning of onzekerheid", en: "Suffering from stress, tension or uncertainty" },
                        { nl: "Ondersteuning nodig hebben in het vasthouden van ontwikkeling", en: "Need support in maintaining development" },
                        { nl: "Willen werken aan duurzame inzetbaarheid", en: "Want to work on sustainable employability" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 text-left">
                          <span className="text-earth-muted shrink-0 text-sm">•</span>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(item.nl, item.en)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="w-full space-y-3">
                    <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">
                      {t("Praktische informatie", "Practical information")}
                    </h3>
                    
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("AANPAK", "APPROACH")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Praktisch en direct toepasbaar", "Practical and directly applicable")}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("INZET", "DEPLOYMENT")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Naast bestaande trajecten", "Alongside existing processes")}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("LOCATIE", "LOCATION")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Door heel Nederland", "Throughout the Netherlands")}
                      </span>
                    </div>

                    <div className="flex justify-between pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("DOELGROEP", "TARGET GROUP")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Op maat per casus", "Tailor-made per case")}
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
                  {t('Plan een kennismaking', 'Schedule an introduction')}
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 'coaching' && (
            <motion.div
              key="coaching"
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

              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-44 h-44 rounded-full overflow-hidden shadow-md border-4 border-white mb-6">
                  <img 
                    src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=925,height=1280/image/543441174/67f7b35e-a5dc-4235-b0c9-012b8584ac1b.png" 
                    alt="Coaching" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 5%' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-3xl font-serif text-earth-accent mb-2">Coaching</h2>
                <p className="text-earth-muted text-sm italic max-w-[280px]">
                  {t("Stop met reageren onder druk. Start met regisseren.", "Stop reacting under pressure. Start directing.")}
                </p>
              </div>

              <div className="space-y-8 text-earth-ink mb-12">
                <div className="px-2">
                  <p className="text-sm text-earth-ink leading-relaxed text-center max-w-sm mx-auto">
                    {t(
                      "Onder druk word je zichtbaar. De vraag is: bevalt wat je ziet? Met de IOM-methode maken wij zichtbaar wat anderen missen zodat jij leert sturen in plaats van automatisch reageert.",
                      "Under pressure, you become visible. The question is: do you like what you see? With the IOM method, we make visible what others miss so you learn to lead instead of reacting automatically."
                    )}
                  </p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="space-y-1 text-sm text-earth-muted">
                    <p>{t("Je weet wat je moet doen, maar doet iets anders onder druk.", "You know what to do, but do something else under pressure.")}</p>
                    <p>{t("Je schiet in oude patronen: vermijden, controleren, aanpassen.", "You jump into old patterns: avoid, control, adapt.")}</p>
                    <p>{t("Je gedrag klopt niet met wie je wilt zijn als professional of leider.", "Your behavior doesn't match who you want to be as a professional or leader.")}</p>
                  </div>
                  <p className="font-bold text-earth-accent">{t("Dan zit je in autopilot.", "Then you are in autopilot.")}</p>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsWaaromAndersOpen(!isWaaromAndersOpen)}
                    className="flex items-center justify-between w-full py-4 border-b border-black/5"
                  >
                    <span className="font-serif text-earth-accent text-lg">
                      {t("Waarom dit anders is", "Why this is different")}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-earth-muted transition-transform duration-300 ${isWaaromAndersOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isWaaromAndersOpen && (
                    <div className="pt-4 pb-2">
                      <div className="text-sm text-earth-muted leading-relaxed space-y-4">
                        <p>{t("De meeste coaching blijft hangen in praten en begrijpen. Wij gaan een laag dieper.", "Most coaching stays stuck in talking and understanding. We go a layer deeper.")}</p>
                        <div>
                          <p className="font-medium mb-2">{t("Wij werken met:", "We work with:")}</p>
                          <ul className="space-y-1">
                            <li>{t("• Boksvormen — gedrag wordt direct zichtbaar", "• Boxing forms — behavior becomes immediately visible")}</li>
                            <li>{t("• Video-analyse — je ziet jezelf zoals anderen jou ervaren", "• Video analysis — you see yourself as others experience you")}</li>
                            <li>{t("• IOM-methode — inzicht in je innerlijke dialoog en patronen", "• IOM method — insight into your inner dialogue and patterns")}</li>
                          </ul>
                        </div>
                        <p className="italic">{t("Weten is niet genoeg. Je moet het voelen, zien en doen.", "Knowing is not enough. You have to feel, see and do it.")}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { nl: "Gedrag & Patronen", en: "Behavior & Patterns" },
                    { nl: "Emoties & Reacties", en: "Emotions & Reactions" },
                    { nl: "Je innerlijke dialoog", en: "Your inner dialogue" },
                    { nl: "Timing & Interactie", en: "Timing & Interaction" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-earth-card p-4 rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-center min-h-[80px]"
                    >
                      <span className="text-xs font-semibold text-earth-ink leading-tight uppercase tracking-wide">
                        {t(item.nl, item.en)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsCoachingResultOpen(!isCoachingResultOpen)}
                    className="flex items-center justify-between w-full py-4 border-b border-black/5"
                  >
                    <span className="font-serif text-earth-accent text-lg">
                      {t("Wat levert het op?", "What does it yield?")}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-earth-muted transition-transform duration-300 ${isCoachingResultOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div className="pt-4 pb-2">
                    <div className="space-y-4">
                      {[
                        { 
                          title: { nl: "Bewust reageren onder druk", en: "React consciously under pressure" },
                          desc: { nl: "Je reageert niet meer automatisch maar maakt een bewuste keuze.", en: "You no longer react automatically but make a conscious choice." }
                        },
                        { 
                          title: { nl: "Patronen herkennen", en: "Recognize patterns" },
                          desc: { nl: "Je herkent je patronen op het moment dat ze ontstaan.", en: "You recognize your patterns the moment they arise." }
                        },
                        { 
                          title: { nl: "Schakelen onder druk", en: "Shifting under pressure" },
                          desc: { nl: "Je kunt schakelen ook als het spannend wordt.", en: "You can shift even when it gets exciting." }
                        },
                        { 
                          title: { nl: "Meer rust en overzicht", en: "More peace and overview" },
                          desc: { nl: "Je handelt in lijn met wie je wilt zijn.", en: "You act in line with who you want to be." }
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-start gap-2">
                            <span className="text-earth-accent shrink-0 mt-1">•</span>
                            <p className="text-sm font-medium text-earth-ink">{t(item.title.nl, item.title.en)}</p>
                          </div>
                          {isCoachingResultOpen && (
                            <p className="text-xs text-earth-muted pl-5 italic leading-relaxed">
                              {t(item.desc.nl, item.desc.en)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-center space-y-2">
                    <h4 className="font-serif text-earth-accent text-lg">{t("Fase 1: Zichtbaar Onder Druk", "Phase 1: Visible Under Pressure")}</h4>
                    <p className="text-sm text-earth-muted italic">
                      {t("“Inzicht in eigen gedrag, communicatie en reacties. Bewustwording van triggers en patronen.”", "“Insight into own behavior, communication and reactions. Awareness of triggers and patterns.”")}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-center space-y-2">
                    <h4 className="font-serif text-earth-accent text-lg">{t("Fase 2: Inzicht & Patronen", "Phase 2: Insight & Patterns")}</h4>
                    <p className="text-sm text-earth-muted italic">
                      {t("“Overzicht en grip op interne processen. Herkennen van gedrag onder verschillende soorten druk.”", "“Overview and grip on internal processes. Recognizing behavior under different types of pressure.”")}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-center space-y-2">
                    <h4 className="font-serif text-earth-accent text-lg">{t("Fase 3: Regie in Actie", "Phase 3: Regie in Action")}</h4>
                    <div className="text-sm text-earth-muted italic space-y-1">
                      <p>{t("“Concreet ander gedrag. Meer regie, rust en impact. Direct toepasbaar in werk en leiderschap.”", "“Concrete different behavior. More control, peace and impact. Directly applicable in work and leadership.”")}</p>
                    </div>
                  </div>
                </div>

                <div className="px-2 pt-8">
                  <div className="w-full space-y-3">
                    <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">
                      {t("Praktische informatie", "Practical information")}
                    </h3>
                    
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("AANPAK", "APPROACH")}</span>
                      <span className="text-sm text-earth-ink font-medium text-right">
                        {t("Gemiddeld 6 sessies", "Average of 6 sessions")}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("VERGOEDING", "REIMBURSEMENT")}</span>
                      <span className="text-sm text-earth-ink font-medium text-right">
                        {t("Vaak vergoed door werkgever", "Often reimbursed by employer")}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("LOCATIE", "LOCATION")}</span>
                      <span className="text-sm text-earth-ink font-medium text-right">
                        {t("Op locatie of online", "On site or online")}
                      </span>
                    </div>

                    <div className="flex justify-between pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("DREMPEL", "THRESHOLD")}</span>
                      <span className="text-sm text-earth-ink font-medium text-right">
                        {t("Geen lange wachttijden, direct beginnen", "No long waiting times, start immediately")}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-earth-muted italic text-center pt-4">
                  {t("“Je probleem zit niet in wat je weet. Het zit in wat je doet onder druk.”", "“Your problem isn't in what you know. It's in what you do under pressure.”")}
                </p>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="w-full max-w-xs bg-earth-primary text-white px-6 py-4 rounded-full font-medium text-center shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  {t('Plan een kennismaking', 'Schedule an introduction')}
                </button>
              </div>
            </motion.div>
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
                    description: t("Effectiever samenwerken door bewust te regisseren in communicatie.", "Collaborate more effectively by consciously directing communication."),
                    id: 'communicatie-training' as Page
                  },
                  {
                    title: t("Teamdynamiek & Samenwerking", "Team Dynamics & Collaboration"),
                    description: t("Inzicht in teamdynamiek, boksen als metafoor voor communicatie, teambuilding. Sterker team, meer begrip, betere samenwerking.", "Insight into team dynamics, boxing as a metaphor for communication, teambuilding. Stronger team, more understanding, better collaboration."),
                    id: 'teamdynamiek-training' as Page
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

          {currentPage === 'communicatie-training' && (
            <motion.div
              key="communicatie-training"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="page-transition bg-earth-bg z-10 p-6"
            >
              <button 
                onClick={goBack}
                className="flex items-center gap-2 text-earth-muted 
                mb-8 hover:text-earth-accent transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>

              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">{t('Communicatie training', 'Communication training')}</h2>
                <p className="text-sm text-earth-muted italic text-center">
                  {t(
                    "Communicatie in Beweging: Verbeter jouw communicatievaardigheden met boksen als metafoor",
                    "Communication in Motion: Improve your communication skills with boxing as a metaphor"
                  )}
                </p>
              </div>

              <div className="space-y-8 text-earth-ink mb-12">
                <iframe
                  src="https://www.youtube.com/embed/-p0Y13xb11g"
                  width="60%"
                  style={{
                    aspectRatio: '9/16',
                    borderRadius: '16px',
                    border: 'none',
                    display: 'block',
                    margin: '0 auto 24px auto'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div className="px-2">
                  <p className="text-sm text-earth-muted leading-relaxed text-center max-w-sm mx-auto">
                    {t(
                      "Welkom bij onze dynamische en innovatieve communicatietrainingen, waarin boksen wordt ingezet als krachtige metafoor. Ontdek hoe je jouw communicatiestijl kunt verbeteren terwijl je werkt aan belangrijke thema's zoals samenwerken, feedback, vertrouwen en persoonlijk leiderschap. Je kiest een thema dat actueel is binnen jouw team, en wij ontwikkelen een fantastische, op maat gemaakte training.",
                      "Welcome to our dynamic and innovative communication training, in which boxing is used as a powerful metaphor. Discover how you can improve your communication style while working on important themes such as collaboration, feedback, trust and personal leadership. You choose a theme that is current within your team, and we develop a fantastic, tailor-made training."
                    )}
                  </p>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsLeidinggevendenOpen(!isLeidinggevendenOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full">
                      {t("Voor leidinggevenden", "For managers")}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-earth-muted transition-transform ${isLeidinggevendenOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isLeidinggevendenOpen && (
                    <div className="pt-4 pb-2">
                      <p className="text-sm text-earth-muted leading-relaxed whitespace-pre-line">
                        {t(
                          "Na elke training deelt de trainer waardevolle inzichten met de leidinggevende, waardoor deze in staat is om effectiever te sturen en de samenwerking op een krachtige en positieve manier te versterken.",
                          "After each training, the trainer shares valuable insights with the manager, enabling them to steer more effectively and strengthen the collaboration in a powerful and positive way."
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">{t("Thema's", "Themes")}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Samenwerken", "Collaboration")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Feedback & Feedforward", "Feedback & Feedforward")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Vertrouwen", "Trust")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Persoonlijk Leiderschap", "Personal Leadership")}
                      </span>
                    </div>
                  </div>
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
                          "Boksen is meer dan een fysieke sport. Het is een dynamisch spel van actie en reactie, strategie en timing. Tijdens het boksen wordt voelbaar hoe jouw gedrag, timing en woorden effect hebben op de ander en jezelf. Vanuit die ervaring verken je jouw patronen, keuzes, perspectieven en ontwikkeling in de boksoefeningen.\n\nDe Image of the Mind-methode versterkt het leren en geeft betekenis aan de ervaringen die tijdens de sessies worden opgedaan. De IOM-methode biedt een helder kader om te begrijpen hoe gedrag ontstaat en hoe je bewust kunt schakelen tussen automatische reacties en doelgericht handelen.\n\nDaarbij spelen twee interne systemen een centrale rol:\nDe Regisseur: het bewuste deel dat reflecteert, keuzes maakt en richting geeft.\nDe Autopilot: de automatische reacties en gewoontes die zonder nadenken worden ingezet.",
                          "Boxing is more than a physical sport. It is a dynamic game of action and reaction, strategy and timing. During boxing, it becomes palpable how your behavior, timing and words affect the other and yourself. From that experience, you explore your patterns, choices, perspectives and development in the boxing exercises.\n\nThe Image of the Mind method reinforces learning and gives meaning to the experiences gained during the sessions. The IOM method provides a clear framework for understanding how behavior arises and how you can consciously switch between automatic reactions and goal-oriented action.\n\nTwo internal systems play a central role in this:\nThe Director: the conscious part that reflects, makes choices and gives direction.\nThe Autopilot: the automatic reactions and habits that are used without thinking."
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsResultOpen(!isResultOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full mb-4">
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
                          {t("Verbeterde communicatievaardigheden", "Improved communication skills")}
                        </p>
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Verhoogd zelfbewustzijn", "Increased self-awareness")}
                        </p>
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Sterkere teamdynamiek", "Stronger team dynamics")}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Verbeterde communicatievaardigheden:", "Improved communication skills:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Deelnemers leren effectiever en authentieker te communiceren.",
                              "Participants learn to communicate more effectively and authentically."
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Verhoogd zelfbewustzijn:", "Increased self-awareness:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Door reflectie ontwikkelen deelnemers inzicht in hun eigen communicatiestijl.",
                              "Through reflection, participants develop insight into their own communication style."
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Sterkere teamdynamiek:", "Stronger team dynamics:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Teams leren elkaars stijlen kennen en samenwerken vanuit begrip en vertrouwen.",
                              "Teams learn to know each other's styles and work together from understanding and trust."
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-2">
                  <div className="w-full space-y-3">
                    <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">
                      {t("Praktische informatie", "Practical information")}
                    </h3>
                    
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("Duur", "Duration")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("2 uur, halve dag of hele dag", "2 hours, half day or full day")}
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

          {currentPage === 'teamdynamiek-training' && (
            <motion.div
              key="teamdynamiek-training"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="page-transition bg-earth-bg z-10 p-6"
            >
              <button 
                onClick={goBack}
                className="flex items-center gap-2 text-earth-muted 
                mb-8 hover:text-earth-accent transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>

              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">{t('Teamdynamiek & Samenwerking', 'Team Dynamics & Collaboration')}</h2>
              </div>

              <div className="space-y-8 text-earth-ink mb-12">
                <div className="px-2">
                  <p className="text-sm text-earth-muted leading-relaxed text-center max-w-sm mx-auto">
                    {t(
                      "Wil jij een positieve werksfeer en een effectief team creëren? Tijdens op maat gemaakte interactieve sessies worden persoonlijke inzichten gecombineerd met boksen, waarbij respect, vertrouwen en communicatie centraal staan. Samen creëren we krachtigere samenwerking en blijvende resultaten.",
                      "Do you want to create a positive work atmosphere and an effective team? During tailor-made interactive sessions, personal insights are combined with boxing, where respect, trust and communication are central. Together we create stronger collaboration and lasting results."
                    )}
                  </p>
                </div>

                <iframe
                  src="https://www.youtube.com/embed/73E89pJaDWs"
                  width="60%"
                  style={{
                    aspectRatio: '9/16',
                    borderRadius: '16px',
                    border: 'none',
                    display: 'block',
                    margin: '0 auto 24px auto'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div className="space-y-4">
                  <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">{t("Thema's", "Themes")}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Teamdynamiek", "Team Dynamics")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Communicatiestijlen", "Communication Styles")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Samenwerking & Feedback", "Collaboration & Feedback")}
                      </span>
                    </div>
                    <div className="bg-earth-card p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                      <span className="text-xs font-medium text-earth-ink text-center leading-tight">
                        {t("Teamambities", "Team Ambitions")}
                      </span>
                    </div>
                  </div>
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
                          "Boksen is meer dan een fysieke sport. Het is een dynamisch spel van actie en reactie, strategie en timing. Tijdens het boksen wordt voelbaar hoe jouw gedrag, timing en woorden effect hebben op de ander en jezelf. Vanuit die ervaring verken je jouw patronen, keuzes, perspectieven en ontwikkeling in de boksoefeningen.\n\nDe Image of the Mind-methode versterkt het leren en geeft betekenis aan de ervaringen die tijdens de sessies worden opgedaan. De IOM-methode biedt een helder kader om te begrijpen hoe gedrag ontstaat en hoe je bewust kunt schakelen tussen automatische reacties en doelgericht handelen.\n\nDaarbij spelen twee interne systemen een centrale rol:\nDe Regisseur: het bewuste deel dat reflecteert, keuzes maakt en richting geeft.\nDe Autopilot: de automatische reacties en gewoontes die zonder nadenken worden ingezet.",
                          "Boxing is more than a physical sport. It is a dynamic game of action and reaction, strategy and timing. During boxing, it becomes palpable how your behavior, timing and words affect the other and yourself. From that experience, you explore your patterns, choices, perspectives and development in the boxing exercises.\n\nThe Image of the Mind method reinforces learning and gives meaning to the experiences gained during the sessions. The IOM method provides a clear framework for understanding how behavior arises and how you can consciously switch between automatic reactions and goal-oriented action.\n\nTwo internal systems play a central role in this:\nThe Director: the conscious part that reflects, makes choices and gives direction.\nThe Autopilot: the automatic reactions and habits that are used without thinking."
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setIsResultOpen(!isResultOpen)}
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full mb-4">
                      {t("Wat kun je verwachten?", "What can you expect?")}
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
                          {t("Onderzoeken en ervaren", "Explore and experience")}
                        </p>
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Kennis en theorie", "Knowledge and theory")}
                        </p>
                        <p className="text-sm text-earth-muted leading-relaxed">
                          {t("Reflectie", "Reflection")}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Onderzoeken en ervaren:", "Explore and experience:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Door interactieve boksoefeningen ervaar je meteen de impact van je communicatie.",
                              "Through interactive boxing exercises you immediately experience the impact of your communication."
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Kennis en theorie:", "Knowledge and theory:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Theorie die aanzet tot nieuwe inzichten in combinatie met het onderzoeken en ervaren.",
                              "Theory that encourages new insights in combination with exploring and experiencing."
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-earth-ink mb-1">
                            {t("Reflectie:", "Reflection:")}
                          </p>
                          <p className="text-sm text-earth-muted leading-relaxed">
                            {t(
                              "Bewust even stilstaan en vertragen.",
                              "Consciously pause and slow down."
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-2">
                  <div className="w-full space-y-3">
                    <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">
                      {t("Praktische informatie", "Practical information")}
                    </h3>
                    
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-earth-muted uppercase tracking-wider">{t("Duur", "Duration")}</span>
                      <span className="text-sm text-earth-ink text-right">
                        {t("Op maat, meerdere sessies", "Custom, multiple sessions")}
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
                onClick={goBack}
                className="flex items-center gap-2 text-earth-muted 
                mb-8 hover:text-earth-accent transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Terug</span>
              </button>

              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-earth-accent">{t('Sales training', 'Sales training')}</h2>
              </div>

              <iframe
                src="https://www.youtube.com/embed/c-2SF0MsIvU"
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
                          "Boksen is meer dan een fysieke sport. Het is een dynamisch spel van actie en reactie, strategie en timing. Tijdens het boksen wordt voelbaar hoe jouw gedrag, timing en woorden effect hebben op de ander en jezelf. Vanuit die ervaring verken je jouw patronen, keuzes, perspectieven en ontwikkeling in de boksoefeningen.\n\nDe Image of the Mind-methode versterkt het leren en geeft betekenis aan de ervaringen die tijdens de sessies worden opgedaan. De IOM-methode biedt een helder kader om te begrijpen hoe gedrag ontstaat en hoe je bewust kunt schakelen tussen automatische reacties en doelgericht handelen.\n\nDaarbij spelen twee interne systemen een centrale rol:\nDe Regisseur: het bewuste deel dat reflecteert, keuzes maakt en richting geeft.\nDe Autopilot: de automatische reacties en gewoontes die zonder nadenken worden ingezet.",
                          "Boxing is more than a physical sport. It is a dynamic game of action and reaction, strategy and timing. During boxing, it becomes palpable how your behavior, timing and words affect the other and yourself. From that experience, you explore your patterns, choices, perspectives and development in the boxing exercises.\n\nThe Image of the Mind method reinforces learning and gives meaning to the experiences gained during the sessions. The IOM method provides a clear framework for understanding how behavior arises and how you can consciously switch between automatic reactions and goal-oriented action.\n\nTwo internal systems play a central role in this:\nThe Director: the conscious part that reflects, makes choices and gives direction.\nThe Autopilot: the automatic reactions and habits that are used without thinking."
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">{t("Thema's", "Themes")}</h3>
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
                    className="flex items-center justify-center w-full text-center py-3 border-b border-black/10"
                  >
                    <span className="font-serif text-earth-accent text-lg text-center w-full mb-4">
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
                    <h3 className="font-serif text-earth-accent text-lg text-center w-full mb-4">
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

          {currentPage === 'iom-methode' && (
            <motion.div
              key="iom-methode"
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

              <h2 className="font-serif text-earth-accent text-2xl text-center mb-6">
                Image of the Mind
              </h2>

              <p className="text-sm text-earth-muted text-center leading-relaxed px-4 mb-6">
                "De IOM-methode biedt een helder kader om te begrijpen 
                hoe gedrag ontstaat en hoe je bewust kunt schakelen 
                tussen automatische reacties en doelgericht handelen."
              </p>

              <div className="relative w-full flex flex-col items-center">
                <svg viewBox="0 0 300 350" width="100%" className="max-w-xs">

                  {/* Pijl Situatie — elegant, van linksboven naar cirkel */}
                  <defs>
                    <marker id="arrowIn" markerWidth="8" markerHeight="8" 
                      refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#233652"/>
                    </marker>
                    <marker id="arrowOut" markerWidth="8" markerHeight="8" 
                      refX="2" refY="3" orient="auto">
                      <path d="M8,0 L8,6 L0,3 z" fill="#233652"/>
                    </marker>
                  </defs>

                  <line x1="45" y1="45" x2="95" y2="90" 
                    stroke="#233652" strokeWidth="1.5"
                    markerEnd="url(#arrowIn)"/>
                  <text x="10" y="40" fontSize="12" 
                    fontFamily="Georgia, serif" 
                    fontStyle="italic" fill="#233652">Situatie</text>

                  {/* Hoofdcirkel */}
                  <circle cx="150" cy="145" r="90" 
                    fill="none" stroke="#233652" strokeWidth="2"/>

                  {/* Verticale stippellijn — alleen binnen cirkel */}
                  <line x1="150" y1="58" x2="150" y2="150" 
                    stroke="#233652" strokeWidth="1" 
                    strokeDasharray="4 3"/>

                  {/* Horizontale stippellijn — alleen binnen cirkel */}
                  <line x1="63" y1="150" x2="237" y2="150" 
                    stroke="#233652" strokeWidth="1"/>

                  {/* AutoPilot — gecentreerd in linksboven kwadrant */}
                  <g onClick={() => setActiveElement(
                    activeElement === 'autopilot' ? null : 'autopilot'
                  )} style={{cursor: 'pointer'}}>
                    <text x="107" y="108" fontSize="11" 
                      fontWeight="bold" fill="#233652" 
                      textAnchor="middle">AutoPilot</text>
                    <text x="107" y="123" fontSize="9" 
                      fill="#8C8C82" textAnchor="middle">Neiging</text>
                  </g>

                  {/* Regisseur — gecentreerd in rechtsboven kwadrant */}
                  <g onClick={() => setActiveElement(
                    activeElement === 'regisseur' ? null : 'regisseur'
                  )} style={{cursor: 'pointer'}}>
                    <text x="193" y="108" fontSize="11" 
                      fontWeight="bold" fill="#233652" 
                      textAnchor="middle">Regisseur</text>
                    <text x="193" y="123" fontSize="9" 
                      fill="#8C8C82" textAnchor="middle">Behoefte</text>
                  </g>

                  {/* Denken Voelen Doen box — klikbaar */}
                  <g onClick={() => setActiveElement(
                    activeElement === 'dvd' ? null : 'dvd'
                  )} style={{cursor: 'pointer'}}>
                    <rect x="120" y="170.5" width="60" height="44" 
                      fill="none" stroke="#233652" strokeWidth="1.5"
                      rx="6"/>
                    <text x="150" y="185.5" fontSize="7.5" 
                      fill="#233652" textAnchor="middle">Denken</text>
                    <text x="150" y="197.5" fontSize="7.5" 
                      fill="#233652" textAnchor="middle">Voelen</text>
                    <text x="150" y="209.5" fontSize="7.5" 
                      fill="#233652" textAnchor="middle">Doen</text>
                  </g>

                  {/* Pijl Regie — elegant, van cirkel naar rechtsboven */}
                  <line x1="210" y1="90" x2="245" y2="58" 
                    stroke="#233652" strokeWidth="1.5"
                    markerEnd="url(#arrowIn)"/>
                  <text x="252" y="52" fontSize="12" 
                    fontFamily="Georgia, serif" 
                    fontStyle="italic" fill="#233652">Regie</text>

                  {/* Verbindingslijn cirkel naar figuur */}
                  <line x1="150" y1="235" x2="150" y2="248" 
                    stroke="#233652" strokeWidth="1.5"/>

                  {/* Hoofd */}
                  <circle cx="150" cy="260" r="12" 
                    fill="none" stroke="#233652" strokeWidth="1.5"/>

                  {/* Lichaam */}
                  <line x1="150" y1="272" x2="150" y2="310" 
                    stroke="#233652" strokeWidth="1.5"/>

                  {/* Armen */}
                  <line x1="125" y1="288" x2="175" y2="288" 
                    stroke="#233652" strokeWidth="1.5"/>

                  {/* Benen */}
                  <line x1="150" y1="310" x2="130" y2="335" 
                    stroke="#233652" strokeWidth="1.5"/>
                  <line x1="150" y1="310" x2="170" y2="335" 
                    stroke="#233652" strokeWidth="1.5"/>

                </svg>

                {/* Tooltips */}
                {activeElement === 'autopilot' && (
                  <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-md mx-4 mt-2 text-center">
                    <p className="text-xs font-medium text-earth-ink mb-1">
                      Autopilot
                    </p>
                    <p className="text-xs text-earth-muted leading-relaxed">
                      De autopilot bepaalt naar schatting 95% van ons 
                      denken, voelen en handelen. Het zijn automatische reacties 
                      en gewoontes die zonder nadenken worden ingezet. De 
                      autopilot heeft geen filter en kent geen grenzen. Hij 
                      stopt nooit, ook niet als het gedrag je niet meer dient.
                    </p>
                  </div>
                )}

                {activeElement === 'regisseur' && (
                  <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-md mx-4 mt-2 text-center">
                    <p className="text-xs font-medium text-earth-ink mb-1">
                      Regisseur
                    </p>
                    <p className="text-xs text-earth-muted leading-relaxed">
                      De regisseur is het bewuste deel dat reflecteert, 
                      keuzes maakt en richting geeft. Hij is verbonden met je 
                      lichaam en je intuïtie. Vrij van conditionering. De 
                      regisseur vertaalt wat je werkelijk nodig hebt, je intuïtieve behoefte. De regisseur maakt het mogelijk om bewust te kiezen, ongeacht wat de 
                      autopilot aandraagt.
                    </p>
                  </div>
                )}

                {activeElement === 'dvd' && (
                  <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-md mx-4 mt-2 text-center">
                    <p className="text-xs font-medium text-earth-ink mb-1">
                      Denken · Voelen · Doen
                    </p>
                    <p className="text-xs text-earth-muted leading-relaxed">
                      Het onbewuste bevat een complex netwerk van 
                      programma's, conditionering en patronen. Ze zijn gevormd door 
                      ervaringen, opvoeding en interacties. Ze helpen je 
                      automatisch door de wereld te navigeren, maar niet 
                      altijd op een manier die past bij wie jij wilt zijn.
                    </p>
                  </div>
                )}
              </div>

              <p className="text-xs text-earth-muted text-center mt-4 px-4 leading-relaxed">
                Tik op AutoPilot, Regisseur of Denken/Voelen/Doen voor meer uitleg.
              </p>

              <div className="w-full mt-10 px-4">
                <button
                  onClick={() => setIsFilosofieOpen(!isFilosofieOpen)}
                  className="flex items-center justify-between w-full py-4 border-b border-black/5"
                >
                  <span className="font-serif text-earth-accent text-lg">
                    De filosofie achter de IOM-methode
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-earth-muted transition-transform duration-300 ${isFilosofieOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isFilosofieOpen && (
                  <div className="pt-4 pb-2">
                    <p className="text-sm text-earth-muted leading-relaxed">
                      De Image of the Mind (IOM)-methode maakt zichtbaar hoe gedrag tot stand komt en waar mensen de regie verliezen. Gedachten, gevoelens en reacties lijken vaak vanzelf te gebeuren, maar zijn in veel gevallen het resultaat van conditionering.
                    </p>
                    <p className="text-sm text-earth-muted leading-relaxed mt-4">
                      Binnen de IOM-methode leren mensen het onderscheid maken tussen wat automatisch gebeurt en wat bewust gekozen kan worden. Tussen de autopilot en de regisseur. Juist in dat onderscheid ontstaat ruimte.
                    </p>
                    <p className="text-sm text-earth-muted leading-relaxed mt-4">
                      Een belangrijk onderdeel hiervan is intuïtie. Niet als emotie, maar als een directe vorm van richting die via het lichaam voelbaar is. Waar de autopilot wordt gestuurd door gedachten die gedrag rechtvaardigen, geeft intuïtie richting zonder verhaal.
                    </p>
                    <p className="text-sm text-earth-muted leading-relaxed mt-4">
                      Regie betekent dat je leert handelen vanuit keuze, ongeacht wat je denkt of voelt. Niet door eerst iets op te lossen, maar door direct invloed uit te oefenen op wat je doet.
                    </p>
                    <p className="text-sm text-earth-muted leading-relaxed mt-4">
                      De IOM-methode brengt mensen terug naar een positie van sturing. Niet door de complexiteit te verminderen, maar door deze inzichtelijk te maken. Zodat gedrag geen reactie meer is, maar een bewuste keuze.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="w-full max-w-xs bg-earth-primary text-white px-6 py-4 rounded-full font-medium text-center shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  Meer info / Aanvragen
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 'about' && (
            <DetailPage 
              key="about"
              title={t('Over Sjoerd Kersten', 'About Sjoerd Kersten')}
              subtitle={t('Specialist in de IOM-methode, je innerlijke dialoog en regie.', 'Specialist in the IOM method, your inner dialogue and control.')}
              imageUrl="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=13;908;2891;841,width=960,height=1280/image/404499409/3473e8e5-c864-4275-804c-e3514e40ced0.jpg"
              imageStyle={{ objectPosition: 'center 5%' }}
              content={t(
                "Sjoerd Kersten is psychomotorisch therapeut, coach en trainer met duizenden uren ervaring. Hij werkt met professionals, teams en organisaties aan één centrale vraag: wie stuurt jou, en wanneer stuur jij zelf?\n\nMet een achtergrond in de ziekenhuis psychiatrie en 8 jaar ervaring als ondernemer combineert Sjoerd Kersten psychomotorische therapie, biofeedback en de IOM-methode tot een aanpak die lichaam, hoofd en hart samenbrengt. Direct, holistisch en gericht op blijvende verandering.",
                "Sjoerd Kersten is a psychomotor therapist, coach and trainer with thousands of hours of experience. He works with professionals, teams and organizations on one central question: who directs you, and when do you direct yourself?\n\nWith a background in hospital psychiatry and 8 years of experience as an entrepreneur, Sjoerd Kersten combines psychomotor therapy, biofeedback and the IOM method into an approach that brings body, head and heart together. Direct, holistic and focused on lasting change."
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

      {/* Share Modal Bottom Sheet */}
      <AnimatePresence>
        {isShareOpen && (
          <div className="absolute inset-0 z-[100] flex items-end justify-center">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            {/* Sheet Container */}
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full bg-earth-bg rounded-t-[2.5rem] shadow-2xl p-6 pb-8 z-[101] flex flex-col border-t border-black/5"
            >
              {/* Drag Handle Indicator */}
              <div className="w-12 h-1.5 bg-black/10 rounded-full mx-auto mb-5" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-left">
                  <h3 className="text-xl font-serif text-earth-accent font-medium leading-tight">
                    {t('Deel deze website', 'Share this website')}
                  </h3>
                  <p className="text-xs text-earth-muted mt-0.5">
                    {t('Deel DeTaalVan van Sjoerd Kersten', 'Share DeTaalVan by Sjoerd Kersten')}
                  </p>
                </div>
                <button 
                  onClick={() => setIsShareOpen(false)}
                  className="bg-white p-2 rounded-full shadow-sm hover:bg-earth-card border border-black/5 text-earth-muted hover:text-earth-ink transition-colors active:scale-95"
                  aria-label="Sluit delen"
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Platforms */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-3 bg-[#E8F8F0] hover:bg-[#D1F2E0] text-[#128C7E] px-4 py-3 rounded-2xl transition-all duration-200 active:scale-95 text-sm font-medium"
                >
                  <div className="bg-[#25D366] text-white p-1.5 rounded-xl shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <span>WhatsApp</span>
                </button>
                
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-3 bg-[#EAF4FA] hover:bg-[#D5E9F5] text-[#0077B5] px-4 py-3 rounded-2xl transition-all duration-200 active:scale-95 text-sm font-medium"
                >
                  <div className="bg-[#0077B5] text-white p-1.5 rounded-xl shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <span>LinkedIn</span>
                </button>
                
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-3 bg-[#EAF1FC] hover:bg-[#D5E3FA] text-[#1877F2] px-4 py-3 rounded-2xl transition-all duration-200 active:scale-95 text-sm font-medium"
                >
                  <div className="bg-[#1877F2] text-white p-1.5 rounded-xl shrink-0">
                    <Facebook size={18} />
                  </div>
                  <span>Facebook</span>
                </button>
                
                <button
                  onClick={() => handleShare('email')}
                  className="flex items-center gap-3 bg-[#F4EFF0] hover:bg-[#EAE2E3] text-earth-primary px-4 py-3 rounded-2xl transition-all duration-200 active:scale-95 text-sm font-medium"
                >
                  <div className="bg-earth-primary text-white p-1.5 rounded-xl shrink-0">
                    <Mail size={18} />
                  </div>
                  <span>E-mail</span>
                </button>
              </div>

              {/* Copy Link Button */}
              <button
                onClick={() => handleShare('copy')}
                className={`w-full mt-4 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-medium transition-all duration-200 active:scale-95 text-sm ${
                  isCopied 
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/10' 
                    : 'bg-white border border-black/5 text-earth-primary hover:bg-earth-card shadow-sm'
                }`}
              >
                {isCopied ? <Check size={18} /> : <Copy size={18} />}
                <span>{isCopied ? t('Link gekopieerd!', 'Link copied!') : t('Link kopiëren', 'Copy link')}</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
