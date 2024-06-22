
# Tasty Twist Kitchen

Tasty Twist Kitchen is a full-featured food web application that allows users to browse a menu, filter food items, add items to their cart, and place orders using a dummy Stripe integration. Users can also view their order history. The application includes an admin panel where administrators can manage food items, view and update order statuses, and access detailed analytics about orders and users.

## Features

### User Features
- **Filter Food by Menu**: Users can filter food items based on different categories.
- **Add to Cart**: Users can add food items to their cart.
- **View Cart**: Users can view the items in their cart.
- **Place Orders**: Users can place orders using a dummy Stripe integration.
- **Order History**: Users can view their order history.

### Admin Features
- **Add Food**: Admins can add new food items to the menu.
- **View All Orders**: Admins can view all orders placed by users.
- **Update Order Status**: Admins can update the status of any order.
- **Analytics**: Admins can view total orders, last month's orders, total users, last month's users, and the top order-making users.

### General Features
- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **JWT Authentication**: The application uses JSON Web Tokens (JWT) for secure authentication.
- **Middleware**: Custom middleware is used for various functionalities, including authentication and authorization.
- **Tech Stack**: The application is built using the MERN (MongoDB, Express, React, Node.js) stack.
- **Styling**: Tailwind CSS and Flowbite are used for styling and component libraries.
- **Admin Dashboard**: The admin panel includes features for managing the application and viewing analytics.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Flowbite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Payments**: Stripe (dummy integration)

## Deployment
The application is deployed and can be accessed at: [Tasty Twist Kitchen](https://food-application-web-tios.onrender.com/)

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/techjmi/food-web
   cd tasty-twist-kitchen
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

### Running the Application

1. Start the backend server
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server
   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

- **User**: Sign up or log in to browse the menu, add items to the cart, and place orders.
- **Admin**: Log in with admin credentials to access the admin panel, add new food items, view and update orders, and see detailed analytics.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
