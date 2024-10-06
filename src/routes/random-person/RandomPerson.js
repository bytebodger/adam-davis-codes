import { Route } from 'react-router-dom';
import { useMemo, useRef } from 'react';
import { getUrlParameters } from '../../common/functions/getUrlParameters';
import { getAge } from '../../common/functions/getAge';

export const RandomPerson = () => {
   const age = useRef('Age of Enlightenment');
   const country = useRef({});
   const countryName = useRef('');
   const model = useRef('');
   const fontNormal = { fontStyle: 'normal' };
   const label = useRef('');
   const year = useRef(0);

   useMemo(() => {
      const labels = [
         'actuary',
         'alchemist',
         'alewife',
         'ambassador',
         'amputeer',
         'archaenist',
         'armorer',
         'arsonist',
         'artist',
         'assassin',
         'astrologer',
         'bailiff',
         'baker',
         'bandit',
         'bard',
         'barker',
         'barrister',
         'bartender',
         'beggar',
         'blacksmith',
         'boatswain',
         'boatwright',
         'bodger',
         'bodyguard',
         'bookbinder',
         'bookie',
         'bottler',
         'bounty hunter',
         'bower',
         'brewer',
         'butcher',
         'butler',
         'calligrapher',
         'candlemaker',
         'captain',
         'carpenter',
         'cartographer',
         'cartwright',
         'chamberlain',
         'chancellor',
         'chef',
         'citizen',
         'clerk',
         'cobbler',
         'cognosci',
         'con artist',
         'conscript',
         'constable',
         'consultant',
         'cook',
         'courier',
         'courtesan',
         'crier',
         'deckhand',
         'detonatrix',
         'diver',
         'drill instructor',
         'ebny processor',
         'educator',
         'elder',
         'embroiderer',
         'engraver',
         'escort',
         'evangelist',
         'executioner',
         'explorer',
         'farmer',
         'farmhand',
         'ferry operator',
         'fish herder',
         'fisherman',
         'fishmonger',
         'flogger',
         'fortune teller',
         'fowler',
         'furrier',
         'gardener',
         'general',
         'gladiator',
         'governor',
         'grave digger',
         'grocer',
         'groomer',
         'guard',
         'guide',
         'healer',
         'herald',
         'herbalist',
         'herder',
         'hermit',
         'historian',
         'hobbler',
         'hunter',
         'innkeeper',
         'jailer',
         'janitor',
         'jester',
         'jeweler',
         'judge',
         'juggler',
         'lamplighter',
         'landlord',
         'leecher',
         'lender',
         'lieutenant',
         'locksmith',
         'lookout',
         'lumberjack',
         'marshal',
         'mason',
         'master',
         'medium',
         'mercenary',
         'merchant',
         'messenger',
         'miller',
         'minstrel',
         'minter',
         'monk',
         'mortician',
         'netminder',
         'noble',
         'painter',
         'peasant',
         'peddler',
         'physician',
         'pickpocket',
         'pilgrim',
         'pioneer',
         'playwright',
         'poacher',
         'poet',
         'porter',
         'potter',
         'priest',
         'privateer',
         'quartermaster',
         'raker',
         'ranger',
         'reaper',
         'reeve',
         'resistance fighter',
         'roofer',
         'root pusher',
         'root singer',
         'saltfoot',
         'scale inspector',
         'scaler',
         'scavenger',
         'scout',
         'scribe',
         'scrivener',
         'scullion',
         'servant',
         'settler',
         'sheriff',
         'singer',
         'smuggler',
         'socialite',
         'soldier',
         'solicitor',
         'spinster',
         'spiritualist',
         'squatter',
         'squire',
         'steward',
         'stonecutter',
         'summoner',
         'tailor',
         'tamer',
         'tanner',
         'tax collector',
         'theologian',
         'thespian',
         'thief',
         'thug',
         'tomb raider',
         'torturer',
         'trader',
         'trainer',
         'translator',
         'trapper',
         'treasurer',
         'trencher',
         'troubadour',
         'tutor',
         'union steward',
         'valet',
         'wagoner',
         'war counsel',
         'warden',
         'watchman',
         'weaver',
         'webber',
         'wheelwright',
         'whisperer',
         'wrangler',
         'writer',
         'yeoman',
      ];
      const countries = {
         'Adja': {
            demonym: 'Adjan',
            founded: 71,
            models: [
               'Dunerion',
               'Eldar',
               'Kahlek',
               'Mordai',
               'Onlock',
               'Orock',
               'Trow',
            ],
            nameBase: 'moldovan-names',
         },
         'Altakaya': {
            demonym: 'Altakayan',
            founded: 1570,
            models: [
               'Mordai',
               'Onlock',
               'Taniir',
            ],
            nameBase: 'greek-names',
         },
         'Amon-Morn': {
            demonym: 'Amornian',
            founded: 2174,
            models: [
               'Ahquinn',
               'Eldar',
               'Taniir',
            ],
            nameBase: 'gothic-names',
         },
         'Donethal': {
            demonym: 'Donethal',
            founded: 2111,
            models: [
               'Ahquinn',
               'Arago',
            ],
            nameBase: 'modern-irish-names',
         },
         'Donothor': {
            demonym: 'Donothor',
            founded: 800,
            models: [
               'Onlock',
               'Taniir',
            ],
            nameBase: 'italian-names',
         },
         'Harren': {
            demonym: 'Harren',
            founded: 85,
            models: [
               'Ahquinn',
               'Mordai',
            ],
            nameBase: 'latin-names',
         },
         'Herinesh': {
            demonym: 'Herinesh',
            founded: 1973,
            models: [
               'Arago',
               'Ashj-Shanah',
            ],
            nameBase: 'norman-names',
         },
         'Ileuthyia': {
            demonym: 'Ileuthyian',
            founded: 2478,
            models: [
               'Anorian',
               'Taniir',
            ],
            nameBase: 'polish-names',
         },
         'Iperia': {
            demonym: 'Iperian',
            founded: 1196,
            models: [
               'Ahquinn',
               'Arago',
               'Ashj-Shanah',
            ],
            nameBase: 'cornish-names',
         },
         'Kamarak': {
            demonym: 'Kamarak',
            founded: 1801,
            models: [
               'Kahlek',
               'Onlock',
               'Taniir',
            ],
            nameBase: 'celtic-welsh_names',
         },
         'Khulundar': {
            demonym: 'Khulundaran',
            founded: 2474,
            models: [
               'Romiir',
               'Taniir',
            ],
            nameBase: 'german-names',
         },
         'Klower': {
            demonym: 'Klowan',
            founded: 2239,
            models: [
               'Ahquinn',
               'Mordai',
               'Onlock',
               'Orock',
            ],
            nameBase: 'jamaican-names',
         },
         'Lhamborgelo': {
            demonym: 'Lhamborgelan',
            founded: 2005,
            models: [
               'Eldar',
               'Kahlek',
               'Taniir',
            ],
            nameBase: 'roma-gypsy-names',
         },
         'Memaruud': {
            demonym: 'Memaruud',
            founded: 1370,
            models: [
               'Ahquinn',
               'Dahlit',
               'Dunerion',
               'Eldar',
               'Trow',
            ],
            nameBase: 'cosmic-names',
         },
         'Mipheas': {
            demonym: 'Miphean',
            founded: 1109,
            models: [
               'Ahquinn',
               'Ashj-Shanah',
            ],
            nameBase: 'japanese-names',
         },
         'Morin': {
            demonym: 'Morinian',
            founded: 1410,
            models: [
               'Ahquinn',
               'Orock',
               'Trow',
            ],
            nameBase: 'latvian-names',
         },
         'Najez': {
            demonym: 'Najezian',
            founded: 2874,
            models: [
               'Ashj-Shanah',
            ],
            nameBase: 'estonian-names',
         },
         'Oxlight': {
            demonym: 'Oxlight',
            founded: 582,
            models: [
               'Anorian',
               'Taniir',
            ],
            nameBase: 'portuguese-names',
         },
         'Salaste': {
            demonym: 'Salastian',
            founded: 218,
            models: [
               'Anorian',
               'Taniir',
            ],
            nameBase: 'modern-welsh-names',
         },
         'Shunlerry': {
            demonym: 'Shunlian',
            founded: 1071,
            models: [
               'Ahquinn',
               'Eldar',
            ],
            nameBase: 'hebrew-names',
         },
         'Strynea': {
            demonym: 'Strynean',
            founded: 2552,
            models: [
               'Mordai',
               'Onlock',
            ],
            nameBase: 'dutch-names',
         },
         'Traith': {
            demonym: 'Traithian',
            founded: 659,
            models: [
               'Ahquinn',
               'Mordai',
               'Orock',
            ],
            nameBase: 'swedish-names',
         },
         'Vishnar': {
            demonym: 'Vishnarian',
            founded: 1475,
            models: [
               'Ashj-Shanah',
            ],
            nameBase: 'luxembourgish-names',
         },
         'Ytal': {
            demonym: 'Ytalian',
            founded: 2269,
            models: [
               'Romiir',
               'Taniir',
            ],
            nameBase: 'romanian-names',
         },
      };
      const labelIndex = Math.floor(Math.random() * labels.length);
      label.current = labels[labelIndex];
      const countryNames = Object.keys(countries);
      const countryIndex = Math.floor(Math.random() * countryNames.length);
      countryName.current = countryNames[countryIndex];
      country.current = countries[countryName.current];
      let startYear = country.current.founded;
      const urlParameters = getUrlParameters();
      if (urlParameters.hasOwnProperty('startYear')) {
         const requestedStartYear = parseInt(urlParameters.startYear, 10);
         if (startYear < requestedStartYear)
            startYear = requestedStartYear;
      }
      year.current = Math.floor(Math.random() * startYear + startYear);
      age.current = getAge(year.current);
      const modelIndex = Math.floor(Math.random() * country.current.models.length);
      model.current = country.current.models[modelIndex];
   }, []);

   return <>
      <Route
         exact={true}
         path={'/random-person'}
      >
         <div style={{
            fontSize: '1.5em',
            padding: '32px',
         }}>
            <span style={fontNormal}>
               <a
                  href={`https://www.fantasynamegenerators.com/${country.current.nameBase}.php`}
                  rel={'noreferrer'}
                  target={'_blank'}
               >
                  Get Name
               </a>
            </span>
            <br/>
            <br/>
            <span style={fontNormal}>
               <a
                  href={`https://www.worldanvil.com/w/ethyria/a/${model.current.toLowerCase()}-ethnicity`}
                  rel={'noreferrer'}
                  target={'_blank'}
               >
                  {model.current}
               </a>
            </span>
            <span style={fontNormal}> {label.current} </span>
            <span style={fontNormal}> from </span>
            <span style={fontNormal}>
               <a
                  href={`https://www.worldanvil.com/w/ethyria/a/${countryName.current.toLowerCase()}-organization`}
                  rel={'noreferrer'}
                  target={'_blank'}
               >
                  {countryName.current} ({country.current.demonym})
               </a>
            </span>
            <br/>
            <br/>
            <span style={fontNormal}>{year.current} </span>
            <span style={fontNormal}>({age.current})</span>
         </div>
      </Route>
   </>;
};