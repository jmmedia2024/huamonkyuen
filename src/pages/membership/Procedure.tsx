import { motion } from 'motion/react';
import { CheckCircle2, ClipboardCheck, Users, FileText, UserCheck, Heart, Sparkles, Image as ImageIcon, FileSearch, UserPlus } from 'lucide-react';

export default function Procedure() {
  const eligibility = [
    { title: '법적 미혼', desc: '현재 법적으로 미혼인 분 (초혼 또는 제적등본상 이혼)', icon: <UserCheck /> },
    { title: '신체 건강', desc: '심신이 건강한 성인 남녀', icon: <Heart /> },
    { title: '신원 확실', desc: '신원보장이 확실하신 분 (범죄 기록 및 허위 정보 없음)', icon: <ShieldCheck /> },
    { title: '안정적 기반', desc: '일정 소득과 직업이 있으신 분', icon: <Briefcase /> },
  ];

  const steps = [
    { num: '01', title: '상담신청', desc: '온라인 신청서 또는 유선 전화를 통해 인적사항, 희망 배우자상 등 상세 내용을 접수합니다.' },
    { num: '02', title: '기본 정보 확인', desc: '제출된 기초 정보를 바탕으로 서비스 가입 가능 여부를 1차 검토합니다.' },
    { num: '03', title: '대면상담', desc: '가입 의사가 있으시면 전문 매니저와 직접 상담을 진행합니다. (출장상담 가능)' },
    { num: '04', title: '서류제출', desc: '혼인관계증명서, 주민등록등본 등 필요 서류를 제출하여 신원을 확인합니다.' },
    { num: '05', title: '계약서 작성', desc: '정식 계약서와 개인정보보호 동의서를 작성하고 가입비를 결제합니다.' },
    { num: '06', title: '회원등록 완료', desc: '서류 확인이 최종 완료되면 화목연 정회원으로 등록되어 서비스를 시작합니다.' },
  ];

  const documents = [
    { title: '여권사진 (2매)', desc: '최근 3개월 이내 촬영본', icon: <ImageIcon /> },
    { title: '주민등록등본', desc: '3개월 이내 발급분', icon: <FileText /> },
    { title: '가족관계증명서', desc: '세대 상세로 발급', icon: <FileSearch /> },
    { title: '혼인관계증명서', desc: '초혼/재혼 모두 필요', icon: <ClipboardCheck /> },
  ];

  return (
    <div className="bg-white pt-24 pb-40">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative z-10 space-y-6"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs block">Process</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-green">가입절차 안내</h1>
          <p className="text-gray-400 text-lg font-light tracking-[0.1em] max-w-2xl mx-auto">
            함께하고 싶은 상대, 화목연이 꼼꼼하게 찾아드립니다. <br />
            체계적인 검증과 정성스러운 매칭의 시작.
          </p>
        </motion.div>
      </section>

      {/* Eligibility */}
      <section className="py-24 px-6 bg-soft-bg mx-6 rounded-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold font-bold tracking-widest uppercase text-xs">Certificate</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-green">화목연 가입자격</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 border border-gray-100 group hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-soft-bg text-gold rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-green group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-forest-green text-lg mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8 sticky top-32">
            <span className="text-gold font-bold tracking-widest uppercase text-xs">Procedure</span>
            <h2 className="text-4xl font-serif font-bold text-forest-green leading-tight">
              화목연 정회원 가입은 <br />
              이렇게 진행됩니다.
            </h2>
            <p className="text-gray-400 font-light">
              복잡한 절차보다 정확한 정보가 중요합니다. <br />
              모든 과정은 철저히 비공개로 안전하게 관리됩니다.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-3xl font-serif font-bold text-gold/20 flex-shrink-0 group-hover:text-gold transition-colors">{step.num}</div>
                <div className="pb-12 border-b border-gray-100 w-full">
                  <h4 className="text-xl font-bold text-forest-green mb-4">{step.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-24 px-6 bg-forest-green text-white mx-6 rounded-[5rem] text-center">
        <div className="max-w-7xl mx-auto">
          <Sparkles className="text-gold mx-auto mb-8" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-white">가입 시 필요 서류</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {documents.map((doc, i) => (
              <div key={i} className="space-y-6">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto text-gold mb-6 border border-white/5">
                  {doc.icon}
                </div>
                <h4 className="text-xl font-bold">{doc.title}</h4>
                <p className="text-white/40 text-sm">{doc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-10 border-t border-white/10 max-w-2xl mx-auto">
            <p className="text-white/60 font-light mb-8">
              수동적인 서류 제출 외에 필요한 절차는 화목연 매니저가 직접 안내하고 도와드립니다. <br />
              안심하고 상담 신청을 남겨주세요.
            </p>
            <button className="btn-3d-gold px-12 py-5 text-lg">무료 상담 신청하기</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing icons for the eligibility array
import { ShieldCheck, Briefcase } from 'lucide-react';
