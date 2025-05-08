export default function WhyChooseUs() {
    const reasons = [
      "Fast Payouts",
      "Trusted by 1k+ Clients",
      "Secure Process",
      "Expert Support"
    ];
  
    return (
        <div className="w-11/12 m-auto">

      <section className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((benefit, idx) => (
              <div key={idx} className="p-4 rounded shadow bg-gray-50 
              dark:bg-blue-700">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>
          </div>
    );
  }
  