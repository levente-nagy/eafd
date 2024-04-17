import Carousel from 'react-bootstrap/Carousel';

function Time() {
  return (
    <div>
      <div className="article">
        <br />
        <h3>Time</h3>
        <br />
        <Carousel slide={false}>
      <Carousel.Item>
        <img src="/Time1c.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Time2c.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Time3.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Time4.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Time5c.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Time6.jpg" className="article_banner" />
      </Carousel.Item>
    </Carousel>
 
        <br />
        <br />
        <br />
        <b>Summary</b>
        <ul>
          <li>Schedule</li>
          <li>Tools and apps</li>
          <li>Time blocking</li>
          <li>Daily routine</li>
          <li>Minimize interruptions</li>
          <li>Review</li>
        </ul>
        <br />
        <div className="intro">
        Outside there are a lot of variables that are out of your control and can mess up with your life. What is in your control and has an important impact in your life is time. Did you ever had the feeling that you need more than 24 hours in a day? Well, this is what we are talking about as impact. Let’s see what can you do in order to control the parts that are belonging to you.
        </div>
        <br /> <br />
        <h5>Schedule</h5>
        <div className="subarticle">
          <img src="/Time1.jpg" className="article_photo" />
          Make a list of the tasks that you need to accomplish that day, and note in upcoming activities as you become aware of them. As you complete your list, make sure to tick off the tasks you have completed. Differentiate between what's important and urgent, versus what's not. Focus on tasks that are both important and urgent first.
        </div>
        <br /> <br />
        <br />
        <h5>Tools and apps</h5>
        <div className="subarticle">
          <br />
          <img src="/Time2.jpg" className="article_photo" />
          Utilize productivity tools and apps to help manage your tasks, schedule your day, set reminders, etc.
        </div>
        <br /> <br />
        <br />
        <h5>Time blocking</h5>
        <div className="subarticle">
          <img src="/Time3.jpg" className="article_photo" />
          On your daily list of things to do, pen in how much time you think each task will take you. If you don’t finish, stop when the time you allotted ends, and come back to it later. Sometimes moving on to different responsibilities and then coming back gives your mind a fresh start and a new perspective.
        </div>
        <br /> <br />
        <br />
        <h5>Daily routine</h5>
        <div className="subarticle">
          <br />
          <img src="/Time4.jpg" className="article_photo" />
          Having a set routine can help ensure that you're making the most of your day and not wasting time deciding what to do next. Why is this important? For starters, if a chaotic day comes along, you’ll still work through the issue while adhering to your routine. By sticking to your routine, you won’t be able to procrastinate. Most importantly, your mental health and stress levels with thank you.
        </div>
        <br /> <br />
        <br />
        <h5>Minimize interruptions</h5>
        <div className="subarticle">
          <br />
          <img src="/Time5.jpg" className="article_photo" />
          First and foremost, turn off your email notification. Set 30-minute blocks to check your email every couple hours instead of checking it every 15 minutes. Make sure you minimize non-work distractions such as your cell phone, social media, or your favorite online store. Try to create an environment where you're not constantly being interrupted. 
        </div>
        <br /> <br />
        <br />
        <h5>Review</h5>
        <div className="subarticle">
          <br />
          <img src="/Time6.jpg" className="article_photo" />
          Take time at the end of each week to review what you've accomplished and identify any challenges you faced. This can help you continually improve your time management and make necessary adjustments for the upcoming week. This process of self-reflection can help you identify time sinks, and efficiency gaps, or prioritize tasks better for future planning. 
        </div>
      </div>
    </div>
  );
}

export default Time;
