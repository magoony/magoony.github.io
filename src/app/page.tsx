"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [showOverlay, setShowOverlay] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    // Calculate header height more precisely
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        const rect = header.getBoundingClientRect();
        setHeaderHeight(rect.height);
      }
    };

    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);

    const handleScroll = () => {
      const videoSection = document.querySelector(".hero-video-section");
      const flowingTextSection = document.querySelector(".flowing-text-section");
      
      if (videoSection && flowingTextSection) {
        const videoHeight = videoSection.offsetHeight;
        const scrolledAmount = window.scrollY;
        const fourFifthsOfVideo = videoHeight * 0.8;
        
        // Get the last content element in the flowing text section
        const textContainer = flowingTextSection.querySelector(".space-y-40");
        if (textContainer) {
          const lastTextElement = textContainer.lastElementChild;
          if (lastTextElement) {
            const lastTextRect = lastTextElement.getBoundingClientRect();
            const lastTextBottom = lastTextRect.bottom;
            
            // Show overlay when:
            // 1. Scrolled past 4/5 of video 
            // 2. AND last text element is still visible in viewport
            setShowOverlay(scrolledAmount >= fourFifthsOfVideo && lastTextBottom > 0);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateHeaderHeight);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-video-section relative w-full overflow-hidden"
        style={{ 
          height: `calc(100vh - ${headerHeight}px)`,
          aspectRatio: '16/9',
          maxHeight: '56.25vw'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern dental clinic"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.4 }} />
      </section>

      {/* Flowing Text Section - End Credits Style */}
      <section
        className="flowing-text-section relative min-h-screen overflow-hidden pt-20 pb-20 md:pt-[50vh] md:pb-[50vh]"
        style={{
          backgroundColor: theme.colors.surface,
        }}
      >
        {/* Top Gradient Overlay - accounting for header */}
        {showOverlay && (
          <div
            className="fixed left-0 right-0 h-80 pointer-events-none z-40 transition-opacity duration-300 hidden md:block"
            style={{
              top: "0px", // Start from very top
              background: `linear-gradient(to bottom, ${theme.colors.surface} 0%, ${theme.colors.surface}F0 40%, ${theme.colors.surface}DD 60%, ${theme.colors.surface}99 80%, ${theme.colors.surface}66 90%, transparent 100%)`,
            }}
          />
        )}

        {/* Bottom Gradient Overlay */}
        {showOverlay && (
          <div
            className="fixed bottom-0 left-0 right-0 h-80 pointer-events-none z-20 transition-opacity duration-300 hidden md:block"
            style={{
              background: `linear-gradient(to top, ${theme.colors.surface} 0%, ${theme.colors.surface}F0 30%, ${theme.colors.surface}DD 50%, ${theme.colors.surface}99 70%, ${theme.colors.surface}66 85%, transparent 100%)`,
            }}
          />
        )}

        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-40 text-center">
            <p
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-wider"
              style={{
                color: theme.colors.text.primary,
              }}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="200"
            >
              혹시...
              <br />
              과잉진료는 아닐까
              <br />
              불안했던 적 있으신가요?
            </p>

            <p
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-wider"
              style={{
                color: theme.colors.text.primary,
              }}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="200"
            >
              의료진이 조금 더 걸어가야 해도
              <br />
              그 몇 걸음이 환자의 마음을 지킨다면
              <br />
              기꺼이 선택합니다.
            </p>

            <p
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-wider"
              style={{
                color: theme.colors.text.primary,
              }}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="200"
            >
              자연치아를 살릴 수 있다면
              <br />
              끝까지 살립니다.
            </p>

            <p
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-wider"
              style={{
                color: theme.colors.text.primary,
              }}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="200"
            >
              임플란트는
              <br />
              꼭 필요한 순간에만
              <br />
              권합니다.
            </p>

            <p
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-wider"
              style={{
                color: theme.colors.text.primary,
              }}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="200"
            >
              치료의 효율보다
              <br />
              환자의 편안함을
              <br />더 소중히 생각합니다.
            </p>

            <div className="py-8">
              <p
                className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wider"
                style={{
                  color: theme.colors.text.accent,
                }}
                data-aos="fade-up"
                data-aos-offset="50"
              >
                당신의 치아는
                <br />
                단순한 기능이 아니라
                <br />
                삶의 자신감을 지켜주는 자산입니다.
              </p>
            </div>

            <p
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-wider"
              style={{
                color: theme.colors.text.primary,
              }}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="200"
            >
              정직하고
              <br />
              정성스러운 진료를
              <br />
              약속합니다.
            </p>

            <div className="py-8">
              <p
                className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wider"
                style={{
                  color: theme.colors.text.accent,
                }}
                data-aos="fade-up"
                data-aos-offset="50"
              >
                안녕플란트치과,
                <br />
                믿을 수 있는 선택이
                <br />
                되어 드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: theme.colors.text.primary }}
              >
                안녕플란트 치과 소개
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.colors.text.secondary }}
              >
                환자분들의 건강한 치아를 위해 최선을 다하는 안녕플란트
                치과입니다. 정확한 진단과 안전한 치료를 통해 여러분의 소중한
                미소를 지켜드리겠습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-aos="fade-up">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span style={{ color: theme.colors.text.primary }}>
                    정확한 진단과 치료 계획
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-aos="fade-up">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span style={{ color: theme.colors.text.primary }}>
                    최첨단 의료 장비
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-aos="fade-up">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span style={{ color: theme.colors.text.primary }}>
                    환자 중심의 맞춤 치료
                  </span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
                alt="Hospital interior"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Staff */}
      <section
        className="py-20"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              의료진 소개
            </h2>
            <p
              className="text-lg"
              style={{ color: theme.colors.text.secondary }}
            >
              풍부한 경험과 전문성을 갖춘 의료진이 여러분을 진료합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((doctor, index) => (
              <div
                key={doctor}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: theme.colors.background }}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <img
                  src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt={`Doctor ${doctor}`}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.colors.text.primary }}
                >
                  김○○ 원장
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: theme.colors.text.secondary }}
                >
                  서울대학교 치과대학 졸업
                </p>
                <div
                  className="text-xs space-y-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <p>• 임플란트 전문의</p>
                  <p>• 치주과 전문의</p>
                  <p>• 대한치과의사협회 정회원</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
                alt="Medical equipment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: theme.colors.text.primary }}
              >
                최첨단 의료 장비
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.colors.text.secondary }}
              >
                정확한 진단과 안전한 치료를 위해 최신 의료 장비를 도입하여
                운영하고 있습니다. 디지털 방사선 촬영 시스템부터 3D CT까지 첨단
                장비로 정밀한 진료를 제공합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                  data-aos="flip-left"
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: theme.colors.text.accent }}
                  >
                    3D CT
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    정밀한 3차원 영상 진단
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                  data-aos="flip-left"
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: theme.colors.text.accent }}
                  >
                    디지털 스캐너
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    정확한 구강 스캔
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                  data-aos="flip-left"
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: theme.colors.text.accent }}
                  >
                    레이저 치료기
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    무통 레이저 치료
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                  data-aos="flip-left"
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: theme.colors.text.accent }}
                  >
                    멸균 시스템
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    철저한 감염 관리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infection Control */}
      <section
        className="py-20"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              감염 관리 시스템
            </h2>
            <p
              className="text-lg"
              style={{ color: theme.colors.text.secondary }}
            >
              안전한 진료 환경을 위한 철저한 감염 관리
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "기구 멸균", icon: "🔬", desc: "모든 기구 개별 멸균" },
              { title: "공기 정화", icon: "💨", desc: "헤파 필터 공기 정화" },
              { title: "일회용품", icon: "🥽", desc: "일회용 방호용품 사용" },
              { title: "소독 시스템", icon: "🧼", desc: "진료실 철저 소독" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: theme.colors.background }}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: theme.colors.text.primary }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ color: theme.colors.text.primary }}
              >
                진료 시간
              </h2>
              <div className="space-y-6">
                <div
                  className="flex justify-between items-center py-3 border-b"
                  style={{ borderColor: theme.colors.border }}
                  data-aos="fade-up"
                >
                  <span
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    평일
                  </span>
                  <span style={{ color: theme.colors.text.secondary }}>
                    09:00 - 18:00
                  </span>
                </div>
                <div
                  className="flex justify-between items-center py-3 border-b"
                  style={{ borderColor: theme.colors.border }}
                  data-aos="fade-up"
                >
                  <span
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    토요일
                  </span>
                  <span style={{ color: theme.colors.text.secondary }}>
                    09:00 - 14:00
                  </span>
                </div>
                <div
                  className="flex justify-between items-center py-3 border-b"
                  style={{ borderColor: theme.colors.border }}
                  data-aos="fade-up"
                >
                  <span
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    점심시간
                  </span>
                  <span style={{ color: theme.colors.text.secondary }}>
                    12:30 - 13:30
                  </span>
                </div>
                <div
                  className="flex justify-between items-center py-3"
                  data-aos="fade-up"
                >
                  <span
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    일요일, 공휴일
                  </span>
                  <span className="text-red-500">휴진</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ color: theme.colors.text.primary }}
              >
                예약 및 상담
              </h2>
              <div className="space-y-4">
                <Link
                  href="#reservation"
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
                  data-aos="zoom-in"
                >
                  📅 온라인 예약하기
                </Link>
                <Link
                  href="#consultation"
                  className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
                  data-aos="zoom-in"
                >
                  💬 카카오톡 상담
                </Link>
                <div
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                  data-aos="fade-up"
                >
                  <p
                    className="text-lg font-semibold mb-2"
                    style={{ color: theme.colors.text.primary }}
                  >
                    📞 042-000-0000
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    전화 예약도 가능합니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
