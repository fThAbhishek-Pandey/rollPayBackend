### Salary Management System API Documentation
vecel deploy url
```bash
     https://rollpay.onrender.com
```
#### **1. Admin Login Route**
base url
```bash
    https://rollpay.onrender.com/admin
```
- **Endpoint:** `/login`
- **Method:** `GET`
- **Description:** This route is used for logging in an admin user to the system. 
- **Response:**
  - **200 OK:** Successfully logged in.
  - **401 Unauthorized:** Incorrect login credentials.

#### **2. Test Route (Protected)**
- **Endpoint:** `/test`
- **Method:** `POST`
- **Description:** This is a protected route to test the authentication and middleware functionality.
- **Middleware:** `authAdmin` - Ensures that the user is authenticated as an admin.
- **Response:**
  - **200 OK:** Request successful.
  - **401 Unauthorized:** Admin authentication required.

#### **3. Add Doctor Route (Protected)**
- **Endpoint:** `/add-doctor`
- **Method:** `POST`
- **Description:** This route allows the admin to add new doctors to the system. Doctors are considered employees in this context.
- **Middleware:** `authAdmin` - Ensures that only authenticated admin users can access this route.
- **Request Body:**
  - `name`: Doctor's name (string)
  - `department`: Doctor's department (string)
  - `salary`: Doctor's salary (number)
  - Any other necessary details about the doctor
- **Response:**
  - **200 OK:** Doctor successfully added.
  - **401 Unauthorized:** Admin authentication required.
  - **400 Bad Request:** Invalid or missing doctor details.

#### **4. Receipt History Route (Protected)**
- **Endpoint:** `/reciept-history`
- **Method:** `GET`
- **Description:** Fetches the salary receipt history for all employees. Only admins can access this data.
- **Middleware:** `authAdmin` - Ensures that the request comes from an authenticated admin.
- **Response:**
  - **200 OK:** Returns the receipt history.
  - **401 Unauthorized:** Admin authentication required.

#### **5. Test Mail Route (Protected)**
- **Endpoint:** `/testmail`
- **Method:** `POST`
- **Description:** Allows admins to send test emails from the system.
- **Middleware:** `authAdmin` - Ensures the user is an authenticated admin.
- **Request Body:** 
  - `email`: Recipient email address (string)
  - `message`: Message body (string)
- **Response:**
  - **200 OK:** Mail sent successfully.
  - **401 Unauthorized:** Admin authentication required.
  - **400 Bad Request:** Invalid email format or missing fields.

---
### Salary Management System: Co-admin Routes API Documentation

base url 
```bash 
    https://rollpay.onrender.com/coadmin
```

#### **1. Co-admin Login Route**
- **Endpoint:** `/login`
- **Method:** `GET`
- **Description:** This route is used for logging in a co-admin user to the system.
- **Response:**
  - **200 OK:** Successfully logged in.
  - **401 Unauthorized:** Incorrect login credentials.

#### **2. Co-admin Test Route (Protected)**
- **Endpoint:** `/test`
- **Method:** `POST`
- **Description:** This route is used to test the co-admin's authentication and middleware functionality.
- **Middleware:** `authCoAdmin` - Ensures the user is authenticated as a co-admin.
- **Response:**
  - **200 OK:** Authentication successful, request processed.
  - **401 Unauthorized:** Co-admin authentication required.

#### **3. Add Salary Receipt Route (Protected)**
- **Endpoint:** `/reciept`
- **Method:** `POST`
- **Description:** This route allows co-admins to add salary receipt details to the system.
- **Middleware:** `authCoAdmin` - Ensures that only authenticated co-admins can access this route.
- **Request Body:**
  - `employeeId`: The unique identifier of the employee (string)
  - `salaryAmount`: The salary amount (number)
  - `date`: The date of the receipt (date format)
  - Any additional details related to the salary receipt
- **Response:**
  - **200 OK:** Salary receipt details added successfully.
  - **401 Unauthorized:** Co-admin authentication required.
  - **400 Bad Request:** Invalid or missing data in the request body.

---
### Salary Management System: General Routes API Documentation

#### **1. Get All Employees Route**
- **Endpoint:** `/all-employees`
- **Method:** `GET`
- **Description:** This route fetches the list of all employees in the system.
- **Response:**
  - **200 OK:** Returns an array of employee details (e.g., name, department, salary, etc.).
  - **500 Internal Server Error:** If there is an issue retrieving the employee data.

---

This route allows access to employee data and is not protected by any authentication middleware.