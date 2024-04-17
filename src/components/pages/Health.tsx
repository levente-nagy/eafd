import Carousel from 'react-bootstrap/Carousel';

function Health() {
  return (
    <div>
      <div className="article">
        <br />
        <h3>Health</h3>
        <br />
        <Carousel slide={false}>
      <Carousel.Item>
        <img src="/Health1.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Health2.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Health3c.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Health4.jpg" className="article_banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Health5.jpg" className="article_banner" />
      </Carousel.Item>
    </Carousel>
 
        <br />
        <br />
        <br />
        <b>Summary</b>
        <ul>
          <li>Get enough sleep</li>
          <li>Schedule a physical exam</li>
          <li>Understand health indicators</li>
          <li>Keep track of your records</li>
          <li>Improve your lifestyle</li>
        </ul>
        <br />
        <div className="intro">
        Taking control of your health is essential to a life lived well. Your health is important. Taking charge can mean the difference between prevention and treatment. So no matter what excuses have gotten in the way in the past, small steps today can still add up to big changes in your health. Here are five health tips to help you take charge, starting now.
        </div>
        <br /> <br />
        <h5>Get enough sleep</h5>
        <div className="subarticle">
          <img src="/Health1.jpg" className="article_photo" />
          Sleep should be a top priority. The average adult needs seven to eight hours of sleep each night. Sleep deficiency increases your risk of heart disease, diabetes, obesity, cancer and depression, as is reported by majority of physicians. Without enough sleep, all efforts to take charge of your health lose effectiveness. That's because sleep is what helps you recover from exercise, think clearly and manage stress. Sleep deprivation can undo all of your hard work with diet and exercise because a tired body can overproduce insulin and ghrelin (the "hunger" hormone). 
        </div>
        <br /> <br />
        <br />
        <h5>Schedule a physical exam</h5>
        <div className="subarticle">
          <br />
          <img src="/Health2.jpg" className="article_photo" />
          Regular health exams are important for preventing disease and detecting problems early. Going to them is one of the simplest ways to stay on top of your health.<br/>
Your primary care provider will review your personal and family history, check your vital signs, and gather other information to get an overall view of your health. They may also order blood tests to confirm how your organs are functioning. Depending on your age, medical history and family history, your doctor may recommend additional screening tests.<br/>
Your age, health, family history and lifestyle choices all contribute to determining how regularly you should have physical exams, so be sure to discuss these factors with your doctor to determine how often you should come in.<br/>
Also, don’t forget to include regular exams to a dentist- poor dental condition can impact overall health.

        </div>
        <br /> <br />
        <br />
        <h5>Understand health indicators</h5>
        <div className="subarticle">
          <img src="/Health3.jpg" className="article_photo" />
          Understanding your vital signs, including blood pressure, heart rate, respiration rate and temperature, and what they mean for your health can help you proactively impact your well-being.<br/><br/>
You can make the most of doctor visits by bringing a list of questions to ask. Your doctor collects a lot of information about your health, but sometimes you may need to speak up. Asking the questions you need to understand what tests look for, when to expect results, and how to interpret your results in crucial. Understanding these tests and knowing the normal ranges will help you ask more informed questions about your results.<br/><br/>
Tip: Don’t try to interpret the results that you get from tests reading on the internet. You’ll get a pile of contradictory information, that is not correlated with your own condition and this can generate an extra stress and completely wrong impressions.

        </div>
        <br /> <br />
        <br />
        <h5>Keep track of your records</h5>
        <div className="subarticle">
          <br />
          <img src="/Health4.jpg" className="article_photo" />
          <div className='sub_text'>
          Maintaining your own up-to-date personal health record in one place means it is available for you anytime to share with healthcare providers. It also ensures that you have the most recent health information at your fingertips so you can make knowledgeable decisions.<br/>
Your records should include information such as your:
<ul>
    <li>Medications.</li>
    <li>Health conditions and medical history.</li>
    <li>Dates and results of checkups and screening tests.</li>
    <li>Contact information for your healthcare providers.</li>
    <li>Emergency contacts.</li>
    </ul>
        </div>
        </div>
        <br /> <br />
        <br />
        <h5>Improve your lifestyle</h5>
        <div className="subarticle">
          <br />
          <img src="/Health5.jpg" className="article_photo" />
          <div className='sub_text'>
          Take control of your health by choosing a healthy lifestyle. Eating a healthy diet and getting regular exercise can help you keep your weight, blood sugar level, blood pressure and cholesterol level in a healthy range. It is important to talk to your doctor about what diet and level of activity are best for you. Here are two tips to make these changes simple and doable:
          <ul>
            <li>Focus on eating a variety of fruits, vegetables and lean or low-fat protein sources while limiting added sugars, sodium and trans-fats.</li>
            <li>The recommended activity guideline is 30 minutes of moderate exercise five days per week plus muscle strengthening activities twice per week. The 30 minutes doesn't have to be all at once — you can break it down into smaller increments of time. Working physical activity into your daily life will help ensure success.</li>
          </ul>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Health;
