import { Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-foreground" />
              <span className="text-xl font-light tracking-wider">ATELIER</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              시대를 초월한 우아함과
              <br />
              현대적 감각의 만남
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm mb-4 tracking-wider">SHOP</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  신상품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  베스트셀러
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  컬렉션
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  세일
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm mb-4 tracking-wider">COMPANY</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  브랜드 스토리
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  매장 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">© 2025 ATELIER. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground font-mono">
            <a href="#" className="hover:text-accent transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
