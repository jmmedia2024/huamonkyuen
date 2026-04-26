import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Share2 } from 'lucide-react';

export default function Location() {
  return (
    <div className="bg-white pt-24 pb-40">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-soft-bg opacity-50" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative z-10 space-y-6"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Contact Detail</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-green">오시는 길</h1>
          <p className="text-gray-400 text-lg font-light tracking-[0.1em] max-w-2xl mx-auto">
            화목연의 문은 언제나 당신에게 열려 있습니다. <br />
            편안하고 품격 있는 상담 공간에서 당신의 이야기를 기다립니다.
          </p>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl space-y-6">
               <div className="w-14 h-14 bg-soft-bg rounded-2xl flex items-center justify-center text-gold">
                  <MapPin size={24} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-forest-green">Location</h3>
               <p className="text-gray-500 font-light leading-relaxed">
                 서울특별시 강남구 테헤란로 407 <br />
                 (삼성동 140-3) 에케이타워 4층
               </p>
            </div>
            <div className="p-10 bg-forest-green text-white rounded-[3rem] shadow-2xl space-y-6">
               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-gold">
                  <Phone size={24} />
               </div>
               <h3 className="text-2xl font-serif font-bold">Contact</h3>
               <div className="space-y-2">
                 <p className="text-white/60 font-light">T. 02.538.3407</p>
                 <p className="text-white/60 font-light">F. 02.538.3408</p>
                 <p className="text-white/60 font-light">E. contact@hwamokyeon.com</p>
               </div>
            </div>
            <div className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl space-y-6">
               <div className="w-14 h-14 bg-soft-bg rounded-2xl flex items-center justify-center text-gold">
                  <Clock size={24} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-forest-green">Business Hours</h3>
               <div className="space-y-2">
                 <p className="text-gray-500 font-light">평일 09:30 - 20:00</p>
                 <p className="text-gray-500 font-light">주말 10:00 - 18:00 (사전예약 필수)</p>
                 <p className="text-gold font-medium">연중무휴 (공휴일 제외)</p>
               </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative group">
            <div className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-soft-bg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7865243851506!2d127.04745817688223!3d37.50811982730825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca40db95e0c8b%3A0xe5a3c9b7e73898f5!2z7Zmp66as7JeQKOy8gCnsnbTthYzrs7TsnYTrnbzsp4Ap!5e0!3m2!1sko!2skr!4v1714131500000!5m2!1sko!2skr" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 border-0" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute top-10 right-10 flex gap-4">
               <button className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-gold hover:text-white transition-all">
                  <Navigation size={20} />
               </button>
               <button className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-gold hover:text-white transition-all">
                  <Share2 size={20} />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-24 px-6 bg-soft-bg mx-6 rounded-[5rem]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
             <h3 className="text-3xl font-serif font-bold text-forest-green">대중교통 안내</h3>
             <div className="space-y-6">
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-forest-green text-gold rounded-xl flex items-center justify-center font-bold flex-shrink-0">2</div>
                   <div>
                      <h4 className="font-bold text-forest-green mb-1">지하철 2호선 / 수인분당선</h4>
                      <p className="text-sm text-gray-400">선릉역 10번 출구 도보 3분</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-forest-green text-gold rounded-xl flex items-center justify-center font-bold flex-shrink-0">B</div>
                   <div>
                      <h4 className="font-bold text-forest-green mb-1">간선버스</h4>
                      <p className="text-sm text-gray-400">146, 333, 341, 360, 740 (선릉역 정류장)</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="space-y-8">
             <h3 className="text-3xl font-serif font-bold text-forest-green">주차 안내</h3>
             <div className="space-y-6">
                <p className="text-gray-500 font-light leading-relaxed">
                  건물 내 지하 주차장 이용이 가능합니다. <br />
                  내방 고객께서는 4시간 무료 주차 지원을 해드립니다. <br />
                  주차 공간이 협소할 경우 발렛 서비스를 이용하실 수 있습니다.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 text-gold font-bold">
                   발렛 서비스 무료 지원
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
