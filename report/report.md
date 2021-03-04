# Report

## URL to instance

- https://www.bretteckert.me/pr/
- Log in to content@test.com with password: passpass there is a default account with data for the TA to test and look at.

## Introduction
- Group Name: Code Monkeys
- Group Members:
  - Brett Eckert
  - Adrian Atanasov
  - Jessie Murphey
- Our app is a simple PR app that allows users to save their Personal Records. To use the app you must first register an account and then login. All PRs will be saved to that account. Users can add PRs using the button in the top right of the home page. View detailed information on their PR by selecting the PR on the home page. They can also select to edit the information of that PR or delete it. The application was built using ionic, so it can easily work on mobile devices aswell as the web. In addition because the application is cross platform and uses firebase for data storage the user will have their data be consistent across multiple platforms, such as being able to edit their personal records on both their phone and the web.

## Problem
There are no decent PR apps that are flexible, crossplatform, and for universal fitness. Most are very specific and bug ridden and have paywalls. 

## Solution
The solution is an app that is for universal fitness with many different types of PR's, works cross platform and has a great user experience with enough functionality to keep the user happy. 
## Related Work
https://www.sugarwod.com/athlete-coach-download<br>
https://app.romwod.com/<br>
https://beyondthewhiteboard.com/<br>
https://play.google.com/store/apps/details?id=com.stephanson.wodsterm.app&hl=en_US&gl=US<br>
Our app is different from the apps listed above because all of these apps are very specific for crossfit which limits the userbase and at the same time all of them are behind paywalls which limits the userbase even more. Meanwhile, our app will be free, it will have simple features but at the same time eventually the metrics will rival the metrics of the paid apps.
## Implementation

### Technologies

- **Ionic:** Used the Ionic framework to create the application, so it could be used on both mobile devices and the web. 
- **Angular:** Used angular within the application to work with firebase and design the application using MVC structure.
- **Firebase:** Used Firebase for user authentication and firestore. Users can create an account, login and save data that is linked to their user account.
- **AWS:** Used Amazon Web Services to host the application.

### Work Divided

#### Brett Eckert
Implemented the firebase login pages to allow users to register and login to a page. Implemented alert boxes to give feedback to user actions. Implemented the delete functionality for PRs. Implemented authentication guards to prevent URL hacking. Additionally, assissted in overall debugging and error correction. Put the ionic app on the server and tested the application on Android.  

#### Adrian Atanasov
I implemented the create to add to firestore. I also implemented the backend function that pulls from firestore for all the PR's as well as the individual PR's. Furthmore, I also implemented the calculated percentages table for each of the PR's on the details page as well as updated the UI for the details page to be able to work with observables.

#### Jessie Murphey
Implemented the edit functionality for the personal records and added the edit personal record form page. I added the swipe functionality to the home page PR items so that the user can swipe to the left to open up buttons to select edit or delete for that personal record. I helped format the look of the user interface using ionic components and css/scss to make the UI look more professional.

### Grading Criteria Met

- Authentication: The loginform and registerform utilize OAuth with firebase to sign in, register, and the app routing module prevents URL hacking using authguards.
- Architecture: Our data service and auth service handle on functions on the data and users. Each page has a controller that uses these services to call functions on the data.
- Persistent: Firestore keeps all data persistent even after refreshing or signing out.
- Security: Our AWS server uses https and in app-routing module there is auth guards to prevent URL hacking
- Responsive: Our application works properly with many different screen sizes on both mobile and desktop.
- Content: If you log in to content@test.com with password: passpass there is a default account with data for the TA to test and look at.
- Error Handling: There are reactive forms on the login, register, editPR, and prForm pages. Each form error checks for some input. Emails check to make sure they are in email format and passwords are checking to be 8 characters long. If there is an error in how the user tries to submit the form they won't be able to submit the form. Additonally, whenever an action is performed on the data the user gets a pop up confirming that the action takes place to give them feedback.
- Publicly Viewable: Hosted on AWS
- Overall Purpose: Our app solves the problem of there not being a clean solution to saving workout PRs and providing users with a simple and user friendly interface to do that on mobile devices, so it can be easily used while working out.
- Data Collection: The app collects login data and PR data that is stored in google firestore.

## Knowledge Gained

- Authentication guards can be easily implemented in a few lines of code in the routing module using AngularFireAuthGuard.
- Observables allow the data to stay updated on different parts of our application to handle asynchronous calls that we do to firestore that change the data.

## Future Work
- Adding Single Sign On capability to the registration and login for the application, e.g. registering/signing in with Google, Facebook, Github, ect.
- Adding a custom personal record type for the user to enter.
- Adding additional personal record types, such as for running, walking, and swimming, that would include distance and time as records

## Screenshots

### Login/Register Page
![](../screenshots/login_register_page.png)

On this page the user selects whether they want to login or register.

### Register Page
![](../screenshots/register_page.png)

On this page the user enters their name, email, and password to register. The email is checked to be an email and the password must be 8 characters long. They are then sent to the login page to login.

### Login Page
![](../screenshots/login_page.png)

On this page the user logs into their account with their email and password.

### Home Page
![](../screenshots/home_page.png)

On this page the user can see all their prs and click on them for more information.

### PR Page
![](../screenshots/pr_page.png)

On this page the user can view information on their pr, select to edit/delete it, and view a table showing the percentage of weights that is useful for working out.

### Add PR Page
![](../screenshots/addpr_page.png)

On this page the user inputs information on their PR and it is added to their list of PRs.

### Edit PR Page
![](../screenshots/edit_page.png)

The user can edit a current PR with new information when traveling to this page the information is already filled in with the current data for the PR.

### Delete
![](../screenshots/delete.png)

When the user selects delete they must confirm the selection.

### Emulator
![](../screenshots/emulator.png)
![](../screenshots/emulator2.png)

These screenshots demonstrate what the app would look like on the Pixel 4 using an emulator.
