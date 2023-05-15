Application link: http://books-store-webapp.s3-website.us-east-2.amazonaws.com/

Initially, I had set up the basic react project using this command

npx create-react-app my-app

#App running
After the setup of the sample react project it will run on the localhost:3000 port

#Building of Two Screens
App component is the main component we all see on the screen. I had created two components for viewing the books and other one is a form in which it takes the user eneterd details and store it in the database

#Navigation Between the Screens
I had used react-router-dom for navigations between the screens(BookStore Screen and AddBook Screen). The add book button will navigate us to AddBook screen and go back button will navigate us to BookStore screen 

#Backend and creation of API's
I had used express js for creation of API's. I had created two api's one is for getting the book details(path=/) and other one for posting the new book details that we want to add(path=/add-book) which runs on 3002 port. To work on the database using API's, the backend is connected with database using createPool

#Mysql database
I had install MySQL software, which includes MySQL server and MySQL workbench. I had created outcomes_database in which books schema is present. the MySQL server runs on 3306 port(which is a default port in MySQL server)

#integration with backend and database
I had integrated frontend with backend and this backend is connected with the mysql database. The two api's I created will perform Create and Read Operations on the table books on which the schema is present in the database(outcomes_database).


#Working of BookStore component
I had make use of Axios to make a http call. The BookStore component is rendered, firstly it makes a get request using Axios and after the successful response, the books data is rendered on the Screen. There is Add book button which is used to add the new book details, when we click on this button it is navigated to other screen and AddBook component is rendered.

#Working of AddBook component
It will alert us when we are going to submit the details without filling the input fields. After filling all the input fields then it shows the alert dialog box that we added the book details successfully. There is a go back button to redirected to the book store screen. When we click on it, the bookstore screen will be rendered. The book we added will be present in the books table data, so that it will render on the screen
