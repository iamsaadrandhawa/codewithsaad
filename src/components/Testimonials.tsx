import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Saad delivered our mobile app ahead of schedule with exceptional quality. His expertise in React Native is outstanding.",
      author: "Sarah",
      
    },
    {
      text: "Working with Saad was a great experience. His attention to detail and problem-solving skills are remarkable.",
      author: "Michael",
     
    },
    {
      text: "Saad's technical skills and professional approach made our project a success. Highly recommended!",
      author: "Emma",
  
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-500">What clients say about working with me</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <Quote className="w-10 h-10 text-indigo-600 mb-4" />
              <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;