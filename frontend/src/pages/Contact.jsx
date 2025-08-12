import { useState } from "react";
import { motion } from "framer-motion";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  index,
}) => (
  <div className="group">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && "*"}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl 
                 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 
                 outline-none transition-all duration-300 group-hover:border-gray-300"
       
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br bg-transparent relative overflow-hidden"
      name="Contact"
    >
      <div className="flex flex-col items-center relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Conversation
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your digital presence? Get in touch and let's
            create something amazing together.
          </motion.p>
        </motion.div>

        {/* Form */}
        <div className="bg-white w-full max-w-3xl p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Send us a message
            </h4>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              index={0}
            />
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              index={1}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 555 1234 567"
                index={2}
              />
              <InputField
                label="Website"
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                index={3}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl 
                           focus:ring-0 focus:ring-blue-500 focus:border-blue-500 
                           outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full 
                         font-semibold text-lg transform 
                         hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
