
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState } from 'react';
import "./Faq.css";

export default function FAQ() {

  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faqcard" id="faq" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/faq_bg.jpg'})`}}>
        <h2>FAQS</h2>
        <hr />
        <p>The health and safety of the donor as well as the recipient must be safeguarded.</p>
        <div className="quescard">
          <div>
            <Accordion className='ques' expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel1' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>How does the blood donation process work?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              Donating blood is a simple thing to do, but can make a big difference in the lives of others. The donation itself is only about 10-15 minutes on average. The steps in the process are:
              <ul>
                <li>You will complete donor registration, which includes information such as your name, address, phone number, and donor identification number (if you have one).</li>
                <li>You will have your temperature, hemoglobin, blood pressure and pulse checked.</li>
                <li>They will cleanse an area on your arm and insert a brand–new, sterile needle for the blood draw.</li>
                <li>After donation you will spend 10-15 minutes enjoying refreshments to allow your body time to adjust to the slight decrease in fluid volume.</li>
              </ul>
              Enjoy the feeling of accomplishment knowing that you have helped to save lives. Your gift of blood may help up to three people.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel2' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>How much blood can you donate at once?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              The procedure is safe and relatively painless. During a regular donation, you will give around 470ml of whole blood. This is about 8% of the average adult's blood volume. The body replaces this volume within 24 to 48 hours, and replenishes red blood cells in 10 to 12 weeks.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel3' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>Donated blood is used for?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel4'} onChange={handleAccordionChange('panel4')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel4' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>Is giving blood good for you?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              Regular blood donation is linked to lower blood pressure and heart attacks risk. “It definitely helps to reduce cardiovascular risk factors”.
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="accordion">
          <Accordion className='ques' expanded={expandedPanel === 'panel5'} onChange={handleAccordionChange('panel5')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel5' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What types of tests are performed on donated blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              After blood is drawn, it is tested for ABO group (blood type) and RH type (positive or negative). Test for unexpected red blood cell antibodies that may cause problems for the recipient can be performed upon the request of the patient's attending physician. Screening tests performed are listed below:
              <ul>
                <li>Hepatitis B surface antigen (HBsAg).</li>
                <li>Hepatitis C virus antibody (anti-HCV)/ antigen (HCV Ag).</li>
                <li>HIV-1 and HIV-2 antibody (anti-HIV-1 and anti-HIV-2) antigen (HIV-1 and HIV-2 Ag).</li>
                <li>Serologic test for syphilis.</li>
                <li>Nucleic acid amplification testing (NAT) for HIV-1, HCV and HBV if available.</li>

              </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel6'} onChange={handleAccordionChange('panel6')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel6' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>How long will it take to replenish the pint of blood I donate?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              Red cells need about 8-10 weeks for complete replacement. That’s why at least 12 weeks are required between whole blood donations.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel7'} onChange={handleAccordionChange('panel7')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel7' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do/not do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              The loss of red blood cells means that there is less oxygen circulating in the body. Donating blood usually does not affect a person’s daily routine. However, it can limit what a person can do immediately afterward. <br/>
              Self-Care After Donationg Blood:
              <ul>
                <li>Have a snack.</li>
                <li>Drink four additional 8-oz glasses of fluid over the next 24-hours.</li>
                <li>Avoid drinking alcohol for the first 24 hours after a donation.</li>
                <li>Keep the bandage on for several hours.</li>
                <li>Clean the area around the bandage with soap and water to avoid a skin rash.</li>
                <li>Avoid vigorous activity such as heavy lifting or strenuous exercise for the rest of the day.</li>
                <li>Eat food rich in iron</li>
              </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel8'} onChange={handleAccordionChange('panel8')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel8' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>Who Cannot donate blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
              You must be in good health at the time you donate. You cannot donate if you have a cold, flu, sore throat, cold sore, stomach bug or any other infection. If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
