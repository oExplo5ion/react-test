import React from 'react';
import PostReview from './components/PostReview';
import ReviewRow from './components/ReviewRow';

const App: React.FC = () => {
  return (
    <div className="row lighten-4">
      <div className='card col s8 offset-s2'>
        <div className='row'>
          <div style={{
            padding:10
          }}>
            <h1 className='col s12'>
              Кто такой мистер Чиплз?
            </h1>
            <h5 className='col s12'>
              Это глупый котик
            </h5>
          </div>
          <div style={{
            height:'640px',
            width:'100%',
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            backgroundImage:`url('asset/chip.jpg')`
          }} className='col s12 center-align'>
          </div>
          <div style={{
            padding:10
          }}>
            <p className="flow-text">Он любит бегать как долбоёб и делать кусь</p>
            <h1>Что люди думают о чипке?</h1>
             <PostReview/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
