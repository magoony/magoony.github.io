export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">커뮤니티</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">공지사항</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-blue-600 mb-1">2025년 설날 휴진 안내</h3>
                <p className="text-gray-600 text-sm">2025.01.28 - 2025.01.30 휴진합니다.</p>
                <span className="text-gray-400 text-xs">2025.01.15</span>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-blue-600 mb-1">신규 장비 도입 안내</h3>
                <p className="text-gray-600 text-sm">최신 3D 스캐너를 도입하여 더욱 정밀한 진단이 가능합니다.</p>
                <span className="text-gray-400 text-xs">2025.01.10</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">치료사례</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">임플란트 치료 사례</h3>
                <p className="text-gray-600 text-sm">앞니 임플란트로 자연스러운 미소를 되찾은 사례</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">교정 치료 사례</h3>
                <p className="text-gray-600 text-sm">투명교정으로 가지런한 치아를 완성한 사례</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}