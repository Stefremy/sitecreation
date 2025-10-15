import { motion } from 'motion/react';
import exampleImage from 'figma:asset/e6e753bcfe8e77276d052a5c191511fa3c9c8d4f.png';

export function BusinessCard() {
  return (
    <div className="perspective-1000" style={{ width: '350px', height: '200px' }}>
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front Side - Inspired by the reference image */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-2xl border border-gray-600">
          <div className="relative p-6 h-full flex flex-col justify-between text-white overflow-hidden">
            {/* Contactless symbol - top right */}
            <div className="absolute top-4 right-4">
              <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1s1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.85 9.1c-.05.3-.25.55-.54.67-.29.12-.62.05-.84-.17-.22-.22-.29-.55-.17-.84.12-.29.37-.49.67-.54.3-.05.61.1.78.35.17.25.15.58-.1.8-.15.13-.35.2-.55.2-.2 0-.4-.07-.55-.2-.03-.03-.07-.06-.1-.1m2.83-2.83c-.05.3-.25.55-.54.67-.29.12-.62.05-.84-.17-.22-.22-.29-.55-.17-.84.12-.29.37-.49.67-.54.3-.05.61.1.78.35.17.25.15.58-.1.8-.15.13-.35.2-.55.2-.2 0-.4-.07-.55-.2-.03-.03-.07-.06-.1-.1m2.83-2.83c-.05.3-.25.55-.54.67-.29.12-.62.05-.84-.17-.22-.22-.29-.55-.17-.84.12-.29.37-.49.67-.54.3-.05.61.1.78.35.17.25.15.58-.1.8-.15.13-.35.2-.55.2-.2 0-.4-.07-.55-.2-.03-.03-.07-.06-.1-.1"/>
              </svg>
            </div>

            {/* Center logo area */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                {/* Triangle logo similar to the reference */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-16 h-14 text-white" fill="currentColor" viewBox="0 0 100 87">
                    <path d="M50 0L93.3 75H6.7L50 0z" stroke="none"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h1 className="text-lg font-light tracking-wider">ALEX REYNOLDS</h1>
                  <p className="text-xs text-gray-300 font-light tracking-widest">CREATIVE DIRECTOR</p>
                </div>
              </div>
            </div>

            {/* Bottom chip area */}
            <div className="flex justify-between items-end">
              <div className="w-10 h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm opacity-80"></div>
              <div className="text-right">
                <p className="text-xs text-gray-400 font-mono">**** 1234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 shadow-2xl border border-slate-600 rotate-y-180">
          <div className="p-6 h-full flex flex-col justify-center text-white space-y-4">
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-sm text-gray-200">alex@creativestudio.co</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-sm text-gray-200">+1 (555) 987-6543</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-200">New York, NY</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-200">creativestudio.co</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-4"></div>

            {/* Company and tagline */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-300 tracking-wider">CREATIVE STUDIO</p>
              <p className="text-xs text-gray-400 italic">Designing tomorrow's experiences</p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 justify-center pt-2">
              <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.11.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}