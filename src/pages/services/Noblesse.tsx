import { motion } from 'motion/react';
import { Star, ShieldCheck, Award, Briefcase, Sparkles, Gem, Quote, ArrowRight } from 'lucide-react';

export default function Noblesse() {
  return (
    <div className="bg-[#0A0F0A] pt-24 text-white overflow-hidden">
      {/* Dark Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
            alt="Noblesse Background"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl space-y-10"
          >
            <div className="flex items-center gap-4">
               <Gem className="text-gold" size={32} />
               <span className="text-gold font-bold tracking-[0.5em] uppercase text-sm">The High-End Collection</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-serif font-bold leading-tight drop-shadow-2xl">
              NOBLESSE <br />
              <span className="text-gold font-serif italic text-4xl md:text-6xl font-normal block mt-4">상위 1%를 위한 고결한 인연</span>
            </h1>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl">
              성공의 가치를 공유하는 최고의 엘리트 계층을 위해 설계된 <br />
              하이엔드 성혼 시스템, 화목연 노블레스입니다.
            </p>
            <div className="pt-8">
               <button className="btn-3d-gold px-12 py-5 text-xl !rounded-full">노블레스 상담 신청하기</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="py-40 px-6 bg-[#0E140E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight">화목연 노블레스만의<br />특별한 차이</h2>
            <p className="text-white/40 text-lg font-light tracking-widest uppercase">The Essence of Perfection</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                icon: <Briefcase />, 
                title: '엘리트 네트워크', 
                desc: 'CEO 가문, 전문직(의사/변호사), 고위 공직자 및 자산가 계층의 검증된 인프라' 
              },
              { 
                icon: <ShieldCheck />, 
                title: '프라이빗 컨시어지', 
                desc: '모든 매칭 과정은 100% 비공개로 진행되며, 전담 팀의 철저한 보안 관리가 보장됩니다.' 
              },
              { 
                icon: <Award />, 
                title: '상위 1% 검증 시스템', 
                desc: '경제력, 학벌뿐 아니라 가정환경, 인성 검증까지 아우르는 3단계 프리미엄 배칭 프로세스' 
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-white/5 rounded-[4rem] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="text-gold mb-10 group-hover:scale-110 transition-transform">
                   {card.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-6 text-white">{card.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section (Asian Premium) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
             <span className="text-gold font-bold uppercase text-xs tracking-widest">Unrivaled Quality</span>
             <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight">성공의 가치를 <br />공유하는 인연</h2>
             <p className="text-white/50 text-xl font-light leading-relaxed">
               노블레스 성혼은 사회적 지위와 경제적 기반이 유사한 두 사람이 만나 더 큰 시너지를 창출하는 과정입니다. 화목연은 그 고귀한 결합의 완벽한 조화(Harmony)를 설계합니다.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 '고액 자산가 및 가업 승계자 특화',
                 '석/박사 출신 전문직 전담 배치',
                 '명문가 및 명문대 네트워크 관리',
                 'VVIP 전담 상담 매니저 시스템'
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center border-b border-white/10 pb-6">
                    <Sparkles size={16} className="text-gold" />
                    <span className="text-white/70 font-medium">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl relative z-10 border-4 border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale" 
                  referrerPolicy="no-referrer"
                  alt="Elite Couple"
                />
             </div>
             <div className="absolute inset-0 bg-gold/5 blur-[120px] -z-10" />
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-40 bg-white text-forest-green text-center">
        <div className="max-w-4xl mx-auto space-y-12">
           <Quote size={64} className="text-gold mx-auto opacity-30" />
           <h2 className="text-3xl md:text-6xl font-serif font-bold leading-tight">
             "최고의 선택은 <br />결국 당신의 삶을 증명합니다."
           </h2>
           <p className="text-gray-400 font-light tracking-widest uppercase mb-12">Noblesse by Hwamokyeon</p>
           <button className="bg-forest-green text-gold px-16 py-6 rounded-full font-bold text-xl hover:bg-gold hover:text-white transition-all shadow-2xl">
              프라이빗 컨설팅 요청
           </button>
        </div>
      </section>
    </div>
  );
}
