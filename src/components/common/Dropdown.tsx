import React, { useState } from 'react';
import './dropdown.css';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <div className='selected' onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : 'About Us'}
      </div>
      {isOpen && (
        <div className='options'>
          {options.map((option) => (
            <div
              key={option.value}
              className='option'
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
