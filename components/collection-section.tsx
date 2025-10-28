import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Spring/Summer 2025",
    description: "자연에서 영감을 받은 경쾌하고 우아한 컬렉션",
    image: "/placeholder.svg",
  },
  {
    title: "Fall/Winter 2024",
    description: "도시적 세련미와 따뜻함이 공존하는 컬렉션",
    image: "/placeholder.svg",
  },
  {
    title: "Signature Collection",
    description: "시그니처 아이템으로 완성하는 타임리스 룩",
    image: "/placeholder.svg",
  },
]

export function CollectionSection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-sm font-mono text-muted-foreground tracking-wider">COLLECTIONS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6">최신 컬렉션</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-muted overflow-hidden mb-6">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>

              <h3 className="text-2xl font-light mb-2 group-hover:text-accent transition-colors">{collection.title}</h3>
              <p className="text-muted-foreground font-mono text-sm mb-4">{collection.description}</p>
              <Button variant="link" className="p-0 h-auto group/btn">
                자세히 보기
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
