describe("Regression Test - UI and Theme", () => {

  it("All major UI elements are visible", () => {
    cy.visit("index.html");

    cy.get("h1").should("be.visible");
    cy.get("#counter").should("be.visible");
    cy.contains("Increase").should("be.visible");
    cy.contains("Decrease").should("be.visible");
    cy.contains("Reset").should("be.visible");
    cy.contains("Toggle Dark Mode").should("be.visible");
  });

  it("Dark mode toggles correctly", () => {
    cy.visit("index.html");

    cy.contains("Toggle Dark Mode").click();
    cy.get("body").should("have.class", "dark");

    cy.contains("Toggle Dark Mode").click();
    cy.get("body").should("not.have.class", "dark");
  });

});
