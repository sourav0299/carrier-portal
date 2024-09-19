'use client';

export default function Modal({ isOpen, onClose, onSubmit, selectedJob }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob?.title}</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Applying For</label>
            <input
                type="text"
                value={selectedJob?.title}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit Application
            </button>
            <button
              type="button"
              className="text-gray-500 py-2 px-4 rounded hover:bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
