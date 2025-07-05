export default function Cosmetic() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">심미치료</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">심미치료</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            아름다운 미소를 위한 심미치료를 제공합니다.
            자연스럽고 아름다운 치아로 자신감 있는 미소를 만들어 드립니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">치아미백</h3>
              <p className="text-gray-600 text-sm">안전하고 효과적인 치아 화이트닝</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">라미네이트</h3>
              <p className="text-gray-600 text-sm">자연스러운 치아 모양 개선</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">세라믹크라운</h3>
              <p className="text-gray-600 text-sm">자연치아와 유사한 색상과 질감</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">잇몸성형</h3>
              <p className="text-gray-600 text-sm">균형잡힌 아름다운 잇몸라인</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}