This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## login page
login page with the username and password fields
it will check the username and password with the sample data if both match then user can login 
if anything is wrong then the toast will show the mesage of incorrect
the userdata will store on sessionstorage for more use

## React tostify library is used to show the toast
toast will show the error and success message accordingly

## Dashboard 
Dashboard  header  include the company logo , Toggle button , login and logout as per user
    1.) Company logo is used to get back to dashboard again
    2.) Dark Mode toggle button is used to switch between dark and normal mode
    3.) User logo is used to get the user details
    4.) login and logout is used as per if the user is login or not 

Dashboard include the result of the open weather api in the left card depending on the user location
    1.) it includes city name ,Temperature , weather description ,wind speed
    2.) it will change the color accordingly as per the tempaerture like white when the temp is below 10 or when temp is above 40  it will show dark orange

## user details
header includes the user icon which will navigate to user details
user details includes the username, usercity , name info and some default user image

## Dark Mode toogle button
Context api is used here to switch the changes accordingly to the component
it will toggle the color from dark to normal 









