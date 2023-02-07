// 1. Go to https://www.velvetech.com/

// - Opened https://www.velvetech.com/

// 2. Click hamburger menu button

// - Opened menu modal window

// 3. Click Close('X') button

// - Closed menu modal window

describe('Menu Closing', () => {
  it('Closing menu modal window', () => {
    cy.visit('https://www.velvetech.com/');
    cy.get('button.nav-toggle').click();
    cy.get('.topnav span.close').click();
    cy.get('.topnav').should('not.be.visible');
  });
});
