beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('SANITY CHECK', () => {
  it('opens the app successfully', () => {
    cy.url().should("contain", 'http://localhost:5173/');
  });
});

describe('SUCCESS', () => {
  it('opens the order page', () => {
    //arrange
    cy.get('.siparis-buton').first().as("orderButton");
    //act
    cy.get("@orderButton").click();
    //assert
    cy.url().should("contain", "/orderForm");
  });
});

describe('Input check', () => {
  it('write something on input', () => {
    //arrange
    cy.get('.siparis-buton').first().as("orderButton");
    cy.get("@orderButton").click();
    //act
    cy.get('.fullnameTest').as("nameInput").type("Ul");
    //assert
    cy.contains("Lütfen geçerli bir ad ve soyad giriniz.").should("be.visible");
  });
});

describe('Ingredients check', () => {
  it('select ingredients', () => {
    //arrange
    cy.get('.siparis-buton').first().as("orderButton");
    cy.get("@orderButton").click();
    //act
    cy.get('input[name="ekMalzeme"][value="pepperoni"]').check();
    cy.get('input[name="ekMalzeme"][value="tavuk ızgara"]').check();
    cy.get('input[name="ekMalzeme"][value="sarımsak"]').check();
    //assert
    cy.contains("En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺").should("be.visible");
  });
});

describe('Submit form', () => {
  it('form submits after click', () => {
    //arrange
    cy.get('.siparis-buton').first().as("orderButton");
    cy.get("@orderButton").click();


    //act
    cy.get('input[name="ekMalzeme"][value="pepperoni"]').check();
    cy.get('input[name="ekMalzeme"][value="tavuk ızgara"]').check();
    cy.get('input[name="ekMalzeme"][value="sarımsak"]').check();
    cy.get('input[name="ekMalzeme"][value="mısır"]').check();
    cy.get('.fullnameTest').type("Ulaş");
    cy.get('.custom-radio-input[value="Orta"]').click({ force: true });
    cy.get('select[name="pizzaHamur"]').select("İnce Hamur");
    cy.get('.submit-button').as("submitButton");
    cy.get("@submitButton").click();


    //assert
    cy.url().should("contain", "/orderSuccess");
  });
});
