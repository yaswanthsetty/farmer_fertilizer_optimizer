import React, { useEffect, useState } from 'react';

const GoogleTranslate = () => {
  const [error, setError] = useState(false);
  const [language, setLanguage] = useState('en'); // Default language

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
    script.async = true;

    script.onerror = () => {
      setError(true);
      console.error("Error loading the Google Translate script");
    };

    window.initializeGoogleTranslate = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te', // Add any other languages you want
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false, // Prevent automatic display
      }, 'google_translate_element');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.initializeGoogleTranslate; // Clean up
    };
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    // Check if google.translate is defined
    if (window.google && window.google.translate) {
      // Use the API to change the displayed language
      const select = document.querySelector('.skiptranslate select');
      if (select) {
        select.value = selectedLanguage; // Update the select element
        select.dispatchEvent(new Event('change')); // Trigger change event
      } else {
        console.error("Language select element not found");
      }
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>Translation service is currently unavailable.</div>}
      <div id="google_translate_element" />
      <select onChange={handleLanguageChange} value={language}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="te">Telugu</option>
      </select>
    </div>
  );
};

export default GoogleTranslate;
