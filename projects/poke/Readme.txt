Elijah Freeman
Assignment 1 - Poke Restaurant. 
February 12, 2021

----------------------------
Links: 
----------------------------
Github (under web/poke directory): https://github.com/elijahff/elijahff-tcss460-w21
Homepage: https://elijahff-tcss460-w21.herokuapp.com/poke/html/index.html


----------------------------
Submission comment: 
----------------------------
This submission is only for myself, I worked alone for this assignment. I would like to make a special note that I implemented every single feature from scratch using CSS, JavaScript and HTML with the exception of the carousel (I used bootstrap 4). This is also my first proper website aside from the website that we built in lab earlier in the quarter. This was a fun assignment but also quite a lot of work without using the help of templates or frameworks for any of the layout, design, or functionality. I feel much much more confident about CSS, HTML, JavaScript, DOM, and storage by building everything form scratch. I’ve also met all ADA requirements as well. If you have any advice or feedback I would love to hear it! Thank you. 

I’ve implemented a fully functional proof of concept website for a Poke Restaurant. There are six main pages: 


----------------------------
Home Page
----------------------------	
Summary: 
The home page is relatively simple. There is an image, nav bar, & and some fun icons. The carousel is the only thing I used a framework for (bootstrap). 

	Implemented:
	⁃	Carousel
	⁃	Business information
	⁃	Testimonials
	⁃	Custom nav bar
	⁃	Custom layout
	Not Implemented:
	⁃	n/a


----------------------------	
Menu Page
----------------------------
Summary: 
The menu page is also relatively simple and just shows all the food that can be ordered. There is a simple Order button that provides another access point to the Order page. 

	Implemented:
	⁃	Simple menu
	⁃	Different categories for the bowl: Sizes, Base, Protein, Toppings, Special Toppings
	Not Implemented:
	⁃	n/a



----------------------------
Order Page
----------------------------
Summary: 
The Order page adds much more complexity to make all the different functionality work. User is presented with the five main categories: Sizes, Base, Protein, Topping, Special Topping. User can select one item from the size, base, protein categories and unlimited items in the Topping and Special Topping categories. As soon as user chooses an item on the page a running total pops up on the right of the screen that keeps track of the order total.  User can edit their order by clicking other options in the categories for size, protein and base. User can remove a topping by clicking on the option to deselect it and add other toppings. 

When user finishes their order, they can optionally name the order. If the order is named then the name of the order will appear when user goes to cart page. If no name is given, then the order is named the default “Order 1”, “Order 2”, … so on. Once user adds order to cart, all the order information is stored in session storage and user is taken to the cart page. User can add as many orders as they would like. 
 
	Implemented:
	⁃	Allow user to customize their order.
	⁃	Allows user to edit their order after they have made a selection. 
	⁃	Different categories for the bowl: Sizes, Base, Protein, Toppings, Special Toppings
	⁃	Dynamic popup that displays running total for the order. 
	Not Implemented:
	⁃	The ability for a user to select more than one of the same topping / special topping. 



----------------------------
Login Page
----------------------------
Summary: 
The Login in page is relatively simple. Allows the user to login into their account provided they have already made one using the sign up page. User information is saved to local storage, I read that this is not good or safe practice to do but I did this anyway for basic proof of concept. Validation only checks for the users email for brevity purposes. If the users email is saved to local storage then login is successful and a success message is displayed to user. If user enters an email that is not in local storage then failure message is displayed to user and button changes its action to take the user to the sign up page. If user tries to enter another username or password then button reverts back to the original login functionality. 
 
	Implemented:
	⁃	Successful login if user information is present in local storage.
	⁃	Button and messages are dynamic based on success or failure of login

	Not Implemented:
	⁃	Appropriate and safe login mechanism on server side. (This is just proof of concept).



----------------------------
Sign Up Page
----------------------------
Summary: 
The sign up page is relatively simple. Allows user to sign up with the Poke website. All input fields are required to register. If an input field is blank and user presses register button. Registration will fail and user will be notified to try again. Upon successful registration a message is displayed and user information is saved to local storage. This user information is used for validation when user tries to login. This also is not safe or optimal so this is just proof of concept. 
 
	Implemented:
	⁃	Four input fields to collect users first and last name, email address and password.
	⁃	User information is saved.
	⁃	Messages are dynamic based on on success or failure of registration. 

	Not Implemented:
	⁃	Appropriate and safe sign up mechanism on server side. (This is just proof of concept).



----------------------------
Cart Page
----------------------------
Summary: 
The cart page adds a lot more complexity. If user has not ordered anything then a simple message is displayed and an Order button is displayed which takes the user to the Order page. Once the user places an order then that order is saved to session storage and a summary of that order is displayed to user. A user can place multiple orders. If user provides a name for the order then the orders name is displayed. A user can delete an order by clicking trashcan icon. User can order another item by clicking the Order More button. 

The total price of all orders is displayed to the user in the checkout section where the user can input their payment information. I don’t collect any information from these fields for obvious reasons (this section is optional). When user is done with the order and ready to place the order they can click Place Order. When this is clicked the session storage and local storage are cleared and the contents of the page change to display successful order messages. Local storage is cleared because I don’t want to actually save user information to the browser. Session storage is cleared so that user can place another order without refreshing or closing the tab. 

	Implemented:
	⁃	Dynamic orders - user can make any combination of order as long as they have a Size, Base, and Protein selected. 
	⁃	User can choose as many orders as they would like. 
	⁃	All prices are updated dynamically to reflect total cost of order. 
	⁃	User can delete an order. 
	⁃	User can input their payment information. 
	⁃	Cart page is dynamic depending on users stage in the order process. 
	⁃	User can place and order and pages changes to reflect the completion of the order. 

	Not Implemented:
	⁃	Functionality for payment system (even though I would like to make some money lol). (This is just proof of concept).