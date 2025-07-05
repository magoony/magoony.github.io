export default function Orthodontics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">치아교정</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">치아교정 치료</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            안녕플란트 치과의 치아교정은 아름다운 미소와 건강한 치아를 동시에 제공합니다.
            개인별 맞춤 교정 계획으로 최적의 결과를 얻으실 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">투명교정</h3>
              <p className="text-gray-600 text-sm">눈에 띄지 않는 투명한 교정</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">메탈교정</h3>
              <p className="text-gray-600 text-sm">효과적인 전통적 교정</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">설측교정</h3>
              <p className="text-gray-600 text-sm">안쪽으로 보이지 않는 교정</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}