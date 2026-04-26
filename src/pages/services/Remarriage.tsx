import { motion } from 'motion/react';
import { Users, Sparkles, Heart, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';

export default function Remarriage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-forest-green" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Premium Re-Marriage</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">재혼 서비스</h1>
            <p className="text-white/60 text-lg md:text-2xl font-light tracking-[0.1em] max-w-3xl mx-auto drop-shadow-md">
              경험의 깊이만큼 정성스러운 배려로 찾는 <br />
              인생 2막의 따뜻한 행복을 설계합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[4rem] overflow-hidden shadow-3xl relative h-[600px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              alt="Elite Remarriage"
            />
          </motion.div>
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase text-xs tracking-widest">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green leading-tight">
                경험이 만든 지혜, <br />
                그 가치를 존중합니다
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                화목연의 재혼 서비스는 단순히 조건만을 맞추지 않습니다. 지난 삶에서의 경험과 그로 인해 형성된 성숙한 가치관을 존중하며, 남은 인생을 함께 걸어갈 수 있는 진정한 동반자를 찾는 데 집중합니다.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: '사생활 보호 및 비공개 원칙', desc: '회원님의 모든 정보는 철저한 오프라인 관리와 익명성을 원칙으로 보호됩니다.' },
                { title: '자녀 유무 및 가족 환경 고려', desc: '개개인의 상황에 따른 가족 관계와 환경을 고려한 정교한 매칭 서비스를 제공합니다.' },
                { title: '정서적 교감 우선 큐레이션', desc: '조건보다 성향과 취향의 조화를 통한 정서적 유대를 최우선으로 합니다.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-soft-bg rounded-3xl group hover:shadow-xl transition-all">
                  <CheckCircle2 className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-forest-green text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-soft-bg text-center relative overflow-hidden">
        <Quote className="text-gold mx-auto mb-12 opacity-20" size={80} />
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green italic leading-tight">
             "혼자 가는 길은 빠르지만, <br />함께 가는 길은 멀리 갈 수 있습니다."
           </h2>
           <p className="text-gray-400 text-lg font-light">인생의 가장 성숙한 시기에 만나는 가장 따뜻한 인연, 화목연</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-bold text-gold mb-2">30년</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">Experience</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-gold mb-2">92%</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-gold mb-2">12k+</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">Success Cases</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-gold mb-2">1:1</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">Personal Coach</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center overflow-hidden relative">
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
           <Sparkles className="text-gold mx-auto" size={48} />
           <h2 className="text-4xl md:text-7xl font-serif font-bold text-forest-green leading-tight">다시 꿈꾸는 행복의 기적,<br />지금 화목연에서 시작하십시오.</h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="btn-3d-green px-20 py-6 text-xl">안전 상담 신청</button>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -z-10" />
      </section>
    </div>
  );
}
