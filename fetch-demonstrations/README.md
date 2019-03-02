# Fetch demonstrations
This project is used to demonstrate how to use fetch in your components. There are two ways which we are going to store the data: via context and within the root component e.g. App

## How to run

1. ``` npm install ```
2. ``` npm start ```
3. The application will open a new browser window

_This project was created using npx create-react-app_

## Assignment

1. Take a look around the project and see how things work
2. Let's make the App component be the keeper of the data, so it needs to pass it via props
3. Let's encapsulate the remote calls in a service instead, so the component doesn't need to know everything about how to make this remote call
4. Substitute the call within the componentDidMount lifecycle method in App with the service call instead
5. Let's improve this and store the list via the context
6. Make the ListView a consumer
7. Activate the delete symbol on each list view item, which should delete this particular item from the list
8. Add another ListView, so we can see that they are both in sync
