

## LAB - 06:
# Project Name: Salmon Cookies

### Author: Maryam Al-Eisah
I discussed with Hassan Baydoun this project and we shared our ideas and thoughts.

### Problem Domain:
Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

The minimum number of customers per hour.
The maximum number of customers per hour.
The average number of cookies purchased per customer.
Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on the day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.
Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public-facing site.



## Lab-07: 

# Project Name: Salmon Cookies Pt. 2

### Author: Maryam Al-Eisah

### Problem Domain
Pat’s Salmon Cookies problem domain can be found here!

Instructions
Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

Each cookie stand location should have a separate render() method that creates and appends its row to the table
The header row and footer row are each created in their own stand-alone function
NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).




## Lab-09: 

# Project Name: Add a form to the cookie stand project

### Author: Maryam Al-Eisah

### Instructions :

Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.

Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.

Validate your html through HTML5 validation.

Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.