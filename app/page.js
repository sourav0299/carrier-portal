'use client';

import { useState, useEffect } from 'react';
import Modal from '../app/components/Modal';

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); 

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('/api/cards');
      const data = await res.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  const handleApplyNow = (job) => {
    setSelectedJob(job.title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted for job:', selectedJob);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-[1200px] w-full">
        <h1 className="text-3xl font-bold mb-6">Frontend: Posts</h1>

      <div className="grid grid-cols-3 gap-2">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="p-4 bg-white shadow-md mb-4 rounded h-60 flex flex-col items-center justify-center gap-4">
              <div className="text-xl font-semibold">{job.title}</div>
              <div className="font-normal">{job.subtitle}</div>
              <div className="bg-blue-700 p-2 rounded px-4 hover:opacity-70">
                <button
                  className="text-white font-normal"
                  onClick={() => handleApplyNow(job)}
                >Apply Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          selectedJob={selectedJob}
        />
      </div>
    </div>
  );
}
