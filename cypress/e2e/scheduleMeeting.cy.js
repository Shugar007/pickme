import {scheduleMeeting} from "../fixtures/selectors"
const access = require("./validLogin");
describe("Schedule a meeting Functionalities", function(){
    beforeEach(function () {
        cy.visit("/")
        access.validLogin();
    });
    it("Schedule a meeting", function(){
        cy.wait(5000)
        //cy.get(scheduleMeeting.findPRO).click()
        cy.get(scheduleMeeting.viewPRO).click()
        cy.get(scheduleMeeting.proCard).click()
        cy.get(scheduleMeeting.scheduleMeetingBtn).click()
        cy.get(scheduleMeeting.talkAboutField).type("Climate change")
        cy.get(scheduleMeeting.participantsDrpdwn).type("dami@gmail.com").type('{enter}')
        //cy.get(scheduleMeeting.noOfParticipants).click()
        cy.get(scheduleMeeting.continueBtn).click()
        cy.get(scheduleMeeting.durationDrpdwn).click()
        cy.get(scheduleMeeting.duration).click()
        cy.get(scheduleMeeting.datePicker).click()
        cy.get(scheduleMeeting.timePicker).click()
        cy.get('.Schedule_duration_list__P_r1k > :nth-child(1)').click()
        cy.get(scheduleMeeting.schedleMeetingx).click()
        cy.wait(5000)
        cy.get(scheduleMeeting.cardPayment).click()
        
    })
    
})