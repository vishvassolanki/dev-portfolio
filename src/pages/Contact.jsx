import React, { forwardRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

const Contact = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="contact" className="py-20 bg-gray-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities and
                        interesting projects
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900  mb-6">
                            Let's Connect
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Whether you have a project in mind, want to
                            collaborate, or just want to say hello, I'd love to
                            hear from you. Feel free to reach out through any of
                            the channels below.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MdOutlineMailOutline className="text-blue-500 text-xl" />
                                <span className="text-gray-700 mx-2">
                                    vishvassolankiwork@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-blue-500 text-xl" />
                                <span className="text-gray-700 mx-2">
                                    +91 6354436683
                                </span>
                            </div>
                            <div className="flex items-center">
                                <CiLocationOn className="text-blue-500 text-xl" />
                                <span className="text-gray-700 mx-2">
                                    Gir Somnath, Gujarat.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form
                            action="https://formspree.io/f/xblkpdaz"
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white  text-gray-900"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white  text-gray-900 "
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white  text-gray-900 "
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none bg-white text-gray-900 "
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                <FiSend className="mx-3 text-xl" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-16 pt-8 border-t border-gray-200 ">
                    <p className="text-gray-600">
                        © 2024 Vishvas Solanki. Built with React and Tailwind
                        CSS.
                    </p>
                </div>
            </div>
        </section>
    );
});

export default Contact;
