import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-forest-green text-white/80 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
              <Sparkles className="text-forest-green" size={24} />
            </div>
            <span className="text-3xl font-serif font-bold text-white tracking-wider">
              화목연
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            진심을 담은 인연의 시작,<br />결과로 증명하는 프리미엄 매칭 서비스입니다.<br />당신의 소중한 인연을 위해 최선을 다하겠습니다.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-semibold text-lg">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
              <span className="text-sm">서울특별시 강남구 테헤란로 407, EK타워 4층</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-gold flex-shrink-0" />
              <span className="text-sm font-semibold text-white">02-538-3407</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-gold flex-shrink-0" />
              <span className="text-sm">hwamokyeon@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-semibold text-lg uppercase tracking-widest text-xs opacity-50">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm hover:text-gold transition-colors">화목연 스토리</Link></li>
            <li><Link to="/services" className="text-sm hover:text-gold transition-colors">서비스 안내</Link></li>
            <li><Link to="/ceo" className="text-sm hover:text-gold transition-colors">대표이사 인사말</Link></li>
            <li><Link to="/gallery" className="text-sm hover:text-gold transition-colors">성혼 갤러리</Link></li>
            <li><a href="tel:02-538-3407" className="text-sm hover:text-gold transition-colors">1:1 상담문의</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Hwamokyeon. All Rights Reserved. 화목연 결혼정보</p>
        <div className="flex gap-6 uppercase tracking-widest font-medium opacity-50">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
