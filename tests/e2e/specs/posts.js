import posts from "../mocks/posts";

describe("Posts", () => {
  beforeEach(() => {
    cy.server();
    cy.route({ method: "GET", url: "post", response: { items: posts } });
    cy.visit("/posts");
  });

  it("Posts devem ser renderizados em tela", () => {
    cy.get("[data-testid=post]").should(($list) => {
      expect($list).to.have.length(3);

      expect($list.eq(0))
        .to.contain("Esse post é do usuário 1")
        .and.to.contain("usuario.01@codenation.com");

      expect($list.eq(1))
        .to.contain("Esse post é do usuário 2")
        .and.to.contain("usuario.02@codenation.com");

      expect($list.eq(2))
        .to.contain("Esse post é do usuário 3")
        .and.to.contain("usuario.03@codenation.com");
    });
  });

  it("Ao clicar no primeiro post deve ser direcionado para a tela do post", () => {
    cy.get("[data-testid=post]")
      .first()
      .click();

    cy.url().should("include", "db305533-afb6-476a-a070-b6974b99ec71");
  });
});
