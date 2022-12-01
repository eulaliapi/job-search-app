# Job Search App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Description
The app is built using [Angular Material Components](https://material.angular.io/).

The app displays the job offers and their additional information provided by [themuse](https://www.themuse.com/) website in their [api](https://www.themuse.com/developers/api/v2) section.

## How it works
At startup the application displays a search bar and underneath it 20 job offers. Using the paginator the user can see the folowing 20 job offers and so on until the last page is hit.
</br>
<img src="https://user-images.githubusercontent.com/98905459/205061815-524948c6-f19f-4472-8ae1-2c8fbd200da4.png" alt="app preview" width="70%">

The search bar above the list of job offers can be used to filter the job offers that match the user's input.
</br>
<img src="https://user-images.githubusercontent.com/98905459/205061832-b2215baf-c47d-4f54-ae62-473585e5df28.png" alt="app search bar" width="70%">

When clicking on a job offer title, the user navigates to the details page of that offer: there a card displays title, level, location and description of the job offer.
</br>
<img src="https://user-images.githubusercontent.com/98905459/205061854-515e3153-8fe7-43aa-8a9e-3833e0840b25.png" alt="job offer details" width="70%">

An expansion panel positioned under the job description displays the name of the company offering the job: the user can interact with it to see more information about it.
</br>
<img src="https://user-images.githubusercontent.com/98905459/205063207-0eda025f-3029-4d13-8513-de0b5d83476a.png" alt="job offer company details" width="70%">

The user can navigate back to the list of job offers clicking the "Go Back" button positioned above the card.

## Links
Try the app [here](https://angular-job-search-app.web.app/jobs).
