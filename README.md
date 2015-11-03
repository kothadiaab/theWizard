
The Wizard is a application which creates different type of accounts according to the use cases.

Use Cases:

Overview

Create a step-by-step enrollment wizard. As the user completes steps, they become active and traversable. Depending on the decisions made in each step, the user will end up as one of three account types: Premium, Plus, Standard or Light and this should be reflected in the summary.

Requirements
1. The Data


• Assume the user is already authenticated and you have account data available via an API or bootstrapped.

• Pre-populate with at least username, first name, last name email and account type.

2. The Steps


Step One: Light

The user must confirm their username, first name last name and email pre-populated from the bootstrapped data. If they go to the Conclusion from here, they’re a Light account.


Step Two: Standard

The User must opt into becoming a Plus account type. Once the user opts in, they become a standard account and step 3 becomes available. If they previously opted in, then opt out, the user goes back to a Light account.


Step Three: Plus

Provide a list of interests to choose from. If three or fewer items are selected, the user remains a Standard account type. If four or more are selected, then the user becomes a Plus account and step four becomes enabled.


Step Four: Premium

This should contain an opt-in for premium features. If they user does not opt in, they remain a Plus user.

3. The Summary

• The user is shown their account type along with a summary of the entered information from the previous steps.

• The summary should be either always visible or visibility toggled into view at the same time as the steps. 


Configuration Setup:

The project has a db.json file which is on json server in order for this application to work you will have to:
a.Install npm
b.Install json server
c.On command prompt: json server-db.json(This will up the server on your local machine)
d.User username : "admin" or "akshaygo"