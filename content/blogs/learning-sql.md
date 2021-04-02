---
layout: post
title: "Learning SQL (Structural Query Language)"
date: "2020-07-06"
image: "learning-sql.png"

# img_url: "https://instagram.fphl2-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/106509614_296497531760274_8289868138951860416_n.jpg?_nc_ht=instagram.fphl2-4.fna.fbcdn.net&_nc_cat=106&_nc_ohc=jcbprGZkS-8AX_L8AmW&oh=fb4ac10a283f0325054b6436f6f2b722&oe=5FA31F2B"
tags: ["sql", "beginner"]
archived: false
---

SQL is used to communicate with databases in order to manipulate & retrieve data.

<div style="display: flex; justify-content: center;">

https://www.instagram.com/p/CCUGjqZBmwB/

</div>

# WHY LEARN?
- Many applications use databases to store & change data
- Tons of businesses use relational databases
- Useful for personal projects
- Great technical skill you can add to your resume

# QUICK FACTS
- SQL has many extensions/versions created by others (MySQL, PostgreSQL, MariaDB, Oracle DB, etc.)
- First developed by IBM researchers (’70s), then developed & publicly released by Oracle (’79) 
- In 3rd place for Most Popular Technologies on StackOverflow

# QUICK EXAMPLE
Say you are connected to your database and you have several tables with one of them named, “cars”. The cars table has 4 fields: id, make, model, and year. 
For whatever reason, your application wants id, make, and model. Your query would look something like this.

# CREATE DATABASE
Previously, we assumed we were connected to a database and that it had a cars table. What if neither existed? Let’s CREATE the database first since tables are stored in them.
We can SHOW the available  database by running :
It’s that simple! Before we proceed to creating a table for testdb, we must run this command :
The commands we run next will apply to this database, unless we specifically USE a different database.
# CREATE TABLE
We now have a database, but we are missing the cars table. Let’s CREATE the table.
# INSERT DATA
Now let’s insert the rows of data.
# TRUNCATE TABLE
To remove all the rows of data in the table, but preserve the table, we would TRUNCATE it.
# DROP TABLE
To remove the table from the database, we would DROP the table.

# RESOURCES
To learn more, I highly recommend visiting these sites:
 
- freecodecamp.org
- tutorialspoint.org
- khanacademy.org
- Sqlbolt.com

On a personal note, I’ve learned MySQL first and my experience with it was great! It doesn’t matter which version of SQL you learn, what matters is learning it! Start a project or include it in one of your existing projects.

THANK YOU

Follow @codeherk for tips on Software Development.

Questions? Comments? Requests? 

Leave a comment below!
