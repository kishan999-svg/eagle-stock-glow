import { motion } from "framer-motion";
import { BarChart3, Target, BookOpen, LineChart, Users2, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Portfolio Management",
      description:
        "Professional portfolio management services tailored to your financial goals and risk appetite. Our experts handle everything from asset allocation to rebalancing.",
    },
    {
      icon: Target,
      title: "Daily Trading Calls",
      description:
        "Receive actionable trading calls every day based on comprehensive market analysis. Entry points, targets, and stop losses clearly defined.",
    },
    {
      icon: BookOpen,
      title: "Learning Programs",
      description:
        "Comprehensive training programs for beginners to advanced traders. Learn technical analysis, fundamental analysis, and trading psychology.",
    },
    {
      icon: LineChart,
      title: "Technical Analysis",
      description:
        "In-depth technical analysis reports with chart patterns, indicators, and trend analysis. Make informed decisions with our expert insights.",
    },
    {
      icon: Users2,
      title: "One-on-One Consultation",
      description:
        "Personal consultation sessions with our market experts. Get customized strategies and solutions for your specific investment needs.",
    },
    {
      icon: Briefcase,
      title: "Premium Research",
      description:
        "Access to exclusive research reports, sector analysis, and market outlook. Stay ahead with institutional-grade research.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive stock market services designed to help you succeed in your investment journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(22,163,74,0.2)] group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
