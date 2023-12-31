// MentalHealthPage.js
import React from 'react';
import './MentalHealthPage.css'; // Make sure to import the CSS file
import Navbar from './Navbar';
import { Nav } from 'react-bootstrap';


function MentalHealthPage() {


  return (
    <div className="mental-health-container">
      <h1 className="title">Mental Health</h1>
      <p className="content">
        Mental health can mean different things to different people but it is usually to do with how we think, feel, and behave.
        Good mental health allows us to function in our day-to-day lives. This means that we are able to be productive in society, have meaningful relationships with others, are resilient enough to cope with change and loss, and also meet the demands placed on us in our everyday lives both inside and outside of work.
        When people experience a mental health issue, it usually means that they have difficulty in some or all of these areas. Having feelings of stress, anxiety, and low mood at times are completely normal; unfortunately, it is a part of everyday life! However, when these thoughts or feelings become frequent or so severe that they change our ability to cope or manage our lives, they can develop into a mental health problem. Because of this, they can affect our mental and emotional capabilities, our relationships, our views of ourselves, and our overall quality of life.
      </p>
      <p className="mental-health-btn"> 
        <a class="btn btn-light" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Breathing exercises</a>
        <button class="btn btn-light" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Take some ‘me time’</button>
        <button class="btn btn-light" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">General</button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
            When we get stressed, angry or anxious, we tend to
take shallow breaths that are quick. This means that
our body is in ‘fight or flight’ mode. We can reverse
this effect by changing the way that we breathe. Start
to take slower, more controlled breaths, and count to
three as you breathe in, and four as you breathe out.
Try to breathe out a little more than you breathe in,
and when you breathe in, imagine that your lungs are
a sack that are filling up with fresh air. As you breathe
out, try to breathe out the negative feelings and
thoughts you are experiencing.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
            • Watch your favourite TV show <br/>
• Listen to music<br/>
• Take some annual leave to go travelling<br/>
• Exercising<br/>
• Taking a warm bath<br/>
            </div>
          </div>
        </div>
</div>  
<Navbar/>

    </div>
  );
}

export default MentalHealthPage;


