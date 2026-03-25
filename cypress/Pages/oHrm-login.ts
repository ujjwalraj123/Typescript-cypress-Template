export const login_ohrnm = {
  e: {
    userName: () => cy.get('input[name="username"]'),
    password: () => cy.get('input[name="password"]'),
    submit: () => cy.contains('button', 'Login'),
    forgotPassword: () => cy.contains('p', 'Forgot your password?'),
    linkedin: () => cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]'),
    faceBook: () => cy.get('a[href="https://www.facebook.com/OrangeHRM/"]'),
    twitter: () => cy.get('a[href="https://twitter.com/orangehrm?lang=en"]'),
    youTube: () => cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]'),
    invalidCredential: () => cy.contains('p', 'Invalid credentials'),
    requiredErrorMessage: (pName: string) =>
      cy.xpath(`//input[@name="${pName}"]//following::span[text()="Required"]`),
  },
  userNameClick() {
    return this.e.userName().click();
  },
  linkedinClick() {
    return this.e.linkedin().click();
  },
  faceBookClick() {
    return this.e.faceBook().click();
  },
  twitterClick() {
    return this.e.twitter().click();
  },
  youTubeClick() {
    return this.e.youTube().click();
  },
  passwordClick() {
    return this.e.password().click();
  },
  submitClick() {
    return this.e.submit().click();
  },
  forgotPasswordClick() {
    return this.e.forgotPassword().click();
  },
};
