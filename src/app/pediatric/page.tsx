export default function Pediatric() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">소아치과</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">소아치과 치료</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            아이들의 건강한 치아를 위한 전문적인 소아치과 치료를 제공합니다.
            친근하고 안전한 환경에서 아이들이 편안하게 치료받을 수 있도록 합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">예방치료</h3>
              <p className="text-gray-600 text-sm">불소도포, 실란트 등 예방 중심 치료</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">치아관리 교육</h3>
              <p className="text-gray-600 text-sm">올바른 양치질 습관 교육</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}