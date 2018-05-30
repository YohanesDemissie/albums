#Initialize project
react-native init 'project name'
Once initialization completes
react-native run ios

#App.js 
component will mount function is how we are connecting our application to firebase

#React
responsible for the UI and what the user sees

#Redux
responsible for state and how the user interacts with Reacts visible components
We want to make our components as simple and minimal memory/runtime while having REDUX do all the heavy lifting

#Login Form.js
Handles the input forms/ui and state change on user interface through imported "ACTIONS"

#Actions Folder
Helps handle state on complex applications like this one "onChageEmail(Text)"

#Reducer
defines the type of change and what actions should change state "Actions Type"

#Redux-Thunk
is a middleware to the redux application through redux library we've imported called 'applyMiddleware'

#Action Creator Rules with Thunk
action creators are functions
must return an action OR must return a function
action is an object with a 'type' property OR functions will be called with 'dispatch'

#Eslint Configurations!!
checkout lesson 15, lecture 112 at 1 minute and 30 seconds

