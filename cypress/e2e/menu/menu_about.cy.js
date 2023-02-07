// 1. Go to https://www.velvetech.com/

// - Opened https://www.velvetech.com/

// 2. Click hamburger menu button

// - Opened menu modal window

// 3. Click About link

// - Opened https://www.velvetech.com/about-us/

describe('Menu About page', () => {
  it('Opening About page through menu modal window', () => {
    cy.visit('https://www.velvetech.com/');
    cy.get('button.nav-toggle').click();
    cy.contains('About').click();
    cy.url().should('include', '/about-us/');
  });
});
