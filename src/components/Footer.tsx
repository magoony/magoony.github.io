import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">안녕플란트 치과</h3>
            <p className="text-gray-300 mb-2">
              신뢰할 수 있는 치과 의료 서비스
            </p>
            <p className="text-gray-300">
              Hello Plant Dental Clinic
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">병원 정보</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 주소: 서울시 강남구 테헤란로 000</p>
              <p>📞 전화: 02-0000-0000</p>
              <p>⏰ 진료시간: 평일 09:00 - 18:00</p>
              <p>🏥 사업자등록번호: 000-00-00000</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <div className="space-y-2">
              <Link href="#reservation" className="block text-gray-300 hover:text-white transition-colors">
                온라인 예약
              </Link>
              <Link href="#consultation" className="block text-gray-300 hover:text-white transition-colors">
                온라인 상담
              </Link>
              <Link href="#location" className="block text-gray-300 hover:text-white transition-colors">
                오시는 길
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2025 안녕플란트 치과. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}