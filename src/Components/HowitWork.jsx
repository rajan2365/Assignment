import { motion } from "framer-motion";

export default function HowitWorks() {
  const steps = ["Upload License", "Get Valuation", "Get Paid"];

  return (
    <div className="w-11/12 m-auto">
    <section className=" p-10 bg-gray-100 dark:bg-gray-500 text-center">
      <h3 className="text-2xl font-bold mb-6">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div
          key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded shadow-md bg-white dark:bg-gray-700"
            >
            <div className="text-4xl mb-2">🔹</div>
            <p className="text-xl font-medium">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
        </div>
  );
}
