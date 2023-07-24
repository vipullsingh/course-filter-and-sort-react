import React, { useState } from 'react';
import CoursesPage from './pages/CoursesPage';
import SpeakersPage from './pages/SpeakersPage';

const App = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  const handlePathChange = (event) => {
    setPathname(event.target.pathname);
  };

  window.addEventListener('popstate', handlePathChange);

  let pageContent;
  if (pathname === '/courses') {
    pageContent = <CoursesPage />;
  } else if (pathname === '/speakers') {
    pageContent = <SpeakersPage />;
  } else {
    // You can render a 404 page or a default page here
    pageContent = <h1>Page not found</h1>;
  }

  return (
    <div>
      <h1>My App</h1>
      {pageContent}
    </div>
  );
};

export default App;
