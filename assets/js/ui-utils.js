/**
 * UI Utilities for Auréthica
 * Centralized loading states and error handling
 */
(function() {
  'use strict';

  /**
   * Show loading state in a container
   */
  function showLoading(container, message = 'Cargando...') {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    if (!container) return;
    
    container.innerHTML = `
      <div class="loading-state" style="
        text-align: center; 
        padding: 2rem; 
        color: #666;
        font-style: italic;
      ">
        <div class="loading-spinner" style="
          border: 2px solid #f3f3f3;
          border-top: 2px solid #a48a5e;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem auto;
        "></div>
        ${message}
      </div>
    `;
    
    // Add spinner animation if not already added
    if (!document.getElementById('spinner-styles')) {
      const style = document.createElement('style');
      style.id = 'spinner-styles';
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Show error state in a container
   */
  function showError(container, message = 'Error al cargar los datos. Por favor, inténtalo de nuevo.', retryCallback = null) {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    if (!container) return;
    
    const retryButton = retryCallback ? `
      <button onclick="(${retryCallback.toString()})()" style="
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #a48a5e;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      ">
        Reintentar
      </button>
    ` : '';
    
    container.innerHTML = `
      <div class="error-state" style="
        text-align: center; 
        padding: 2rem; 
        color: #d32f2f;
        background-color: #ffeaea;
        border: 1px solid #ffcdd2;
        border-radius: 4px;
        margin: 1rem 0;
      ">
        <div style="font-size: 1.2em; margin-bottom: 0.5rem;">⚠️</div>
        <div>${message}</div>
        ${retryButton}
      </div>
    `;
  }

  /**
   * Clear loading/error states and restore content
   */
  function clearStates(container) {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    if (!container) return;
    
    const loadingElement = container.querySelector('.loading-state');
    const errorElement = container.querySelector('.error-state');
    
    if (loadingElement) loadingElement.remove();
    if (errorElement) errorElement.remove();
  }

  /**
   * Generic API call wrapper with loading and error handling
   */
  async function apiCallWithStates(container, apiCall, loadingMessage = 'Cargando...') {
    const containerElement = typeof container === 'string' ? document.getElementById(container) : container;
    if (!containerElement) {
      throw new Error('Container not found');
    }

    try {
      showLoading(containerElement, loadingMessage);
      const result = await apiCall();
      clearStates(containerElement);
      return result;
    } catch (error) {
      console.error('API call failed:', error);
      showError(containerElement, 
        'Error al cargar los datos. Por favor, verifica tu conexión e inténtalo de nuevo.',
        () => apiCallWithStates(container, apiCall, loadingMessage)
      );
      throw error;
    }
  }

  // Expose utilities to global scope
  window.AurethicaUI = {
    showLoading,
    showError,
    clearStates,
    apiCallWithStates
  };

  console.log('Auréthica UI utilities initialized');
})();