"use client";

import React from 'react';
import { SearchIcon } from '../../../components/assets/SearchIcon';
import { Button } from '../../../components/ui/button';

type SearchBarProps = {
  roundness?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  thickness?: 'none' | 'sm' | 'md';
  showIcon?: boolean;
  showButton?: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({
  roundness = 'full',
  thickness = 'md',
  showIcon = true,
  showButton = true,
}) => {
  const roundnessClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const thicknessClasses = {
    none: 'border-0',
    sm: 'border',
    md: 'border-2',
  };

  return (
    <div className={`flex items-center ${thicknessClasses[thickness]} ${roundnessClasses[roundness]}`}>
      {showIcon && (
        <div className="p-2">
          <SearchIcon />
        </div>
      )}
      <input
        type="text"
        placeholder="Search the Docs!"
        className={`flex-grow p-2 ${showIcon ? 'pl-0' : ''}`}
      />
      {showButton && (
        <Button>
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchBar;