describe('navigate', () => {
    it('navigate to schedule page', () => {
        cy.visit("/");
        cy.get("a[href*=schedule]").click();
        cy.url().should('include', '/schedule');
        cy.get('h1').contains("캘린더를 만들고");
        cy.get('button').contains("캘린더 만들기");
    });
    it('navigate to main page', () => {
        cy.visit("/");
        cy.get("h1").contains("모두가 동의하는")
            .get("button").contains("10초만에 스케줄 만들기");
    });
    it('navigate to 404 page', () => {
        cy.request({
            url: '/404',
            failOnStatusCode: false
        }).its('status').should('equal', 404);
        cy.visit('/404', { failOnStatusCode: false });
    });
    it('navigate from 404 page to main', () => {
        cy.visit("/404040", { failOnStatusCode: false });
        cy.get("a").click();
        cy.url().should("include", "/");
    });
});