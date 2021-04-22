beforeEach(() => {
    cy.task("resetDb");
});

it("can run tests", () => {
    assert.equal(1, 1);
})

it("can see homepage", () => {
    cy.visit("/");
})

it("can visit new user page", () => {
    cy.visit("/");
    cy.get('a').click();
    cy.url().should("include", "/new-user");
})

it("can add new user", () => {
    cy.visit("/new-user");
    cy.get("form").find("input[name='name']").type("Sally");
    cy.get("form").find("input[name='github_username']").type("Sally97");
    cy.get("form").find("input[name='pronoun']").type("They");
    cy.get("form").find("input[name='interest']").type("Coding");
    cy.get("form").find("input[name='cohort']").type("20");
    cy.get("form").find("input[name='location']").type("London");
    cy.get("form").submit();
    cy.visit("/");
    cy.get("ul").contains("Sally");
})