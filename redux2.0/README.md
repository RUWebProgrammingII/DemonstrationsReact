# Redux

## Project 1
Create an application which has four components: App, Header, CounterWrapper, Counter. App should render CounterWrapper and CounterWrapper should render Counter. Header should only contain an empty <nav></nav> at first. CounterWrapper should contain a <div class="container"></div> and render this.props.children. Counter should be a stateful component which has a single state property called _counter_ which should be initialized as 0. It also should contain a <p></p> which renders the state _counter_ and a button which increments the state property by 1, each time it is pressed.

## Project 2

npm install react-redux redux and start setting up Redux for this project.

    1. Start by creating a reducer which should have an initial state of 0 and define a case for INCREMENT which should return a new state incremented by the payload.

    2. Then create an action creator which accepts an argument called number and return an object which has the type INCREMENT along with a payload for number.

    3. Setup the Provider along with the createStore in the root component (App)

    4. Pass in the reducer as the first argument to createStore

    5. Let's import the newly created action to the Counter component and make him a container component which uses Redux. This is done by using the connect function implemented by react-redux

    6. Now instead of only incrementing the state property by 1, we want to dispatch the action with the same value.

    7. Let's console.log the number inside the action creator and inside the reducer

    8. Now let's make the Header a container component as well using Redux. Implement a function called mapStateToProps which takes as a first argument the store state and return an empty object. Add this function as the first parameter to the connect function. Console.log the state

    9. Instead of returning an empty object in the Header return an object containing the store state.

    10. Console.log(this.props) within the Header and press the button in the Counter component

    11. Now display this.props.counter in the Header and press the button a several times

## Project 3
Let's rename our reducer to counterReducer and create another called userReducer. The userReducer should have an initial state of an empty object

    1. nameReducer should accept CHANGE_USER which accepts a payload:
        { name: '', age: 0 };

    2. Create an action creator called changeUser which accepts a name and age as parameters and returns an object:
        {
            type: CHANGE_USER,
            payload: { name, age }
        }

    3. Create a new file called reducers.js which uses combineReducers to export both reducers as one

    4. Change App.js to use the combined reducers instead of counterReducer

    5. Try using the counter button and see the error

    6. Fix the error by changing how the state is accessed

    7. Create a new component called Name which should be rendered below Counter. The Name component should be a stateful component and contain a name and age within the state and implement a form containing two input tags for the name and age and update the state accordingly

    8. When the submit button in the Name component is pressed it should dispatch the new changeUser action

    9. Console.log within the changeUser action and userReducer

    10. Let's get this data through the mapStateToProps function in the Header component

    11. Console.log(this.props) in Header component

    12. Display this new data in the header as well

## Project 4
Let's create another reducer called weatherReducer. He should have an initial state of 0. Let's npm install redux-thunk. Use applyMiddleware for setup

    1. weatherReducer should accept GET_CURRENT_DEGREE which accepts a payload, which is a single number and should return this number as the new state

    2. Create an async action creator called getCurrentDegree which contains no arguments and it calls a function getCurrentDegree in the weatherService which returns a promise, which should be resolved by using then(), within that function it should dispatch getCurrentDegreeSuccess with the data received from the weatherService.getCurrentDegree function

    3. Let's create an action creator called getCurrentDegreeSuccess which contains a single argument called currentDegree and returns an object
        {
            type: 'GET_CURRENT_DEGREE',
            payload: currentDegree
        }

    4. Let's add this new weatherReducer to reducers.js

    5. Now import the new async action getCurrentDegree and when the App component mounts call it.

    6. Let's console.log what is going on within the async action creator, normal action creator and reducer

    7. Add these changes to mapStateToProps within the Header component

    8. Now console.log(this.props) within the render() function in the Header component

    9. Add this data to the Header components JSX
