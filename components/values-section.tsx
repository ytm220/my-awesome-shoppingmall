import { Sparkles, Heart, Leaf } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    number: "01",
    title: "장인정신",
    description:
      "모든 제품은 숙련된 장인의 손길로 하나하나 정성스럽게 제작됩니다. 완벽을 향한 집념이 우리의 DNA입니다.",
  },
  {
    icon: Heart,
    number: "02",
    title: "시대를 초월한 디자인",
    description:
      "유행을 따르지 않고 시간이 지나도 아름다운 디자인을 추구합니다. 클래식과 모던의 완벽한 조화를 만들어냅니다.",
  },
  {
    icon: Leaf,
    number: "03",
    title: "지속가능성",
    description: "환경을 생각하는 윤리적 생산 방식과 지속가능한 소재 사용으로 더 나은 미래를 만들어갑니다.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-sm font-mono text-muted-foreground tracking-wider">OUR VALUES</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6">우리가 추구하는 가치</h2>
          <p className="text-muted-foreground font-mono leading-relaxed">
            ATELIER의 모든 결정과 창작 과정의 중심에는 세 가지 핵심 가치가 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => (
            <div key={value.number} className="group">
              <div className="border border-border p-8 lg:p-10 h-full hover:border-accent transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                  <span className="text-6xl font-light text-muted-foreground/20 group-hover:text-accent/20 transition-colors">
                    {value.number}
                  </span>
                </div>

                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
