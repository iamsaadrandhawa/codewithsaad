import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
  {
    text: "Saad delivered our mobile app ahead of schedule with exceptional quality. His expertise in React Native is outstanding.",
    author: "Wei Chen",
    rating: 5,
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    text: "Working with Saad was a great experience. His attention to detail and problem-solving skills are remarkable.",
    author: "Hiroshi Tanaka",
    rating: 5,
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    text: "Saad's technical skills and professional approach made our project a success. Highly recommended!",
    author: "Priya Sharma",
    rating: 5,
    gradient: 'from-green-400 to-emerald-400'
  },
  {
    text: "Exceptional developer with great communication skills. Delivered exactly what we needed on time.",
    author: "Min-jun Park",
    rating: 5,
    gradient: 'from-orange-400 to-red-400'
  },
  {
    text: "Saad's React Native expertise helped us build a robust mobile app that our users love.",
    author: "Mei Lin",
    rating: 5,
    gradient: 'from-indigo-400 to-purple-400'
  },
  {
    text: "Saad transformed our business with his mobile app development skills. Excellent work!",
    author: "Yuki Nakamura",
    rating: 5,
    gradient: 'from-rose-400 to-pink-400'
  },
  {
    text: "Outstanding developer who understands business requirements perfectly.",
    author: "Ananya Singh",
    rating: 5,
    gradient: 'from-violet-400 to-purple-400'
  },
  {
    text: "Saad's code is clean, efficient, and well-documented. A true professional.",
    author: "Kenji Sato",
    rating: 5,
    gradient: 'from-amber-400 to-orange-400'
  },
  {
    text: "The app Saad built for us exceeded all expectations. Users love it!",
    author: "Chloe Kim",
    rating: 5,
    gradient: 'from-lime-400 to-green-400'
  },
  
  {
    text: "Saad's attention to UI/UX details made our app stand out from competitors.",
    author: "Wei Zhang",
    rating: 5,
    gradient: 'from-cyan-400 to-blue-400'
  },
  {
    text: "Excellent communication throughout the project. Always available for support.",
    author: "Haruto Suzuki",
    rating: 5,
    gradient: 'from-emerald-400 to-green-400'
  },
  {
    text: "Saad delivered a scalable solution that will grow with our business.",
    author: "Deepa Reddy",
    rating: 5,
    gradient: 'from-orange-400 to-red-400'
  },
  {
    text: "The performance optimization Saad implemented made our app lightning fast.",
    author: "Ji-hoon Lee",
    rating: 5,
    gradient: 'from-purple-400 to-indigo-400'
  },
  
 
  {
    text: "Saad's testing strategies ensured our app launched without any critical bugs.",
    author: "Hana Kim",
    rating: 5,
    gradient: 'from-green-400 to-teal-400'
  },

  {
    text: "Saad's cross-platform development skills saved us time and money.",
    author: "Priyanka Das",
    rating: 5,
    gradient: 'from-indigo-400 to-blue-400'
  },
  {
    text: "Excellent problem-solver who thinks outside the box.",
    author: "Chen Wei",
    rating: 5,
    gradient: 'from-teal-400 to-cyan-400'
  },
  {
    text: "The code documentation Saad provided was comprehensive and clear.",
    author: "Anjali Desai",
    rating: 5,
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    text: "Saad's database optimization improved our app's performance dramatically.",
    author: "Kenta Yamamoto",
    rating: 5,
    gradient: 'from-green-400 to-emerald-400'
  },
  {
    text: "Excellent at translating complex requirements into technical solutions.",
    author: "Rina Patel",
    rating: 5,
    gradient: 'from-indigo-400 to-blue-400'
  },
  
  {
    text: "The caching strategy Saad implemented reduced our server load significantly.",
    author: "Preeti Singh",
    rating: 5,
    gradient: 'from-teal-400 to-cyan-400'
  },
  {
    text: "Saad's expertise in mobile app architecture is truly impressive.",
    author: "Yuki Chen",
    rating: 5,
    gradient: 'from-amber-400 to-orange-400'
  },

];

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
        if (scrollLeft >= scrollWidth - clientWidth) {
          // If at the end, scroll back to start
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll right
          scrollRight();
        }
        checkScrollButtons();
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    
    const handleScroll = () => {
      checkScrollButtons();
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Client Testimonials
        </h2>
        <p className="text-center mt-4 text-lg text-gray-500">
          What clients say about working with me
        </p>

        {/* Scroll Container with Arrows */}
        <div className="mt-12 relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 -ml-6"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 -mr-6"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 snap-x snap-mandatory"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 snap-start" // Fixed width for each card
              >
                {/* Testimonial Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500 h-full">
                  {/* Colored Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${testimonial.gradient}`}></div>

                  <div className="p-6">
                    {/* Quote Icon with Gradient Background */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${testimonial.gradient} shadow-lg mb-4`}>
                      <Quote className="w-5 h-5 text-white" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 italic leading-relaxed mb-6 text-sm">
                      "{testimonial.text}"
                    </p>

                    <div className="my-4 w-full h-px bg-gray-200"></div>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs mt-1">Satisfied Client</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 320, // card width + gap
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-200"
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
            <Star className="w-4 h-4 text-indigo-600 mr-3" />
            <span className="text-gray-600 text-xs">
              Trusted by clients worldwide for delivering exceptional mobile and web solutions
            </span>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
