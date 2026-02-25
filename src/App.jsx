import React from 'react';
import { Mail, Phone, MapPin, Layout, Smartphone, LineChart, CheckCircle2, Briefcase, Calendar } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* 1. Hero Section */}
      {/* 불필요하게 넓은 여백 제거하고 적정 여백(md:px-8)으로 조정 */}
      <header className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 md:px-8">
        <div className="max-w-[980px] mx-auto">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            10년 차 웹/서비스 기획자
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug mb-6 break-keep">
            비즈니스 목표를 <span className="text-blue-600">사용자 경험(UX)</span>으로 구현하는<br className="hidden sm:block" /> 기획자, 허석윤입니다.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed break-keep">
            "복잡한 시스템은 단순하게, 끊어진 여정은 매끄럽게 연결합니다."<br />
            대규모 플랫폼 통합부터 온·오프라인 커머스, 글로벌 팬덤 서비스까지 다양한 도메인에서 비즈니스 문제를 IT 서비스로 해결해왔습니다.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
              <Mail size={16} />
              <span>nennei@naver.com</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
              <Phone size={16} />
              <span>010-9936-6765</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
              <MapPin size={16} />
              <span>경기 군포시 / 수도권 전 지역</span>
            </div>
          </div>
        </div>
      </header>

      {/* 전체 최대 넓이 980px로 고정 */}
      <main className="max-w-[980px] mx-auto px-6 md:px-8 py-16 space-y-20">
        
        {/* 2. Core Competencies */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layout className="text-blue-600" /> 핵심 역량
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Layout className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">플랫폼 통합 & 백오피스</h3>
              <p className="text-slate-600 text-sm leading-relaxed break-keep">
                파편화된 시스템을 분석하여 일원화된 정책을 수립하고, 복잡한 권한 관리 체계를 사용자 친화적으로 재구축합니다.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">온·오프라인 커머스 결제</h3>
              <p className="text-slate-600 text-sm leading-relaxed break-keep">
                온·오프라인(POS, 키오스크)을 잇는 매끄러운 멤버십 및 결제 경험을 설계하여 사용자 이탈을 방지합니다.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <LineChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">데이터 기반 UX 개선</h3>
              <p className="text-slate-600 text-sm leading-relaxed break-keep">
                GA/GTM을 활용한 사용자 행동 데이터 분석을 통해 문제점을 진단하고, 실효성 있는 사용성 개선안 도출합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Case Studies */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-blue-600" /> 주요 프로젝트 (Case Studies)
          </h2>
          
          <div className="space-y-12">
            
            {/* Case 01 */}
            {/* 980px 레이아웃에 맞춰 md:flex-row 로 복구 */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center break-keep">
                <span className="text-sm font-bold text-blue-600 mb-2 block">플랫폼 통합 및 구조화</span>
                <h3 className="text-2xl font-bold mb-4">CJ 4DPLEX CGVFX<br/>통합 플랫폼 구축</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                  <Calendar size={14} />
                  <span>2025.05 - 2026.01 (디아이웨어 / PL)</span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="block text-slate-800 mb-1">배경 및 문제</strong>
                    <p className="text-slate-600">기존 시스템 기능 파편화 및 복잡한 권한 관리로 인해 다국적 사용자의 접근성 저하 및 운영 리소스 낭비 발생.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-800 mb-1">해결책 (내 역할)</strong>
                    <ul className="text-slate-600 space-y-1 list-disc list-inside">
                      <li>접근 권한 및 프로젝트 관리 <span className="font-semibold text-slate-800">마스터 정책서 기획</span></li>
                      <li>다국적 사용자 이탈 방지를 위한 인증 시스템 UI/UX 고도화</li>
                      <li>Jira/Confluence를 활용한 이슈 트래킹 및 리딩</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl mt-4">
                    <strong className="block text-blue-900 mb-1 flex items-center gap-1"><CheckCircle2 size={16}/> 주요 성과</strong>
                    <p className="text-blue-800">성공적인 시스템 통합 오픈 및 백오피스 운영 효율성 대폭 개선</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 p-6 md:p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="플랫폼 대시보드 예시" 
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </article>

            {/* Case 02 */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center break-keep">
                <span className="text-sm font-bold text-blue-600 mb-2 block">온·오프라인 커머스 연동</span>
                <h3 className="text-2xl font-bold mb-4">이랜드리테일 통합 멤버십<br/>및 차세대 POS 프로젝트</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                  <Calendar size={14} />
                  <span>2018.04 - 2020.11 (라드씨엔에스 / PL)</span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="block text-slate-800 mb-1">배경 및 문제</strong>
                    <p className="text-slate-600">오프라인 매장과 온라인 앱 간의 사용자 데이터 분절로 매끄러운 옴니채널(O2O) 결제 경험 제공 불가.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-800 mb-1">해결책 (내 역할)</strong>
                    <ul className="text-slate-600 space-y-1 list-disc list-inside">
                      <li>온·오프라인을 잇는 <span className="font-semibold text-slate-800">간편 회원가입 및 멤버십 앱 기획</span></li>
                      <li>모바일 영수증, 주차 정산 등 차세대 POS 연동 프로세스 설계</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl mt-4">
                    <strong className="block text-blue-900 mb-1 flex items-center gap-1"><CheckCircle2 size={16}/> 주요 성과</strong>
                    <p className="text-blue-800">매장 결제 및 주차 정산 시간 단축, 통합 멤버십 앱 활성 사용자 수 증대</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 p-6 md:p-8 flex items-center justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                  alt="POS 및 모바일 결제 예시" 
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </article>

            {/* Case 03 */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center break-keep">
                <span className="text-sm font-bold text-blue-600 mb-2 block">글로벌 서비스 & 대규모 트래픽</span>
                <h3 className="text-2xl font-bold mb-4">글로벌 Mwave 리뉴얼<br/>및 KCON/MAMA 구축</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                  <Calendar size={14} />
                  <span>2016.04 - 2018.02 (디지털뮤직 / 기획자)</span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="block text-slate-800 mb-1">배경 및 문제</strong>
                    <p className="text-slate-600">수십만 명의 해외 팬덤 동시 접속으로 인한 트래픽 이슈 및 다국어 환경에서의 사용성 파편화 문제 발생.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-800 mb-1">해결책 (내 역할)</strong>
                    <ul className="text-slate-600 space-y-1 list-disc list-inside">
                      <li>다국어 환경 최적화를 위한 플랫폼 리뉴얼 및 UI/UX 기획</li>
                      <li>대규모 트래픽을 견디는 안정적인 투표/응원 시스템 구조 설계</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl mt-4">
                    <strong className="block text-blue-900 mb-1 flex items-center gap-1"><CheckCircle2 size={16}/> 주요 성과</strong>
                    <p className="text-blue-800">2016 MAMA 단일 이벤트 약 97만 명 참여, 누적 투표 5,258만 회 안정적 처리</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 p-6 md:p-8 flex items-center justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1540039155732-68473500424b?auto=format&fit=crop&q=80&w=800" 
                  alt="글로벌 이벤트 예시" 
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </article>

          </div>
        </section>

        {/* 4. Timeline & Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Calendar className="text-blue-600" /> 커리어 타임라인 및 기타 이력
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm relative">
            <div className="absolute left-12 md:left-14 top-10 md:top-12 bottom-10 md:bottom-12 w-px bg-slate-200"></div>
            
            <div className="space-y-10 relative z-10 break-keep">
              {/* Item 1 */}
              <div className="flex gap-6 md:gap-8">
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-sm flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-bold">디아이웨어 <span className="text-slate-500 text-sm font-normal ml-2">2020.11 - 현재</span></h4>
                  <p className="text-slate-600 font-medium mb-2">웹/앱 개발팀 / 서비스 및 UI/UX 기획</p>
                  <ul className="text-sm text-slate-500 space-y-1 list-disc list-inside">
                    <li>CJ도너스캠프 키오스크 기부 관리 기능 및 모집 페이지 개발 (23.11 - 24.05)</li>
                    <li>SmartCJ 기부 신청 서비스 및 윤리경영 글로벌 확산 프로젝트</li>
                    <li>CJ 5개 국어 글로벌 홈페이지 및 사회공헌 사이트 운영 (GA/GTM)</li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 md:gap-8">
                <div className="w-8 h-8 rounded-full bg-slate-300 border-4 border-white shadow-sm flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-bold">라드씨엔에스 (구.리드온) <span className="text-slate-500 text-sm font-normal ml-2">2018.04 - 2020.11</span></h4>
                  <p className="text-slate-600 font-medium mb-2">UI/UX 기획팀 유통파트 / PL</p>
                  <p className="text-sm text-slate-500">이랜드리테일 웹/앱 서비스 기획 총괄, 통합 멤버십, 차세대 POS 기획</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 md:gap-8">
                <div className="w-8 h-8 rounded-full bg-slate-300 border-4 border-white shadow-sm flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-bold">디지털뮤직 (CJ E&M) <span className="text-slate-500 text-sm font-normal ml-2">2016.04 - 2018.02</span></h4>
                  <p className="text-slate-600 font-medium mb-2">Mwave 사업팀 / 서비스 기획</p>
                  <p className="text-sm text-slate-500">글로벌 Mnet 웹서비스 운영, MAMA/KCON 이벤트 기획</p>
                </div>
              </div>

               {/* Item 4 */}
               <div className="flex gap-6 md:gap-8">
                <div className="w-8 h-8 rounded-full bg-slate-300 border-4 border-white shadow-sm flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-bold">골든에셋 <span className="text-slate-500 text-sm font-normal ml-2">2014.11 - 2016.04</span></h4>
                  <p className="text-slate-600 font-medium mb-2">온라인사업부 / 마케팅 기획</p>
                  <p className="text-sm text-slate-500">크라우드펀딩 플랫폼 '골든큐브' 기획, 홈페이지 리뉴얼</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 break-keep">"사용자의 작은 불편함을 놓치지 않고,<br className="hidden sm:block"/>비즈니스 가치로 연결하는 집요한 기획자가 되겠습니다."</h2>
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <span className="flex items-center gap-2"><Mail size={16}/> nennei@naver.com</span>
            <span className="flex items-center gap-2"><Phone size={16}/> 010-9936-6765</span>
          </div>
          <p className="text-sm border-t border-slate-800 pt-8 max-w-3xl mx-auto">
            © 2026 Seokyoon Heo. Portfolio
          </p>
        </div>
      </footer>

    </div>
  );
}