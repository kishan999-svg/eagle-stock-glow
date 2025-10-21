import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Award, Clock, Target } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Experts",
      description:
        "Our team of certified market analysts brings decades of experience in stock market research and trading strategies.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Track record of 85% accurate calls and consistent returns for our clients across different market conditions.",
    },
    {
      icon: Users,
      title: "Daily Support",
      description:
        "Real-time market updates, instant trade alerts, and dedicated support team available throughout trading hours.",
    },
    {
      icon: Award,
      title: "Premium Insights",
      description:
        "Access to institutional-grade research reports, sector analysis, and exclusive market intelligence.",
    },
    {
      icon: Clock,
      title: "Timely Calls",
      description:
        "Get trading recommendations at the right time with clear entry, target, and stop-loss levels.",
    },
    {
      icon: Target,
      title: "Affordable Plans",
      description:
        "Flexible pricing options designed to provide maximum value regardless of your investment size.",
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
            Why Choose Eagle Investment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart in the world of stock market advisory services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,163,74,0.2)] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 rounded-lg border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground italic mb-4">
                "Eagle Investment's daily calls have transformed my trading. Their accuracy and timing are
                exceptional. Highly recommended!"
              </p>
              <div className="font-semibold text-foreground">- Rajesh Kumar</div>
              <div className="text-sm text-muted-foreground">Investor</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground italic mb-4">
                "The research quality is outstanding. I've learned so much and my portfolio performance has
                significantly improved."
              </p>
              <div className="font-semibold text-foreground">- Priya Sharma</div>
              <div className="text-sm text-muted-foreground">Trader</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
