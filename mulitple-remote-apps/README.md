# This app demos how different apps can be maintained separately and can be included in the host app

This example demos a host app importing header footer and features from 3 different remote apps.

- `header` exposes `HeaderApp` component.
- `footer` exposes `FooterApp` component.
- `features` exposes `FeaturesApp` component.

# Running Demo

Run `npm start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:9001](http://localhost:9001/) (HEADER)
- [localhost:9002](http://localhost:9002/) (FOOTER)
- [localhost:9003](http://localhost:9003/) (FEATURES)
- [localhost:9000](http://localhost:9000/) (HOST)
