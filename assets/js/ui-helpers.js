/**
 * Auréthica UI Helpers
 * Provides common loading and error handling utilities
 */
(function() {
  'use strict';

  /**
   * Simple loading spinner CSS
   */
  const spinnerCSS = `
    .aurethica-spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #b4a26e;
      border-radius: 50%;
      animation: aurethica-spin 1s linear infinite;
      margin-right: 10px;
    }
    
    @keyframes aurethica-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .aurethica-loading {
      text-align: center;
      padding: 20px;
      color: #666;
    }
    
    .aurethica-error {
      text-align: center;
      padding: 20px;
      color: #d32f2f;
      background-color: #ffebee;
      border: 1px solid #ffcdd2;
      border-radius: 4px;
      margin: 10px 0;
    }
  `;

  /**
   * Add CSS styles to document
   */
  function addStyles() {
    if (!document.getElementById('aurethica-ui-styles')) {
      const style = document.createElement('style');
      style.id = 'aurethica-ui-styles';
      style.textContent = spinnerCSS;
      document.head.appendChild(style);
    }
  }

  /**
   * Show loading state in container
   */
  function showLoading(container, message = 'Cargando...') {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    if (container) {
      container.innerHTML = `
        <div class="aurethica-loading">
          <span class="aurethica-spinner"></span>
          ${message}
        </div>
      `;
    }
  }

  /**
   * Show error state in container
   */
  function showError(container, message = 'Error al cargar los datos. Por favor, inténtalo de nuevo.') {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    if (container) {
      container.innerHTML = `
        <div class="aurethica-error">
          ${message}
        </div>
      `;
    }
  }

  /**
   * Clear container content
   */
  function clearContainer(container) {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    if (container) {
      container.innerHTML = '';
    }
  }

  /**
   * Wrapper for API calls with loading and error handling
   */
  async function withLoadingAndError(container, apiCall, successCallback, errorMessage) {
    try {
      showLoading(container);
      const data = await apiCall();
      clearContainer(container);
      await successCallback(data);
    } catch (error) {
      console.error('API call failed:', error);
      showError(container, errorMessage);
      // Don't throw to prevent uncaught errors
    }
  }

  // Initialize styles when script loads
  addStyles();

  // Expose utilities to global scope
  window.AurethicaUI = {
    showLoading,
    showError,
    clearContainer,
    withLoadingAndError
  };

  console.log('Auréthica UI helpers initialized');
})();