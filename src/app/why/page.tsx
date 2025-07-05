export default function Why() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">왜 안녕플란트인가?</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">안녕플란트를 선택해야 하는 이유</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✓</span>
              <p className="text-gray-600">최첨단 의료 장비와 기술</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✓</span>
              <p className="text-gray-600">풍부한 경험의 전문 의료진</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✓</span>
              <p className="text-gray-600">환자 중심의 맞춤 치료</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}