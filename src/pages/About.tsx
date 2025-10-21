import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Eagle Investment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in navigating the stock market
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Eagle Investment, our mission is to democratize stock market investing by providing expert guidance,
              comprehensive research, and actionable insights to investors of all levels. We believe that with the
              right knowledge and support, anyone can build wealth through smart investing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Founded by seasoned market professionals with over 20 years of combined experience, Eagle Investment
              was born from a vision to make institutional-grade market research accessible to retail investors.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We've helped thousands of investors navigate market volatility, identify opportunities, and build
              sustainable wealth through disciplined investing strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Transparency",
                  description: "Clear, honest communication in all our recommendations and analysis",
                },
                {
                  title: "Excellence",
                  description: "Commitment to delivering the highest quality research and insights",
                },
                {
                  title: "Integrity",
                  description: "Ethical practices and putting our clients' interests first",
                },
                {
                  title: "Innovation",
                  description: "Continuously evolving our methods to stay ahead of market trends",
                },
              ].map((value, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground text-center">Our Track Record</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
