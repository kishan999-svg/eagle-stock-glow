import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";

const Pricing = () => {
  const plans = [
    {
      name: "Bronze Plan",
      price: "499",
      features: [
        "Daily market analysis",
        "5 trading calls per week",
        "Basic technical reports",
        "Email support",
        "Educational resources",
      ],
    },
    {
      name: "Silver Plan",
      price: "999",
      features: [
        "Everything in Bronze",
        "10 trading calls per week",
        "Advanced technical reports",
        "Priority support",
        "Weekly market outlook",
        "Portfolio review (monthly)",
      ],
      popular: true,
    },
    {
      name: "Gold Plan",
      price: "1999",
      features: [
        "Everything in Silver",
        "Unlimited trading calls",
        "Premium research reports",
        "24/7 dedicated support",
        "Daily market outlook",
        "Personal consultation",
        "Custom portfolio strategy",
      ],
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
            Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your investment journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card p-8 rounded-lg border border-border"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
            All Plans Include
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Risk-free 7-day trial",
              "Cancel anytime",
              "Secure payment processing",
              "Money-back guarantee",
              "Educational webinars",
              "Market news updates",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
