import { motion } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  Home, 
  HandHeart, 
  History, 
  Network, 
  Quote,
  Star,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Heart,
  Users
} from 'lucide-react';

export default function Saeteomin() {
  return (
    <div className="bg-white pt-24">
      {/* Title Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 space-y-6"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Service</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-green">새터민결혼</h1>
          <p className="text-gray-400 text-lg font-light tracking-[0.2em]">화목한 인연에서, 새로운 인연을</p>
        </motion.div>
      </section>

      {/* Our Service - New Life Support */}
      <section className="py-24 px-6 bg-soft-bg text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-gold font-bold uppercase text-xs tracking-widest">Our Service</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">새로운 터전, 든든한 시작을 위한 새터민 지원</h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
            '새터민'은 '새롭게 터전을 잡은 주민'이라는 뜻으로, 북한이탈주민을 지칭합니다. <br />
            현재 약 4만 명의 새터민이 대한민국에 정착하여 살아가고 있습니다.
          </p>
        </div>
        
        {/* Step Icons (Reference Image Style) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {[
            { num: '1', title: '중국 경유 및 입국', desc: '중국, 베트남 등 제3국을 거처 한국으로 입국합니다.' },
            { num: '2', title: '국정원 조사', desc: '입국 심사 후, 국정원 조사를 거쳐 순수한 탈북 의사를 확인합니다.' },
            { num: '3', title: '사회 적응 교육', desc: '조사가 끝나면 정부 지원 시설로 이동하여 남한 생활 적응 교육을 받습니다.' },
            { num: '4', title: '새로운 시작', desc: '교육 수료 후, 주민등록증 발급 및 임대아파트 등 정착 지원으로 대한민국 국민이 됩니다.' },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-forest-green text-gold flex items-center justify-center font-bold mb-6 text-xl shadow-lg relative">
                {step.num}
                {i < 3 && <div className="hidden md:block absolute w-24 h-[1px] bg-gray-200 left-full top-1/2 -translate-y-1/2" />}
              </div>
              <h4 className="font-bold text-forest-green mb-2">{step.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Content (Support) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
             <span className="text-gold font-bold uppercase text-xs tracking-widest block mb-4">Support</span>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">새터민은 어떤 혜택이 있나요?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="rounded-[2.5rem] overflow-hidden h-[400px]">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden h-[400px]">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '든든한 기초생활수급혜택', desc: '초기에는 기초생활수급자로 지정되어 필요한 혜택을 받습니다.' },
              { title: '새로운 시작, 정착 지원금 지원', desc: '초기 정착을 돕기 위해 정착 자금 지급 및 생활 안정 지원도 함께 제공됩니다.' },
              { title: '대학 특례입학과 장학금', desc: '대학 특례입학 및 등록금 혜택이 제공됩니다.' },
              { title: '평생 1회 특별분양 아파트', desc: '평생 1회에 한해 특별분양 아파트 기회가 주어집니다.' },
              { title: '목돈 마련 월 저축 지원', desc: '직장 지속 시 4년간 월 10~50만원을 지원하여 목돈 마련을 돕습니다.' },
              { title: '성공 기회, 창업 시작 지원', desc: '창업을 고려하는 경우에도 다양한 혜택이 제공됩니다.' },
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center">
                <h4 className="text-gold font-bold text-lg mb-3">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choice Criteria (Standard) */}
      <section className="py-24 px-6 bg-[#F9FAF8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-gold font-bold uppercase text-xs tracking-widest block mb-4">Standard</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">새터민여성은 배우자를 선택할 때 어떤 점을 많이 보나요?</h2>
            </div>
            <div className="space-y-6">
              {[
                { title: '학벌, 직업보다 마음', desc: '공신력 있는 서류를 통한 100% 신원 검증으로, 모든 프로필의 정직성과 신뢰도를 보장합니다.' },
                { title: '나이차이 유연성', desc: '공신력 있는 서류를 통한 100% 신원 검증으로, 모든 프로필의 정직성과 신뢰도를 보장합니다.' },
                { title: '충분한 교감 중시', desc: '공신력 있는 서류를 통한 100% 신원 검증으로, 모든 프로필의 정직성과 신뢰도를 보장합니다.' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start group">
                  <div className="w-3 h-3 rounded-full bg-gold mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-forest-green font-bold text-xl mb-2">{item.title} <span className="text-gold font-normal text-sm ml-2">마음</span></h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worry Quotes Section */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <Sparkles className="text-gold mx-auto" size={40} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">혹시 이런 고민, 한 번쯤 해보셨나요?</h2>
          </div>
          <div className="space-y-4">
            {[
              "혼자 와서 의지할 사람이 필요해요",
              "한국에서의 결혼은 어떻게 준비해야 할지 막막해요",
              "나이가 좀 있는데, 배우자 찾을 수 있을까요?",
              "소통이 잘 통하는 사람을 만나고 싶어요"
            ].map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-soft-bg p-6 rounded-2xl border border-gray-100 shadow-sm text-gray-500 font-medium"
              >
                "{quote}"
              </motion.div>
            ))}
          </div>
          <div className="text-2xl font-serif font-bold text-forest-green">걱정 마세요, 화목연이 함께하니까요.</div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { num: '1', title: '30년 성혼 노하우 새터민 맞춤 1:1 매칭', desc: '30년 축적된 데이터와 노하우로 고객 성향에 맞춘 1:1 밀착 매칭을 제공합니다.' },
              { num: '2', title: '새터민 완벽 전문 전담 매니저 솔루션', desc: '새터민 이해도가 높은 전담 매니저가 정착부터 연애까지 가이드해 드립니다.' },
              { num: '3', title: '심리적 장벽 낮추는 특화 멘토링', desc: '문화적 차이나 심리적 어려움을 이해하는 새터민 특화 멘토링 솔루션을 지원합니다.' },
              { num: '4', title: '새터민 회원을 위한 실질적 지원 혜택', desc: '결혼 준비 외에도 정기적 지원으로 한국 생활에 안착할 수 있도록 도웁니다.' },
            ].map((card, i) => (
              <div key={i} className="p-8 bg-purple-50/30 rounded-3xl border border-purple-100 border-opacity-50 relative overflow-hidden group">
                <span className="text-5xl font-serif font-bold text-gold/20 absolute -top-2 -right-2 transform group-hover:scale-125 transition-transform">{card.num}</span>
                <h4 className="text-forest-green font-bold text-sm mb-4 leading-tight">{card.title}</h4>
                <p className="text-[11px] text-gray-400 overflow-hidden leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Process (Professional) */}
      <section className="py-24 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold font-bold uppercase text-xs tracking-widest block mb-8">Professional</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 text-white">많은 회원님들의 신뢰로 만들어진 결과입니다</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-20">
            <div>
              <h3 className="text-5xl font-bold text-gold mb-2">41,289명</h3>
              <p className="text-white/50 text-sm">정착 지원</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-gold mb-2">84%</h3>
              <p className="text-white/50 text-sm">정착 성공률</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-gold mb-2">5,372건</h3>
              <p className="text-white/50 text-sm">월평균 성혼 사례</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-20 space-y-12">
            <span className="text-gold font-bold uppercase text-xs tracking-widest block">Mentoring</span>
            <h2 className="text-3xl font-serif font-bold">나만의 결혼 멘토링, 오직 화목연</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <MessageCircle />, title: '맞춤 상담', desc: '새터민 특성 고려 심층 상담', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
                { icon: <ShieldCheck />, title: '서류 지원', desc: '정착 서류 및 매칭 절차 안내', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400' },
                { icon: <Sparkles />, title: '연애 코칭', desc: '소통, 공감 능력 향상 교육', image: 'https://images.unsplash.com/photo-1516589174184-c68526671ee6?auto=format&fit=crop&q=80&w=400' },
                { icon: <Users />, title: '결혼 교육', desc: '남한의 결혼 문화 이해', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400' },
              ].map((m, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 group">
                    <img src={m.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="font-bold text-gold">{m.title}</h4>
                  <p className="text-[10px] text-white/50">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-10">
              <button className="bg-gold text-forest-green px-12 py-4 rounded-full font-bold shadow-xl hover:bg-white transition-all">무료 상담받기</button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories (Reviews) */}
      <section className="py-24 px-6 bg-white overflow-hidden text-center relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
             <Sparkles className="text-gold mx-auto" size={40} />
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">화목연에서 이루어진 리얼한 매칭 후기</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { 
                tag: "오랫동안 기다려온 바로 그 인원", 
                title: "한OO님 (남성, 65세, 퇴직 공무원/재혼/부부거주)", 
                text: "이혼한지는 오래 되었고, 국내여성은 재혼 할머니들이 나올 때까지 상대방 자녀들도 신청하신지 꼼꼼하게 살피는 사람이라서 인상이 좋았는데 잘 맞는 분을 만나 정말 기쁩니다.",
                stars: 5 
              },
              { 
                tag: "새로운 시작, 더 견고한 행복!", 
                title: "오OO님 (56세 남성/중견기업/재혼/광주거주)", 
                text: "늦장가를 가다보니 아이들이 아직 학생이라 걱정이 많았죠. 누굴 만날 수 있을지 걱정을 많이 했는데 세심하게 매칭해주시고 정착 노하우도 가르쳐주셨어요.",
                stars: 5 
              },
              { 
                tag: "추구하던 제 이상형이 드디어 나타났어요!", 
                title: "강OO님 (여성, 34세, 회사원)", 
                text: "저는 제가 어떤 사람을 좋아하는지 명확하지 않았는데, 매니지님이 제 성격과 정성 조언해주셔서 저에게 딱 맞는 인연을 만났습니다! 너무 신기하고 감사해요!",
                stars: 5 
              },
            ].map((rev, i) => (
              <div key={i} className="p-10 bg-soft-bg rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col group">
                <div className="flex gap-1 mb-6 text-gold">
                   {[...Array(rev.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <h4 className="text-forest-green font-bold text-lg mb-2 italic">★ {rev.tag}</h4>
                <p className="text-xs text-gray-500 font-bold mb-4">{rev.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed italic mb-8 flex-grow">"{rev.text}"</p>
                <div className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">Team Hwamokyeon</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-forest-green z-0" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">세상의 모든 인연, 하나가 되길 원합니다. <br />지금, 당신의 인연을 만나보세요.</h2>
          <div className="pt-10">
            <button className="bg-gold text-forest-green px-20 py-6 rounded-full font-bold text-xl hover:bg-white transition-all shadow-3xl">무료 매칭 받아보기</button>
          </div>
        </div>
      </section>
    </div>
  );
}
