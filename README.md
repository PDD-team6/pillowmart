# 🛍️ PillowMart

**PillowMart** is a web-based e-commerce platform designed for selling pillows and related products. The project encompasses a full-stack implementation, featuring a responsive frontend, backend integration, and database support.

## 📦 Features

* **Product Browsing**: Users can explore a variety of pillow products with detailed descriptions and images.
* **Shopping Cart**: Add, remove, and modify items in the shopping cart.
* **User Authentication**: Secure login and registration functionalities.
* **Checkout Process**: Streamlined checkout with order confirmation.
* **Contact Form**: Users can reach out via a contact form, with backend processing handled by PHP.
* **Responsive Design**: Ensures optimal viewing across devices.

## 🛠️ Technologies Used

* **Frontend**:

  * HTML5, CSS3, JavaScript
  * SASS for advanced styling
  * Responsive design principles
* **Backend**:

  * PHP for form processing
  * Node.js for server-side operations
* **Database**:

  * MySQL, with schema defined in `database.sql`
* **DevOps**:

  * Docker for containerization
  * GitHub Actions for CI/CD workflows

## 📁 Project Structure

```

pillowmart/
├── .github/workflows/      # CI/CD workflows
├── css/                    # CSS stylesheets
├── fonts/                  # Custom fonts
├── img/                    # Image assets
├── js/                     # JavaScript files
├── node_modules/           # Node.js dependencies
├── sass/                   # SASS files
├── shop_doc/               # Project documentation
├── webfonts/               # Web font files
├── Dockerfile              # Docker configuration
├── LOGO.png                # Project logo
├── README.md               # Project documentation
├── about.html              # About page
├── application.js          # Main application script
├── blog.html               # Blog page
├── cart.html               # Shopping cart page
├── checkout.html           # Checkout page
├── confirmation.html       # Order confirmation page
├── connect.js              # Database connection script
├── contact.html            # Contact page
├── contact_process.php     # Contact form processing
├── database.sql            # Database schema
├── elements.html           # UI elements page
├── index.html              # Homepage
├── index.js                # Entry point script
├── login.html              # Login page
├── main.html               # Main layout
├── package-lock.json       # NPM lock file
├── package.json            # NPM configuration
├── payment.css             # Payment page styles
├── payment.html            # Payment page
├── product_list.html       # Product listing page
├── products.json           # Product data
├── query.js                # Query handling script
├── readme.txt              # Additional documentation
├── single-blog.html        # Single blog post page
├── single-product.html     # Single product detail page
├── thankyou.html           # Thank you page post-purchase
```



## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed
* [Docker](https://www.docker.com/) installed (optional for containerization)
* [MySQL](https://www.mysql.com/) installed

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PDD-team6/pillowmart.git
   cd pillowmart
   ```



2. **Install dependencies**:

   ```bash
   npm install
   ```



3. **Set up the database**:

   * Create a MySQL database.
   * Import the `database.sql` file to set up the schema.

4. **Configure environment variables**:

   * Create a `.env` file and add necessary configurations (e.g., database credentials).

5. **Run the application**:

   ```bash
   node index.js
   ```



* Access the application at `http://localhost:3000`.

### Using Docker (Optional)

1. **Build the Docker image**:

   ```bash
   docker build -t pillowmart .
   ```



2. **Run the Docker container**:

   ```bash
   docker run -p 3000:3000 pillowmart
   ```

* Access the application at `http://localhost:3000`.
