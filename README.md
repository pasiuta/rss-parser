                                            RSS-PARSER
                                            What is it?
                                            -----------

In this API you can parse data from rss and put this data in database automatically with cron.

And you can create,read,update and delete posts and all this work with the database

                                            Prerequisites
                                            -------------
1. Build the docker image
   docker-compose build
2. Run the built image
   docker-compose up

                                            How to use it?
                                            -------------

1) If you run commands from  Prerequisites every 15 minutes cron will be parse data

2) go to postman

3) For create post you need create POST request to this url(http://localhost:5000/posts/)
   {
   "title":"Europe has become a leader in regulating the cryptocurrency industry",
   "description":"In the crypto world, MiCA will set global standard",
   "category":"Crypto",
   "author":"JohnDoe"

   }

4) For get posts you need create GET request to this url (http://localhost:5000/posts/)
   You will get last 20 posts from database


5) For get 1 post you need create GET request to this url (http://localhost:5000/posts/{id})
    IMPORTANT!
    you need write id in parameters in query of your post which you need to get

6) For update post you need create PUT request to this url  (http://localhost:5000/posts/{id})
   IMPORTANT!
   you need write id in parameters in query of your post which you need to update
   you can update every field

7) For delete post you need create delete request to this url  (http://localhost:5000/posts/{id})
   IMPORTANT!
   you need write id in parameters in query of your post which you need to delete

8) For paginate,sorting and searching posts you need create GET request to this url (http://localhost:5000/posts/)
   for pagination : http://localhost:5000/posts?limit=5&page=1 , where limit it is quantity of items per page and 
   page it is number of page which you want
   for sorting : http://localhost:5000/posts?sortBy=createdAt:ASC ,you can sort on field id,title,created_at
   for searching : http://localhost:5000/posts?search=YouTube , you can search on field title
   if you need  use couple methods in 1 query : http://localhost:5000/posts?limit=5&page=2&sortBy=createdAt:ASC&search=Ukraine

9) For use swagger,go to http://localhost:5000/api/docs/#/
