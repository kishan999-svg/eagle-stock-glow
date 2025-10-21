import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const PricingCard = ({ name, price, features, popular, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-card border-2 rounded-lg p-8 transition-all duration-300 hover:scale-105 ${
        popular
          ? "border-accent shadow-[0_0_30px_rgba(251,191,36,0.3)]"
          : "border-border hover:border-primary hover:shadow-[0_0_20px_rgba(22,163,74,0.2)]"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold text-primary">₹{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={`w-full ${
          popular
            ? "bg-accent hover:bg-accent/90 text-accent-foreground"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        }`}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default PricingCard;
