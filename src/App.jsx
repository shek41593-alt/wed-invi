import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, MapPin, Calendar, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

const EnvelopeIntro = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream-light overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-md aspect-[3/4] bg-white shadow-2xl rounded-sm flex items-center justify-center m-4 border-2 border-primary/20 bg-opacity-90 backdrop-blur-sm">
        {/* Envelope Flap Lines */}
        <div className="absolute top-0 left-0 w-full h-1/2 border-b-2 border-primary/10 flex justify-center items-end"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#A31D36', '#D4AF37', '#FAF7F2']
            });
            onOpen();
          }}
          className="relative z-10 w-24 h-24 bg-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer border-4 border-primary-dark"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20"></div>
          <span className="font-script text-cream text-3xl font-bold">R & P</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="mb-6 text-primary">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2">॥ Shree Ganeshaya Namah ॥</h2>
        <div className="w-24 h-px bg-gold mx-auto my-4"></div>
      </div>

      <p className="font-sans text-sm md:text-base text-espresso/80 uppercase tracking-widest mb-10">
        We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of
      </p>

      <div className="space-y-8">
        <div>
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-2 drop-shadow-sm">Rushikesh</h1>
          <p className="font-sans text-xs text-espresso/60 uppercase tracking-widest">S/o Mr. Sanjay Deshmukh & Mrs. Seema Deshmukh</p>
        </div>

        <div className="font-serif text-3xl text-gold italic">&</div>

        <div>
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-2 drop-shadow-sm">Prajakta</h1>
          <p className="font-sans text-xs text-espresso/60 uppercase tracking-widest">D/o Mr. Dasharath Yadav & Mrs. Ujjwala Yadav</p>
        </div>
      </div>
    </motion.div>
  </section>
);

const ScratchCard = () => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Fill interactive layer
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#D4AF37');
      gradient.addColorStop(0.5, '#F3E5AB');
      gradient.addColorStop(1, '#AA7C11');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#4a3b1d';
      ctx.font = '20px "Plus Jakarta Sans"';
      ctx.textAlign = 'center';
      ctx.fillText('✦ SCRATCH TO REVEAL ✦', canvas.width / 2, canvas.height / 2);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let isDrawing = false;

    const startScratch = (e) => {
      isDrawing = true;
      scratch(e);
    };

    const endScratch = () => {
      isDrawing = false;
      checkReveal();
    };

    const scratch = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    };

    const checkReveal = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let clearPixels = 0;
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) clearPixels++;
      }
      const percent = clearPixels / (canvas.width * canvas.height);
      if (percent > 0.4 && !isRevealed) {
        setIsRevealed(true);
        canvas.style.transition = 'opacity 0.5s';
        canvas.style.opacity = '0';
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
    };

    canvas.addEventListener('mousedown', startScratch);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', endScratch);
    canvas.addEventListener('mouseleave', endScratch);
    canvas.addEventListener('touchstart', startScratch, { passive: false });
    canvas.addEventListener('touchmove', scratch, { passive: false });
    canvas.addEventListener('touchend', endScratch);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isRevealed]);

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-gold">
        {/* Revealed Content */}
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 border-4 border-gold z-0">
          <h3 className="font-serif text-3xl text-primary mb-2">Save the Date</h3>
          <p className="font-sans text-xl text-espresso font-semibold">19th July 2026</p>
          <div className="w-16 h-px bg-gold mt-4"></div>
          <p className="font-script text-2xl text-gold mt-4">We can't wait!</p>
        </div>

        {/* Canvas Overlay */}
        <canvas
          ref={canvasRef}
          className="w-full h-[300px] cursor-crosshair relative z-10 block"
        />
      </div>
    </section>
  );
};

const EventCard = ({ title, subtitle, date, time, venue, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row mb-6 border border-primary/10 hover:shadow-lg transition-shadow"
  >
    <div className="md:w-1/3 bg-gold/10 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-primary/10">
      <span className="font-serif text-2xl text-primary mb-1">{title}</span>
      <span className="text-sm italic text-espresso/70">{subtitle}</span>
    </div>
    <div className="p-6 md:w-2/3 flex flex-col justify-center space-y-3">
      <div className="flex items-center text-espresso/80">
        <Calendar className="w-5 h-5 mr-3 text-gold" />
        <span className="font-medium text-sm tracking-wide">{date}</span>
      </div>
      <div className="flex items-center text-espresso/80">
        <Clock className="w-5 h-5 mr-3 text-gold" />
        <span className="font-medium text-sm tracking-wide">{time}</span>
      </div>
      <div className="flex items-start text-espresso/80">
        <MapPin className="w-5 h-5 mr-3 text-gold flex-shrink-0 mt-0.5" />
        <span className="text-sm font-medium">{venue}</span>
      </div>
    </div>
  </motion.div>
);

const EventsSchedule = () => {
  const events = [
    { title: 'Sangeet', subtitle: 'A spirited night of song, dance and laughter', date: 'FRI · July 17, 2026', time: '08:00 PM onwards', venue: 'Vikhale, Khatav Taluka, Satara' },
    { title: 'Gavdev', subtitle: 'Seeking blessings from the village deity', date: 'SAT · July 18, 2026', time: '07:00 PM onwards', venue: 'Vikhale, Khatav Taluka, Satara' },
    { title: 'Haldi', subtitle: 'A joyful morning of haldi, blessings and laughter', date: 'SUN · July 19, 2026', time: '11:00 AM onwards', venue: 'Fulai Garden, Zirapwadi, Phaltan, Satara' },
    { title: 'Sapthapadi', subtitle: 'The sacred seven vows under the floral mandap', date: 'SUN · July 19, 2026', time: '03:48 PM', venue: 'Fulai Garden, Zirapwadi, Phaltan, Satara' },
    { title: 'Varmala', subtitle: 'The exchange of garlands and a joyous celebration', date: 'SUN · July 19, 2026', time: '06:15 PM', venue: 'Fulai Garden, Zirapwadi, Phaltan, Satara' },
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-primary mb-3">Events Schedule</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto"></div>
        </div>
        <div className="space-y-2">
          {events.map((e, idx) => (
            <EventCard key={idx} index={idx} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FamilySection = () => (
  <section className="py-24 px-4 bg-cream text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="font-serif text-3xl text-primary mb-2">Awaiting Your Noble Presence</h2>
      <p className="text-espresso/70 italic mb-10">Because meeting two souls requires twice the fun — and you!</p>

      <div className="mb-8">
        <p className="font-sans font-semibold tracking-[0.2em] text-sm text-gold mb-4 uppercase">With Love - The Families</p>
        <p className="font-serif text-xl text-espresso mb-1">Mr. Sanjay Deshmukh</p>
        <p className="font-serif text-xl text-espresso">& Mrs. Seema Deshmukh</p>
      </div>
    </div>
  </section>
);

const VenueMapSection = () => (
  <section className="py-20 px-4 bg-primary text-white text-center">
    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
      <h2 className="font-serif text-3xl text-gold-light mb-2">VENUE</h2>
      <p className="text-cream/80 italic mb-8">Where We Celebrate</p>

      <p className="font-sans text-lg mb-8 font-medium">Fulai Garden, Zirapwadi, Phaltan, Satara, Maharashtra</p>

      <div className="w-full h-[300px] rounded-2xl overflow-hidden mb-8 border-2 border-white/20">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11342.3456!2d74.4533!3d17.9899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU5JzIzLjYiTiA3NMKwMjcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Fulai+Garden+Zirapwadi+Phaltan+Satara"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-gold text-white font-semibold rounded-full px-10 py-4 hover:shadow-gold transition-all hover:scale-105"
      >
        Get Directions
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-espresso text-center py-16 px-4">
    <p className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">With Love</p>
    <h2 className="font-script text-5xl text-white mb-2">Rushikesh & Prajakta</h2>
    <p className="text-2xl mb-6">💐</p>
    <p className="font-serif text-white/80 mb-2">19th July 2026</p>
    <p className="font-sans text-gold-light font-bold tracking-wider">#RUSHIKIPRAJU</p>
  </footer>
);

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-espresso/80 backdrop-blur text-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-gold/30"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
    </button>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative selection:bg-primary selection:text-white">
      <AnimatePresence>
        {showIntro && <EnvelopeIntro onOpen={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && <AudioPlayer />}

      <main className="min-h-screen">
        <HeroSection />
        <ScratchCard />
        <EventsSchedule />
        <FamilySection />
        <VenueMapSection />
        <Footer />
      </main>
    </div>
  );
}
