export default function ContactForm() {
  return (
    <section className="p-10 text-center">
      <h3 className="text-2xl font-extrabold mb-6">Get in Touch</h3>
      <form className="max-w-xl mx-auto grid gap-4 text-left">
        <input type="text" placeholder="Name" className="p-2 border rounded" required />
        <input type="email" placeholder="Email" className="p-2 border rounded" required />
        <input type="text" placeholder="Company" className="p-2 border rounded" />
        <select className="p-2 border rounded text-blue-500">
          <option>License Type</option>
          <option>Software A</option>
          <option>Software B</option>
        </select>
        <textarea placeholder="Message" className="p-2 border rounded" rows="4" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
}
