beforeEach(() => {
    cy.task("resetDb");
});

it("can run tests", () => {
    assert.equal(1, 1);
})
