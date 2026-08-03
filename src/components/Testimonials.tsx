import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle, ThumbsUp } from 'lucide-react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0a0805] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c99a5b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
            <span>Real Guest Sentiment</span>
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Loved by <span className="gold-gradient-text italic font-normal">Locals & Travelers</span>
          </h2>

          {/* Google Score Banner */}
          <div className="inline-flex items-center space-x-3 glass-panel px-6 py-3 rounded-2xl border border-[#c99a5b]/30 shadow-xl mt-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#c99a5b] text-[#c99a5b]" />
              ))}
            </div>
            <span className="font-serif font-bold text-xl text-white">4.8 / 5.0</span>
            <span className="text-xs text-gray-400">({CAFE_INFO.totalReviews}+ Verified Google Reviews)</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card rounded-3xl p-8 border border-[#c99a5b]/20 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#c99a5b]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#c99a5b]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base flex items-center space-x-1.5">
                      <span>{review.author}</span>
                      <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    </h4>
                    <span className="text-xs text-[#c99a5b] uppercase tracking-wider font-medium block">
                      {review.tag} • {review.date}
                    </span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c99a5b] text-[#c99a5b]" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-sm text-[#f3eae1]/80 font-light leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Source Tag */}
              <div className="pt-4 border-t border-[#c99a5b]/15 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center space-x-1.5 text-[#c99a5b] font-medium">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Highly Recommended</span>
                </span>
                <span className="bg-[#1f1710] px-3 py-1 rounded-full text-[10px] text-gray-300 border border-white/5">
                  {review.source}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Action button to view all Google Reviews */}
        <div className="text-center">
          <a
            href={CAFE_INFO.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#1c150e] text-[#c99a5b] border border-[#c99a5b]/40 hover:border-[#c99a5b] hover:bg-[#251b12] text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
          >
            <span>Read All 1,420+ Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
