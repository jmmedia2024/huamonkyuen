import { motion } from 'motion/react';
import { History, ShieldCheck, Star, Users, ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '1994', title: '하나원결혼 설립', desc: '대한민국 성혼 문화의 첫 발걸음' },
    { year: '2005', title: '누적 성혼 3,000건 달성', desc: '업계 최고 수준의 정성적 매칭 증명' },
    { year: '2015', title: '노블레스 프리미엄 라인 런칭', desc: '전문직 및 경영인 계층 특화 서비스 도입' },
    { year: '2020', title: '디지털 큐레이션 도입', desc: '빅데이터 기반 정밀 매칭 알고리즘 고도화' },
    { year: '2024', title: '화목연 브랜드 통합', desc: '30년 전통과 현대적 감각의 새 이름' },
  ];

  return (
    <div className="bg-white pt-24">
      {/* Brand Story Hero */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-forest-green" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <span className="text-gold font-bold tracking-[0.5em] uppercase text-sm block">Brand Story</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
              30년, 한결같은 <br />
              고결한 인연의 설계
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-white/60 text-xl font-light max-w-3xl mx-auto">
              화목연은 하나원결혼의 30년 유산을 계승하여 <br />
              더 깊은 통찰과 현대적 감성으로 새로운 성혼 문화를 선도합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase text-xs tracking-widest">Our Mission</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green leading-tight">
                가장 소중한 <br />
                인생의 가치를 찾습니다
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                화목연의 '화목(和睦)'은 단순히 다툼이 없는 상태를 넘어, 서로의 다름이 조화를 이루어 더 큰 행복으로 나아감을 의미합니다. 우리는 그 조화로운 인연을 잇는 예술가이자 멘토가 되고자 합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck />, title: '절대적 신뢰', desc: '엄격한 신원 검증과 보안을 최우선으로 합니다.' },
                { icon: <Heart />, title: '진정성 있는 매칭', desc: '데이터를 넘어 마음을 읽는 상담을 지향합니다.' },
                { icon: <Sparkles />, title: '격조 높은 소통', desc: '모든 만남에 품격과 예우를 담습니다.' },
                { icon: <Users />, title: '평생의 동반', desc: '성혼 후에도 가족의 행복을 응원합니다.' },
              ].map((item, i) => (
                <div key={i} className="space-y-4 p-6 bg-soft-bg rounded-[2rem] hover:shadow-xl transition-all">
                  <div className="text-gold">{item.icon}</div>
                  <h4 className="font-bold text-forest-green">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  alt="Brand Vision"
                />
             </div>
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-40 bg-forest-green text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <History className="text-gold mx-auto mb-8" size={48} />
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Milestones</h2>
            <p className="text-white/40 font-light">화목연이 걸어온 30년의 기록입니다.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[31px] md:left-1/2 top-0 w-[1px] h-full bg-white/20 transform md:-translate-x-1/2" />
            <div className="space-y-24">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-12 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center font-bold text-xl text-forest-green shadow-2xl z-10 relative">
                    {m.year.slice(2)}
                  </div>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pl-20 text-left' : 'md:pr-20 md:text-right'}`}>
                    <h3 className="text-2xl font-serif font-bold text-gold mb-2">{m.year}</h3>
                    <h4 className="text-xl font-bold mb-3">{m.title}</h4>
                    <p className="text-white/40 font-light">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Overlay */}
      <section className="py-40 px-6 bg-soft-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green mb-24">Hwamokyeon Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
             {[
               { icon: <Star />, title: 'Excellence', desc: '타협하지 않는 최상의 매칭 퀄리티' },
               { icon: <ShieldCheck />, title: 'Integrity', desc: '30년간 지켜온 정직과 신뢰의 이름' },
               { icon: <Heart />, title: 'Empathy', desc: '마음을 공감하는 정성 어린 멘토링' },
               { icon: <Sparkles />, title: 'Elegance', desc: '모든 만남에 부여하는 고결한 품격' },
             ].map((v, i) => (
               <div key={i} className="p-10 bg-white rounded-[3rem] shadow-xl border border-gray-100 space-y-6 hover:-translate-y-4 transition-all group">
                 <div className="w-14 h-14 bg-soft-bg rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                   {v.icon}
                 </div>
                 <h4 className="text-xl font-bold text-forest-green">{v.title}</h4>
                 <p className="text-sm text-gray-400 font-light leading-relaxed">{v.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
