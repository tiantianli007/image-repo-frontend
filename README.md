# Getting Started with the Image Repository App

This project was built using a variety of librarys(React, NodeJS) and frameworks(Express, Axios, Multer) and allows users to upload one or multiple images to an online repository. There is a gallery page that displays all the images in the repository uploaded by anyone anywhere. I used MongoDB Atlas and AWS S3 because I thought it would be easier to store the actual image in an S3 bucket and store the URL's in MongoDB which are used to actually display the images on the React page. There are two API calls the frontend can make, a GET request to get all the images in the repository and a POST request to upload an image to the repository. The backend will handle GET request by retrieving the data from MongoDB and returning a list of objects containing the image name and AWS file link. For POST requests the backend first stores the image in an amazon S3 bucket and it returns a link to the image, the link is than stored in MongoDB along with the image name.

Backend Repository: https://github.com/tiantianli007/image-repo-backend

## How to use it

To run this project by yourself, you just need to create a .env(there is a .env.template file that contains the nessesary fields) that you can find in the image-repo-backend and the image-repo-frontend repository. Then you need to run "npm start" in the root directory of both the frontend and backend repository.

### Deployment

I deployed my image repository with Heroku at: https://image-repo-tian.herokuapp.com
Navigate to the Gallery to see all images that are in the repository. Navigate to upload to upload your own image! If you go back to the gallery you will see the image you just uploaded.

### Next Steps

Next steps would be to add users authentication and for users to have their image repositorys, currently there is only one gallery that displays all the iamges. I would also like to add the delete function, instead of having to delete it from AWS and MongoDB directly.