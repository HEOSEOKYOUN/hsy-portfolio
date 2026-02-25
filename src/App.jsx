import React from 'react';
import { Mail, Phone, MapPin, Layout, Smartphone, LineChart, CheckCircle2, Briefcase, Calendar, GraduationCap, ChevronRight, PieChart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* 1. 상단 히어로 섹션 */}
      <header className="relative overflow-hidden bg-slate-900 pt-20 pb-16 px-6 md:px-8">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[980px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 relative z-10">
          <div className="md:w-2/3 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-300 bg-blue-900/50 border border-blue-800/50 rounded-full shadow-sm">
              10년 차 웹/서비스 기획자
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug mb-6 break-keep text-white">
              비즈니스 목표를 <span className="text-blue-400">사용자 경험(UX)</span>으로 구현하는<br className="hidden sm:block" /> 기획자, 허석윤입니다.
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed break-keep font-light font-medium">
              "복잡한 시스템은 단순하게, 끊어진 여정은 매끄럽게 연결합니다."<br />
              대규모 플랫폼 통합부터 온·오프라인 커머스, 글로벌 팬덤 서비스까지 다양한 도메인에서 비즈니스 문제를 IT 서비스로 해결해왔습니다.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-slate-700/50 shadow-sm transition-colors hover:bg-slate-700">
                <Mail size={16} className="text-blue-400" />
                <span>nennei@naver.com</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-slate-700/50 shadow-sm">
                <Phone size={16} className="text-blue-400" />
                <span>010-9936-6765</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-slate-700/50 shadow-sm">
                <MapPin size={16} className="text-blue-400" />
                <span>경기 군포시 / 수도권 전 지역</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 to-indigo-400 shadow-2xl flex-shrink-0">
              <img 
                src="/20250422_054848.jpg" 
                alt="기획자 허석윤 프로필" 
                className="w-full h-full object-cover object-top rounded-full border-4 border-slate-800 bg-slate-100 transition-transform hover:scale-[1.02] duration-300"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[980px] mx-auto px-6 md:px-8 py-16 space-y-28">
        
        {/* 2. 경력 요약 (세그먼트 바 스타일) */}
        <section>
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 underline decoration-blue-500 decoration-4 underline-offset-8">
              경력 요약
            </h2>
            <div className="text-right hidden sm:block">
              <p className="text-blue-600 text-sm font-bold tracking-tight">직무 경력 10년 6개월</p>
              <p className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">2014.11 - Present</p>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
            {/* 세련된 경력 비중 차트 */}
            <div className="mb-12">
              <div className="h-10 md:h-12 w-full flex rounded-2xl overflow-hidden shadow-inner bg-slate-100 p-1 text-[10px] md:text-xs font-bold">
                <div style={{ width: '20%' }} className="bg-yellow-400/80 h-full rounded-l-xl flex items-center justify-center text-yellow-900 transition-all hover:brightness-95 cursor-help" title="골든에셋 (1.5년)">1.5년</div>
                <div style={{ width: '20%' }} className="bg-orange-400/80 h-full border-l-2 border-white/40 flex items-center justify-center text-white transition-all hover:brightness-95 cursor-help" title="CJ E&M (1.8년)">1.8년</div>
                <div style={{ width: '25%' }} className="bg-amber-500/80 h-full border-l-2 border-white/40 flex items-center justify-center text-white transition-all hover:brightness-95 cursor-help" title="라드씨엔에스 (2.6년)">2.6년</div>
                <div style={{ width: '35%' }} className="bg-blue-600 h-full border-l-2 border-white/40 rounded-r-xl flex items-center justify-center text-white transition-all hover:brightness-95 cursor-help" title="디아이웨어 (5.3년)">5.3년</div>
              </div>
              
              {/* 차트 라벨 (PC) - 각 세그먼트 하단 중앙 정렬 */}
              <div className="hidden sm:flex w-full mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                <div className="w-[20%] text-center">골든에셋</div>
                <div className="w-[20%] text-center">CJ E&M (디지털뮤직)</div>
                <div className="w-[25%] text-center">라드씨엔에스</div>
                <div className="w-[35%] text-center text-blue-600 font-extrabold tracking-normal">디아이웨어 (현재)</div>
              </div>
            </div>

            {/* 상세 경력 카드 섹션 */}
            <div className="grid gap-6">
              {/* 디아이웨어 */}
              <div className="group bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-blue-200 hover:shadow-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded uppercase tracking-wider">현재 재직</span>
                      <span className="text-blue-600 text-xs font-bold">5년 3개월</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">디아이웨어</h3>
                    <p className="text-sm text-slate-500 font-semibold mb-2">웹앱개발팀 / 서비스 기획 PL</p>
                    <p className="text-xs text-slate-400 font-medium">2020.11 ~ 현재</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-2.5">
                      <li className="text-slate-600 text-sm md:text-base flex gap-2.5 font-medium leading-relaxed">
                        <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>CJ그룹 다국어 홈페이지(5개국어) 및 사회공헌 사이트 통합 운영 기획</span>
                      </li>
                      <li className="text-slate-600 text-sm md:text-base flex gap-2.5 font-medium leading-relaxed">
                        <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>Smart CJ 기부 신청 및 키오스크 관리 시스템(백오피스) 기획 총괄</span>
                      </li>
                      <li className="text-slate-600 text-sm md:text-base flex gap-2.5 font-medium leading-relaxed">
                        <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>연차보고서 마이크로사이트 기획 및 GA/GTM 기반 트래킹 설계</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 라드씨엔에스 */}
              <div className="group bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-amber-300 hover:shadow-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-bold rounded uppercase tracking-wider">PL</span>
                      <span className="text-amber-600 text-xs font-bold">2년 7개월</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">라드씨엔에스</h3>
                    <p className="text-sm text-slate-500 font-semibold mb-2">UI/UX 기획팀 유통파트 / PL</p>
                    <p className="text-xs text-slate-400 font-medium">2018.04 ~ 2020.11</p>
                  </div>
                  <div className="md:w-2/3 text-slate-600 text-sm md:text-base font-medium space-y-2 leading-relaxed">
                    <p>• 이랜드리테일 온·오프라인 통합 멤버십 및 간편 가입 프로세스 구축</p>
                    <p>• 차세대 POS 연동 (모바일 영수증, 주차 정산, OCR 결제 등) 서비스 기획</p>
                    <p>• 유통 파트 리더로서 다수의 웹/앱 서비스 운영 및 고도화 리딩</p>
                  </div>
                </div>
              </div>

              {/* CJ E&M */}
              <div className="group bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-orange-200 hover:shadow-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-orange-400 text-white text-[10px] font-bold rounded uppercase tracking-wider">글로벌 기획</span>
                      <span className="text-orange-600 text-xs font-bold">1년 10개월</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1 text-nowrap">CJ E&M (디지털뮤직)</h3>
                    <p className="text-sm text-slate-500 font-semibold mb-2">Mwave 사업팀 / 서비스 기획</p>
                    <p className="text-xs text-slate-400 font-medium">2016.04 ~ 2018.02</p>
                  </div>
                  <div className="md:w-2/3 text-slate-600 text-sm md:text-base font-medium space-y-2 leading-relaxed">
                    <p>• 글로벌 K-POP 플랫폼 Mwave 리뉴얼 및 다국어 최적화 운영 기획</p>
                    <p>• MAMA/KCON 대규모 투표 시스템 및 글로벌 이벤트 페이지 설계</p>
                    <p>• 전 세계 팬덤 대상 참여형 콘텐츠 기획 (97만 명 동시 접속 대응)</p>
                  </div>
                </div>
              </div>

              {/* 골든에셋 */}
              <div className="group bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-yellow-300 hover:shadow-md relative overflow-hidden opacity-90">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-[10px] font-bold rounded uppercase tracking-wider">Foundation</span>
                      <span className="text-yellow-700 text-xs font-bold">1년 5개월</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">골든에셋</h3>
                    <p className="text-sm text-slate-500 font-semibold mb-2">온라인사업부 / 플랫폼 기획</p>
                    <p className="text-xs text-slate-400 font-medium">2014.11 ~ 2016.04</p>
                  </div>
                  <div className="md:w-2/3 text-slate-600 text-sm md:text-base font-medium space-y-2 leading-relaxed">
                    <p>• 크라우드펀딩 플랫폼 '골든큐브' 신규 기획 및 운영 관리</p>
                    <p>• 전사 홈페이지 리뉴얼 기획 및 SNS 바이럴 마케팅 전개</p>
                    <p>• 신규 비즈니스 모델 구체화 및 웹 서비스 초기 구축 리딩</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 핵심 역량 섹션 */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 underline decoration-blue-500 decoration-4 underline-offset-8">
            핵심 역량
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Layout className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">플랫폼 통합 & 백오피스</h3>
              <p className="text-slate-600 text-sm leading-relaxed break-keep font-medium">
                파편화된 시스템을 분석하여 일원화된 정책을 수립하고, 복잡한 권한 관리 체계를 사용자 친화적으로 재구축합니다.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">온·오프라인 커머스 결제</h3>
              <p className="text-slate-600 text-sm leading-relaxed break-keep font-medium">
                온·오프라인(POS, 키오스크)을 잇는 매끄러운 멤버십 및 결제 경험을 설계하여 사용자 이탈을 방지합니다.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <LineChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">데이터 기반 UX 개선</h3>
              <p className="text-slate-600 text-sm leading-relaxed break-keep font-medium">
                GA/GTM을 활용한 사용자 행동 데이터 분석을 통해 문제점을 진단하고, 실효성 있는 사용성 개선안 도출합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 주요 프로젝트 사례 - 기여도 UI가 적용된 3개 사례 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 underline decoration-blue-500 decoration-4 underline-offset-8">
              주요 프로젝트 사례
            </h2>
          </div>
          <div className="space-y-16">
            {/* 사례 01 */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row transition-all hover:shadow-lg">
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center break-keep">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Platform Integration</span>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Project Contribution</span>
                    <span className="text-lg font-black text-blue-600">100%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">CJ 4DPLEX CGVFX<br/>통합 플랫폼 구축</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar size={12} className="text-blue-600" />
                    <span>2025.05 - 2026.01</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    <PieChart size={12} />
                    <span>기획 총괄 (PL)</span>
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>서비스 기획 및 정책 수립</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>UI/UX 상세 설계 및 검수</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-full"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed font-medium">
                  <div>
                    <strong className="block text-slate-800 mb-1 font-bold">프로젝트 배경</strong>
                    <p className="text-slate-600 font-medium">기존 시스템 기능 파편화 및 복잡한 권한 관리로 인한 다국적 사용자 접근성 저하 문제 해결.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-800 mb-1 font-bold text-blue-700">해결 전략</strong>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>접근 권한 및 프로젝트 관리 <span className="font-bold text-slate-900 decoration-blue-200 underline">마스터 정책서 수립</span></li>
                      <li>다국적 사용자용 인증 시스템 UI/UX 고도화</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-blue-800 font-bold flex items-center gap-2"><CheckCircle2 size={16}/> 운영 효율성 대폭 개선 및 성공적 통합 오픈</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 p-6 md:p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="플랫폼 대시보드" 
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </article>

            {/* 사례 02 */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row-reverse transition-all hover:shadow-lg">
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center break-keep">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">O2O & Commerce</span>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Project Contribution</span>
                    <span className="text-lg font-black text-blue-600">90%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">이랜드리테일 통합 멤버십<br/>및 차세대 POS 프로젝트</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar size={12} className="text-blue-600" />
                    <span>2018.04 - 2020.11</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    <PieChart size={12} />
                    <span>유통파트 PL</span>
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>멤버십/O2O 서비스 기획</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>POS 시스템 연동 설계</span>
                      <span>80%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[80%]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed font-medium">
                  <div>
                    <strong className="block text-slate-800 mb-1 font-bold">프로젝트 배경</strong>
                    <p className="text-slate-600 font-medium">온·오프라인 분절된 데이터 통합을 통해 매끄러운 옴니채널 결제 경험 제공.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-800 mb-1 font-bold text-blue-700">해결 전략</strong>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>간편 가입 및 멤버십 앱 기획, 차세대 POS 연동 프로세스 설계</li>
                      <li>모바일 영수증 및 주차 정산 시스템 연동</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-blue-800 font-bold flex items-center gap-2"><CheckCircle2 size={16}/> 결제/주차 정산 시간 단축 및 멤버십 활성 사용자 증대</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 p-6 md:p-8 flex items-center justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                  alt="멤버십 앱 화면" 
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </article>

            {/* 사례 03 - 이미지 주소 교체 및 안정화 */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row transition-all hover:shadow-lg">
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center break-keep">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Global Service & Traffic</span>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Project Contribution</span>
                    <span className="text-lg font-black text-blue-600">85%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">글로벌 Mwave 리뉴얼<br/>및 KCON/MAMA 구축</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar size={12} className="text-blue-600" />
                    <span>2016.04 - 2018.02</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    <PieChart size={12} />
                    <span>글로벌 서비스 기획</span>
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>글로벌 서비스 기획 및 운영</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>대규모 트래픽 투표 시스템 설계</span>
                      <span>70%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[70%]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed font-medium">
                  <div>
                    <strong className="block text-slate-800 mb-1 font-bold">프로젝트 배경</strong>
                    <p className="text-slate-600 font-medium">글로벌 팬덤의 폭발적 증가로 인한 트래픽 이슈 해결 및 국가별 사용자 경험 일원화 필요.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-800 mb-1 font-bold text-blue-700">해결 전략</strong>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>다국어 최적화 및 대규모 동시 접속 대응 <span className="font-bold text-slate-900 decoration-blue-200 underline">투표 프로세스 설계</span></li>
                      <li>참여형 이벤트(스타응원, 팬아트) UI/UX 리뉴얼</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-blue-800 font-bold flex items-center gap-2"><CheckCircle2 size={16}/> 단일 이벤트 97만 명 참여, 5,258만 누적 투표 안정적 처리</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 p-6 md:p-8 flex items-center justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" 
                  alt="MAMA 글로벌 이벤트" 
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md border border-slate-200"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1459749411177-042180ca6a9d?auto=format&fit=crop&q=80&w=800"; }}
                />
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* 푸터 영역 */}
      <footer className="bg-slate-900 text-slate-400 py-20 text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 break-keep leading-tight">"사용자의 작은 불편함을 놓치지 않고,<br className="hidden sm:block"/>비즈니스 가치로 연결하는 집요한 기획자가 되겠습니다."</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-semibold">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer font-medium"><Mail size={16}/> nennei@naver.com</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer font-medium"><Phone size={16}/> 010-9936-6765</span>
          </div>
          <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-50 font-medium">
              © 2026 허석윤. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] opacity-30">
              <span>Web</span>
              <span>Mobile</span>
              <span>Platform</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}