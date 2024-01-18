# Hi, I'm Palani Kamaraj! 👋

👩‍💻 I'm currently working on **Shory**

🧠 I'm currently learning **Nx, Astro, Nitro, Zustand, Remix, pnpm**

📫 How to reach me palani13kamaraj@gmail.com

# Mashreq Assessment

Developed a cross-platform application using React for both mobile and web platforms with shared functionalities.

### Web Features

1. Login Form Design

- Designed a login & save form with username, password and country. Login will verify the stored user information from firebase.

2. Country-Specific Username Validation

- **UAE**: Allows alphanumeric strings with a minimum length of 5 characters.
- **INDIA**: Alphanumeric strings starting with a letter, with a minimum length of 11 characters.
- **SRILANKA**: Allows alphanumeric strings with underscores; underscores are allowed but not at the beginning or end.
- **PAKISTAN**: Requires a combination of letters, digits, and special characters, with a minimum length of 8 characters.

3. Dashboard Page

- After successful login, created dashboard page with dynamic theme color as per loggedin user country type.

4. Change Password

- Created change password UI and handled all the error handling cases.
- On successfull save data will be updated to firebase with proper error handling.

5. Secure User Data Storage

- Implemented secure storage for user data, ensuring confidentiality and data integrity.

6. Responsive Design

- Created a responsive design for the web application, ensuring optimal user experience across various screen sizes.

7. Localization

- Implemented both web and app localization support in English, Arabic, Hindi and Tamil.

8. Theming

- Implemented theming based on the selected country.

### React Native ( Ios and Android ) Features

Implement similar validation as like web for creating new user to firebase with similar web validation. code is reused across web and mobiile app with similar theme, language support and design.

## Theme

| Country         | Color                                                            |
| --------------- | ---------------------------------------------------------------- |
| UAE ( AE )      | ![#ff5e00](https://via.placeholder.com/10/ff5e00?text=+) #ff5e00 |
| INDIA ( IN )    | ![#9c27b0](https://via.placeholder.com/10/9c27b0?text=+) #9c27b0 |
| SRILANKA ( LK ) | ![#1976d2](https://via.placeholder.com/10/1976d2?text=+) #1976d2 |
| PAKSITAN ( PK ) | ![#2e7d32](https://via.placeholder.com/10/2e7d32?text=+) #2e7d32 |

## Tech Stack

**Common:** NX, Zustand, React Hook Form, React

**React:** Material UI v5

**React Native:** React Native Paper, MMKV ( key-value storage framework )

## Run Locally

Clone the project

```bash
  git clone https://github.com/palani-kamaraj/mashreq-assessment.git
```

Go to the mashreq-assessment

```bash
  cd mashreq-assessment
```

Install dependencies

```bash
  yarn i
```

Start web server

```bash
  yarn web
```

or

```bash
  nx run web:serve
```

Start Android

```bash
  yarn android
```

or

```bash
  nx run mobile:run-android
```

Start IOS

```bash
  yarn ios
```

or

```bash
nx run mobile:run-ios
```

## Screenshots

### Web

### Android

### IOS
