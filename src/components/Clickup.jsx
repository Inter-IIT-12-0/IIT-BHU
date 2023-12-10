import React, { useState } from 'react';

const SubOptionForm = ({ subOption, onClose }) => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    dropdown: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="sub-option-form">
      <h2>{subOption}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Input 1:</label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="input2">Input 2:</label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dropdown">Dropdown:</label>
          <select
            id="dropdown"
            name="dropdown"
            value={formData.dropdown}
            onChange={handleInputChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Card = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const filterOptions = ['Filter 1', 'Filter 2', 'Filter 3'];
  const subOptions = {
    'Filter 1': ['Option 1A', 'Option 1B', 'Option 1C'],
    'Filter 2': ['Option 2A', 'Option 2B', 'Option 2C'],
    'Filter 3': ['Option 3A', 'Option 3B', 'Option 3C'],
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSelectedSubOption(null); // Reset selected sub-option when filter changes
  };

  const handleButtonClick = (subOption) => {
    setSelectedSubOption(subOption);
  };

  const closeForm = () => {
    setSelectedSubOption(null);
  };

  return (
    <div className="card">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="">Select Filter</option>
          {filterOptions.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>
      <div>
        {selectedFilter && (
          <div>
            {subOptions[selectedFilter].map((subOption) => (
              <button
                key={subOption}
                onClick={() => handleButtonClick(subOption)}
              >
                {subOption}
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        {selectedSubOption && (
          <SubOptionForm
            subOption={selectedSubOption}
            onClose={closeForm}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
