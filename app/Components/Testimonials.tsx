import React from "react";
import Image from "next/image";
import men_1 from "./men5.jpg";
import men_2 from "./men2.jpg";
import men_3 from "./men3.jpg";
import women_1 from "./women1.jpg";
import women_4 from "./women4.jpg";
import women_2 from "./women3.jpg";

const testimonials = [
  {
    name: "Jon Snow",
    review: "Excellent product with outstanding performance. Worth every penny!",
    specialization: "CTO of Future Tech at Hallmaark Techno",
    avatar: men_2,
    rating: 5,
  },
  {
    name: "Danerys Targerian",
    review: "I love the features and the design. It seamlessly integrates into my life.",
    specialization: "Founder of Health Solutions",
    avatar: women_1,
    rating: 4,
  },
  {
    name: "Jaime Lanister",
    review: "A game-changer in wearable technology. Highly recommend!",
    specialization: "Marketing Director at XYZ Corp",
    avatar: men_3,
    rating: 5,
  },
  {
    name: "Ramsay Bolton",
    review: "The Smart Watch has transformed my daily routine. It's stylish and incredibly functional!",
    specialization: "CEO of Tech Innovations Club",
    avatar: men_1,
    rating: 5,
  },
  {
    name: "Arya Stark",
    review: "Great design and functionality. I can't imagine my day without it.",
    specialization: "Product Manager at Smart Solutions",
    avatar: women_2,
    rating: 4,
  },
  {
    name: "Melisandre Red",
    review: "A fantastic product. The features are just what I needed.",
    specialization: "Founder of Innovative Solutions",
    avatar: women_4,
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="h-screen bg-black py-16">
      <h2 className="text-3xl font-bold text-green text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="card bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            <figure className="flex items-center mb-4">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="rounded-full w-20 h-20 mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {testimonial.specialization}
                </p>
              </div>
            </figure>
            <div className="rating mb-2">
              {[...Array(5)].map((_, starIndex) => (
                <input
                  key={starIndex}
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-yellow-500"
                  checked={starIndex < testimonial.rating}
                  readOnly
                />
              ))}
            </div>
            <p className="text-gray-300">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
