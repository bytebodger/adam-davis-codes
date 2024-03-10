import { Route, Link } from 'react-router-dom';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { CSSTransition } from 'react-transition-group';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useRef, memo, useMemo, useCallback } from 'react';
import { useViewport } from '@toolz/use-viewport';
import { Column } from '@toolz/material-ui/dist/Column';
import { Footer } from '../../common/components/Footer';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../common/components/Header';
import '../../common/css/baseProperties.css';
import './css/faq.css';
import { Row } from '../../common/components/Row';

export const FAQ = memo(() => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const faqs = useMemo(() => {
      return [
         {
            question: <>
               Where can I download a copy of your resume?
            </>,
            answer: <>
               Here is the <Link to={'/print-resume'}>printer-friendly version</Link> of my resume. Go to town! Print as many hardcopies as you like! Or just save it into a PDF format, if that's your preference.
            </>,
         },
         {
            question: <>
               That's great that you have a resume website, but I need for you to <i>send me</i> a copy of your resume.
            </>,
            answer: <>
               If I send you a copy of my resume, it will be <i>the exact same document</i> that you'd get by going to <Link to={'/print-resume'}>this page</Link> page and saving it to PDF. If you don't know how to
               save files from your browser into a PDF format then... I can't help you.
            </>,
         },
         {
            question: <>
               Your email address doesn't appear to work.
            </>,
            answer: <>
               I assume that you're trying to copy-and-paste the email address off of this website. You have to <i>type</i> the address into your email client. You can see an explanation of this <Link to={'/email'}>here</Link>.
            </>,
         },
         {
            question: <>
               I'd like to talk to you about an onsite opportunity located in-
            </>,
            answer: <>
               Lemme stop you right there. Maybe you didn't notice, but it says right on the home page that I'm a <b>remote</b> worker. It's not that I'm opposed to going onsite <i>temporarily</i>. But I'm not
               interested in employers that think they need to walk by my desk seven times a day just to <i>check</i> if I'm coding. I have a pretty nice remote gig right now. The pay is decent. My colleagues are solid.
               My at-home work setup is ideal. I can generate huge volumes of code, and I can do it early in the morning or late at night without having to sit by myself in some abandoned office park after all of the{` `}
               <i>other</i> employees have gone home for the evening. So why on earth would I want to trade that in so that I can <i>commute</i> into your office every day??
            </>,
         },
         {
            question: <>
               I'd like to talk to you about an opportunity that <i>starts</i> as remote, and then-
            </>,
            answer: <>
               <b>Stop.</b> I've seen a lot of these kinds of pitches lately - probably prompted by the pandemic. I tell people that I want to work remotely. So they pitch me some potential employer who says I can work remotely
               "to start". Like... I guess the assumption is that <i>at some point</i> they'll try to drag me back to their headquarters, right? I mean, if that weren't the case, why else would they indicate that
               it's "to start"? And if that <i>is</i> the case, why would I possibly want to put myself in a situation where, after a certain period of months, I'll have to relocate or lose my job? It just makes no
               sense at all. So please don't approach me about an "opportunity" for some place that will let me work remotely for the next several months - but will then expect me to relocate to someplace else entirely.
            </>,
         },
         {
            question: <>
               I see that you live in New Orleans and you're interested in remote work. Well, I have a "remote" opportunity with a company right here in New Orleans.
            </>,
            answer: <>
               Before you get too far into your pitch... I'm probably not interested. You see, I've found through rather painful firsthand experience that, when you work "remotely", but you live in the same
               city as your employer's offices, they tend to just <i>assume</i> that you'll be happy to be in their offices most of the time. I've seen this play out badly in multiple scenarios. In fact, in
               one scenario, <i>the entire team was remote</i> but they still wanted me to come into the office every day - just because they knew that I lived in the same city. So to put this in a rather blunt
               manner, when I talk to a company about a so-called "remote" opportunity, and then I realize that they're located right here in my hometown, quite frankly... I don't <i>trust</i> them.
            </>,
         },
         {
            question: <>
               We'd like you to do this little coding exercise to be considered for the job.
            </>,
            answer: <>
               The answer is probably: <i>No, thanks.</i> I'm sorry if that sounds rude. But I don't have time to spend <i>days</i> building demo apps for a job that
               I may not even want if it were offered to me. Everyone swears that their quaint little demo app should only take a few hours to code up. And that's usually wishful thinking. If you want to see how I code, take
               a look at the code <i>for this site</i>. You can find it <a href={'https://github.com/bytebodger/adam-davis-codes'}>here</a>. Check out the code for <a href={'https://spotifytoolz.com'}>Spotify Toolz</a>.
               You can find it <a href={'https://github.com/bytebodger/spotify'}>here</a>. Browse through any of the code in my <a href={'https://www.npmjs.com/search?q=%40toolz'}>NPM packages</a>. Or look through
               my <a href={'https://github.com/bytebodger'}>GitHub repositories</a>. I don't particularly care <i>where</i> you choose to look, but the point is that you can find plenty of live examples of the type of work I do.
            </>,
         },
         {
            question: <>
               We need you to build our demo app because we don't know if the code in your repos was written <i>by you</i>.
            </>,
            answer: <>
               I've written well over 100 blog articles talking about all aspects of my coding. I've put up dozens of GitHub repos and NPM packages. I've launched several live sites (including <i>this</i> one) with
               custom code. But you really think that I went through all of that effort as some sort of elaborate ruse? Just to get my foot in the door of your company?? Look... if you're really not
               sure if this stuff was written <i>by me</i>, let's just do a screenshare. I can talk you through the coding decisions that I've made. I can even make some minor, live changes just to illustrate that it's all <i>mine</i>.
            </>,
         },
         {
            question: <>
               We need you to complete these online coding tests...
            </>,
            answer: <>
               OK, I'm not saying that I <i>won't</i> do your tests. But I won't be doing them if I'm not already deeply intrigued by your company. And even if I am, there's a decent chance that I'll <i>fail</i> them.
               Is that because I'm a crappy coder? Hardly. A quarter-century of experience seems to indicate that I'm not. It's because most of those online coding tests are completely unable to test a coder's actual
               skills. They create trivial tasks, with unnecessarily-complicated instructions, with artificial time constraints. You see, the real problem is that your fancy online coding tests <i>aren't testing
               what you think they're testing</i>. (P.S. I've actually blogged <i>extensively</i> about this exact subject.)
            </>,
         },
         {
            question: <>
               Why do you think you're a good fit for this company?
            </>,
            answer: <>
               I'm putting this here because this is asked sooooo frequently in interviews - and it's honestly one of the strangest questions that I ever hear in an interview. First of all, I'm usually talking to companies
               that have reached out <i>to me</i>. It's like having someone ask you out on a date, and then they say, "So... why did you want to date me?" HR departments and marketing types usually don't want
               to hear this, but the simple fact is that I probably couldn't care less <i>what</i> your company does and, at the point you're asking me this question, I probably have no idea whether or not I'm a good
               fit for your company. I don't much care if you're in Silicon Valley or sub-Saharan Africa. I don't care if your company makes piston rings or SaaS products. The splendiforous nature of your company's
               product/industry/whatever has little-to-no impact on my desire to actually write code for your company. What I care about is: How does your <i>current</i> dev process work (or... not)? How do you go about
               writing code? How do client needs/requests ultimately get communicated to the dev team? How are the devs in your company treated? What is it actually <i>like</i> to write code for your company? If I
               know <i>those</i> sorts of things, then I can more accurately answer whether I'm a good fit for your company and whether I'd even like to continue being considered for any potential role.
            </>,
         },
      ];
   }, []);

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport]);

   const getFaqs = useCallback(() => {
      return faqs.map((faq, index) => {
         return <div key={`faq-${index}`}>
            <div className={'card'}>
               <Column xs={12}>
                  <h3
                     style={{fontSize: isMobile ? '0.9em' : '1em'}}
                  >
                     {faq.question}
                  </h3>
                  <div
                     className={'textAlignJustify'}
                     style={{fontSize: isMobile ? '0.8em' : '0.9em'}}
                  >
                     {faq.answer}
                  </div>
               </Column>
            </div>
            <div style={{height: isMobile ? 24 : 48}}/>
         </div>;
      });
   }, [faqs, isMobile]);

   const getCssTransition = useCallback(match => {
      if (match !== null)
         logGooglePageHit('faq');
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               className={'outerDiv'}
               key={'faq'}
               ref={nodeRef}
            >
               <Header/>
               <div
                  className={'backgroundColorSand'}
                  style={{
                     paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
                     paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
                  }}
               >
                  <Row className={'justifyContentEvenly'}>
                     <Column
                        className={'faqContainerColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 className={'marginTop_0'}>FAQ</h1>
                        {getFaqs()}
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [getFaqs, viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/faq'}
      />
   </>;
});
