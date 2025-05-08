export default function Testimonials() {
    return (
        // <div className="w-11/12 m-auto">
      <section className="p-10 bg-gray-100 dark:bg-gray-500">
        <h3 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-4 rounded shadow bg-white dark:bg-blue-600">
            <p>"SoftSell helped us get value from unused licenses instantly!"</p>
            <p className="mt-2 font-semibold">- Jane Doe, CTO at TechCorp</p>
          </div>
          <div className="p-4 rounded shadow bg-white dark:bg-blue-600">
            <p>"Highly recommend! Their process is smooth and secure."</p>
            <p className="mt-2 font-semibold">- John Smith, IT Manager at BizWare</p>
          </div>
        </div>
      </section>
        // </div>
    );
  }
  