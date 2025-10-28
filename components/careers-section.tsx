"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, Briefcase } from "lucide-react"

export function CareersSection() {
  const positions = [
    {
      title: "마케팅 디렉터 (MD)",
      department: "마케팅팀",
      location: "서울 본사",
      type: "정규직",
      experience: "5년 이상",
      description: "ATELIER의 브랜드 가치를 전 세계에 전달하는 마케팅 전략을 수립하고 실행하는 핵심 역할을 담당합니다.",
      requirements: [
        "패션/럭셔리 브랜드 마케팅 경험 5년 이상",
        "글로벌 브랜드 마케팅 전략 수립 및 실행 경험",
        "디지털 마케팅 및 소셜미디어 마케팅 전문성",
        "브랜드 포지셔닝 및 타겟 고객 분석 능력",
        "크리에이티브 디렉션 및 콘텐츠 기획 경험",
        "데이터 분석 및 성과 측정 역량",
        "영어 비즈니스 회화 가능 (TOEIC 800점 이상)",
        "팀 리더십 및 프로젝트 관리 능력",
        "트렌드 분석 및 시장 조사 경험",
        "Adobe Creative Suite 활용 능력 우대"
      ],
      responsibilities: [
        "브랜드 마케팅 전략 수립 및 실행",
        "글로벌 마케팅 캠페인 기획 및 관리",
        "디지털 마케팅 채널 최적화",
        "브랜드 콘텐츠 기획 및 제작 관리",
        "마케팅 성과 분석 및 개선안 도출",
        "외부 에이전시 및 파트너사 관리",
        "마케팅 예산 관리 및 ROI 최적화",
        "팀원 멘토링 및 성과 관리"
      ],
      benefits: [
        "경쟁력 있는 연봉 및 성과급",
        "4대 보험 및 퇴직금",
        "건강검진 및 의료비 지원",
        "교육비 지원 및 해외 연수 기회",
        "유연근무제 및 재택근무 가능",
        "연차 및 휴가 제도",
        "사내 카페테리아 및 간식 제공",
        "패션 할인 혜택"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            뒤로가기
          </Button>
        </div>

        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-muted-foreground tracking-wider">CAREERS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6">
            채용정보
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            ATELIER와 함께 시대를 초월한 우아함을 만들어갈 인재를 찾습니다.
          </p>
        </div>

        {/* 채용 공고 */}
        <div className="max-w-4xl mx-auto space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 space-y-8">
              {/* 포지션 기본 정보 */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-3xl font-light">{position.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {position.department}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{position.experience}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {position.description}
                </p>
              </div>

              {/* 자격 요건 */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  자격 요건
                </h3>
                <ul className="space-y-2">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 주요 업무 */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  주요 업무
                </h3>
                <ul className="space-y-2">
                  {position.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 혜택 */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  복리후생
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {position.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 지원 버튼 */}
              <div className="pt-6 border-t border-border">
                <Button size="lg" className="w-full md:w-auto">
                  지원하기
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* 연락처 정보 */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-secondary/30 rounded-lg text-center">
          <h3 className="text-2xl font-light mb-4">지원 문의</h3>
          <p className="text-muted-foreground mb-4">
            채용 관련 문의사항이 있으시면 언제든 연락주세요.
          </p>
          <div className="space-y-2 text-muted-foreground font-mono">
            <p>이메일: careers@atelier.co.kr</p>
            <p>전화: 02-1234-5678</p>
            <p>주소: 서울시 강남구 테헤란로 123, ATELIER 빌딩</p>
          </div>
        </div>
      </div>
    </div>
  )
}
