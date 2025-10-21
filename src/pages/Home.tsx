import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Users, Award } from "lucide-react";
import BookModal from "@/components/BookModal";
import bookCover from "@/assets/book-cover.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
              Smart Stock Market Guidance with Eagle Investment
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Navigate the markets with confidence. Expert analysis, daily calls, and premium insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  View Plans
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
                onClick={() => setIsBookModalOpen(true)}
              >
                Buy Guide Book (₹40)
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Eagle Investment</h2>
            <p className="text-muted-foreground text-lg">
              Industry-leading stock market guidance and analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Expert Analysis",
                description: "In-depth market research and technical analysis from seasoned professionals",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Protect your investments with our proven risk management strategies",
              },
              {
                icon: Users,
                title: "Daily Support",
                description: "Get real-time market updates and personalized trading calls",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Years of successful market predictions and satisfied investors",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(22,163,74,0.2)]"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Book Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 md:p-12 border border-border"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={bookCover}
                    alt="Stock Market Beginner's Guide"
                    className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Stock Market Beginner's Guide
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Start your investment journey with our comprehensive beginner's guide. Learn the fundamentals,
                    understand market dynamics, and develop winning strategies.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Complete market basics and terminology
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Technical and fundamental analysis
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Risk management strategies
                    </li>
                  </ul>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-accent">₹40</span>
                    <Button
                      onClick={() => setIsBookModalOpen(true)}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
    </div>
  );
};

export default Home;
