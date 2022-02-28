
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
        <p>know more about blood donation and know how you can help people. </p>
        <div className="quescard">
          <div>
            <Accordion className='ques' expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel1' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel2' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel3' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel4'} onChange={handleAccordionChange('panel4')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel4' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="accordion">
          <Accordion className='ques' expanded={expandedPanel === 'panel5'} onChange={handleAccordionChange('panel5')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel5' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel6'} onChange={handleAccordionChange('panel6')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel6' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel7'} onChange={handleAccordionChange('panel7')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel7' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>

            <Accordion className='ques' expanded={expandedPanel === 'panel8'} onChange={handleAccordionChange('panel8')}>
              <AccordionSummary>
              <i class={expandedPanel === 'panel8' ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              <span>What should I do after donating blood?</span>
              </AccordionSummary>

              <AccordionDetails className='faqAns'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>
          {/* <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section>
          <section className="ques">
            <i class="fa-solid fa-plus"></i>
            <span>What should I do after donating blood?</span>
            <div className="faqAns">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit.
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}
