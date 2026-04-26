import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, Check, Gem, Star, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Fee() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const saeteominPlans = [
    {
      name: '실버',
      sub: '황혼재혼에 한함',
      price: '195만',
      period: '1년',
      feat: '만남 5회+성혼까지 무제한 매칭',
      details: [
        '전담 매니저의 현실상담 원격지원',
        '기본적인 프로필 열람 지원',
        '만남 후 피드백 및 조정'
      ],
      color: 'border-gray-200'
    },
    {
      name: '노블레스',
      sub: '1년간 집중적인 만남을 위한 추천 플랜',
      price: '295만',
      period: '(1년)',
      feat: '만남 10회(5회+서비스5회) + 성혼까지 무제한 매칭',
      details: [
        '강화된 매칭 서비스 및 추천 프로필',
        '성혼까지 무제한 매칭 혜택',
        '전담 매니저의 밀착 케어'
      ],
      color: 'border-gold bg-gold/5 shadow-xl scale-105',
      badge: 'Most Popular'
    },
    {
      name: '다이아몬드',
      sub: '확실하고 성공적인 만남을 위한 프리미엄 플랜',
      price: '495만',
      period: '3년',
      feat: '만남 20회(만남 10회 + 서비스 10회) + 성혼까지 무제한 매칭',
      details: [
        '매칭전문가 1:1 맞춤형 서비스',
        '최적의 상대를 위한 커스텀 매칭',
        '프라이빗 이벤트 우선 초대'
      ],
      color: 'border-gray-200'
    }
  ];

  const domesticPlans = [
    {
      name: '퍼플',
      sub: '일반/대기업/공기업 재직자를 위한 만남',
      price: '165만',
      feat: '만남 3회 + 성혼까지 무제한 매칭',
      details: [
        '엄격히 검증된 직업군 회원 매칭',
        '전담 커플 매니저의 밀착 지원',
        '만남 후 상세한 피드백 제공'
      ],
      color: 'border-gray-200'
    },
    {
      name: '블랙',
      sub: '전문직/자산가/가업승계자를 위한 VVIP 만남',
      price: '265만',
      feat: '만남 5회 + 성혼까지 무제한 매칭',
      details: [
        '최상위 계층 회원들 간의 매칭',
        '프라이빗한 비공개 매칭 우선',
        'VIP 전용 이벤트 초대',
        '성혼 컨설팅 및 에스코트 서비스 (협의)'
      ],
      color: 'border-forest-green bg-forest-green/5 shadow-xl scale-105',
      badge: 'VVIP Choice'
    }
  ];

  const faqs = [
    { q: '가입비 외에 추가 비용이 있나요?', a: '성혼 시 발생하는 성혼 사례비는 별도이며, 가입하시는 플랜에 따라 상이할 수 있습니다. 자세한 내용은 상담 시 안내해 드립니다.' },
    { q: '서비스 기간 연장이 가능한가요?', a: '계약 기간 내 성혼이 이루어지지 않았을 경우, 규정에 따라 일정 기간 서비스 연장이 가능합니다.' },
    { q: '가입 후 바로 만남이 가능한가요?', a: '서류 검증 및 프로필 승인 절차가 완료된 후(보통 1주일 내외), 담당 매니저의 추천을 통해 첫 만남이 진행됩니다.' },
    { q: '지역 제한이 있나요?', a: '전국 단위 서비스가 가능하며, 수도권 외 지역의 경우 거주지 및 활동 반경을 고려하여 매칭을 진행합니다.' }
  ];

  return (
    <div className="bg-white pt-24 pb-40">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative z-10 text-center space-y-4"
        >
          <span className="text-gold font-bold tracking-[0.5em] uppercase text-xs">Plans</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">가입비</h1>
          <p className="text-white/60 font-light text-lg">결혼의 해답, 이제 화목연이 찾아드립니다.</p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
           <Sparkles className="text-gold mx-auto" size={40} />
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">플랜별 가입비 안내</h2>
           <p className="text-gray-400 font-light text-lg leading-relaxed">
             회원님의 소중한 인연을 위해, 라이프스타일에 맞춘 <br />최적의 성혼 서비스를 합리적인 비용으로 제공합니다.
           </p>
           <button className="bg-gold text-forest-green px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-forest-green hover:text-white transition-all">
             무료 상담하기
           </button>
        </div>
      </section>

      {/* Saeteomin Plans */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h3 className="text-3xl font-serif font-bold text-forest-green">A. 새터민 플랜</h3>
             <p className="text-gray-400 text-sm font-light">북한이탈주민을 찾으시는 분을 위한 맞춤 플랜입니다. 문화적 이해를 바탕으로 안정적인 가정을 꾸릴 수 있는 따뜻한 인연을 찾아드립니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {saeteominPlans.map((plan, i) => (
              <div key={i} className={`relative p-12 rounded-[3.5rem] border-2 transition-all flex flex-col ${plan.color}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-forest-green px-6 py-2 rounded-full font-bold text-xs shadow-lg uppercase tracking-widest whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="text-center mb-10">
                  <h4 className="text-2xl font-serif font-bold text-forest-green mb-2">{plan.name}</h4>
                  <p className="text-xs text-gray-400 mb-6 min-h-[32px]">{plan.sub}</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold text-forest-green">{plan.price}</span>
                    <span className="text-gray-400 pb-2">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-xs text-gold font-medium">{plan.feat}</p>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-[10px] text-gray-300 font-bold mb-4">* 가입비는 부가세 별도 금액입니다.</p>
                  {plan.details.map((detail, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div className="w-4 h-4 bg-soft-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={10} className="text-gold" />
                      </div>
                      <span className="text-sm text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-12 w-full py-4 rounded-full border border-gray-100 text-gray-400 font-bold hover:bg-forest-green hover:text-white transition-all text-sm">
                  문의하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Plans */}
      <section className="py-24 px-6 bg-soft-bg mx-6 rounded-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h3 className="text-3xl font-serif font-bold text-forest-green">B. 국내 회원 플랜</h3>
             <p className="text-gray-400 text-sm font-light">다양한 직업군과 라이프스타일을 가진 국내 회원분들을 위한 맞춤형 서비스입니다. 진정한 가치관을 공유할 인연을 찾아드립니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {domesticPlans.map((plan, i) => (
              <div key={i} className={`relative p-12 rounded-[3.5rem] bg-white border-2 transition-all flex flex-col ${plan.color}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-forest-green text-gold px-6 py-2 rounded-full font-bold text-xs shadow-lg uppercase tracking-widest whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="text-center mb-10">
                  <h4 className="text-2xl font-serif font-bold text-forest-green mb-2">{plan.name}</h4>
                  <p className="text-xs text-gray-400 mb-6 min-h-[32px]">{plan.sub}</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold text-forest-green">{plan.price}</span>
                  </div>
                  <p className="mt-4 text-xs text-gold font-medium">{plan.feat}</p>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-[10px] text-gray-300 font-bold mb-4">* 가입비는 성혼비 별도 금액입니다.</p>
                  {plan.details.map((detail, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div className="w-4 h-4 bg-soft-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={10} className="text-gold" />
                      </div>
                      <span className="text-sm text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-12 w-full py-4 rounded-full border border-gray-100 text-gray-400 font-bold hover:bg-forest-green hover:text-white transition-all text-sm">
                  상담신청
                </button>
              </div>
            ))}
          </div>
          <div className="mt-20 p-8 bg-white/50 rounded-3xl border border-dashed border-gray-200 max-w-4xl mx-auto">
             <h4 className="font-bold text-forest-green mb-4">유의사항</h4>
             <ul className="space-y-2 text-xs text-gray-400 font-light">
               <li>* 모든 새터민 플랜의 가격은 부가세 별도입니다.</li>
               <li>* 국내 회원 플랜(퍼플, 블랙)은 성혼비 별도로 발생합니다. 성혼비는 상담을 통해 자세히 안내해 드립니다.</li>
               <li>* 회원권 내용 및 서비스는 내부 사정에 따라 변경될 수 있습니다. 자세한 내용은 전문가 상담을 통해 확인하시기 바랍니다.</li>
             </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <span className="text-gold font-bold text-xs uppercase tracking-widest">Q&A</span>
           <h2 className="text-4xl font-serif font-bold text-forest-green">자주 묻는 질문</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
               <button 
                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
                 className="w-full flex items-center justify-between p-6 bg-white hover:bg-soft-bg transition-all"
               >
                 <span className="text-left font-bold text-forest-green pr-8">Q. {faq.q}</span>
                 <ChevronDown className={`text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
               </button>
               <motion.div 
                 initial={false}
                 animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                 className="overflow-hidden bg-soft-bg"
               >
                 <p className="p-8 text-gray-500 font-light leading-relaxed border-t border-gray-200 flex gap-4">
                    <HelpCircle size={20} className="text-gold flex-shrink-0" />
                    {faq.a}
                 </p>
               </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
