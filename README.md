# Haiku Helper

## Table of Contents **UPDATE WITH MORE SECTIONS IF NEEDED**

* [Description](#description)
* [Technologies Used](#technologiesused)
* [Installation](#installation)
* [Models](#Models)
* [Usage](#usage)
* [Contribution](#contribution)
* [Contact](#contact)
* [License](#license)

## Description **UPDATE WITH ACCURATE INFO, ADD DEPLOYED HEROKU LINK AS WELL**

[Example Video] **INSERT VIDEO HERE**

## Technology - **UPDATE WITH MORE INFO**
| Technology Used        | Resource URL         |
| ---------------------- | :-------------------:|
| MongoDB | [https://www.mongodb.com/](https://www.mongodb.com/) |
| Mongoose | [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose) |
| Express.JS | [https://expressjs.com/](https://expressjs.com/) |
| React.JS | [https://react.dev/](https://react.dev/) |
| Node.JS | [https://nodejs.org/en](https://nodejs.org/en) |
| Java Web Token | [https://jwt.io/](https://jwt.io/) | 

## Installation **CONTINUE TO UPDATE**
use "npm i" to install all required npm packages. You also need to install MongoDB. If not installed, you can use the links above to install MongoDB. 

## Models **UPDATE WITH OUR MODEL INFORMATION**

### User

    Attributes
    _id: ID | username: string | email: string | haikus:[Haiku]
    Validations
    All Items: Cannot be null
    username: Must be minimum length of 8 characters
    email: Must be in proper email format
    References
    Each user can have MANY Haikus. 

### Haiku
    Attributes
    _id: ID | text: string | created_at: date | image: url |
    Validations
    All Items: Cannot be null
    References
    Each haiku belongs to ONE User.

## Usage **UPDATE WITH SCREENSHOTS AND USAGE INSTRUCTIONS ON WHAT TO DO/WHERE TO GO ETC.**
**THIS WILL NEED TO BE UPDATED LATER ON.**

## Contact
For any issues, or suggestions, please reach out to our customer service team at the mail below. You can also fork the repo at the below GitHub link, to try and make the system better!

 - Email: customerservice@haikuhelper.com
 - Github: https://github.com/ssherp/haiku-creator/

## License
There is no license associated with this application. 