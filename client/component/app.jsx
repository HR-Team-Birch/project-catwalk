import React from 'react';
import Overview from './widgets/overview/overview.jsx';
import Reviews from './widgets/reviews/reviews.jsx';
import Questions from './widgets/questions/questions.jsx';
// import RelatedComparison from './widgets/related/relatedCompare.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []

    }
  }

  render() {
    return (
      <div>
        <Overview />
        <Reviews />
        <Questions />

      </div>
    )
  }
}

export default App;