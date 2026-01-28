import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Car, Building2, Plane, Umbrella, CheckCircle, ArrowRight, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | ProCare Insurance Brokers",
  description: "Explore our comprehensive insurance services including Life, Health, Vehicle, Business, and Travel Insurance. Find the perfect coverage for your needs.",
}

const services = [
  {
    id: "life",
    icon: Heart,
    title: "Life Insurance",
    shortDescription: "Secure your family's financial future with comprehensive life coverage.",
    longDescription: "Life insurance is more than just a policy - it's a promise to protect your loved ones when they need it most. Our life insurance solutions provide financial security for your family, covering everything from daily expenses to long-term financial goals.",
    features: [
      "Term life insurance with flexible coverage periods",
      "Whole life insurance with cash value accumulation",
      "Investment-linked policies for wealth building",
      "Critical illness riders and add-ons",
      "Family income benefit options",
      "Flexible premium payment options",
    ],
  },
  {
    id: "health",
    icon: Activity,
    title: "Health Insurance",
    shortDescription: "Access quality healthcare without financial burden.",
    longDescription: "Healthcare costs are rising, but that shouldn't stop you from getting the care you need. Our health insurance plans cover a wide range of medical expenses, from routine check-ups to major surgeries, ensuring you and your family stay protected.",
    features: [
      "Comprehensive hospitalization coverage",
      "Outpatient treatment benefits",
      "Maternity and newborn care",
      "Pre-existing condition coverage options",
      "Cashless hospital network access",
      "International coverage for travelers",
    ],
  },
  {
    id: "vehicle",
    icon: Car,
    title: "Vehicle Insurance",
    shortDescription: "Complete protection for your vehicles on the road.",
    longDescription: "Whether you drive a car, motorcycle, or commercial vehicle, our vehicle insurance provides comprehensive protection against accidents, theft, and third-party liabilities. Drive with confidence knowing you're fully covered.",
    features: [
      "Comprehensive coverage for accidents and theft",
      "Third-party liability protection",
      "Personal accident cover for driver and passengers",
      "24/7 roadside assistance",
      "No-claim bonus benefits",
      "Quick and easy claim settlement",
    ],
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Insurance",
    shortDescription: "Protect your business assets, employees, and operations.",
    longDescription: "Running a business comes with risks. Our business insurance solutions help protect your enterprise from unexpected events, ensuring continuity and peace of mind. From small startups to large corporations, we have tailored solutions for every business.",
    features: [
      "Property and asset protection",
      "Business interruption coverage",
      "Professional liability insurance",
      "Workers' compensation",
      "Product liability coverage",
      "Cyber risk and data breach protection",
    ],
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel Insurance",
    shortDescription: "Travel with peace of mind anywhere in the world.",
    longDescription: "Don't let unexpected events ruin your trip. Our travel insurance covers medical emergencies, trip cancellations, lost luggage, and more. Whether you're traveling for business or pleasure, we've got you covered.",
    features: [
      "Emergency medical coverage worldwide",
      "Trip cancellation and interruption protection",
      "Lost or delayed baggage compensation",
      "Flight delay benefits",
      "Emergency evacuation coverage",
      "24/7 global assistance helpline",
    ],
  },
  {
    id: "general",
    icon: Umbrella,
    title: "General Insurance",
    shortDescription: "Comprehensive coverage for property, liability, and more.",
    longDescription: "Beyond the standard insurance products, we offer a range of general insurance solutions to cover various aspects of your life and property. From home insurance to specialized liability coverage, we help protect what matters to you.",
    features: [
      "Home and property insurance",
      "Fire and natural disaster coverage",
      "Personal liability protection",
      "Marine and cargo insurance",
      "Equipment breakdown coverage",
      "Event and special risk insurance",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-foreground text-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight text-balance">
              Comprehensive Insurance Solutions
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              From life and health to vehicle and business insurance, we offer a complete range of products to protect every aspect of your life. Explore our services and find the coverage that&apos;s right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <a key={service.id} href={`#${service.id}`} className="group">
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.shortDescription}
                      </CardDescription>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => {
        const Icon = service.icon
        const isEven = index % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-24 scroll-mt-20 ${isEven ? 'bg-background' : 'bg-muted'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">Insurance</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.longDescription}
                  </p>
                  <Button asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-secondary" />
                        Key Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              The ProCare Advantage
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you choose ProCare, you&apos;re choosing a partner who puts your interests first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Independent Advice", description: "We work for you, not insurance companies, ensuring unbiased recommendations." },
              { title: "Multiple Options", description: "Access to 50+ insurance providers means more choices and better rates." },
              { title: "Expert Support", description: "Our experienced team guides you through every step of your insurance journey." },
              { title: "Claims Assistance", description: "Dedicated support to help you navigate the claims process smoothly." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Need Help Choosing the Right Coverage?
            </h2>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Our insurance experts are here to help you find the perfect policy. Contact us today for a free consultation and personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-background/30 text-background hover:bg-background hover:text-foreground bg-transparent"
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
