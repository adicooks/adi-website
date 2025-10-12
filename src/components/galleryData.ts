type Image = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  isVideo?: boolean;
  thumbnail?: string;
};

type YearlyImages = {
  [year: string]: Image[];
};

type GalleryCategory = {
  [subcategory: string]: Image[] | YearlyImages;
};

type GalleryData = {
  [category: string]: GalleryCategory;
};

const galleryData: GalleryData = {

  // STEM Competitions
  'Research': {
    'SeniorConnect': {
      '2023': [
        {
          id: 'jshs-1',
          src: '/images/Adi-JSHS-2023-award.jpg',
          alt: 'JSHS 2023 Award',
          caption: 'Award Ceremony at Southern JSHS',
        },
        {
          id: 'jshs-3',
          src: '/images/Adi-JSHS-2023.jpg',
          alt: 'Junior Science and Humanities Symposium',
          caption: 'Finalist at National JSHS',
        },
        {
          id: 'jshs-video',
          src: '/videos/Adi-JSHS-2023-video.MOV',
          alt: 'JSHS 2023 Presentation Video',
          caption: 'Presenting SeniorConnect Research at JSHS',
          isVideo: true,
          thumbnail: '/images/Adi-JSHS-2023-video-thumbnail.png'
        },
        {
          id: 'senior-connect-1',
          src: '/images/Adi-senior-connect-poster.jpg',
          alt: 'Senior Connect Project',
          caption: 'Presenting SeniorConnect Research at Delaware Valley Science Fair',
        },
      ],
    },
    'AlertNow': {
      '2025': [
        {
          id: 'dvsf-1',
          src: '/images/Adi-dvsf-2025-pic.jpg',
          alt: 'Delaware Valley Science Fair 2025',
          caption: 'Presenting AlertNow Research at Delaware Valley Science Fair',
        },
        {
          id: 'dvsf-award-1',
          src: '/images/Adi-DVSF-2025-Yale-award.jpg',
          alt: 'Yale Award at DVSF 2025',
          caption: 'Received Yale Science and Engineering Association Award for Most Outstanding Exhibitat Delaware Valley Science Fair',
        },
        {
          id: 'dvsf-award-2',
          src: '/images/DVSF-2025-Computerscience-2nd.jpg',
          alt: 'Computer Science Award',
          caption: '2nd Place in Computer Science Category for AlertNow Research at Delaware Valley Science Fair',
        },
        {
          id: 'dvsf-award-3',
          src: '/images/Adi-coriell-2nd-CS-2025.jpg',
          alt: 'Computer Science Award',
          caption: '2nd Place in Computer Science Category for AlertNow Research at Coriell Science Fair',
        },
      ],
    },
  },

  // Community Events
  'Community Service': {
    'coding-camp': [
      {
        id: 'mt-laurel-camp-4',
        src: '/images/Mt-Laurel-camp-2025-grp.jpg',
        alt: 'Group at Mt. Laurel Camp',
        caption: 'Mt. Laurel Coding Camp 2025',
      },
      {
        id: 'coding-camp-1',
        src: '/images/Adi-coding-camp-kahoot-2025.jpg',
        alt: 'Coding Camp Kahoot',
        caption: 'Moorestown Coding Camp 2025',
      },
      {
        id: 'helping-kids-1',
        src: '/images/Adi-helping-kids.jpg',
        alt: 'Helping kids',
        caption: 'Code Troubleshooting with Kids 2025',
      }
    ],
    'hindi-teaching-assistant': [
      {
        id: 'hindi-teaching-1',
        src: '/images/Adi-khushi-hindi.png',
        alt: 'Hindi Language Teaching Assistant',
        caption: 'Award ceremony at HindiUSA 2023',
      },
      {
        id: 'hindi-teaching-2',
        src: '/images/Adi-hindi-YV.jpg',
        alt: 'HindiUSA Youth Volunteer',
        caption: 'Cultural Day with HindiUSA Youth Volunteers 2024',
      },
      {
        id: 'hindi-teaching-video',
        src: '/videos/hindi-video.MOV',
        alt: 'Hindi Teaching Session',
        caption: 'Cultural Day preparation',
        isVideo: true,
        thumbnail: '/images/Hindi-video-thumbnail.png'
      }
    ],
    'Student Ambassador': {
      '2023': [
        {
          id: 'bharat-yatra-1',
          src: '/images/Adi-BY-2023-grp.JPG',
          alt: 'Group photo at US-India Student Meet',
          caption: 'US-India Student Meet at CC Academy, Gurugram, India',
        },
        {
          id: 'bharat-yatra-2',
          src: '/images/Adi-BY-Piano-solo-2023.JPG',
          alt: 'Piano Solo Performance',
          caption: 'Keyboard performance at CC Academy, Gurugram, India',
        },
        {
          id: 'bharat-yatra-3',
          src: '/images/Adi-Governor-AnandiBen.jpeg',
          alt: 'Meeting with India, UP Governor Anandi Ben',
          caption: 'US Student Delegate Meeting with State of Uttar Pradesh (India) Governor, Anandi Ben',
        },
        {
          id: 'hindi-iccr-1',
          src: '/images/Adi-BY-grp.JPG',
          alt: 'Bharat Yatra Group',
          caption: 'US Student Delegate to India',
        },
        {
          id: 'hindi-iccr-2',
          src: '/images/goldentemple.jpg',
          alt: 'At Golden Temple, Amritsar, India',
          caption: 'Golden Temple Visit During India Trip',
        },
        {
          id: 'hindi-iccr-3',
          src: '/images/Hindi.jpg',
          alt: 'Local Newspaper publication in India about student amabassador program',
          caption: 'Local Newspaper Article on US Student Delegate to India',
        },
        {
          id: 'hindi-iccr-4',
          src: '/images/iccr.jpg',
          alt: 'At Indian Council of Cultural Relations, New Delhi, India ',
          caption: 'Recognized at Indian Council of Cultural Relations, New Delhi, India ',
        },
        {
          id: 'hindi-iccr-5',
          src: '/images/hindi-13-teens.jpg',
          alt: 'At Indian Council of Cultural Relations, New Delhi, India ',
          caption: 'Local Newspaper Article on US Student Delegate to India',
        },
      ],
    },
    'civic-engagement': [
      {
        id: 'ali-1',
        src: '/images/Adi-Ali-leadership-2024.png',
        alt: 'Ali Civic Engagement Cohort 2024',
        caption: 'Civic Engagement with Senator Andy Kim 2024',
      },
      {
        id: 'ali-2',
        src: '/images/Adi-Ali-cohort.png',
        alt: 'Ali Leadership Engagement Cohort 2024',
        caption: 'Ali Leadership Engagement Cohort 2024',
      },
    ],
  },

  // Business Ventures
  Entrepreneurship: {
    'sneaker-business': {
      '2025': [
        {
          id: 'sneaker-collection-1',
          src: '/images/sneakercon.jpg',
          alt: 'Sneaker Collection',
          caption: 'Philly Sneaker Con',
        }],
      '2023': [
        {
          id: 'sneaker-resell-1',
          src: '/images/Business.jpg',
          alt: 'Sneaker Reselling',
          caption: 'Warehouse',
        }],
      '2020': [
        {
          id: 'sneaker-unboxing-video',
          src: '/videos/adi-shoe.MOV',
          alt: 'Sneaker Unboxing Video',
          caption: 'Air Jordan 5',
          isVideo: true,
          thumbnail: '/images/adi-shoe-thumbnail.png'
        }],
        'Circa BC': [
        {
          id: 'sneaker-finance-1',
          src: '/images/Adi-shoe-best.jpeg',
          alt: 'Sneaker Business Finances',
          caption: 'Sneaker Aficionado',
        }
      ]
    },
    'invest-ed': {
      '2023': [
        {
          id: 'invest-ed-2',
          src: '/images/invest-ed-grp.jpg',
          alt: 'InvestEd Team',
          caption: 'InvestEd Pitch to Investors',
        },
      ],
    },
  },

  // Piano Performances
  'Piano': {
    'crescendo-competition': {
      '2023': [
       
        {
          id: 'crescendo-1',
          src: '/images/adi-piano.jpg',
          alt: 'Crescendo International Music Competition',
          caption: 'Performance at Crescendo International Music Competition',
        },
        // Add more piano performance images here as needed
      ],
      '2024': [
       
        {
          id: 'crescendo-2',
          src: '/images/Adi-crescendo.jpg',
          alt: 'Crescendo International Music Competition',
          caption: 'Performance at Crescendo International Music Competition',
        },
        // Add more piano performance images here as needed
      ],
    },
  },
};

export default galleryData;
