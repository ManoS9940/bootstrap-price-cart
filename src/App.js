import React from 'react';
import Free from './components/Free';
import Plus from './components/Plus';
import Pro from './components/Pro';



function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <section className="pricing py-5">
            <div className="row">
              <Free />
              <Plus />
              <Pro />
            </div>
          </section>
        </div>
      </div>
    </div>

  );
}

export default App;
