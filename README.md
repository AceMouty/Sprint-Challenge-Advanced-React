# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Why would you use class component over function components (removing hooks from the question)?
			
			I dont see a reason as to why you one would use a class over a functional component. Both solutions essentially do the same thing. The only difference is that with class components you have more raw control over you component than what you do with functional components because of the life cycle methods. Other than this both solutions are valid. Also the only time i would see using a class component over a funcitonal component would be if a company's architecture is class based and not functional based.

- [ ] Name three lifecycle methods and their purposes.

			render : render is used to render your UI to the DOM. When using react classes you MUST use this method to display your UI to the DOM.

			componentDidMount: componentDidMount is used for checking to see that your component has mounted to the DOM. Once it has generally you will do network request in here to get data from an API and do state assignment in here. This method fires after the render method has been completed.

			componentDidUpdate: componentDidUpdate is used when you want to do something based on state change OR change in props. When using componentDidUpdate you need to do some logical checking for specific pieces of state or props within your component. If the check passes you will do something like make another netwrok request. However if the check doesnt pass nothing will happen. You can have multiple checks in componentDidUpdate so that you can watch multiple things withing your component. 

- [ ] What is the purpose of a custom hook?
			
			With custom hooks we can create our own hook logic and use them anywhere. Its like components but for the logical part of things. The user will never see this. However these are poweful things. When creating custom hooks you are creating logical reusable tools that can do something specific for you based on state. Custom hooks use stateful logic. When using custom hooks it allows us to keep our components cleaner and more readable.

- [ ] Why is it important to test our apps?
			
			Testing our apps is important for many reasons some of them include...
			1. Gives us assurence
			2. Gives us confidence in what our code does before deploying
			3. Makes clients comfortable and affirms to them that our code is doing what they expect it to be doing
			4. Helps us identify bugs faster

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `yarn` to download dependencies.
- [ ] Run the server using `yarn start` or `node server.js`.
- [ ] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [ ] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write integration tests for your React components

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
