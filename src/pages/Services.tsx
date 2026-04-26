import { motion } from 'motion/react';
import { Heart, Users, Star, Sparkles, ArrowRight, ShieldCheck, TrendingUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'first-marriage',
    name: '초혼 서비스',
    eng: 'First Marriage',
    desc: '생애 한 번뿐인 고결한 시작, 화목연의 프리미엄 큐레이션으로 완벽한 인연을 만납니다.',
    path: '/services/first-marriage',
    icon: <Heart />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'remarriage',
    name: '재혼 서비스',
    eng: 'Re-Marriage',
    desc: '경험의 깊이만큼 정성스러운 배려로 찾는 인생 2막의 따뜻한 행복.',
    path: '/services/remarriage',
    icon: <Users />,
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'noblesse',
    name: '노블레스',
    eng: 'Noblesse Elite',
    desc: '상위 1% 엘리트 계층을 위한 하이엔드 성혼 시스템. 성공의 가치를 공유합니다.',
    path: '/services/noblesse',
    icon: <Star />,
    image: 'https://images.unsplash.com/photo-1533907650686-70576141c030?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'saeteomin',
    name: '새터민 성혼',
    eng: 'Saeteomin',
    desc: '30년 하나원결혼의 노하우를 계승한 국내 최대 새터민 특화 매칭 시스템.',
    path: '/services/saeteomin',
    icon: <Sparkles />,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Services() {
  return (
    <div className="bg-white pt-24 pb-40">
      {/* Header */}
      <section className="py-24 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto space-y-6"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Our Solutions</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-green">서비스 안내</h1>
          <p className="text-gray-400 text-lg font-light tracking-[0.1em] max-w-2xl mx-auto">
            화목연의 체계적인 시스템과 전문 매니저의 안목이 <br />
            당신에게 가장 적합한 성혼 솔루션을 제안합니다.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="aspect-[16/10] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-soft-bg">
                   <img 
                     src={service.image} 
                     alt={service.name} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10" />
              </div>
              
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4 text-gold">
                   {service.icon}
                   <span className="font-bold tracking-widest uppercase text-xs">{service.eng}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green">{service.name}</h2>
                <p className="text-gray-500 text-lg leading-relaxed font-light">{service.desc}</p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-gold flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-400">철저한 보안 및 신원 검증 보장</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="text-gold flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-400">검증된 데이터 기반 높은 성혼율</span>
                  </div>
                </div>
                <div className="pt-6">
                  <Link to={service.path} className="btn-3d-gold inline-flex items-center gap-3">
                    자세히 보기 <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Search CTA */}
      <section className="mt-40 px-6">
        <div className="max-w-7xl mx-auto rounded-[5rem] overflow-hidden bg-forest-green relative py-32 text-center text-white px-6">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12 relative z-10"
          >
            <Search className="text-gold mx-auto" size={48} />
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight uppercase">Still Searching?</h2>
            <p className="text-white/50 text-xl font-light">당신에게 가장 필요한 서비스를 아직 모르시겠다면, <br />전담 전문가의 무료 진단을 받아보세요.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button className="bg-gold text-forest-green px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl">무료 진단 상담 신청</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
