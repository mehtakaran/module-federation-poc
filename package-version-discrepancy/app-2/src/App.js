import { VERSION } from "lodash";

import React from "react";

const AppVersion = React.lazy(() => import("app1/AppVersion"));

const App = () => {
  return (
    <div>
      <h1>App 2 Host</h1>
      <p>Lodash v{VERSION}</p>
      <React.Suspense fallback="Loading Example">
        <AppVersion />
      </React.Suspense>
    </div>
  );
};

export default App;
