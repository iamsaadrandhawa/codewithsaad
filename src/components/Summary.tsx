import React from 'react';
import { Code2, Globe, Server, Smartphone } from 'lucide-react';

const Summary = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Professional Summary</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Full Stack Developer specializing in React Native and modern web technologies with a proven track record of delivering high-quality mobile and web applications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Smartphone className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-gray-600">1.5+ years of React Native expertise</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
  <Globe className="w-12 h-12 text-indigo-600 mb-4" />
  <h3 className="text-xl font-semibold mb-2">Networking</h3>
  <p className="text-gray-600">Networking and IT infrastructure</p>
</div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Server className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Systems</h3>
            <p className="text-gray-600">Node.js & database expertise</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Code2 className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">Best practices & patterns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;