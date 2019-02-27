## Project 1
In this project we are going to create a simple React application for a company called Pro Gamers. Their application should include a navigation bar which contains three anchors to Top 10 Games, News and About. The initial page should be News and the other anchors are only for display because routing should NOT be implemented in this project. In the News section there should be a title, a search feature which can search through within the news and a filter depending on the category. Each news item within the list should have a title, short description and a category. The project should be structured in a modular manner. All news data are within the state of MainContent

## Project 2

### Routing
We are going to expand on our project and create the NavigationBar which uses routing in the application. We are going to define three routes: News, Top 10 Games, About. The main site should be News (/). Use dynamic links for all the items in the News section, define a dynamic route based on the id.

Also add dynamic links when a news item is pressed, it should return a detailed view.

The components Top 10 Games and About are provided.

### PropTypes
We are going to expand on our project and introduce good practices when defining components in React. The expansions is to define PropTypes for all our components who receive props. Also make use of defaultProps where they make sense.

### Context
Introduce a global user within the application. It can be hard-coded for now. The App should hold on to the user and display it within the navigation bar and also the footer (which needs to be created). Within the footer we should also add a button which you can click on to change the global user.

Now let's create another context which introduces a dark and light theme. This should change the navigation bar and footer to dark/light theme. There should be a button within the footer that can toggle these values.

## Project 3
Now the guys from Pro Gamers really need our help! They are offering to send exclusive deals to their customers and want to provide a form to register the user to this service. We of course need to make sure the data is correct and garbage can't be sent from this form. Therefore we need to implement some form validation mechanism. We should display a toaster if the form is successfully submitted and the form should be cleared from all it's previous inputs. The component should console log the form data if the data is successfully provided.

Offer a selection of country, region and city which uses remote data. Use countryService to provide information for the country, region and cities

The data to provide is the following:
    * Full name
    * Telephone
    * Email
    * Country, region and city
    * Address
    * Submit button
