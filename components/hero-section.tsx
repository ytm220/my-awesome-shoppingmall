import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-balance">
            시대를 초월한
            <br />
            우아함의 재정의
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono leading-relaxed">
            ATELIER는 장인정신과 현대적 감각이 만나는 곳입니다.
            <br />
            각각의 작품은 시간을 초월한 아름다움을 담고 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              브랜드 스토리
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              컬렉션 둘러보기
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
