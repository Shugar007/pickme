import {wallet} from "../fixtures/selectors"
const access = require("./validLogin");
describe("Schedule a meeting Functionalities", function(){
    beforeEach(function () {
        cy.visit("/")
        access.validLogin();
    });
    it("topup wallet flow", function(){
        //cy.get(wallet.findPRO).click()
        cy.get(wallet.walletMenu).click()
        cy.get(wallet.topUpBtn).click()
        cy.get(wallet.amountField).type(wallet.amount)
        cy.get(wallet.paymentMethod).click()
        cy.get(wallet.payWithFlutterBtn).click()
        
    })
    it.only("withdraw wallet flow", function(){
        //cy.get(wallet.findPRO).click()
        cy.get(wallet.walletMenu).click()
        cy.get(wallet.withdrawBtn).click()
        cy.get(wallet.wireTransferSetup).click()
        cy.get(wallet.wireCountry).type("nigeria")
        cy.get('.Select_ul__gxyvI > li').click()
        //cy.get(wallet.selectedCountry).click()
        cy.get(wallet.SelectCurrency).click()
        cy.get('.Select_ul__gxyvI > :nth-child(1)').click()
        //cy.get(wallet.selectedCurrency).click()
        cy.get(wallet.selectBank).click()
         cy.get('.Select_ul__gxyvI > :nth-child(2)').click()
         cy.get(wallet.nextBtn).click()
        //cy.get(wallet.selectedBank).click()
        cy.get(wallet.accountNoField).click({ multiple: true }).type("1435798633")
    })

    
})