// 1. Go to https://www.velvetech.com/

// - Opened https://www.velvetech.com/

// 2. Click hamburger menu button

// - Opened menu modal window

// 3. Click Our Work link

// - Opened https://www.velvetech.com/case-studies/

describe('Menu Our Work page', () => {
  it('Opening Our Work page through menu modal window', () => {
    cy.visit('https://www.velvetech.com/');
    cy.get('button.nav-toggle').click();
    cy.contains('Our Work').click();
    cy.url().should('include', '/case-studies/');
  });
});
