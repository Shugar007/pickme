//import { describe } from "mocha";
//const { profile } = require("../fixtures/selectors");
const access = require("./validLogin");
//import { before } from "cypress/types/lodash";
//import { it } from "mocha";
import {profile} from "../fixtures/selectors"

//import cypress from "cypress";
//import { it } from "mocha";

describe("Profile Functionalities", function(){
    beforeEach(function () {
        cy.visit("/")
        access.validLogin();
        
    })
    it("Edit profile", function(){
        cy.get('.Layout_sidebar_top__Gm_xC > div > a').click()
        cy.get(profile.editProfileBtn).click()
        cy.get(profile.nameField).clear().type("Patricia Jones", {force : true})
        cy.get(profile.selectGender).click()
        cy.get(profile.gender).click()
        cy.get(profile.bioField).type("cool and nice")
        cy.get(profile.selectCountry).click()
        cy.get(profile.country).click()
        cy.get(profile.websiteLinkField).type("www.dami.com")
        cy.get(profile.saveChanges).click()



    })
    it("Edit social link", function(){
        cy.get('.Layout_sidebar_top__Gm_xC > div > a').click()
        cy.get(profile.editSocialink).click()
        cy.get(profile.facebookSocial).type("https://www.facebook.com/ai/dammytester.com")
        cy.get(profile.saveSocialinkBtn).click()
    })
    it("Edit industries", function(){
        cy.get('.Layout_sidebar_top__Gm_xC > div > a').click()
        cy.get('.Profile_profile_main__0KQDK > :nth-child(9)').click()
        //cy.get('.Select_select_input__DHzpC').click()
        //cy.get(profile.selectIndustry).click()
        //cy.get(profile.industrySelect).click()
        //cy.get(profile.saveIndustryChanges).click()
    })
    /*it("Edit Interest ", function(){
        cy.get(profile.editInterestLink).click({force : true})
        cy.get(profile.interestField).click()
        cy.get(profile.selectInterest).click()
        cy.get(profile.saveInterest).click()
    })
    it("Edit Experience", function(){
        cy.get('.Layout_sidebar_top__Gm_xC > div > a').click()
        cy.get(profile.editInterestLink).click()
        cy.get(profile.addExperience).click()
        cy.get(profile.roleField).type("software tester")
        cy.get(profile.companyField).type("Pickt inc")
        cy.get(profile.startDateDrpdwn).click()
        cy.get(profile.startMonth).click()
        cy.get(profile.startYearDrpdwn).click()
        cy.get(profile.startYear).click({ multiple: true })
        cy.get(profile.presentCheckbox).click()
        cy.get(profile.addExperienceBtn).click()
    })*/

})