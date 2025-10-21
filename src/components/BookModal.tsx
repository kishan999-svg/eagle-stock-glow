import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ isOpen, onClose }: BookModalProps) => {
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    // Simulate purchase
    setIsPurchased(true);
  };

  const handleDownload = () => {
    // Create a dummy PDF download link
    const link = document.createElement("a");
    link.href = "/assets/book.pdf";
    link.download = "Stock-Market-Beginners-Guide.pdf";
    link.click();
  };

  const handleClose = () => {
    setIsPurchased(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Stock Market Beginner's Guide
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isPurchased ? (
            <motion.div
              key="purchase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <img
                src={bookCover}
                alt="Book Cover"
                className="w-48 h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Complete guide for stock market beginners with expert insights and strategies.
                </p>
                <div className="text-4xl font-bold text-accent mb-6">₹40</div>
                <Button
                  onClick={handlePurchase}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Buy Now
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6 py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-20 h-20 text-primary" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Purchase Successful!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your purchase. Download your guide now.
                </p>
                <Button
                  onClick={handleDownload}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookModal;
