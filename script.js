/**
 * Shugyla Zhambybay — SIS 1 Portfolio Script
 * Pure Vanilla JavaScript (No frameworks or libraries)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Dark / Light Mode Toggle (Changes the whole page)
     ========================================================================== */
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  // Check persisted preference in localStorage or default to light
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = html.dataset.theme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  });

  function applyTheme(theme) {
    html.dataset.theme = theme;
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  /* ==========================================================================
     2. Contact Form Handler with Detailed Custom Validation
     ========================================================================== */
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('user-name');
  const emailInput = document.getElementById('user-email');
  const messageInput = document.getElementById('user-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formFeedback = document.getElementById('form-feedback');

  // Strict email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Realtime clear errors on typing
  nameInput.addEventListener('input', () => clearFieldValidation(nameInput, nameError));
  emailInput.addEventListener('input', () => clearFieldValidation(emailInput, emailError));
  messageInput.addEventListener('input', () => clearFieldValidation(messageInput, messageError));

  function clearFieldValidation(inputEl, errorEl) {
    inputEl.classList.remove('input-error');
    errorEl.textContent = '';
  }

  form.addEventListener('submit', (event) => {
    // 1. Prevent default page reload
    event.preventDefault();

    // Reset general feedback
    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';

    let isValid = true;

    // Validate Name Field
    const nameVal = nameInput.value.trim();
    if (nameVal === '') {
      showError(nameInput, nameError, 'Name is required. Please enter your name.');
      isValid = false;
    } else {
      clearFieldValidation(nameInput, nameError);
    }

    // Validate Email Field (Distinct error for empty vs. malformed format)
    const emailVal = emailInput.value.trim();
    if (emailVal === '') {
      showError(emailInput, emailError, 'Email is required. Please enter your email address.');
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      showError(emailInput, emailError, 'Please enter a valid email format (e.g. name@example.com).');
      isValid = false;
    } else {
      clearFieldValidation(emailInput, emailError);
    }

    // Validate Message Field
    const messageVal = messageInput.value.trim();
    if (messageVal === '') {
      showError(messageInput, messageError, 'Message is required. Please type your message.');
      isValid = false;
    } else {
      clearFieldValidation(messageInput, messageError);
    }

    // Process outcome
    if (!isValid) {
      formFeedback.textContent = 'Please correct the errors highlighted below.';
      formFeedback.className = 'form-feedback error';
    } else {
      // Success: Show confirmation, clear inputs without reloading
      formFeedback.textContent = 'Thank you, ' + nameVal + '! Your message was sent successfully.';
      formFeedback.className = 'form-feedback success';
      form.reset();
    }
  });

  function showError(inputEl, errorEl, message) {
    inputEl.classList.add('input-error');
    errorEl.textContent = message;
  }
});