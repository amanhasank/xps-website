import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { jobOpenings } from '../data/jobOpenings'; // Updated import

export default function CareersPage() {
  const [applyingFor, setApplyingFor] = useState("");

  const handleApplyClick = (jobTitle) => {
    setApplyingFor(jobTitle);
    // Optional: Scroll to the form section
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section with Image */}
      <section
        className="relative h-[33vh] md:h-[40vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/careers-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-fadeInDownCareers">Career & CSR</h1>
          <p className="text-xl md:text-2xl font-semibold drop-shadow-lg animate-fadeInUpCareers" style={{ animationDelay: '0.2s' }}>Join Our Team at XPS India</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              In order to satisfy the steadily growing requirements of our global technology group, we rely on experienced, committed, and motivated employees. We are thoroughly familiar with numerous industries around the world and offer our staff a wide range of professional prospects. In order to offer our customers the best possible solutions, we attach great importance to the selective development of our employees. For this purpose, we offer them a wide selection of in-house training and continuing education opportunities.
            </p>

            <p>
              Are you prepared to engage in a professional career with Xtra Precision Screws Pvt. Ltd. as your partner? We offer you ideal opportunities to apply your skills and wide latitude to design your professional career. Pioneer always welcome young, dynamic, ground to earth hard workers and dedicated for their growth. We look forward to hearing from you.
            </p>

            <p>
              We invite you to become part of the action in continuing of our successful corporate history. We are now having various recruitments available in All over India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">General Inquiries</h2>
            <p className="text-lg mb-4 text-gray-700">For general career inquiries, you can reach us:</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+919254071600" className="hover:text-blue-600">
                  +91 9817907015
                </a>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:hr@xpsindia.com" className="hover:text-blue-600">
                  hr@xpsindia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Current Openings</h2>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{job.title}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Locations:</h4>
                  <p className="text-gray-600">{job.locations.join(', ')}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 mb-4">
                  <p className="text-gray-700">
                    Interested candidates can share their CVs at:{' '}
                    <a href={`mailto:${job.contactEmail}`} className="text-blue-600 hover:text-blue-800">
                      {job.contactEmail}
                    </a>
                  </p>
                </div>
                <button 
                  onClick={() => handleApplyClick(job.title)} 
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded shadow transition duration-200"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 px-6">
         <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Apply for {applyingFor || "a Position"}</h2>

          <form action="https://formsubmit.co/111222honey@gmail.com" method="POST" className="space-y-6" enctype="multipart/form-data">
             {/* Hidden fields for Formsubmit.co */}
            <input type="hidden" name="_subject" value="New Job Application - XPSIndia.com" />
            <input type="hidden" name="_next" value="http://localhost:3000/thank-you.html" />
            <input type="hidden" name="_honey" style={{ display: 'none' }} /> {/* Anti-spam field */}

            {/* Hidden field for Job Title - populated by JS */}
            <input type="hidden" name="Job Title" value={applyingFor} />

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="Full Name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="Email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email address" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" name="Phone Number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number (optional)" />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input type="number" id="experience" name="Years of Experience" min="0" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 5" />
            </div>

            <div>
              <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">Resume Link (URL)</label>
              <input type="url" id="resumeLink" name="Resume Link" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Link to your resume (e.g., Google Drive, Dropbox)" />
            </div>

            {/* New field for Resume File Upload */}
            <div>
              <label htmlFor="resumeFile" className="block text-sm font-medium text-gray-700">Resume (PDF)</label>
              <input type="file" id="resumeFile" name="Resume File" accept=".pdf" className="mt-1 block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Cover Letter</label>
              <textarea id="message" name="Message / Cover Letter" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about yourself and why you're a good fit..."></textarea>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

       {/* Optional: Inline styles for the honey pot field */}
      <style jsx>{`
        input[name="_honey"] {
          display: none;
        }
      `}</style>
    </main>
  );
} 