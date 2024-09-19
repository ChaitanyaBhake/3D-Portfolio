import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Chaitanya',
          from_email: form.email,
          to_email: 'chaitubhake2013@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert('Message received successfully');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert('Failed to send message. Please try again.');
      });
  };
  return (
    <section className="c-space my-20">
      <div
        className="relative min-h-screen flex items-center justify-center flex-col "
        id="contact"
      >
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's Connect</h3>
          <p className="text-lg text-white-600 mt-3">
            I’m excited to collaborate with you and contribute to the team.
            Eager to hear from you soon!
          </p>

          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3 ">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label htmlFor="" className="space-y-3 ">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label htmlFor="" className="space-y-3 ">
              <span className="field-label">Your Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                required
                rows={5}
                onChange={handleChange}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
