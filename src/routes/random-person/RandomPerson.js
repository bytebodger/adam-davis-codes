import { Route } from 'react-router-dom';
import { useMemo, useRef } from 'react';
import { getUrlParameters } from '../../common/functions/getUrlParameters';
import { getAge } from '../../common/functions/getAge';

export const RandomPerson = () => {
   const age = useRef('Age of Enlightenment');
   const country = useRef({});
   const countryName = useRef('');
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
            'start': 71,
            'demonym': 'Adjan',
            'nameBase': 'moldovan-names',
         },
         'Altakaya': {
            'start': 1570,
            'demonym': 'Altakayan',
            'nameBase': 'greek-names',
         },
         'Amon-Morn': {
            'start': 2174,
            'demonym': 'Amornian',
            'nameBase': 'gothic-names',
         },
         'Donethal': {
            'start': 2111,
            'demonym': 'Donethal',
            'nameBase': 'modern-irish-names',
         },
         'Donothor': {
            'start': 800,
            'demonym': 'Donothor',
            'nameBase': 'italian-names',
         },
         'Harren': {
            'start': 85,
            'demonym': 'Harren',
            'nameBase': 'latin-names',
         },
         'Herinesh': {
            'start': 1973,
            'demonym': 'Herinesh',
            'nameBase': 'norman-names',
         },
         'Ileuthyia': {
            'start': 2478,
            'demonym': 'Ileuthyian',
            'nameBase': 'polish-names',
         },
         'Iperian': {
            'start': 1196,
            'demonym': 'Iperian',
            'nameBase': 'cornish-names',
         },
         'Kamarak': {
            'start': 1801,
            'demonym': 'Kamarak',
            'nameBase': 'celtic-welsh_names',
         },
         'Khulundar': {
            'start': 2474,
            'demonym': 'Khulundaran',
            'nameBase': 'german-names',
         },
         'Klower': {
            'start': 2239,
            'demonym': 'Klowan',
            'nameBase': 'jamaican-names',
         },
         'Lhamborgelo': {
            'start': 2005,
            'demonym': 'Lhamborgelan',
            'nameBase': 'roma-gypsy-names',
         },
         'Memaruud': {
            'start': 1370,
            'demonym': 'Memaruud',
            'nameBase': 'cosmic-names',
         },
         'Mipheas': {
            'start': 1109,
            'demonym': 'Miphean',
            'nameBase': 'japanese-names',
         },
         'Morin': {
            'start': 1410,
            'demonym': 'Morinian',
            'nameBase': 'latvian-names',
         },
         'Najez': {
            'start': 2874,
            'demonym': 'Najezian',
            'nameBase': 'estonian-names',
         },
         'Oxlight': {
            'start': 582,
            'demonym': 'Oxlight',
            'nameBase': 'portuguese-names',
         },
         'Salaste': {
            'start': 218,
            'demonym': 'Salastian',
            'nameBase': 'modern-welsh-names',
         },
         'Shunlerry': {
            'start': 1071,
            'demonym': 'Shunlerrian',
            'nameBase': 'hebrew-names',
         },
         'Strynea': {
            'start': 2552,
            'demonym': 'Strynean',
            'nameBase': 'dutch-names',
         },
         'Traith': {
            'start': 659,
            'demonym': 'Traithian',
            'nameBase': 'swedish-names',
         },
         'Vishnar': {
            'start': 1475,
            'demonym': 'Vishnarian',
            'nameBase': 'luxembourgish-names',
         },
         'Ytal': {
            'start': 2269,
            'demonym': 'Ytalian',
            'nameBase': 'romanian-names',
         },
      };
      const labelIndex = Math.floor(Math.random() * labels.length);
      label.current = labels[labelIndex];
      const countryNames = Object.keys(countries);
      const countryIndex = Math.floor(Math.random() * countryNames.length);
      countryName.current = countryNames[countryIndex];
      country.current = countries[countryName.current];
      let startYear = country.current.start;
      const urlParameters = getUrlParameters();
      if (urlParameters.hasOwnProperty('startYear')) {
         const requestedStartYear = parseInt(urlParameters.startYear, 10);
         if (startYear < requestedStartYear)
            startYear = requestedStartYear;
      }
      year.current = Math.floor(Math.random() * startYear + startYear);
      age.current = getAge(year.current);
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
            <span style={fontNormal}>{year.current}</span>
            {' '}
            <span style={fontNormal}>{age.current}</span>
            {' '}in{' '}
            <span id='country'>
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
            <span style={fontNormal}>{label.current}</span>
            <br/>
            <br/>
            <span style={fontNormal}>
               <a
                  href={`https://www.fantasynamegenerators.com/${country.current.nameBase}.php`}
                  rel={'noreferrer'}
                  target={'_blank'}
               >
                  Get Name
               </a>
            </span>
         </div>
      </Route>
   </>;
};