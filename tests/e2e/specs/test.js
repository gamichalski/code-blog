describe("My First Test", () => {
  it("Ao clicar em criar post deve ser redirecionado para /posts/novo", () => {
    cy.visit("/posts");
  });
});
