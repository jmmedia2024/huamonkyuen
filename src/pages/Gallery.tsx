import { motion } from 'motion/react';
import { Camera, Heart, Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000',
    title: '서울 장충동 신라호텔 성혼',
    category: 'Elite',
    date: '2024.03',
    desc: '전문직 회원님의 고결한 결혼식'
  },
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000',
    category: 'Noblesse',
    title: '강남 빌라드지디 수서',
    date: '2024.02',
    desc: 'CEO 가문의 하우스 웨딩'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
    category: 'First Marriage',
    title: '여의도 콘래드 서울',
    date: '2023.12',
    desc: '금융권 종사자 커플의 아름다운 시작'
  },
  {
    image: 'https://images.unsplash.com/photo-1522333323-32663f73030c?auto=format&fit=crop&q=80&w=1000',
    category: 'Remarriage',
    title: '성북동 삼청각 전통혼례',
    date: '2023.11',
    desc: '인생 2막을 여는 품격 있는 약속'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    category: 'Saeteomin',
    title: '종로 아베뉴 웨딩홀',
    date: '2023.10',
    desc: '새로운 터전에서 맺은 소중한 인연'
  },
  {
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000',
    category: 'Noblesse',
    title: '잠실 시그니엘 서울',
    date: '2023.09',
    desc: '상위 1% 노블레스 성혼 사례'
  }
];

const categories = ['All', 'Noblesse', 'Elite', 'First Marriage', 'Remarriage', 'Saeteomin'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-soft-bg pt-24 pb-40 min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Marriage Gallery</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-green">성혼 갤러리</h1>
          <p className="text-gray-400 text-lg font-light tracking-[0.1em] max-w-2xl mx-auto">
            화목연의 철저한 관리와 진심 어린 매칭이 만들어낸 <br />
            아름다운 성혼의 순간들을 기록합니다.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-forest-green text-gold shadow-lg scale-105' 
                : 'bg-white text-gray-400 hover:text-forest-green hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item, i) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white space-y-2">
                    <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest">
                      <Calendar size={14} /> {item.date}
                    </div>
                    <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-forest-green uppercase tracking-widest shadow-lg">
                  {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 px-6 text-center">
        <div className="max-w-4xl mx-auto p-16 bg-forest-green rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-8">
            <Heart size={48} className="text-gold mx-auto" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">다음 갤러리의 주인공,<br />당신이 될 수 있습니다.</h2>
            <p className="text-white/60 font-light">30년 전통의 품격과 데이터가 당신의 인연을 책임집니다.</p>
            <button className="btn-3d-gold px-12 py-5 text-lg">성혼 컨설팅 신청하기</button>
          </div>
        </div>
      </section>
    </div>
  );
}
