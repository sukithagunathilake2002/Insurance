"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Heart, Car, Building2, Plane } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Protecting What Matters Most",
    subtitle: "Your Trusted Insurance Partner",
    description: "Comprehensive insurance solutions tailored to your needs. We help you safeguard your future with expert advice and personalized coverage.",
    icon: Shield,
    image: "/images/hero-family.jpg",
  },
  {
    id: 2,
    title: "Life Insurance for Peace of Mind",
    subtitle: "Secure Your Family's Future",
    description: "Ensure your loved ones are protected with our comprehensive life insurance plans. Coverage that adapts to your life stages.",
    icon: Heart,
    image: "/images/hero-family.jpg",
  },
  {
    id: 3,
    title: "Health Insurance That Cares",
    subtitle: "Because Your Health Comes First",
    description: "Access quality healthcare without financial stress. Our health plans cover you and your family when it matters most.",
    icon: Heart,
    image: "/images/hero-health.jpg",
  },
  {
    id: 4,
    title: "Drive with Confidence",
    subtitle: "Complete Vehicle Protection",
    description: "From comprehensive coverage to third-party liability, we have the right vehicle insurance for every driver on the road.",
    icon: Car,
    image: "/images/hero-vehicle.jpg",
  },
  {
    id: 5,
    title: "Business Insurance Solutions",
    subtitle: "Protect Your Enterprise",
    description: "Safeguard your business assets, employees, and operations with tailored commercial insurance packages.",
    icon: Building2,
    image: "/images/hero-business.jpg",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.icon
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[#263238]/70" />
            
            <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-base">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base border-white text-white hover:bg-white hover:text-foreground bg-transparent">
                    <Link href="/contact">Talk to an Expert</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
