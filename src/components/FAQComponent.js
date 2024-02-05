import React, {useEffect} from 'react';
import { Divider, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'aos/dist/aos.css';
import AOS from 'aos';


const faqs = [
    {
      question: 'Why not hire a full-time engineer?',
      answer: 'For starters, the annual cost of a full-time senior level engineer now exceeds $100,000, plus benefits (and good luck finding a good one available). Aside from that, there may not always be enough work to keep them busy at all times, so you\'re paying for time you can\'t utilize. With a monthly plan, you can pause and resume your subscription as often as you need to ensure you\'re only paying your engineer when you have work available.'
    },
    {
      question: 'Is there a limit to how many requests I can have?',
      answer: 'Once subscribed, you\'re able to add as many design requests to your queue as you\'d like, and they will be delivered one by one.'
    },
    {
      question: 'How fast will I receive my MVP application and code with documentation?',
      answer: 'On average, most requests are completed in just two weeks or less. However, more complex requests can take longer.'
    },
    {
      question: 'Who are the Engineers?',
      answer: 'InfiniMVP is actually an agency of one. This means you\'ll work directly with me, founder of CodeContinuum. However, power-ups requests such as animations or custom complex integrations and designs flow\'s can be provided by partner designers and specialty engineers.'
    },
    {
      question: 'What tech Stacks do you build Concepts with?',
      answer: 'Most requests are created using React, Flask/Python, and MongoDB but can be catered to use any flavor depending on your organization needs.'
    },
    {
      question: 'What if I don\'t like the final MVP?',
      answer: 'No worries! We\'ll continue to revise the MVP until you\'re 100% satisfied.'
    },
    {
      question: 'Is there any Engineering work you don\'t cover?',
      answer: 'For now, we don\'t cover automations and anything requiring access to organization tools or lab environments. This may change in the future.'
    },
    {
      question: 'What if I only have a single request?',
      answer: 'You can pause your subscription when finished and return when you have additional needs. There\'s no need to let the rest of your subscription go to waste.'
    },
    {
      question: 'Are there any refunds If I don\'t like the service?',
      answer: 'Due to the high-quality nature and complexity of the work, there will be no refunds issued.'
    }
  ];
  

const FAQComponent = () => {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);
  return (
    <div>
      <Divider style={{ margin: '20px 0' }} />
      <Typography data-aos="fade-up" variant="h4" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      <Divider style={{ margin: '20px 0' }} />
      {faqs.map((faq, index) => (
        <Accordion data-aos="flip-up" key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQComponent;
