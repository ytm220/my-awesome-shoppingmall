export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-mono text-muted-foreground tracking-wider">ABOUT US</span>
              <div className="h-px w-full bg-border mt-2" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              장인정신으로
              <br />
              빚어낸 예술
            </h2>

            <div className="space-y-4 text-muted-foreground font-mono leading-relaxed">
              <p>
                ATELIER는 2010년 서울에서 시작된 럭셔리 패션 브랜드입니다. 우리는 전통적인 장인정신과 현대적인 디자인
                철학을 결합하여 시대를 초월한 작품을 만들어냅니다.
              </p>
              <p>각각의 제품은 엄선된 소재와 섬세한 손길로 완성되며, 착용하는 이의 개성과 우아함을 극대화합니다.</p>
            </div>
          </div>

          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <img src="/placeholder.svg" alt="ATELIER 작업실" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
