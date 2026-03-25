import { Interception } from '../../node_modules/cypress/types/net-stubbing';
import { Users } from '../helper/users';
import { login_ohrnm } from '../Pages/oHrm-login';

describe('Login-UI-TestCases', () => {
  beforeEach(`Visit-OrangeHRM-LoginPage`, () => {
    cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as(
      'o-Hrm-test'
    );
    cy.visit('/auth/login');
    cy.wait('@o-Hrm-test').then((interception: Interception) => {
      expect(interception.response?.statusCode).to.eq(200);
    });
  });
  it('Login-with-Valid-credentials', () => {
    login_ohrnm.userNameClick().type(Users.username_ohrm);
    login_ohrnm.passwordClick().type(Users.password_ohrm);
    login_ohrnm.submitClick();
    cy.url().should('include', 'dashboard');
  });
  it('Login-with-(ValidUserName-InvalidUserName)', () => {
    login_ohrnm.userNameClick().type(Users.username_ohrm);
    login_ohrnm.passwordClick().type(Users.inValidPassword);
    login_ohrnm.submitClick();
    login_ohrnm.e.invalidCredential().should('be.visible');
  });
  it('Login-with-(InvalidUserName-ValidPassword)', () => {
    login_ohrnm.userNameClick().type(Users.inValidUserName);
    login_ohrnm.passwordClick().type(Users.password_ohrm);
    login_ohrnm.submitClick();
    login_ohrnm.e.invalidCredential().should('be.visible');
  });
  it('Login-with-InValid-credentials', () => {
    login_ohrnm.userNameClick().type(Users.inValidUserName);
    login_ohrnm.passwordClick().type(Users.inValidPassword);
    login_ohrnm.submitClick();
    login_ohrnm.e.invalidCredential().should('be.visible');
  });
  it('Login-without-UserName', () => {
    login_ohrnm.passwordClick().type(Users.inValidPassword);
    login_ohrnm.submitClick();
    login_ohrnm.e.requiredErrorMessage('username').should('be.visible');
  });
  it('Login-without-password', () => {
    login_ohrnm.userNameClick().type(Users.inValidUserName);
    login_ohrnm.submitClick();
    login_ohrnm.e.requiredErrorMessage('password').should('be.visible');
  });
  it('Login-without-both-userName&Password', () => {
    login_ohrnm.submitClick();
    login_ohrnm.e.requiredErrorMessage('username').should('be.visible');
    login_ohrnm.e.requiredErrorMessage('password').should('be.visible');
  });
  it('Onclick-Svg-Element(LinkedIn)-Link-should-not-give-404-error', () => {
    login_ohrnm.e
      .linkedin()
      .then(($a) => {
        expect($a).to.have.attr('target', '_blank');
        $a.attr('target', '_self');
      })
      .click();
    cy.url().should('contains', 'https://www.linkedin.com/company/orangehrm');
  });
  it('Onclick-Svg-Element(faceBook)-Link-should-not-give-404-error', () => {
    login_ohrnm.e
      .faceBook()
      .then(($a) => {
        expect($a).to.have.attr('target', '_blank');
        $a.attr('target', '_self');
      })
      .click();
    cy.url().should('contains', 'https://www.facebook.com/OrangeHRM');
  });
  it('Onclick-Svg-Element(Twitter)-Link-should-not-give-404-error', () => {
    login_ohrnm.e
      .twitter()
      .then(($a) => {
        expect($a).to.have.attr('target', '_blank');
        $a.attr('target', '_self');
      })
      .click();
    cy.url().should('contains', 'https://twitter.com/orangehrm?lang=en');
  });
  it('Onclick-Svg-Element(youTube)-Link-should-not-give-404-error', () => {
    login_ohrnm.e
      .youTube()
      .then(($a) => {
        expect($a).to.have.attr('target', '_blank');
        $a.attr('target', '_self');
      })
      .click();
    cy.url().should('contains', 'https://www.youtube.com/c/OrangeHRMInc');
  });
});
