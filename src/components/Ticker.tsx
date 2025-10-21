const Ticker = () => {
  const stocks = [
    { symbol: "NIFTY", price: "21,456.78", change: "+1.25%", positive: true },
    { symbol: "SENSEX", price: "71,234.56", change: "+0.89%", positive: true },
    { symbol: "RELIANCE", price: "2,456.30", change: "-0.45%", positive: false },
    { symbol: "TCS", price: "3,678.90", change: "+2.10%", positive: true },
    { symbol: "INFY", price: "1,543.20", change: "+1.67%", positive: true },
    { symbol: "HDFC", price: "2,890.45", change: "-0.23%", positive: false },
    { symbol: "ICICI", price: "987.65", change: "+1.92%", positive: true },
    { symbol: "SBI", price: "654.32", change: "+0.56%", positive: true },
  ];

  const doubledStocks = [...stocks, ...stocks];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/50 backdrop-blur-sm border-t border-border overflow-hidden py-2">
      <div className="flex animate-ticker-scroll">
        {doubledStocks.map((stock, index) => (
          <div key={index} className="flex items-center gap-2 px-6 whitespace-nowrap">
            <span className="font-bold text-foreground">{stock.symbol}</span>
            <span className="text-muted-foreground">{stock.price}</span>
            <span
              className={`font-semibold ${
                stock.positive ? "text-primary" : "text-destructive"
              }`}
            >
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
