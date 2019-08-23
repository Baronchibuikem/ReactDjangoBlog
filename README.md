This is a Blog web application built using react in the frontend and django for the backend. I'm really excited to share how this web application was built.

# Assumptions

1- You are familiar with Django Framework and React Library
2- You have basic understanding of django-rest-framework and javascript ES6
3- You have a text editor of your choice installed and ready to go

# Packages you will need for this project are all listed in requirements.txt for django and package.json for react

After cloning this project you will have 2 folders "backend" and "frontend"

backend will contain the django project which was build using django-rest framework, run:

                pip install -r requirements.txt to install all the packages
                python manage.py makemigrations
                python manage.py migrate
                python createsuperuser(fill in your details)
                python manage.py runserver

The following endpoints have been made available to be consumed by the frontend

                "article": "http://127.0.0.1:8000/articles/"

It's very important to note that the following packages are what gives life to this backend

                django
                django-rest-framework
                django-cors-headers
                Pillow

The only app in this project for now is the "Article app" which contains an "api" module that was uses in serializing our data to json

frontend was created using create-react-app and relevant packages are all inside package.json file, run:

                yarn start

It's very important to note that the following packages are what gives life to this frontend

                Ant Design which was used for styling and they can be reached via https://ant.design
                Axios which was used to interact with data from the backend

#Understanding the flow of our components and containers

All our components eventually all find the way into our "App.js" file but to help you understand the flow, i will try to summarize it.

Inside our "container" we have "layout.js" and "ArticleListView.js"

Layout.js is what acts as a container holding what gets displayed in our application and because "props" was passes to it, it can have children(our other contents), its embedded inside our "App.js"
ArticleListView acts as a container for our articles which is located inside the component folder which is then passes as a child inside our layout embedded inside the "App.js"

Inside our "components" we have "Articles" component
