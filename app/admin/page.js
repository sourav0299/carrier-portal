'use client';

import { useState } from 'react';

export default function AdminPage() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && subtitle.trim()) {
      const res = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, subtitle }),
      });
        setTitle('');
        setSubtitle('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
          <div className="max-w-[1200px]">
              <h1 className="text-3xl font-bold mb-6">Admin: Create Job Posting</h1>
                <form onSubmit={handleSubmit} className="mb-4 flex flex-col items-center justify-center">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Job Title"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="Short Description (1 liner)"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Post
            </button>
        </form>
      </div>
    </div>
  );
}
