

![Universitatea Tehnică din Cluj-Napoca](Aspose.Words.2bc405e2-5ed7-4f00-97ea-106ee8eeecdc.001.jpeg)





Travel Planning

Application




















Name: Cucos-Artene George Emanuel

Group: 6



# **Table of Contents**
[Deliverable 1	3******](#_toc64843130)***

[**Project Specification	3****](#_toc64843131)

[**Functional Requirements	3****](#_toc64843132)

[**Use Case Model	3****](#_toc64843133)

[Use Cases Identification	3](#_toc64843134)

[UML Use Case Diagrams	3](#_toc64843135)

[**Supplementary Specification	3****](#_toc64843136)

[Non-functional Requirements	3](#_toc64843137)

[Design Constraints	3](#_toc64843138)

[**Glossary	3****](#_toc64843139)

[***Deliverable 2	3******](#_toc64843140)

[**Domain Model	3****](#_toc64843141)

[**Architectural Design	4****](#_toc64843142)

[Conceptual Architecture	4](#_toc64843143)

[Package Design	4](#_toc64843144)

[Component and Deployment Diagram	4](#_toc64843145)

[***Deliverable 3	4******](#_toc64843146)

[**Design Model	4****](#_toc64843147)

[Dynamic Behavior	4](#_toc64843148)

[Class Diagram	4](#_toc64843149)

[**Data Model	4****](#_toc64843150)

[***System Testing	4******](#_toc64843151)

[***Future Improvements	4******](#_toc64843152)

[***Conclusion	4******](#_toc64843153)

[***Bibliography	4******](#_toc64843154)










# <a name="_toc64843130"></a>Deliverable 1
## <a name="_toc64843131"></a>Project Specification
`	`The travel planning application will be a web-based platform that helps users plan their travel itineraries by providing them with various options for flights, hotels, and activities. The application will also allow users to create and save their travel plans and share them with others.
## <a name="_toc64843132"></a>Functional Requirements
1. *User Registration and Login: Users will be able to create an account and log in to the platform using their email and password.*
1. *Travel Search: Users will be able to search for flights, hotels, and activities based on their travel dates, budget, and preferred location.*
1. *Flight Booking: The application will provide users with flight options from different airlines based on their travel dates and budget.*
1. *Hotel Booking: The application will provide users with a list of hotels in the selected location based on their budget and preferred amenities.*
1. *Activity Booking: The application will provide users with a list of activities to do in the selected location.*
1. *Travel Itinerary Planner: Users will be able to create and save their travel plans on the platform. The application will also allow users to customize their travel plans by adding or removing activities.*
1. *Travel Plan Sharing: Users will be able to share their travel plans with others through email.*
1. *User Profile: Users will have their profile page where they can view their travel history, saved travel plans, and account settings.*
1. *Customer Support: The application will have a customer support section where users can submit their queries or complaints, and the support team will provide them with assistance.*

## <a name="_toc64843133"></a>Use Case Model 1
### <a name="_toc64843134"></a>Use Cases Identification

### 1\.Use-Case: User Registration
### `   `Level: Primary
### `   `Actor: New User
### `   `Main success scenario:
- ### User navigates to the registration page.
- ### User enters its personal information and creates a username and password.
- ### User submits the form, and the system confirms the registration.
- ### Extensions:
- ### If the user enters invalid information, the system prompts the user to correct the errors and resubmit the form.
- ### If the username is already taken, the system prompts the user to choose a different username

### 2\.Use-Case: User Login   
### `   `Level: Primary
### `   `Actor: Registered User
### `   `Main success scenario:
- ### User navigates to the login page.
- ### User enters its username and password.
- ### System verifies the credentials and logs the user in
- ### System redirects the user to their profile page.
- ### Extensions:
- ### If the user enters incorrect login information, the system prompts the user to enter the correct username and password.
- ### If the user forgets their password, the system provides an option to reset their password through email verification.

3\.Use-Case: Search for Flights

`   `Level: Primary

`   `Actor: User
### `   `Main success scenario:
- User navigates to the flight search page.
- User enters their travel details such as destination, dates, and number of passengers.
- System retrieves a list of available flights based on the search criteria.
- User selects the desired flight and proceeds to the booking page.
- Extensions:
- If there are no available flights, the system informs the user and suggests alternative dates or destinations.
- If the user needs to make changes to their search criteria, the system provides an option to go back and modify the search parameters.

4\.Use-Case: Search for Hotels

`   `Level: Primary

`   `Actor: User

`   `Main success scenario:

- User navigates to the hotel search page.
- User enters their travel details such as destination, dates, and number of guests.
- System retrieves a list of available hotels based on the search criteria.
- User selects the desired hotel and proceeds to the booking page.
- Extensions:
- If there are no available hotels, the system informs the user and suggests alternative dates or destinations.
- If the user needs to make changes to their search criteria, the system provides an option to go back and modify the search parameters.

5\.Use-Case: Search for Activities

`   `Level: Primary

`   `Actor: User

`   `Main success scenario:

- User navigates to the activity search page.
- User enters their travel details such as destination, dates, and number of participants.
- System retrieves a list of available activities based on the search criteria.
- User selects the desired activity and proceeds to the booking page.
- Extensions:
- If there are no available activities, the system informs the user and suggests alternative dates or destinations.

- If the user needs to make changes to their search criteria, the system provides an option to go back and modify the search parameters.

6\.Use-Case: View Itinerary

`   `Level: Primary

`   `Actor: User

`   `Main success scenario:

- User navigates to the itinerary page.
- System retrieves and displays the user's upcoming travel bookings including flights, hotels, and activities.
- Extensions:
- If the user has no upcoming travel bookings, the system informs the user and suggests they search for and book travel arrangements.
- If the user needs to make changes to their bookings, the system provides an option to modify or cancel the bookings.

7\.Use-Case: Customer Support

`   `Level: Primary

`   `Actor: User

`   `Main success scenario:

- User navigates to the customer support page.
- User submits a request for assistance or information.
- System confirms receipt of the request and assigns it to a customer support representative.
- Customer support representative responds to the request and provides assistance or information to the user.
- Extensions:
- If the user is not satisfied with the customer support, the system provides an option to escalate the request to a higher level of support or to submit a complaint or feedback.

8\.Use-Case: Manage Content

`   `Level: Admin

`   `Actor: Admin

`   `Main success scenario:

- The admin logs into the admin panel of the travel planning application.
- The admin navigates to the content management section of the admin panel.
- The admin selects the type of content they wish to manage, such as destinations or activities.
- The travel planning application displays a list of content items.
- The admin selects the content item they wish to manage.
- The travel planning application displays the content details and allows the admin to edit or delete the content.
- Extensions:
- If the admin attempts to delete a content item that is associated with existing bookings, the travel planning application notifies the admin that the content cannot be deleted.
- If the admin creates a new content item, the travel planning application prompts the admin to enter all required information.

9\.Use-Case: Share Travel Plan

`   `Level: Primary

`   `Actor: User

`   `Main success scenario:

- The user navigates to the travel plan they wish to share.
- The user selects the "share" button or icon associated with the travel plan.
- The travel planning application presents the user with sharing options, such as email, text message, or social media.
- The user selects the desired sharing option and enters the necessary information (e.g., email address, phone number, social media handle).
- The travel planning application sends the travel plan information to the selected recipient.
- The recipient can view the travel plan details and may have the option to save or book the travel plan.
- Extensions:
- If the recipient does not have an account with the travel planning application, the travel planning application may prompt them to create an account in order to view or book the travel plan.

### UML Use Case Diagrams

![](Aspose.Words.2bc405e2-5ed7-4f00-97ea-106ee8eeecdc.002.png)

![Diagram

Description automatically generated](Aspose.Words.2bc405e2-5ed7-4f00-97ea-106ee8eeecdc.003.png)

![A picture containing text, shoji

Description automatically generated](Aspose.Words.2bc405e2-5ed7-4f00-97ea-106ee8eeecdc.004.png)

## <a name="_toc64843136"></a>Supplementary Specification
### <a name="_toc64843137"></a>Non-functional Requirements
1\.Performance

The performance non-functional requirement would ensure that the travel planning application is able to handle a high volume of users and provide a fast response time to user requests. This is particularly important for a travel planning application, as users may become frustrated if they experience delays or long loading times while trying to book travel accommodations or activities. To meet this requirement, the system could implement various techniques such as caching, load balancing, and efficient database queries to optimize performance.

2\.Security

The security non-functional requirement would ensure that the travel planning application is secure from unauthorized access, data breaches, and other security threats. This is important as the application will be handling sensitive user information such as personal details. To meet this requirement, the system could implement measures such as encryption of data at rest and in transit, role-based access control, and regular security audits and testing.

3\.Scalability

The scalability non-functional requirement would ensure that the travel planning application is able to handle an increasing number of users and transactions without experiencing a degradation in performance or stability. This is important as the application may experience sudden spikes in traffic during peak travel seasons or promotions. To meet this requirement, the system could use scalable cloud infrastructure, such as AWS or Azure, that can dynamically allocate computing resources as needed.

4\.Usability

The usability non-functional requirement would ensure that the travel planning application is easy to use and navigate and provides a positive user experience. This is important as users may become frustrated if they have difficulty finding information or completing tasks within the application. To meet this requirement, the system could use user-centered design principles, such as clear and intuitive navigation, prominent call-to-action buttons, and consistent design patterns throughout the application. The system could also conduct user testing and feedback to identify and address any usability issues.

### <a name="_toc64843138"></a>Design Constraints

1. Technology stack: A constraint is that the application on the server side will be built using Java and the Spring Framework. On client side, the application will be built using Typescript and React alongside HTML and CSS. 

1. Integration requirements: The application will use the Sky Scanner API for flight booking and Booking.com API for accommodation booking.

1. User experience guidelines: The application will have a base color scheme consisting of white and blue.

1. Development tools: The application will be developed using the IntelliJ IDEA IDE.


## <a name="_toc64843139"></a>Glossary

User

Definition: A person who interacts with the travel planning application to search for, book, and manage travel accommodations and activities.


Admin

Definition: A user with administrative privileges who can manage the content and settings of the travel planning application.


Destination

Definition: A location that users can search for and book travel accommodations and activities.

Accommodation

Definition: A place to stay, such as a hotel, hostel, or vacation rental.

Activity

Definition: An experience or event that users can book, such as tours, attractions, or restaurants.

API

Definition: Application Programming Interface, a set of protocols and tools for building software applications.

UI

Definition: User Interface, the visual and interactive elements of the travel planning application that users interact with.

UX

Definition: User Experience, the overall experience and satisfaction that users have when using the travel planning application.

API Key

Definition: A unique identifier that allows a user or application to access a specific API.

Authentication

Definition: The process of verifying the identity of a user or application attempting to access the travel planning application.

Authorization

Definition: The process of granting or denying access to specific resources or features of the travel planning application based on a user's role or permissions.

Cache

Definition: A temporary storage location used to store frequently accessed data or resources in order to improve application performance.

Database

Definition: A structured collection of data used to store and organize information for the travel planning application.

Encryption

Definition: The process of converting sensitive data into a secure format using cryptographic algorithms to prevent unauthorized access.

REST

Definition: Representational State Transfer, a software architecture style used to create scalable and flexible web services.


SSL/TLS

Definition: Secure Sockets Layer/Transport Layer Security, a protocol used to establish secure communications between a client and server over the internet.


# <a name="_toc64843140"></a>Deliverable 2
## <a name="_toc64843141"></a>Domain Model
*[Define the domain model and create the conceptual class diagrams]*

## <a name="_toc64843142"></a>Architectural Design
### <a name="_toc64843143"></a>Conceptual Architecture
*[Define the system’s conceptual architecture; use an architectural style and pattern - highlight its use and motivate your choice.]*

### <a name="_toc64843144"></a>Package Design 
*[Create a package diagram]*

### <a name="_toc64843145"></a>Component and Deployment Diagram
*[Create the component and deployment diagrams.]*

# <a name="_toc64843146"></a>Deliverable 3
## <a name="_toc64843147"></a>Design Model
### <a name="_toc64843148"></a>Dynamic Behavior
*[Create the interaction diagrams (1 sequence, 1 communication diagrams) for 2 relevant scenarios]*

### <a name="_toc64843149"></a>Class Diagram
*[Create the UML class diagram; apply GoF patterns and motivate your choice]*

## <a name="_toc64843150"></a>Data Model
*[Create the data model for the system.]*

# <a name="_toc64843151"></a>System Testing
*[Describe the testing methides and some test cases.]*

# <a name="_toc64843152"></a>Future Improvements
*[Present some features that apply to the application scope.]*

# <a name="_toc64843153"></a>Conclusion

# <a name="_toc64843154"></a>Bibliography

