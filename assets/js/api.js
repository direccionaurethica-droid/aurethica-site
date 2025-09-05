/**
 * Auréthica API Client
 * Provides helpers for communicating with the Auréthica API
 */
(function() {
  'use strict';

  // Determine base URL based on environment
  const getBaseURL = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:3001';
    }
    return '';  // Use relative URLs in production (/api)
  };

  const baseURL = getBaseURL();

  /**
   * Make API request helper
   */
  async function apiRequest(endpoint) {
    try {
      const url = baseURL + endpoint;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  /**
   * API methods
   */
  const AurethicaAPI = {
    // Get all styles
    async getStyles() {
      return apiRequest('/api/styles');
    },

    // Get specific style by ID
    async getStyle(id) {
      return apiRequest(`/api/styles/${id}`);
    },

    // Get tips
    async getTips() {
      return apiRequest('/api/tips');
    },

    // Get messages
    async getMessages() {
      return apiRequest('/api/messages');
    },

    // Get onboarding data
    async getOnboarding() {
      return apiRequest('/api/onboarding');
    },

    // Health check
    async checkHealth() {
      return apiRequest('/health');
    },

    // Get API info
    async getAPIInfo() {
      return apiRequest('/api');
    }
  };

  // Expose API to global scope
  window.AurethicaAPI = AurethicaAPI;

  // Log API initialization
  console.log('Auréthica API client initialized with base URL:', baseURL);
})();