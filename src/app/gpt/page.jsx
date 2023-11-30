// /app/gpt/page.tsx
"use client"
import { useState } from "react";
import { generate, stop } from "../../pages/api/GPT/stream-response";
import React from "react";

const Subdomain = ({ domain, subdomain, onSubmit, result, setResult }) => {
  const [formValues, setFormValues] = useState({});
  const [controller, setController] = useState(null);

  const handleGenerate = async (domain, subdomain, formValues, result, setResult) => {
    await generate(domain, subdomain, formValues, result, setResult);
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
    e.preventDefault();
    
    handleGenerate(domain, subdomain.name, formValues, result, setResult);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-semibold mb-4">{subdomain.name}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {subdomain.formFields.map((field) => (
          <label key={field.name} className="block">
            {field.label}:
            <input
              type={field.type}
              value={formValues[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="border p-2 rounded mt-1"
            />
          </label>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

const MyCard = () => {
  const [result, setResult] = useState("");
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const domains = [
    /* case "Write Technical Specifications":
      return `Provide detailed technical specifications based on the given requirements (${input.businessRequirements}), systems involved (${input.systemsInvolved}), and best practices (${input.bestPractices}).`;

    case "Bug Report":
      return `Describe the bug you encountered. Include any context (${input.context}) or steps to reproduce the issue if available.`; */
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
        {
          name: 'Bug Report',
          formFields: [
            { name: 'context', label: 'context', type: 'text' },
            
          ],
        },
        {
          name: 'Write Technical specifications',
          formFields: [
            { name: 'businessRequirements', label: 'businessRequirements', type: 'text' },
            { name: 'systemsInvolved', label: 'systemsInvolved', type: 'text' },
            { name: 'bestPractices', label: 'bestPractices', type: 'text' },
          
            
          ],
        },

        // Add more subdomains for Domain 1 if needed
      ],
    },
    {
      name: 'Research Documentation',
      subdomains: [
        {
          name: 'Summarizes Text',
          formFields: [
            { name: 'text', label: 'text', type: 'text' },
          ],
        },
        // Add more subdomains fSummarizes Textor Domain 2 if needed
      ],
    },
    // Add more domains if needed
  ];
  const handleDomainSelect = (selectedDomain) => {
    setSelectedDomain(selectedDomain);
    setSelectedSubdomain(null);
    setSubmittedData(null);
  };

  const handleSubdomainSelect = (subdomain) => {
    setSelectedSubdomain(subdomain);
    setSubmittedData(null);
  };

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
    setSelectedDomain('');
    setSelectedSubdomain(null);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Card with Subdomains and Forms</h2>
      <label className="block mb-2">Select Domain:</label>
      <select
        value={selectedDomain}
        onChange={(e) => handleDomainSelect(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="" disabled>Select an option</option>
        {domains.map((domain) => (
          <option key={domain.name} value={domain.name}>
            {domain.name}
          </option>
        ))}
      </select>

      {selectedDomain && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Subdomains for {selectedDomain}:</h3>
          {domains
            .find((domain) => domain.name === selectedDomain)
            .subdomains.map((subdomain) => (
              <button
                key={subdomain.name}
                onClick={() => handleSubdomainSelect(subdomain)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mb-2 hover:bg-gray-300"
              >
                {subdomain.name}
              </button>
            ))}
        </div>
      )}

      {selectedSubdomain && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Form for {selectedSubdomain.name}:</h3>
          <Subdomain
            domain={selectedDomain}
            subdomain={selectedSubdomain}
            onSubmit={handleFormSubmit}
            result={result}
            setResult={setResult}
          />
        </div>
      )}

      {submittedData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Submitted Data:</h3>
          <pre className="border p-4 rounded bg-gray-100">{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Result:</h3>
          <div className="border p-4 rounded bg-gray-100">
            <pre className="whitespace-pre-line">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCard;
