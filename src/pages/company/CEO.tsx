import { motion } from 'motion/react';
import { Quote, Award, BookOpen, Users, Sparkles, ShieldCheck } from 'lucide-react';

export default function CEO() {
  return (
    <div className="bg-white pt-24 pb-40">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center bg-forest-green overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white space-y-8"
          >
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs">CEO Message</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">진심이 닿는 곳에<br />인연이 있습니다.</h1>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
              30년이라는 세월 동안 수많은 가정이 탄생하는 기쁨을 함께했습니다. 
              우리의 사명은 단순한 만남을 넘어, 인생의 가장 가치 있는 축복을 설계하는 것입니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-soft-bg rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="CEO"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-24">
          <div className="space-y-8">
            <Quote size={64} className="text-gold mx-auto opacity-30" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green leading-tight">
              "결혼은 두 사람의 만남을 넘어<br />서로의 세계가 하나로 합쳐지는 예술입니다."
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="text-left space-y-8 text-gray-500 leading-relaxed text-lg font-light">
            <p>
              안녕하십니까, 화목연 대표이사입니다. <br /><br />
              1994년 하나원결혼으로 시작하여 30년이라는 긴 시간 동안 화목연은 대한민국 성혼 문화의 중심에서 고객님들과 함께 걸어왔습니다. 
              우리가 가장 중요하게 여기는 가치는 '사람에 대한 깊은 이해'입니다.
            </p>
            <p>
              단순히 경제적 조건이나 외모라는 잣대로 인연을 예단하지 않습니다. 
              한 사람이 살아온 궤적, 가치관, 그리고 미래에 대한 지향점까지 깊이 있게 들여다보는 정교한 큐레이션 시스템이 화목연의 자부심입니다.
            </p>
            <p>
              우리는 성혼이라는 결과에만 매몰되지 않고, 그 과정까지도 고객님들께 존중받는 경험이 되도록 최선을 다합니다. 
              새로운 인연을 꿈꾸는 모든 분께 화목연이 든든한 등대가 되어 드리겠습니다.
            </p>
            <div className="pt-8 text-right">
              <p className="text-forest-green font-bold text-2xl font-serif">화목연 대표이사 김 인 철(상무)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Vision */}
      <section className="py-24 bg-soft-bg rounded-[5rem] mx-6 mb-40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-forest-green text-gold rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Award size={32} />
            </div>
            <h4 className="text-xl font-bold text-forest-green">30년의 유산</h4>
            <p className="text-sm text-gray-400">하나원결혼에서 계승된 압도적인 성혼 데이터와 전문성</p>
          </div>
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-forest-green text-gold rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-xl font-bold text-forest-green">철저한 신뢰</h4>
            <p className="text-sm text-gray-400">공신력 있는 신원 인증 시스템을 통한 안전한 만남 보호</p>
          </div>
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-forest-green text-gold rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Sparkles size={32} />
            </div>
            <h4 className="text-xl font-bold text-forest-green">미래 지향적 매칭</h4>
            <p className="text-sm text-gray-400">전통적 안목과 빅데이터 AI 분석의 완벽한 조화</p>
          </div>
        </div>
      </section>
    </div>
  );
}
