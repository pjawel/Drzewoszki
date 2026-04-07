import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Calendar, 
  Users, 
  Utensils, 
  Music,
  Heart,
  Instagram,
  Facebook
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Lokalizacja', href: '#lokalizacja' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-serif font-medium tracking-widest ${isScrolled ? 'text-pink-600' : 'text-white'}`}>
              Drzewoszki
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-pink-400 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-pink-400`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-pink-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/488888059_1456552595761660_8452897204831807607_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2a1932&_nc_ohc=MRuaOIIvHQsQ7kNvwHiqFGS&_nc_oc=AdrCnQiyYi5vw2VW__xrc7hYMyxrIDZy2fy4kyoauysHZ36mPCe365yFmLp8_gVZoNA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=VPwsX9nU8OukJ1oz1REJXA&_nc_ss=7a3a8&oh=00_Af2MScDlgXToyZbIJ7Ebhy1L5gPJIfzwLhkD8AyP3Ub7ZA&oe=69DA893F"
          alt="Sala Bankietowa"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-pink-200 uppercase bg-pink-600/30 backdrop-blur-sm rounded-full border border-pink-400/30">
            Sala Bankietowa w Drzewoszkach
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 leading-tight tracking-tight">
            Wyjątkowe miejsce <br />
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed drop-shadow-md">
            na wyjątkowe okazje...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#oferta"
              className="px-8 py-4 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-pink-900/20"
            >
              Zobacz ofertę
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Skontaktuj się
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="o-nas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/514025335_1526147348802184_6679868291056327146_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-PXDaAV421YQ7kNvwGsdrOE&_nc_oc=Adp-gTpa6DRMEbjEDqh1qwf1RLepcewHcityNIZGzhfvkO3GmUJCamBeZsRPw8fDfBU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=X59egm8VcEe7sDt2YYibEg&_nc_ss=7a3a8&oh=00_Af1y187AjXW0zwXEZJ0VEa-1Kbg9hoofweVQO6EyWHIwDw&oe=69DA9117"
                alt="Wnętrze sali"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-pink-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-pink-200 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-600 font-semibold tracking-wider uppercase text-sm">O nas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mt-4 mb-8 leading-tight tracking-tight">
              Tradycja spotyka <br /> nowoczesną elegancję
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
              Nasza przestrzeń powstała z myślą o chwilach ważnych i niepowtarzalnych, które zasługują na odpowiednią oprawę. Niezależnie od charakteru wydarzenia, dbamy o atmosferę, estetykę i komfort, aby każdy moment był naprawdę wyjątkowy.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
              Stawiamy na indywidualne podejście i dbałość o detale, dzięki czemu każde spotkanie nabiera unikalnego charakteru. Tworzymy miejsce pełne klimatu, w którym goście mogą czuć się swobodnie i cieszyć wspólnie spędzonym czasem, wracając do tych chwil z przyjemnością.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-serif font-light text-pink-600">400</h3>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">Miejsc siedzących</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Wesela',
      description: 'Kompleksowa organizacja przyjęć weselnych z dbałością o każdy szczegół.',
      icon: <Heart className="text-pink-600" size={32} />,
      image: 'https://images.pexels.com/photos/33815179/pexels-photo-33815179.jpeg'
    },
    {
      title: 'Komunie i Chrzciny',
      description: 'Rodzinna atmosfera i menu dostosowane do potrzeb najmłodszych gości.',
      icon: <Users className="text-pink-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Imprezy Okolicznościowe',
      description: 'Urodziny, jubileusze i inne ważne okazje w wyjątkowej oprawie.',
      icon: <Calendar className="text-pink-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Catering',
      description: 'Wyśmienite dania przygotowywane przez naszych doświadczonych kucharzy.',
      icon: <Utensils className="text-pink-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="oferta" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase text-sm">Oferta</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mt-4 tracking-tight">Co organizujemy</h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md border border-pink-100">
            <p className="text-pink-600 font-serif italic text-lg md:text-xl">
              Przewidujemy możliwość organizacji dwóch niezależnych imprez
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/645820049_1741410780609172_153018582545820740_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FoY1QWPol58Q7kNvwHKFRmI&_nc_oc=AdrYk9S0nnlXacplypxwDiokL8DeUCEhjUFwlpm_3oyaq_pWlnxcoToDJDq8BJ6rhC0&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=lymKvJYy19FVSUz9bLNuYA&_nc_ss=7a3a8&oh=00_Af2BSwo1bOMd1seeOgzjQYGwTyo_IaoK14ebDLlZvEgwFA&oe=69DA78AA',
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/499050462_1491945242222395_5484376195885301530_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=buuZc3mPObsQ7kNvwF6Cdso&_nc_oc=AdoIYGTeP_v_v-eDevBJ7chSJ1DOetScuNIzt_aeAN3GrTjXOL13JO18J8t6aoieKRc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=GFlsVTqTw_AMEDQSJ2T-8g&_nc_ss=7a3a8&oh=00_Af3SbLwhH4jFzLjo3DyCjcmX2aW7Arms8iTB4UJeV0LVUg&oe=69DA814A',
    'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/493234446_1474893163927603_6337983105249524089_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ToCAETC2uW8Q7kNvwGJVQMu&_nc_oc=Adr3ngpsPMPAo2dvVTSYUQjvIjYpUEJTJE9Livg_EU7jTdodNdYqWYELQzuo3CJOcF8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=G2jTkdoPI7s0OSvUZitMjA&_nc_ss=7a3a8&oh=00_Af0uEY2PORdGqE3eUPGXpQP4Kdr2YRomsp8SB2goZjZDhA&oe=69DA6DF4',
    'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/489349512_1455863115830608_7054497742396150009_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Jg-tIev_X2QQ7kNvwGbgIAo&_nc_oc=Adpfaiqy9SU8C7pvIGHOX-l8w9zQZD1XP3z9sFiiwLO8ExNB7sAA01V2I9ZvD3TvCt8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=CTxUa64lC_738PN02080WA&_nc_ss=7a3a8&oh=00_Af2VBzVfz_sPMaC_-BcpRt1uxIp1_tOtn-_oUH03Qel4xg&oe=69DA8FF1',
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/487580593_1450264266390493_4929294915233862215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=g4ALozjCd9sQ7kNvwHKjzUc&_nc_oc=Ado6pjaVn_FcBEK3cY7qm4piGMMbygdSTecL-Jo8hUJA7ZQ6R0RwGy692qU7LYvBJaI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=18a59nZCKhMr2EOlDCJVQQ&_nc_ss=7a3a8&oh=00_Af34Mk764yEjs-1R7YFJY5-qUi2JZx9ukJCpbweIngDBBg&oe=69DA7E7F',
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/487130375_1444335000316753_4564117791817923221_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KX7pgjj9HnkQ7kNvwF3Aqtj&_nc_oc=Adr_vpJqhm0NIWDrGyh1M_Ay53TZUq5BN1mi289N0kZPKS9AxHQQyu5Dp-hOHeCarZo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CHkY434pPgcL9E6XX3iykA&_nc_ss=7a3a8&oh=00_Af3xBv5HwMKe9gIKXDn18h3SYjN6VxZjDe5AmgKO3b-M5A&oe=69DA82F9',
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase text-sm">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mt-4 tracking-tight">Nasze wnętrza</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={img}
                alt={`Galeria ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-600/10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-pink-500 font-semibold tracking-wider uppercase text-sm">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-8 tracking-tight">Zapraszamy do kontaktu</h2>
          <p className="text-gray-400 text-lg mb-12 mx-auto max-w-md font-light leading-relaxed">
            Chcesz zapytać o wolny termin lub umówić się na spotkanie? 
            Zadzwoń do nas lub napisz wiadomość.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-pink-500" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Telefon</p>
                <a href="tel:607435000" className="text-lg font-medium hover:text-pink-500 transition-colors">
                  607 435 000
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-pink-500" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:piglowskamalgorzata800@gmail.com" className="text-lg font-medium hover:text-pink-500 transition-colors break-all">
                  piglowskamalgorzata800@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-pink-500" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Adres</p>
                <p className="text-lg font-medium">
                  Drzewoszki Wielkie 38, <br />
                  99-319 Dobrzelin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section id="lokalizacja" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase text-sm">Lokalizacja</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mt-4 tracking-tight">Jak do nas dojechać</h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mt-6"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.609147632969!2d19.563795458863815!3d52.232318499979115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b915345a493ff%3A0x7cdad5d52e84c2b4!2sSala%20Bankietowa%20Drzewoszki!5e0!3m2!1spl!2spl!4v1775549888398!5m2!1spl!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/wxfnvoAQqa1j2T7z6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-pink-700 transition-all shadow-xl shadow-pink-200 group"
          >
            <span>Otwórz w Google Maps</span>
            <MapPin size={20} className="group-hover:translate-y-[-2px] transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-serif font-medium text-white mb-2 tracking-widest">Drzewoszki</h2>
            <p className="text-sm">© {new Date().getFullYear()} Sala Bankietowa Drzewoszki. Wszelkie prawa zastrzeżone.</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.facebook.com/dworekdrzewoszki" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>Projekt i realizacja: Sala Drzewoszki</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-900 font-light overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
