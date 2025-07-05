export default function Info() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">진료안내 & 오시는길</h1>
        
        <div className="space-y-6">
          {/* 진료시간 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">진료시간</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4 text-blue-600">평일 진료</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>월요일 - 금요일</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span>09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일, 공휴일</span>
                    <span className="text-red-500">휴진</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-600">점심시간</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span>12:30 - 13:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span>점심시간 없음</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 오시는길 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">오시는길</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-blue-600">병원 정보</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600">📍</span>
                    <div>
                      <p className="font-medium">주소</p>
                      <p>서울시 강남구 테헤란로 123길 45</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600">📞</span>
                    <div>
                      <p className="font-medium">전화번호</p>
                      <p>042-000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600">🚇</span>
                    <div>
                      <p className="font-medium">지하철</p>
                      <p>2호선 강남역 3번 출구 도보 5분</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600">🚌</span>
                    <div>
                      <p className="font-medium">버스</p>
                      <p>간선: 146, 740, 360</p>
                      <p>지선: 6411, 3412</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">지도 영역</p>
                </div>
              </div>
            </div>
          </div>

          {/* 예약 및 상담 */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">예약 및 상담</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                📞 전화 예약
              </button>
              <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                💬 카카오톡 상담
              </button>
              <button className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                📅 온라인 예약
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}