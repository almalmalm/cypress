// 1. Go to https://www.velvetech.com/

// - Opened https://www.velvetech.com/

// 2. Click hamburger menu button

// - Opened menu modal window

// 3. Click Services link

// - Opened Services list

// 4. Click Custom Development Sevices

// - Opened Custom Development Sevices list

// 5. Click Custom Software Development link

// - Opened https://www.velvetech.com/custom-software-development/

describe('Menu About page', () => {
  it('Opening About page through menu modal window', () => {
    cy.visit('https://www.velvetech.com/');
    cy.get('button.nav-toggle').click();
    cy.contains('Services').click();
    cy.contains('Custom Development Services').click();
    cy.contains('Custom Software Development').click();
    cy.url().should('include', '/custom-software-development/');
  });
});
