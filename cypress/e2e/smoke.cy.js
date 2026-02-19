describe("Smoke Test - Basic App Load", () => {

  it("Loads homepage successfully and displays title", () => {
    cy.visit("index.html");

    cy.contains("Counter App");
    cy.get("#counter").should("contain", "0");
  });

});
