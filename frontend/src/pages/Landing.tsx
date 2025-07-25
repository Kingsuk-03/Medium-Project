import {useNavigate} from "react-router-dom";
export function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span className="text-2xl font-bold text-gray-900 ">Medium</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/explore"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Explore
              </a>
              <a
                href="/write"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Write
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/signin")}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors font-medium hover:cursor-pointer">
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-md transition-colors font-medium hover:cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Where great stories
              <span className="block text-black">come to life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join millions of writers and readers on Medium. Share your thoughts,
              discover new perspectives, and connect with a community that values
              great storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/signup")}
                className="hover:cursor-pointer flex items-center px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-md text-lg font-medium transition-colors">
                Start Writing
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-white rounded-md text-lg font-medium transition-colors bg-transparent hover:cursor-pointer animate-[gradientShift_5s_linear_infinite]"
                style={{
                  background: "linear-gradient(45deg, white, black, white)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%",
                }}>
                <i className="ri-sparkling-2-fill text-lg pr-2"></i>
                New AI Feature
              </button>

              <style>{`@keyframes gradientShift {0%, 100% { background-position: 0% 50%; }50% { background-position: 100% 50%; }}`}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">2M+</div>
              <div className="text-gray-600 font-medium">Active Writers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">50M+</div>
              <div className="text-gray-600 font-medium">Stories Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">100M+</div>
              <div className="text-gray-600 font-medium">Monthly Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to tell your story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto ">
              Powerful tools and features designed to help you write, publish, and
              grow your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Beautiful Editor
              </h3>
              <p className="text-gray-600 ">
                Write with our distraction-free editor that focuses on your content
                and creativity.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Engaged Community
              </h3>
              <p className="text-gray-600 ">
                Connect with readers and writers who share your interests and
                passions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-sparkling-2-fill text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Integraion
              </h3>
              <p className="text-gray-600 ">
                Unleash your ideas with AI-powered blogging fast, smart, and
                effortless.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Rich Formatting
              </h3>
              <p className="text-gray-600 ">
                Add images, videos, and interactive elements to make your stories
                come alive.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personalized Feed
              </h3>
              <p className="text-gray-600 ">
                Discover content tailored to your interests and reading preferences.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Publishing
              </h3>
              <p className="text-gray-600 ">
                Publish instantly or schedule your stories for the perfect timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by writers worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 ">
                "Medium has transformed how I share my ideas. The community is
                incredibly supportive and the platform is a joy to use."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Tech Writer</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 ">
                "The newly introduced AI feature is incredibly impressive and works
                seamlessly. I genuinely enjoyed using it and found it highly
                effective in enhancing my experience. Highly recommend"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-500">Entrepreneur</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 ">
                "I've found my voice as a writer thanks to Medium. The community
                feedback has been invaluable for my growth."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold">ER</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-sm text-gray-500">Creative Writer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to share your story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 ">
            Join thousands of writers who have already discovered the joy of writing
            on Medium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-md text-lg font-medium transition-colors">
              Get Started for Free
            </button>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black "
              />
              <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-md transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2 ">
              Get updates about new features and writing tips.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span className="text-2xl font-bold">Medium</span>
              </div>
              <p className="text-gray-400 ">
                Where great stories come to life. Join our community of writers and
                readers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/features"
                    className="hover:text-white transition-colors ">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-white transition-colors ">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/mobile" className="hover:text-white transition-colors ">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/writers" className="hover:text-white transition-colors ">
                    For Writers
                  </a>
                </li>
                <li>
                  <a href="/readers" className="hover:text-white transition-colors ">
                    For Readers
                  </a>
                </li>
                <li>
                  <a href="/help" className="hover:text-white transition-colors ">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors ">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition-colors ">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 ">
              © {new Date().getFullYear()} Medium. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
