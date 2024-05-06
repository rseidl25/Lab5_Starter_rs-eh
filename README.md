# Lab 5 - Starter
### Lab Members:
* Ryan Seidl
* Elijah Hosaka

### Check Your Understanding:
1. No, you would not use a unit test to test the "message" feature of a messaging application. This feature would likely be testing how the individual user components interact with each other on an application level, so unit testing would be unable to sufficiently test this functionality.
2. Yes, you would use a unit test to test the "max message length" feature of a messaging application. This feature is a part of the individual user component, and it can easily be tested on a small scale since it does not involve many moving parts. The unit test can simply test whether or not a message containing over 80 characters was sent successfully.
