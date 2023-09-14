# Haiku Helper

## Table of Contents

* [Description](#description)
* [Technologies Used](#technologiesused)
* [Installation](#installation)
* [Models](#Models)
* [Usage](#usage)
* [Contribution](#contribution)
* [Contact](#contact)
* [License](#license)

## Description
Haiku Helper solves that problem by giving you a random set of words to help narrow down your focus and offers a fun drag and drop ability to finalize your masterpiece!

[Example Video] **INSERT VIDEO HERE**

## Technology
| Technology Used        | Resource URL         |
| ---------------------- | :-------------------:|
| MongoDB | [https://www.mongodb.com/](https://www.mongodb.com/) |
| Mongoose | [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose) |
| Express.JS | [https://expressjs.com/](https://expressjs.com/) |
| React.JS | [https://react.dev/](https://react.dev/) |
| Node.JS | [https://nodejs.org/en](https://nodejs.org/en) |
| Java Web Token | [https://jwt.io/](https://jwt.io/) |
| React Drag and Drop | [https://react-dnd.github.io/react-dnd/docs/overview](https://react-dnd.github.io/react-dnd/docs/overview) | 
| GraphQL | [https://graphql.org/](https://graphql.org/) | 
| UnsplashAPI | [https://unsplash.com/documentation](https://unsplash.com/documentation) | 
| Pure.css | [https://purecss.io/](https://purecss.io/) | 

## Installation
use "npm i" to install all required npm packages, at the root level, client level and server level. You also need to install MongoDB. If not installed, you can use the links above to install MongoDB. 

## Models

### User

    Attributes:
    _id: ID | username: string | email: string | haikus:[Haiku]

    Validations:
    All Items: Cannot be null
    username: Must be minimum length of 8 characters
    email: Must be in proper email format
    References
    Each user can have MANY Haikus. 

### Haiku
    Attributes:
    _id: ID | text: string | created_at: date | image: url |

    Validations:
    All Items: Cannot be null
    References
    Each haiku belongs to ONE User.

## Usage
This application is meant to be a fun way to develop light hearted poetry in a fun manner via drag and drop. Once an account has been created, you can see your previously generated poems. 

## Contribution
The key contributors to this project were Andrew Nguyen, Chris Larson, Matt Schneble and Sonam Sherpa. To all those who assisted us, we thank you for your support and assistance. 

## Contact
For any issues, or suggestions, please reach out to our customer service team at the mail below. You can also fork the repo at the below GitHub link, to try and make the system better!

 - Email: customerservice@haikuhelper.com
 - Github: https://github.com/ssherp/haiku-creator/

## License
There is no license associated with this application. 