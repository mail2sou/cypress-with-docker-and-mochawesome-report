import './commands'

//below import is for embedding the failed screenshots into the output.html
import addContext from "mochawesome/addContext"

//below method is for embedding the failed screenshots into the output.html
Cypress.on("test:after:run",(test,runnable) => {
    if (test.state === "failed") {
        //screenshot is dynamically created and embedded to the report
        const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
        addContext({ test }, screenshot)
    }
})