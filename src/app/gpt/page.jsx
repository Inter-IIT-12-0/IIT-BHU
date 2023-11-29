// /app/gpt/page.tsx
"use client"
// pages/index.js
import { useState,useEffect } from "react";
import { generate, stop } from "../../pages/api/GPT/stream-response";
import React from "react";

const Subdomain = ({ subdomain, onSubdomainClick, onSubmit,result,setResult }) => {


  const [formValues, setFormValues] = useState({});
  const [controller, setController] = useState(null);

  const handleGenerate = async (domain, subdomain,formValues,result,setResult) => {
    // ... (your existing input validation)
    await generate(domain,subdomain,formValues, result, setResult);
  };

  const handleStop = () => {
    stop(controller, setResult);
  };
  const handleInputChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    handleGenerate("Engineering","Generate Code Snippet",formValues,result,setResult);
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div>
      <h3>{subdomain.name}</h3>
      {/* Form with input fields */}
      <form onSubmit={handleSubmit}>
        {subdomain.formFields.map((field) => (
          <label key={field.name}>
            {field.label}:
            <input
              type={field.type}
              value={formValues[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Card component
const MyCard = () => {
  const [result, setResult] = useState("");
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const domains = [
    {
      name: 'Engineering',
      subdomains: [
        {
          name: 'Generate Code Snippet',
          formFields: [
            { name: 'codeTask', label: 'codeTask', type: 'text' },
            { name: 'codeLanguage', label: 'codeLanguage', type: 'text' },
          ],
        },
        // Add more subdomains for Domain 1 if needed
      ],
    },
    {
      name: 'Domain 2',
      subdomains: [
        {
          name: 'Subdomain 2.1',
          formFields: [
            { name: 'field3', label: 'Field 3', type: 'text' },
            { name: 'field4', label: 'Field 4', type: 'text' },
          ],
        },
        // Add more subdomains for Domain 2 if needed
      ],
    },
    // Add more domains if needed
  ];

  const handleDomainSelect = (selectedDomain) => {
    setSelectedDomain(selectedDomain);
    setSelectedSubdomain(null); // Reset selected subdomain when a new domain is selected
    setSubmittedData(null); // Reset submitted data when a new domain is selected
  };

  const handleSubdomainSelect = (subdomain) => {
    setSelectedSubdomain(subdomain);
    setSubmittedData(null); // Reset submitted data when a new subdomain is selected
  };

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Card with Subdomains and Forms</h2>
      {/* Dropdown for selecting domain */}
      <label>Select Domain:</label>
      <select value={selectedDomain} onChange={(e) => handleDomainSelect(e.target.value)}>
        <option value="" disabled>Select an option</option>
        {domains.map((domain) => (
          <option key={domain.name} value={domain.name}>
            {domain.name}
          </option>
        ))}
      </select>

      {/* Display subdomains based on selected domain */}
      {selectedDomain && (
        <div>
          <h3>Subdomains for {selectedDomain}:</h3>
          {domains
            .find((domain) => domain.name === selectedDomain)
            .subdomains.map((subdomain) => (
              <button
                key={subdomain.name}
                onClick={() => handleSubdomainSelect(subdomain)}
              >
                {subdomain.name}
              </button>
            ))}
        </div>
      )}

      {/* Display the selected subdomain's form */}
      {selectedSubdomain && (
        <div>
          <h3>Form for {selectedSubdomain.name}:</h3>
          <Subdomain domain={selectedDomain} subdomain={selectedSubdomain} onSubmit={handleFormSubmit} result={result} setResult={setResult} />
        </div>
      )}

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}

{result}
    </div>
    
  );
};

export default MyCard;
