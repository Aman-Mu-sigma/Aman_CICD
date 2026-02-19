describe("Functional Test - Counter Behavior", () => {

  it("Increases counter when Increase button is clicked", () => {
    cy.visit("index.html");

    cy.contains("Increase").click();
    cy.get("#counter").should("contain", "1");
  });

  it("Decreases counter when Decrease button is clicked", () => {
    cy.visit("index.html");

    cy.contains("Decrease").click();
    cy.get("#counter").should("contain", "-1");
  });

  it("Resets counter when Reset button is clicked", () => {
    cy.visit("index.html");

    cy.contains("Increase").click();
    cy.contains("Reset").click();
    cy.get("#counter").should("contain", "0");
  });

});
