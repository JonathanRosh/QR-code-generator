QR Code Generator
A simple QR code generator built with Node.js and npm. This project allows users to input a valid URL, and it generates a QR code for that URL as a PNG file. This project is part of the Angela Yu's Web Development Bootcamp on Udemy.

Features
Input a URL via command-line prompt.
Generate a QR code in PNG format.
Save the QR code as qr-code.png.
Technologies Used
Node.js: JavaScript runtime for building server-side applications.
npm: Node package manager for managing dependencies.
inquirer: A library for creating interactive command-line prompts.
qr-image: A library for generating QR codes in various formats.
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/qr-code-generator.git
Navigate to the project folder:

bash
Copy
Edit
cd qr-code-generator
Install dependencies:

bash
Copy
Edit
npm install
Usage
Run the QR code generator:

bash
Copy
Edit
node index.js
When prompted, enter a valid URL (e.g., https://www.example.com).

A QR code will be generated and saved as qr-code.png in the project folder.

Example
less
Copy
Edit
Enter a valid URL: https://www.example.com
This will generate a qr-code.png file containing the QR code for https://www.example.com.

License
This project is licensed under the MIT License - see the LICENSE file for details.

