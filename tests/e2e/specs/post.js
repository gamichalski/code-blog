import posts from "../mocks/posts";

const post = posts[0];

describe("Post", () => {
  beforeEach(() => {
    cy.server();
    cy.route({ method: "GET", url: "**/post/**", response: post });
    cy.visit(`/posts/${post.uuid}`);
  });

  it("Post deve ser renderizado em tela de acordo com o uuid", () => {
    cy.get("[data-testid=post]").should(($section) => {
      expect($section)
        .to.contain("Esse post é do usuário 1")
        .and.to.contain("usuario.01@codenation.com");
    });
  });
});
