export default function General() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">일반진료</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">일반진료</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            기본적인 치과 치료부터 예방 관리까지 포괄적인 일반진료 서비스를 제공합니다.
            정기적인 검진과 치료로 건강한 치아를 유지하세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">충치치료</h3>
              <p className="text-gray-600 text-sm">초기 충치부터 신경치료까지</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">스케일링</h3>
              <p className="text-gray-600 text-sm">치석 제거 및 잇몸질환 예방</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">발치</h3>
              <p className="text-gray-600 text-sm">안전하고 무통 발치 시술</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">치주치료</h3>
              <p className="text-gray-600 text-sm">잇몸질환 전문 치료</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">신경치료</h3>
              <p className="text-gray-600 text-sm">치아 신경 보존 치료</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">예방치료</h3>
              <p className="text-gray-600 text-sm">정기검진 및 예방 프로그램</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}