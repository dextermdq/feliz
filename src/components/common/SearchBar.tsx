'use client';

import { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (q: string) => void;
  suggestions?: string[];
}

export function SearchBar({ placeholder = 'Buscar productos...', onSearch, suggestions = [] }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setIsOpen(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="flex items-center bg-feliz-gris-100 rounded-lg px-space-lg py-space-md">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          className="
            flex-1 bg-transparent text-body-md text-feliz-negro
            placeholder-feliz-gris-500 outline-none
          "
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="text-feliz-rojo hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown de sugerencias (vacío por ahora) */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-space-xs bg-feliz-blanco border border-feliz-gris-100 rounded-lg shadow-md z-10">
          {suggestions.map((suggestion, idx) => (
            <button
              key={`${suggestion}-${idx}`}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="
                w-full text-left px-space-lg py-space-md text-body-md
                text-feliz-negro hover:bg-feliz-gris-100 transition-colors
              "
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
