GadgetGalore
=========

## (Moto) Bringing The Very Best To Your Life

![whatsapp image 2017-12-07 at 12 52 49 am](https://user-images.githubusercontent.com/16271202/33688261-00f93638-db05-11e7-9646-d8282bf122f0.jpeg)


***Description:***
GadgetGalore is an E-commerce site. Where you will be able to get all the accessories for gadget's like Smartphone, 
Desktop/Laptop, Gaming devices.


Features
--------

1. **Selection of Category**

    Customers can select categories of accessories. For each category there are selective items.

***sample of options***

![options](https://user-images.githubusercontent.com/16271202/33688400-748666b6-db05-11e7-9e18-927226e5be31.PNG)



2. **Shopping Cart**
   
     Shopping Cart allows users to check what all items they have selected to buy. They can later
     cancel the order or checkout to confirmation page.

***Sample***

![mutltipleadd](https://user-images.githubusercontent.com/16271202/33688564-09368be2-db06-11e7-80fb-2bbdf9129e19.PNG)

    
3. **Ecommerce in Social Medias**

![ebusiness](https://user-images.githubusercontent.com/16271202/33688628-44518c90-db06-11e7-9e94-8bb17f4b11a2.PNG)


Download
--------

 ***Download the latest git*** 

### [Click here to download latest version](https://github.com/Raselahmed825/gadget-galore.git)





****************************************************************

**How to set up the code**

1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center?jmp=nav) on your computer

2. Download this code, and from command prompt run:

   `npm install`


   `bower install`


3. To run the code, run:

    `node server.js`

    
4. In the browser open http://localhost:3000/, and you should see the index page

**Exposed APIs**:

GET **/api/articles** (returns list of articles)

POST **/api/articles** (create new article)

GET **/api/articles/:articleId** (returns an article with matching id)

DELETE **/api/articles/:articleId** (deletes the matching article)

GET **/api/articles/edit/:articleId** (returns an article with matching id)

PUT **/api/articles/edit/:articleId** (updates the matching article)
