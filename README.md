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
| UAE ( AE )      | ![#ff5e00](https://placehold.co/15x15/ff5e00/f03c15.png) `#ff5e00` |
| INDIA ( IN )    | ![#9c27b0](https://placehold.co/15x15/9c27b0/f03c15.png) `#9c27b0` |
| SRILANKA ( LK ) | ![#1976d2](https://placehold.co/15x15/1976d2/f03c15.png) `#1976d2`|
| PAKSITAN ( PK ) | ![#2e7d32](https://placehold.co/15x15/2e7d32/f03c15.png) `#2e7d32`|

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
![Mashreq](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/e6731652-cc03-4b8e-9096-ec4828f867fe)
<img width="1728" alt="Screenshot 2024-01-18 at 10 34 24 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/d3243c55-004b-43a8-a194-4b804c4c3043">
<img width="1477" alt="Screenshot 2024-01-18 at 10 44 30 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/f150f8f7-7258-4983-b5ec-d0751a7e22c1">
<img width="376" alt="Screenshot 2024-01-18 at 10 44 03 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/75086aa7-ada7-48e8-b3bf-04d347a941b2">
<img width="371" alt="Screenshot 2024-01-18 at 10 44 11 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/3ee0b866-4f7d-439b-aa53-14dc5d5ead46">


### IOS
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 26 50](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/34c13bf6-5930-421f-8936-5b9888048133)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 27 28](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/7f04ee7b-e988-494b-9b67-4b9815dcb737)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 27 31](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/4c8e335e-9c19-4a54-ae5d-a58990b2debc)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 27 35](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/15376398-a987-4e14-9c60-5fde8885b29f)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 27 42](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/40d0d132-d2b8-475c-85f7-1c9560bebb1e)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 27 46](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/133137a0-341f-4584-9910-61406974b465)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 28 13](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/230ab6eb-4e12-45e4-b872-f73868ec15a2)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 28 38](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/97f31102-b3a6-4d1a-934e-3a9edd93c6ad)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-01-18 at 22 29 07](https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/c0b2d9fd-26b5-4a50-ae8a-15b8655d374c)


### Android
<img width="428" alt="Screenshot 2024-01-18 at 10 31 21 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/a83a69c0-6319-4e2f-9f71-852113a3e933">
<img width="433" alt="Screenshot 2024-01-18 at 10 32 04 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/94e1a1ae-55f9-4b9a-8908-5305340df77c">
<img width="436" alt="Screenshot 2024-01-18 at 10 32 44 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/854a8963-27ba-448d-9490-35dec53ef4c1">
<img width="432" alt="Screenshot 2024-01-18 at 10 33 25 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/06c45941-a4da-4bd5-885c-c6099b49d979">
<img width="432" alt="Screenshot 2024-01-18 at 10 33 50 PM" src="https://github.com/palani-kamaraj/mashreq-assessment/assets/39409056/f7737e02-cbf5-4eae-96f5-fba6d8b9dcfe">


