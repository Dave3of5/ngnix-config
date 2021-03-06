## Got a question or problem?


Please, do not open issues for the general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [StackOverflow](http://stackoverflow.com/questions/tagged/angular-ui-layout) where maintainers are looking at questions questions tagged with `ui-layout`.

StackOverflow is a much better place to ask questions since:
* there are hundreds of people willing to help on StackOverflow
* questions and answers stay available for public viewing so your question / answer might help someone else
* SO voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.

## You think you've found a bug?

We want to fix it ASAP! But before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a _minimal_ reproduce scenario using http://plnkr.co/. Having a live reproduce scenario gives us wealth of important information without going back & forth to you with additional questions like:

* version of AngularJS used
* version of this library that you are using
* 3rd-party libraries used, if any
* and most importantly - a use-case that fails

A minimal reproduce scenario using http://plnkr.co/ allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem.

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal plunk. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

The best part is that you don't need to create plunks from scratch - you can use one from our [demo page](http://angular-ui.github.io/ui-layout/).

Unfortunately we are not able to investigate / fix bugs without a minimal reproduce scenario using http://plnkr.co/, so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced.


## You want to contribute some code?

We are always looking for the quality contributions and will be happy to accept your Pull Requests as long as those adhere to some basic rules:

* Please make sure that your contribution fits well in the project's context:
  * There should be no third party dependencies;
* Please assure that you are submitting quality code, specifically make sure that:
  * your PR has accompanying tests and all the tests are passing; don't hesitate to contact us (angular-ui@googlegroups.com) if you need any help with unit testing
  * your PR doesn't break the build; check the Travis-CI build status after opening a PR and push corrective commits if anything goes wrong
  * your commits conform to the conventions established [here](https://github.com/ajoslin/conventional-changelog/blob/master/conventions/angular.md)
  
  
# How To Get Started!

## Prepare your enviroment

Setting up the development enviroment for this project couldn't be easier, you'll need to have [Node.js](https://nodejs.org/en/) && NPM installed on your machine.

Once you have NPM installed you'll want to follow these simple steps:

 * Fork this projects repository
 * Clone it to your local machine
 * Install global dev dependencies: `npm install -g gulp karma bower`
 * Install local dev dependencies: `npm install` while current directory is ui-layout
 * Install bower dependencies: `bower install` while current directory is ui-layout

## Build 

* Build the project: `gulp build`

## Run Tests

* Run all tests continously `gulp continuousMode`
* Run all tests once `gulp karma`
* Run all tests and linter once `gulp default`