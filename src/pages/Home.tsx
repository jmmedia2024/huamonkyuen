import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  MessageSquare,
  TrendingUp,
  MapPin,
  Clock,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2070',
    title: '당신의 가장 찬란한 시작',
    subtitle: '화목연이 제안하는 고결한 인연의 가치',
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2070',
    title: '품격 있는 성혼의 명가',
    subtitle: '30년 노하우로 빚어내는 완벽한 매칭',
  },
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2070',
    title: '진심이 닿는 소중한 인연',
    subtitle: '단순한 조건보다 삶의 철학을 먼저 봅니다',
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: '누적 성혼 수', value: '12,840', unit: '건' },
    { label: '매칭 성공률', value: '84', unit: '%' },
    { label: '보유 회원 수', value: '45,000', unit: '명+' },
    { label: '전담 인프라', value: '30', unit: '년' },
  ];

  const subServices = [
    {
      name: '초혼 서비스',
      desc: '생애 한 번뿐인 고결한 시작, 화목연의 프리미엄 큐레이션으로 완벽한 인연을 만납니다.',
      path: '/services/first-marriage',
      icon: <Heart className="text-gold" />,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000'
    },
    {
      name: '재혼 서비스',
      desc: '경험의 깊이만큼 정성스러운 배려로 찾는 인생 2막의 따뜻한 행복.',
      path: '/services/remarriage',
      icon: <Users className="text-forest-green" />,
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      name: '노블레스',
      desc: '상위 1% 엘리트 계층을 위한 하이엔드 성혼 시스템. 성공의 가치를 공유합니다.',
      path: '/services/noblesse',
      icon: <Star className="text-gold" />,
      image: 'https://images.unsplash.com/photo-1533907650686-70576141c030?auto=format&fit=crop&q=80&w=1000'
    },
    {
      name: '새터민 성혼',
      desc: '30년 전통의 노하우를 계승한 국내 최대 새터민 특화 매칭 시스템.',
      path: '/services/saeteomin',
      icon: <Sparkles className="text-forest-green" />,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const processSteps = [
    { icon: <MessageSquare />, title: '01. 심층 상담', desc: '가치관과 이상형을 분석합니다.' },
    { icon: <ShieldCheck />, title: '02. 신원 인증', desc: '철저한 서류 검증을 진행합니다.' },
    { icon: <Users />, title: '03. 정교한 매칭', desc: '최적의 대상을 추천해 드립니다.' },
    { icon: <Heart />, title: '04. 성혼 완성', desc: '아름다운 결실을 맺습니다.' },
  ];

  const reviews = [
    {
      name: '김OO (30대, 전문직)',
      text: '단순히 조건만 맞추는 곳이 아니라 제 성향과 가치관을 정확히 짚어주셔서 놀랐습니다. 지금 너무 행복해요.',
      stars: 5
    },
    {
      name: '이OO (40대, 자영업)',
      text: '30년 노하우라는 말이 빈말이 아니더군요. 전담 매니저님의 세심한 관리 덕분에 소중한 인연을 만났습니다.',
      stars: 5
    },
    {
      name: '박OO (20대, 새터민)',
      text: '한국에서의 시작이 막막했는데, 따뜻한 조언과 함께 좋은 분을 만나 정착의 큰 힘이 되었습니다.',
      stars: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Dynamic Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 text-center px-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: currentSlide === index ? 0 : 50, 
                  opacity: currentSlide === index ? 1 : 0 
                }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-5xl"
              >
                <span className="text-gold font-bold tracking-[0.5em] uppercase text-sm mb-6 block drop-shadow-lg shadow-black">Premium Marriage Agency</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="btn-3d-gold px-12 py-5 text-lg">무료 매칭 상담</button>
                  <button className="border-2 border-white/30 backdrop-blur-md text-white px-12 py-5 text-lg hover:bg-white hover:text-forest-green transition-all rounded-full">
                    성혼 사례 보기
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        {/* Slider Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                currentSlide === i ? 'bg-gold w-10' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-forest-green text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-2">{stat.value}<span className="text-2xl ml-1">{stat.unit}</span></h3>
              <p className="text-white/50 text-sm tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase">Since 1994</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green leading-tight">
              과거의 인연이<br />
              미래의 가족이 되기까지
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              화목연은 단순한 결혼정보업체를 넘어, 인생의 가장 중요한 결정을 돕는 멘토가 되고자 합니다. 화목연의 30년 전통과 현대적 감각의 만남으로 새로운 성혼 문화를 선도합니다.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <ShieldCheck className="text-gold" size={32} />
                <h4 className="font-bold text-forest-green">철저한 신원 검증</h4>
                <p className="text-sm text-gray-400">법행정 시스템을 통한 100% 신뢰 기반 회원 관리</p>
              </div>
              <div className="space-y-3">
                <TrendingUp className="text-gold" size={32} />
                <h4 className="font-bold text-forest-green">압도적 성혼율</h4>
                <p className="text-sm text-gray-400">검증된 알고리즘과 매니저의 안목이 빚어낸 결과</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000"
                alt="Couple Vision"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-gold font-bold text-2xl mb-1">30 Years</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Heritage of Marriage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Overlay */}
      <section className="py-40 px-6 bg-soft-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-green/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green mb-8">Premium Services</h2>
            <p className="text-gray-500 text-lg font-light">당신에게 가장 필요한 맞춤형 성혼 솔루션을 찾아보세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[3rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-soft-bg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest-green mb-4">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-12">{service.desc}</p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity">
                   <img src={service.image} alt="" className="w-full h-full object-cover rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-4xl font-serif font-bold text-forest-green leading-tight">성공적인 성혼을 위한<br />철저한 프로세스</h2>
              <p className="text-gray-500">화목연의 프로세스는 오차 없는 매칭과 안전한 성혼을 위해 설계되었습니다.</p>
              <Link to="/membership/procedure">
                <button className="btn-3d-gold px-10 py-4">프로세스 자세히 보기</button>
              </Link>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-forest-green text-gold rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-forest-green text-xl mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Reviews */}
      <section className="py-40 px-6 bg-forest-green text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Quote className="text-gold mx-auto mb-12 opacity-50" size={60} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-20 text-white">실제 성혼 고객들이 전하는 화목연</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="flex justify-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-gold" />
                  ))}
                </div>
                <p className="text-white/70 italic font-light leading-relaxed">"{review.text}"</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-gold">{review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-soft-bg text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Sparkles className="text-gold mx-auto mb-8" size={48} />
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-forest-green mb-12 leading-tight">당신이 꿈꿔온 그 이상의 기적,<br />지금 화목연에서 시작됩니다.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/membership/procedure" className="w-full sm:w-auto">
              <button className="btn-3d-gold px-16 py-6 text-xl w-full">가입 안내 신청</button>
            </Link>
            <Link to="/location" className="w-full sm:w-auto">
              <button className="bg-forest-green text-white px-16 py-6 rounded-full font-bold text-xl hover:bg-forest-green/90 transition-all shadow-2xl w-full">
                 오시는 길
              </button>
            </Link>
          </div>
        </motion.div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-gold/20 m-12 rounded-tl-[4rem]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-gold/20 m-12 rounded-br-[4rem]" />
      </section>
    </div>
  );
}
