"use client";
import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">

          {/* Logo & Social */}
    <div>
  <div className="flex items-center gap-2 mb-6">
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/LOGO(bahamas).png"
        alt="BahaMoments Logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </Link>
  </div>


            <ul className="space-y-4 text-gray-600 text-xs">
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <Facebook size={16} />
                Facebook
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <Twitter size={16} />
                Twitter
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <Instagram size={16} />
                Instagram
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <Youtube size={16} />
                Youtube
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900">
              Use Cases
            </h3>
            <ul className="space-y-4 text-xs text-gray-600">
              <li>Abstergo Ltd.</li>
              <li>Nursing Assistant</li>
              <li>Medical Assistant</li>
              <li>Marketing Coordinator</li>
              <li>Dog Trainer</li>
              <li>Web Designer</li>
              <li>President of Sales</li>
              <li>Medical Assistant</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900">
              Categories
            </h3>
            <ul className="space-y-4 text-xs text-gray-600">
              <li>Algeria</li>
              <li>South Africa</li>
              <li>Central African Republic</li>
              <li>Afghanistan</li>
              <li>Viet Nam</li>
              <li>Iran (Islamic Republic of)</li>
              <li>Pakistan</li>
              <li>Serbia</li>
            </ul>
          </div>

          {/* Documentations */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900">
              Documentations
            </h3>
            <ul className="space-y-4 text-xs text-gray-600">
              <li>Dog Trainer</li>
              <li>Nursing Assistant</li>
              <li>Marketing Coordinator</li>
              <li>President of Sales</li>
              <li>Web Designer</li>
              <li>Medical Assistant</li>
              <li>Dog Trainer</li>
              <li>President of Sales</li>
            </ul>
          </div>

          {/* Our Condition */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900">
              Our Condition
            </h3>
            <ul className="space-y-4 text-xs text-gray-600">
              <li>Ethical Hacker</li>
              <li>UI/UX Designer</li>
              <li>Software Tester</li>
              <li>Scrum Master</li>
              <li>Project Manager</li>
              <li>Team Leader</li>
              <li>Software Development</li>
              <li>Software Developer</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
