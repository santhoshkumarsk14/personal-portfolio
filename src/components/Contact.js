import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
        }, 2000);
    };

    return (
        <section id='contact' className='text-center p-8 bg-gradient-to from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-2xl'>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h3 className='text-5xl font-extrabold mb-6'>Get In Touch</h3>
                <p className='mb-6 text-lg'>I’d love to hear from you! Fill in the form below or reach me directly.</p>
                
                {submitted ? (
                    <motion.p initial={{ scale: 0.8 }} animate={{ scale: 1 }} className='text-green-300 font-bold text-lg'>
                        Thank you! Your message has been received.
                    </motion.p>
                ) : (
                    <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6'>
                        <div className='flex items-center space-x-3 border-b border-gray-400 pb-2'>
                            <FaUser className='text-gray-700 text-xl' />
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='Your Name' 
                                value={formData.name} 
                                onChange={handleChange} 
                                required
                                className='w-full p-2 text-gray-800 outline-none'
                            />
                        </div>

                        <div className='flex items-center space-x-3 border-b border-gray-400 pb-2'>
                            <FaEnvelope className='text-gray-700 text-xl' />
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='Your Email' 
                                value={formData.email} 
                                onChange={handleChange} 
                                required
                                className='w-full p-2 text-gray-800 outline-none'
                            />
                        </div>

                        <div className='border border-gray-400 rounded-lg p-3'>
                            <textarea 
                                name='message' 
                                placeholder='Your Message...' 
                                value={formData.message} 
                                onChange={handleChange} 
                                required
                                className='w-full p-2 text-gray-800 outline-none h-32'
                            ></textarea>
                        </div>

                        <motion.button 
                            type='submit' 
                            className='w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg text-lg font-bold hover:opacity-90 transition-all'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </form>
                )}
            </motion.div>
        </section>
    );
}
