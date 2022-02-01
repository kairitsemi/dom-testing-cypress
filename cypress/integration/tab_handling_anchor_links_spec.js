describe("Cookie disclaimer tests", function () {
  beforeEach(function () {
    cy.visit("/index.html");
  });
  context("Cookie disclaimer will dissapear when X clicked", function () {
    it("Should be visible when coming to the site", function () {
      cy.get(
        ".alert.alert-warning.alert-dismissible.fade.show.mt-3.mt-md-0"
      ).should("be.visible");
    });
    it("Should dissapear when X is clicked", function () {
      cy.get(".close").click();
      cy.get(
        ".alert.alert-warning.alert-dismissible.fade.show.mt-3.mt-md-0"
      ).should("not.exist");
    });
  });

  context("Navbar is fixed on top", function () {
    it("Should be fixed on top", function () {
      cy.get(".fixed-top.navbar.navbar-expand-lg.navbar-dark.bg-dark").should(
        "be.visible",
        "have.css",
        "text-decoration"
      );
    });

    context("Page is responsive", function () {
      it("Should be responsive", function () {
        cy.viewport("samsung-s10");
      });
    });
  });
});

// describe("Anchor link tests", function () {
//   beforeEach(function () {
//     cy.visit("/index.html");
//   });

//   // Every "anchor link tests" will need to be written here
//   // We need to verify the _blank attribute of the link users
//   context("Testing _blank on users", function () {
//     it("Should verify the link has text users", function () {
//       cy.get("#users").should("have.text", "Users");
//     });
//     it("Should verify the _blank attribute", function () {
//       cy.get("#users").should("have.attr", "target", "_blank");
//     });
//     it("solution #1: verify the href, dont click through", function () {
//       cy.get("#users").should("have.attr", "href").and("include", "users.html");

//       cy.get("#users")
//         .should("have.prop", "href")
//         .and("equal", "http://localhost:56048/users.html");
//     });
//     it("solution #2: click through to the new page", function () {
//       // cy.get("#users").invoke("removeAttr", "target").click();
//       // cy.url().should("include", "users.html");
//     });
//     it("solution #3: visit without modifying the <a>", function () {
//       cy.get("#users").then(function ($a) {
//         // extract the fully qualified href property
//         const href = $a.prop("href");

//         // and now visit the href directly
//         cy.visit(href);
//         // cy.url().should("include", "users.html");
//       });
//     });
//   });
// });
