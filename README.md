# Stock Management App (Full-Stack Project)

## Demo

https://stock-management-5cwdan50f-ayses-projects-fcb4296c.vercel.app/

## Project Gif

![stock-management-app](https://github.com/user-attachments/assets/3406a15d-541e-46c5-b878-8f52509bde45)

## Project Purpose

The Stock Management App is a comprehensive solution to help businesses manage their stock, including products, purchases, sales, and key performance indicators (KPIs). It features user authentication, data management through Redux, a responsive UI, and real-time notifications using Toastify. This project showcases skills in React, Redux Toolkit, TypeScript, and integration with a Node.js backend.

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
```

## Project Features

- **User Authentication**: Managed through the authSlice and secure routes using PrivateRouter.
- **Stock Management**: Users can manage products, purchases, sales, and firms, including adding, editing, and removing records.
- **Data Visualization**: Dashboard with KPIs, charts, and visual representation of stock data.
- **Tables for Data Management**: DataGrid is used for viewing and managing large datasets, such as products and sales.
- **Toast Notifications**: Provides real-time feedback for user actions using Toastify.
- **State Management**: Global state is handled through Redux Toolkit, with slices for authentication and stock data.
- **Routing**: React Router DOM manages the application's navigation, with route protection for authenticated users.
- **Responsive Design**: Fully responsive UI styled with Tailwind CSS.

## Technologies Used

### Frontend:

- **ReactJS**: For building the user interface.
- **Redux Toolkit**: For managing global state.
- **Vite**: A fast build tool for development.
- **Tailwind CSS**: Utility-first CSS framework for building responsive layouts.
- **Toastify**: For displaying notifications to users.
- **Axios**: For handling HTTP requests to the backend API.
- **DataGrid**: A highly flexible table component for handling large datasets.
- **React Router DOM**: For handling navigation and protected routes.
- **TypeScript**: Adds type safety to the project.

### Backend:

The backend code is hosted in the `Stock-Api` repository and uses the following technologies:

- **Node.js**: Runtime environment.
- **Express.js**: Framework for building the API.
- **JWT (JSON Web Token)**: For authentication.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **Swagger**: For API documentation.
- **Redoc**: For enhanced API documentation presentation.

## API Documentation

- Swagger documentation is available at: [Stock-API Swagger Documentation](https://stock-api-fjml.onrender.com/documents/swagger/).

## Outcome

Through this project, I improved my skills in:

- Building scalable applications with **Redux Toolkit** for state management.
- Developing and integrating **secure APIs** with Node.js and Express.js.
- Implementing **real-time user feedback** with Toastify notifications.
- Managing complex data with **DataGrid** components.
- Designing and implementing **protected routes** using React Router.

<p align="center"> 📝 Happy Coding! 🚀 </p>
