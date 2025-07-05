export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">병원소개</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">안녕플란트 치과에 오신 것을 환영합니다</h2>
          <p className="text-gray-600 leading-relaxed">
            안녕플란트 치과는 환자분들의 건강한 치아를 위해 최선을 다하는 치과입니다.
            최신 의료 장비와 숙련된 의료진이 함께 최고의 치료 서비스를 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}