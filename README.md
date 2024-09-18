# Stock Management App

## Demo
https://stock-management-5cwdan50f-ayses-projects-fcb4296c.vercel.app/

## Project Gif

![stock-management-app](https://github.com/user-attachments/assets/3406a15d-541e-46c5-b878-8f52509bde45)

## Project Purpose

The Stock Management App is designed to help businesses manage their stock, including products, purchases, sales, and key performance indicators (KPIs). It includes user authentication, data management through Redux, a responsive UI, and real-time notifications using Toastify. This project enhances skills in React, Redux Toolkit for state management, Material UI and Tailwind CSS for styling, DataGrid for handling large data tables, and React Router for navigation.

## Project Structure

```plaintext
stock-management-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   └── store.jsx
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Cards/
│   │   │   ├── BrandCard.jsx
│   │   │   └── FirmCard.jsx
│   │   ├── Modals/
│   │   │   ├── BrandModal.jsx
│   │   │   ├── FirmModal.jsx
│   │   │   ├── ProductModal.jsx
│   │   │   ├── PurchaseModal.jsx
│   │   │   └── SaleModal.jsx
│   │   ├── Tables/
│   │   │   ├── ProductTable.jsx
│   │   │   ├── PurchaseTable.jsx
│   │   │   └── SaleTable.jsx
│   │   ├── AuthHeader.jsx
│   │   ├── AuthImage.jsx
│   │   ├── Charts.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── KpiCards.jsx
│   │   ├── LoginForm.jsx
│   │   └── MenuListItem.jsx
│   ├── features/
│   │   ├── authSlice.jsx
│   │   └── stockSlice.jsx
│   ├── helper/
│   │   └── ToastNotify.js
│   ├── hooks/
│   │   ├── useAuthCall.jsx
│   │   ├── useAxios.jsx
│   │   ├── useStockCall.jsx
│   │    
│   ├── pages/
│   │   ├── Brands.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Firms.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Products.jsx
│   │   ├── Purchases.jsx
│   │   └── Sales.jsx
│   ├── routers/
│   │   ├── AppRouters.jsx
│   │   └── PrivateRouter.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── yarn.lock


## Project Features

- **User Authentication**: Managed through the authSlice and secure routes using PrivateRouter.
- **Stock Management**: Users can manage products, purchases, sales, and firms. This includes adding, editing, and removing records.
- **Data Visualization**: Dashboard with KPIs, charts, and visual representation of stock data.
- **Tables for Data Management**: DataGrid is used for viewing and managing large datasets, such as products and sales.
- **Toast Notifications**: Provides real-time feedback for user actions using Toastify.
- **State Management**: Global state is handled through Redux Toolkit, with slices for authentication and stock data.
- **Routing**: React Router DOM manages the application's navigation, with route protection for authenticated users.
- **Responsive Design**: The app is fully responsive, with styles built using Tailwind CSS and Material UI components.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Redux Toolkit**: For managing global state.
- **Vite**: A fast build tool for development.
- **Material UI (MUI)**: Provides a robust component library following Material Design principles.
- **Tailwind CSS**: Utility-first CSS framework for building responsive layouts.
- **Toastify**: For displaying notifications to users.
- **Axios**: For handling HTTP requests to the backend API.
- **DataGrid**: A highly flexible table component for handling large datasets.
- **React Router DOM**: For handling navigation and protected routes.
- **JavaScript ES6+**: Utilizes modern JavaScript syntax and features for better performance and readability.

## API

The app connects to backend APIs for fetching stock, sales, and purchase data. Example endpoints:

- **GET Products**
- **POST Sale**

## Outcome

Through this project, I improved my skills in:

- Building scalable applications with **Redux Toolkit** for state management.
- Utilizing **MUI and Tailwind CSS** for responsive and attractive designs.
- Handling real-time **user feedback** with Toastify notifications.
- Managing complex data with **DataGrid** components.
- Implementing **protected routes** using React Router.

<p align="center"> 📝 Happy Coding! 🚀 </p>
