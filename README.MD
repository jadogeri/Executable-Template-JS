# **Executable Template JS**

**Version:** 1.0.0
**Date:** June 4, 2025

---

## Description

A node application serving as template to build executable files in linux ,macos and windows.

## Authors

[@jadogeri](https://www.github.com/jadogeri)

## Repository

 [https://github.com/jadogeri/Executable-Template-JS.git](https://github.com/jadogeri/Executable-Template-JS.git)

## Screenshots

| ![Screenshot 1](assets/images/screenshot1.png) | ![screenshot 2](assets/images/screenshot2.png) |
| -------------------------------------------- | -------------------------------------------- |
|                                              |                                              |

## Table of Contents

<ul>
      <li><a href="#1-introduction">1. Introduction</a>
        <ul>
          <li><a href="#11-purpose">1.1 Purpose</a> </li>
          <li><a href="#12-scope">1.2 Scope</a> </li>
          <li><a href="#13-intended-audience">1.3 Intended Audience</a> </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="#2-technology-stack">2. Technology Stack</a>
      </li>
    </ul>
    <ul>
        <li><a href="#3-usage">3. Usage</a> </li>
        <ul>
            <li><a href="#31-install-dependency">3.1 Install Dependency</a> </li>
            <li><a href="#32-classes-and-methods">3.2 Classes and Methods</a> </li>
            <li><a href="#33-code-snippet">3.3 Code Snippet</a> </li>
        </ul>
    </ul> 
    <ul>  
        <li><a href="#4-license">4. License</a>
        </li>
    </ul> 
    <ul> 
        <li><a href="#5-references">5. References</a>
        </li>
    <ul>

## **1. Introduction**

### **1.1 Purpose**

This document outlines a template to build executables in windows, macos and linux.

### **1.2 Scope**

This template will allow users to:

- Create executables in windows, macos and linux.

### **1.3 Intended Audience**

- Junior or Senior developers.
- beginners learning javascript.

---

### **2. Technology Stack**

- **Programming Languages**: Javascript
- **IDE**: Visual Studio Code (VSCode)
- **Plugins**: Early AI
- **Source Control**: Git and GitHub
- **Code Analysis**: SonarQube

## **3. Usage**

### 3.1 install dependency

1 Type npm install @josephadogeridev/auth-credential-validator-js to install dependencies.

```bash
  npm install @josephadogeridev/auth-credential-validator-js
```

### 3.2 Classes and Methods

This project includes the following core components:

#### 4.2.1 `Credential` Class

The `Credential` class represents a single credential with its attributes and methods.

* **Attributes:**
  * `username` (string): The username of the credential.
  * `email` (string): The email of the credential.
  * `password` (string): The password of the credential.
* **Methods:**
  * `constructor(username ,email ,password)`: The constructor method to initialize a new `Credential` object.
    * **Parameters:**
      * `username` (string): The username of the credential.
      * `email` (string): The email of the credential.
      * `password` (string): The password of the credential.
    * **Description:** Creates a new `Credential` instance with the provided username, email, and password.
  * `getUsername()`: Returns a string containing the credential's username.
    * **Description:** Retrieves the username as a readable string.
  * `getEmail()`: Returns a string containing the credential's email.
    * **Description:** Retrieves the email as a readable string.
  * `getPassword()`: Returns a string containing the credential's password.
    * **Description:** Retrieves the password as a readable string.
  * `setUsername(username)`: Updates the username attribute.
    * **Parameters:**
      * `username` (`string` ): The new username of a credential.
    * **Description:** updates the username of the credential object.
  * `setEmail(email)`: Updates the email attribute.
    * **Parameters:**
      * `email` (`string` ): The new email of a credential.
    * **Description:** updates the email of the credential object.
  * `setPassword(password)`: Updates the password attribute.
    * **Parameters:**
      * `password` (`string` ): The new password of a credential.
    * **Description:** updates the password of the credential object.

#### 4.2.2 `Validator` Class

The `Validator` class represents a single validator with its attributes and methods.

* **Attributes:**
  * `credential` (RegExp object): The credential object of the validator.
  * `usernameRegex` (string): The username regex of the validator.
  * `emailRegex` (string): The email regex of the validator.
  * `passwordRegex` (string): The password regex of the validator.
* **Methods:**
  * `constructor(username, email, password)`: The constructor method to initialize a new `Validator` object.
    * **Parameters:**
      * `username` (string): The initial username of the credential object.
      * `email` (string): The initial email of the credential object.
      * `password` (string): The initial password of the credential object.
    * **Description:** Creates a new `Validator` instance with optional username, email, and password.
  * `validateUsername()`: Returns a boolean containing the Validator's username test result.
    * **Description:** Tests if `Credential`'s username is valid then retrieves the result.
  * `validateEmail()`: Returns a boolean containing the Validator' email test result.
    * **Description:** Tests if `Credential`'s email is valid then retrieves the result.
  * `validatePassword()`: Returns a boolean containing the Validator' password test result.
    * **Description:** Tests if `Credential`'s password is valid then retrieves the result .
  * `setUsernameRegex(regex)`: Updates the usernameRegex attribute.
    * **Parameters:**
      * `regex` (`RegExp` ): The new usernameRegex of a validator.
    * **Description:** updates the usernameRegex attribute of the validator object.
  * `setEmailRegex(regex)`: Updates the emailRegex attribute.
    * **Parameters:**
      * `regex` (`RegExp` ): The new emailRegex of a validator.
    * **Description:** updates the emailRegex attribute of the validator object.
  * `setPasswordRegex(password)`: Updates the passwordRegex attribute.
    * **Parameters:**
      * `regex` (`RegExp` ): The new passwordRegex of a validator.
    * **Description:** updates the passwordRegex attribute of the validator object.
  * `getCredential()`: Returns a credential object.
    * **Description:** Retrieves the credential attribute of a validator .

### 3.3 code snippet

```ruby

import Validator from "auth-credential-validator-js"
const validator = new Validator("jose mourinho","jose mpurinho@gmailcom","rtw5wwvw+-*/twrt");

console.log("*********** Testing Package before publish using npm link***********\n\n");
console.log("validator Object : ",validator);
console.log("validator Credentials : ",validator.getCredential());
console.log("validate email :" ,validator.validateEmail());
console.log("validate username :" ,validator.validateUsername());
console.log("validate password :" ,validator.validatePassword());

validator.credential.setEmail("joseMourinho@gmail.com");
validator.credential.setUsername("Josemourinho");
validator.credential.setPassword("Mourinho!trebl3");

console.log("\n\n*********** test new credentials***********\n\n");

console.log("validate email :" ,validator.validateEmail());
console.log("validate username :" ,validator.validateUsername());
console.log("validate password :" ,validator.validatePassword());

console.log("\n\n*********** update regex ***********\n\n");
validator.setEmailRegex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
validator.setUsernameRegex(/^(?=.*[A-Za-z0-9]).{3,30}$/);
validator.setPasswordRegex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[\w!@#\$%\^&\*]{8,30}$/);


```

## **4. License**

[LICENSE](/LICENSE)

---

## **5. References**

* FreeCodeCamp : [Frontend Web Development: (HTML, CSS, JavaScript, TypeScript, React)](https://www.youtube.com/watch?v=MsnQ5uepIa).
* AweSome Open Source : [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
* Readme.so : [The easiest way to create a README](https://readme.so/)
* Medium : [How to fix__dirname](https://iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d)
