'use client';
import { useEffect, useState } from 'react';

import { Input } from "@/components/ui/input"



import Navbar from '@/components/navbar';
import { Search } from 'lucide-react';


interface Item {
  id: number;
  title: string;
  type: 'document' | 'page';
  lastAccessed: string;


}


// Mock API Fetch Simulation
const fetchMockData = (): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Project Plan', type: 'document', lastAccessed: '2025-04-25T10:00:00Z' },
        { id: 2, title: 'Team Site', type: 'page', lastAccessed: '2025-04-26T09:00:00Z' },
        { id: 3, title: 'Budget Report', type: 'document', lastAccessed: '2025-04-20T11:00:00Z' },
        { id: 4, title: 'HR Policy', type: 'page', lastAccessed: '2025-04-18T12:00:00Z' },
      ]);
    }, 1000);
  });
};

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<Item[]>([]);
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const [includeRecentDocs, setIncludeRecentDocs] = useState(true);
  const [includeRecentPages, setIncludeRecentPages] = useState(true);

  useEffect(() => {
    fetchMockData().then((items) => {
      setData(items);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setResults([]);
      return;
    }

    let filtered = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Apply toggle filters
    if (!includeRecentDocs) {
      filtered = filtered.filter((item) => item.type !== 'document');
    }
    if (!includeRecentPages) {
      filtered = filtered.filter((item) => item.type !== 'page');
    }

    filtered = filtered.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'document' ? -1 : 1;
      }
      return new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime();
    });

    setResults(filtered);
  }, [searchTerm, data, includeRecentDocs, includeRecentPages]);

  return (

    <div className="p-6">



     


<div className=' flex  justify-center items-center '>

  <div className="relative w-1/2 mb-4 ">
  <input
    type="text"
    placeholder="Search documents or pages..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border p-2 pl-10 w-full rounded"
  />
  <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
  <Search />
  </div>
</div>


      {/* Toggle Buttons */}
     {/*  <div className="flex gap-4 mb-4 ml-4">
        <button
          id="recent-docs-toggle"
          className={`px-4 py-2 border rounded ${includeRecentDocs ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setIncludeRecentDocs((prev) => !prev)}
        >
          Recently Viewed Documents
        </button>

        <button
          id="recent-pages-toggle"
          className={`px-4 py-2 border rounded ${includeRecentPages ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setIncludeRecentPages((prev) => !prev)}
        >
           Recently Viewed Pages
        </button>
      </div> */}
      </div>



      {/* Search Results */}
      {loading ? (
        <p>Loading documents...</p>
      ) : (
        <div className="space-y-2">
          {results.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow-sm">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)} — Last Accessed: {new Date(item.lastAccessed).toLocaleString()}
              </p>
            </div>
          ))}

          {results.length === 0 && searchTerm !== '' && (
            <p className="text-gray-400">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
