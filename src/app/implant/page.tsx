export default function Implant() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">임플란트</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">임플란트 치료</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            안녕플란트 치과의 임플란트 치료는 자연치아와 가장 유사한 기능을 제공합니다.
            최신 기술과 정밀한 시술로 안전하고 효과적인 치료를 받으실 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">시술 과정</h3>
              <p className="text-gray-600 text-sm">정밀 진단부터 완성까지 체계적인 과정</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">사후 관리</h3>
              <p className="text-gray-600 text-sm">장기적인 건강 관리 프로그램</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}