import { motion } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, Star, Users, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function FirstMarriage() {
  const images = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000'
  ];

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-soft-bg opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 space-y-6"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Premium Service</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-green">초혼 서비스</h1>
          <p className="text-gray-400 text-lg font-light tracking-[0.2em] max-w-2xl mx-auto">당신의 생애 가장 찬란한 순간, <br />화목연이 그 고결한 시작을 함께합니다.</p>
        </motion.div>
      </section>

      {/* Intro Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 p-10 bg-soft-bg rounded-[3rem]">
              <Heart className="text-gold" size={40} />
              <h3 className="text-2xl font-serif font-bold text-forest-green">맞춤형 큐레이션</h3>
              <p className="text-gray-500 text-sm leading-relaxed">단순한 조건 배칭이 아닌, 가치관과 라이프스타일을 고려한 정밀 큐레이션을 제공합니다.</p>
            </div>
            <div className="space-y-6 p-10 bg-forest-green text-white rounded-[3rem] shadow-xl">
              <ShieldCheck className="text-gold" size={40} />
              <h3 className="text-2xl font-serif font-bold">철저한 신원 인증</h3>
              <p className="text-white/60 text-sm leading-relaxed">학력, 직업, 경제력 등 모든 프로필은 법적 증명이 가능한 서류를 통해 100% 검증됩니다.</p>
            </div>
            <div className="space-y-6 p-10 bg-soft-bg rounded-[3rem]">
              <Users className="text-gold" size={40} />
              <h3 className="text-2xl font-serif font-bold">1:2 전담 매니지먼트</h3>
              <p className="text-gray-500 text-sm leading-relaxed">상담 매니저와 매칭 매니저가 한 팀이 되어 인연을 찾는 모든 과정을 세심하게 케어합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="py-40 bg-[#F9FAF8] px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-12">
             <div className="space-y-6">
                <span className="text-gold font-bold uppercase text-xs tracking-widest">Target Audience</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-forest-green leading-tight">이런 분들께 <br />적극 추천합니다</h2>
             </div>
             <div className="space-y-6">
               {[
                 '사회적으로 검증된 환경에서 인연을 찾고 싶으신 분',
                 '결혼에 대한 가치관과 목표가 뚜렷하신 분',
                 '전담 전문가의 섬세한 관리와 상담이 필요하신 분',
                 '내외적 매력을 두루 갖춘 준비된 회원을 찾으시는 분'
               ].map((text, i) => (
                 <div key={i} className="flex gap-4 items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm group">
                    <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                    <p className="text-gray-500 font-medium">{text}</p>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square rounded-[5rem] overflow-hidden shadow-3xl">
                <img src="https://images.unsplash.com/photo-1522333323-32663f73030c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-forest-green text-center text-white relative">
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <Heart className="text-gold mx-auto" size={48} />
          <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight">당신의 가장 아름다운 시작, <br />화목연이 함께하겠습니다.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-3d-gold px-16 py-6 text-xl">가입 상담 신청</button>
            <button className="border-2 border-white/20 text-white px-16 py-6 rounded-full text-xl hover:bg-white hover:text-forest-green transition-all">전화 문의</button>
          </div>
        </div>
      </section>
    </div>
  );
}
