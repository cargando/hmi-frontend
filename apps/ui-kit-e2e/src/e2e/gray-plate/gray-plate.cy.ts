describe('ui-kit: GrayPlate component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=grayplate--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to GrayPlate!');
    });
});
