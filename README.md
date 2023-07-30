Username: admin@email.com
Password: adminpass

Username: user@email.com
Password: userpass


This project is done based on this test case:

1- Use “class” based pattern in the project, so no hooks.

2- Use Redux (if Redux is applicable) or localStorage, so no Mobx or ContextAPI…etc

3- For UI libraries the following should be used:

A- MDBReact is used as the main UI library. https://www.npmjs.com/package/mdbreact
B- Material-Table is the table that will be used for displaying data. https://material-table.com/#/
C- Material-ui/core, this is a library that is needed to be able to run Material-Table.
D- React-Toastify, this will be your notification pop up (ex: error or success of action).
E- React ChartJs 2, this will be your charts library. https://www.npmjs.com/package/react-
chartjs-2

How the project should look like ?
1- There should be a sign in page (disregard the idea of sign up). The sign in is not needed to be HTTP
based, so simply store a user credentials and name locally and simply on signin see if the data match.
once signed in the user will directed to Dashboard page.
In the Dashboard page there should be 2 charts (this is where React ChartJs 2 is used), the data of the
charts DON’T need to be from an outside source, so simply create a local file that has the data and plot
the 2 charts from that data.
So for example chart 1 will display the amount of messages sent, amount received, amount failed for
each day. For chart 2 you will display the amount of calls sent, amount received for each day. Let us say
the number of days is 3.
2- The second page should be a page that has a table grid (this is where Material-Table is used). In the
table you display users data, for example: FirstName, LastName, Nationality, PhoneNumber,
LastMonthBill. There should be an edit/delete/add actions to the table, don’t worry about them much
because Material-Table has built in actions. There should be another column which has action/button
where a MODAL opens and displays further info of the table row, so FirstName, LastName, Nationality,
PhoneNumber, LastMonthBill are displayed and in addition Address, # of Services Subscribed, Age, …etc.
3- Final page is a page that has the data of the User who is logged in to the site, usually this is an Admin
or an Employee who monitors the portal. The user data should be displayed and he should be able to
edit certain fields, like: password, role. After Editing the data can be saved.

Other notes:

** The design should be good aesthetically, this is easy because all the libraries used are responsive and
have good designs.
** There should be a side navigation menu which can take you between the 3 pages, (Dashboard, Table
Page, Users Info)
** The 3 pages shouldn’t be accessed if you are not signed in. This is a concept of protected routes.
** There should be a sign out button which will take you to sign in page.
** It is up to you if you want to add anything else or do additional pages.
The test might seem long, but once completed you can easily guarantee that your work will be similar to
the test. There is no constraint on the time because I think once the test is completed repeating this
work again over and over will be quick!
Finally remember once the test is done we will go over the work just to make sure it is your work!
Any clarifications needed then contact me.
