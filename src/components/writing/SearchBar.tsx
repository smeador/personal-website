import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearchResults?: (results: any[]) => void;
}

// Pagefind types
declare global {
  interface Window {
    pagefind?: {
      init: () => void;
      search: (query: string) => Promise<{
        results: Array<{
          id: string;
          data: () => Promise<{
            url: string;
            content: string;
            meta: {
              title: string;
              image?: string;
            };
          }>;
        }>;
      }>;
    };
  }
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [resultCount, setResultCount] = useState<number | null>(null);
  const [isPagefindLoaded, setIsPagefindLoaded] = useState(false);

  // Load Pagefind when component mounts
  useEffect(() => {
    const loadPagefind = async () => {
      if (window.pagefind) {
        setIsPagefindLoaded(true);
        return;
      }

      try {
        const script = document.createElement('script');
        script.src = '/pagefind/pagefind-ui.js';
        script.type = 'module';
        script.onload = () => {
          if (window.pagefind) {
            window.pagefind.init();
            setIsPagefindLoaded(true);
          }
        };
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Pagefind not available, search will use fallback');
        setIsPagefindLoaded(false);
      }
    };

    // Only load Pagefind in production (when built files exist)
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      loadPagefind();
    }
  }, []);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResultCount(null);
      onSearchResults?.([]);
      return;
    }

    setIsSearching(true);

    try {
      if (isPagefindLoaded && window.pagefind) {
        const results = await window.pagefind.search(searchQuery);
        setResultCount(results.results.length);
        onSearchResults?.(results.results);
      } else {
        // Fallback for development or when Pagefind isn't available
        const mockResults = searchQuery.length > 2 ? [] : [];
        setResultCount(mockResults.length);
        onSearchResults?.(mockResults);
      }
    } catch (error) {
      console.warn('Search failed:', error);
      setResultCount(0);
      onSearchResults?.([]);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-muted-foreground" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search articles by title, content, or tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-foreground placeholder-muted-foreground"
            />
            {isSearching && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
              </div>
            )}
          </div>
          
          {resultCount !== null && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-muted-foreground mt-2"
            >
              {resultCount === 0 ? 'No articles found' : `${resultCount} article${resultCount === 1 ? '' : 's'} found`}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}