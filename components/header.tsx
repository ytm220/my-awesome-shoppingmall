"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-foreground" />
            <span className="text-xl lg:text-2xl font-light tracking-wider">ATELIER</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#about" className="hover:text-accent transition-colors">
              소개
            </a>
            <a href="#values" className="hover:text-accent transition-colors">
              가치
            </a>
            <a href="#collection" className="hover:text-accent transition-colors">
              컬렉션
            </a>
            <a href="/careers" className="hover:text-accent transition-colors">
              채용정보
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              문의
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4 font-mono text-sm">
            <a href="#about" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              소개
            </a>
            <a href="#values" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              가치
            </a>
            <a href="#collection" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              컬렉션
            </a>
            <a href="/careers" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              채용정보
            </a>
            <a href="#contact" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              문의
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
