import { Route, Link } from 'react-router-dom';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { CSSTransition } from 'react-transition-group';
import { css3 } from '@toolz/css3/src/css3';
import { the } from '../../common/objects/the';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { Row } from '@toolz/material-ui/dist/Row';
import { useRef, memo, useMemo } from 'react';
import { useViewport } from '@toolz/use-viewport';
import { Column } from '@toolz/material-ui/dist/Column';
import { Footer } from '../../Footer';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';

export const FAQ = memo(() => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const getCssTransition = match => {
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
               key={'faq'}
               ref={nodeRef}
               style={style.outerDiv1}
            >
               <div style={style.outerDiv2}>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.outerColumn}
                     >
                        <h1 style={style.marginTop0}>FAQ</h1>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 Where can I download a copy of your resume?
                              </h3>
                              <div style={style.innerDiv}>
                                 Everything on the <Link to={'/resume'}>Resume</Link> page is designed to be printer-friendly. Go to town! Print as many copies as you like! Or just "print" it into a PDF format, if that's your preference.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 That's great that you have a resume website, but I need for you to <i>send me</i> a copy of your resume.
                              </h3>
                              <div style={style.innerDiv}>
                                 If this entire website, overflowing with personal and professional details about myself, doesn't satisfy your requirement that I "send you a copy of my resume", then please remove me from any
                                 further consideration for whatever role you might've wanted to offer me. Right now. And please, please, <i>please</i> don't ever call me again.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 Can you add the months to the start/end dates of your employment entries on your resume?
                              </h3>
                              <div style={style.innerDiv}>
                                 I have 30 years of experience on that resume. I built an entire React app just to document that experience and to illustrate my general coding abilities. And with all of that, you're gonna focus on
                                 the specific <i>month</i> when some past work experience started/ended? <i>C'mon, mannnn...</i> Seriously. If you're so worried about whether my time at Availity started in June or August or October,
                                 then I really don't think I'm the right guy for your position. If you're thinking that you need to grill me about any potential "gaps" in my work record then... <i>do better</i>. I'm not going to
                                 apologize to anyone if I happened to take a month-or-two off between any particular gig (although I rarely have).
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 Your email address doesn't appear to work.
                              </h3>
                              <div style={style.innerDiv}>
                                 I assume that you're trying to copy-and-paste the email address off of this website. You have to <i>type</i> the address into your email client. You can see an explanation of this <Link to={'/email'}>here</Link>.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 I'd like to talk to you about an onsite opportunity located in-
                              </h3>
                              <div style={style.innerDiv}>
                                 Lemme stop you right there. Maybe you didn't notice, but it says right on the home page that I'm a <b>remote</b> worker. It's not that I'm opposed to going onsite for unique situations. But I'm not
                                 interested in employers that think they need to walk by my desk seven times a day just to <i>check</i> if I'm coding. I have a pretty nice remote gig right now. The pay is decent. My colleagues are solid.
                                 My at-home work setup is ideal. I can generate huge volumes of code, and I can do it early in the morning or late at night without having to sit by myself in some abandoned office park after all of the{` `}
                                 <i>other</i> employees have gone home for the evening. So why on earth would I want to trade that in so that I can <i>commute</i> into your office every day??
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 I'd like to talk to you about an opportunity that <i>starts</i> as remote, and then-
                              </h3>
                              <div style={style.innerDiv}>
                                 <b>Stop.</b> I've seen a lot of these kinds of pitches lately - probably prompted by the pandemic. I tell people that I want to work remotely. So they pitch me some potential employer who says I can work remotely
                                 "to start". Like... I guess the assumption is that <i>at some point</i> they'll try to drag me back to their headquarters, right? I mean, if that weren't the case, why else would they indicate that
                                 it's "to start"? And if that <i>is</i> the case, why would I possibly want to put myself in a situation where, after a certain period of months, I'll have to relocate or lose my job? It just makes no
                                 sense at all. So please don't approach me about an "opportunity" for some place that will let me work remotely for the next several months - but will then expect me to relocate to someplace else entirely.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 I see that you live in Jacksonville, Florida, and you're interested in remote work. Well, I have a "remote" opportunity with a company right here in Jacksonville.
                              </h3>
                              <div style={style.innerDiv}>
                                 Before you get too far into your pitch... I'm probably not interested. You see, I've found through rather painful firsthand experience that, when you work "remotely", but you live in the same
                                 city as your employer's offices, they tend to just <i>assume</i> that you'll be happy to be in their offices most of the time. I've seen this play out badly in multiple scenarios. In fact, in
                                 one scenario, <i>the entire team was remote</i> but they still wanted me to come into the office every day - just because they knew that I lived in the same city. So to put this in a rather blunt
                                 manner, when I talk to a company about a so-called "remote" opportunity, and then I realize that they're located right here in my hometown, quite frankly... I don't <i>trust</i> them.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 We'd like you to do this little coding exercise to be considered for the job.
                              </h3>
                              <div style={style.innerDiv}>
                                 The answer is almost certainly: <i>Heck, no.</i> I'm sorry (not sorry) if that sounds rude. But you know what else is rude? Thinking that I'm gonna spend <i>days</i> building demo apps for a job that
                                 I may not even want if it were offered to me. Everyone swears that their quaint little demo app should only take a few hours to code up. And that's usually hogwash. If you want to see how I code, take
                                 a look at the code <i>for this site</i>. Check out the code for <a href={'https://spotifytoolz.com'}>Spotify Toolz</a>.
                                 Browse through any of the code in my <a href={'https://www.npmjs.com/search?q=%40toolz'}>NPM packages</a>. Or look through my <a href={'https://github.com/bytebodger'}>GitHub repositories</a>. I don't
                                 particularly care <i>where</i> you choose to look, but the point is that you can find plenty of live examples of the type of work I do.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 We need you to build our demo app because we don't know if the code in your repos was written <i>by you</i>.
                              </h3>
                              <div style={style.innerDiv}>
                                 I've written more than 80 blog articles talking about all aspects of my coding. I've put up dozens of GitHub repos and NPM packages. I launched several live sites (including <i>this</i> one) with
                                 custom code. But you really think that I went through all of that effort as some sort of elaborate ruse? Just to get my foot in the door of your vaunted company?? Look... if you're really not
                                 sure if this stuff was written <i>by me</i>, let's just do a
                                 screenshare. I can talk you through the coding decisions that I've made. I can even make some minor, live changes just to illustrate that it's all <i>mine</i>. If that's not sufficient for you,
                                 then I'm certain that I'd have no interest in working for your company.
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 We need you to complete these online coding tests...
                              </h3>
                              <div style={style.innerDiv}>
                                 OK, I'm not saying that I <i>won't</i> do your tests. But I won't be doing them if I'm not already deeply intrigued by your company. And even if I am, there's a decent chance that I'll <i>fail</i> them.
                                 Is that because I'm a crappy coder? Hardly. A quarter-century of experience seems to indicate that I'm not. It's because most of those online coding tests are completely unable to test a coder's actual
                                 skills. They create trivial tasks, with unnecessarily-complicated instructions, with artificial time constraints. You see, the real problem is that your fancy online coding tests <i>aren't testing
                                 what you think they're testing</i>. (P.S. I've actually blogged <i>extensively</i> about this exact subject.)
                              </div>
                           </Column>
                        </div>
                        <div style={style.height24Or48}/>
                        <div style={style.card}>
                           <Column xs={12}>
                              <h3 style={style.h3}>
                                 Why do you think you're a good fit for this company?
                              </h3>
                              <div style={style.innerDiv}>
                                 I'm putting this here because this is asked sooooo frequently in interviews - and it's one of the dumbest questions that I ever hear in an interview. First of all, I'm usually talking to companies
                                 that have reached out <i>to me</i>. It's like having someone ask you out on a date, and then they say, "So... why did you want to date me?" HR departments and marketing types usually don't want
                                 to hear this, but the simple fact is that I probably couldn't care less <i>what</i> your company does and, at the point you're asking me this question, I probably have no idea whether or not I'm a good
                                 fit for your company. I don't much care if you're in Silicon Valley or sub-Saharan Africa. I don't care if your company makes piston rings or SaaS products. The splendiforous nature of your company's
                                 product/industry/whatever has little-to-no impact on my desire to actually write code for your company. What I care about is: How does your
                                 current dev process work? How do you go about writing code? How do client needs/requests ultimately get communicated to the dev team? How are the devs in your company treated? What is it
                                 actually <i>like</i> to write code for your company? If I know <i>those</i> sorts of things, then I can more accurately
                                 answer whether I'm a good fit for your company and whether I'd even like to continue being considered for any potential role.
                              </div>
                           </Column>
                        </div>
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   };

   const style = useMemo(() => {
      const isMobile = ['xs', 'sm'].includes(viewport.size);
      return {
         card: {
            backgroundColor: the.color.white,
            borderRadius: 10,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
            padding: 20,
            position: css3.position.relative,
         },
         h3: {
            color: the.color.purple,
            fontSize: isMobile ? '0.9em' : '1em',
            marginTop: 0,
         },
         height24Or48: {
            height: isMobile ? 24 : 48,
         },
         innerDiv: {
            fontSize: isMobile ? '0.8em' : '0.9em',
            textAlign: css3.textAlign.justify,
         },
         marginTop0: {
            marginTop: 0,
         },
         outerColumn: {
            paddingLeft: 8,
            paddingRight: 8,
         },
         outerDiv1: {
            position: css3.position.absolute,
            width: '100%',
         },
         outerDiv2: {
            backgroundColor: the.color.sand,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
         },
      };
   }, [viewport.size]);

   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/faq'}
      />
   </>;
});
