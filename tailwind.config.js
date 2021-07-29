module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        // Adds a new breakpoint in addition to the default breakpoints
        spacing: {
          'thumbnails-width' : '360px',
          'thumbnails-height' : '480px',
          'youtube-ratio' : '56.25%',
          '680px': '680px',
        }, 
  
        screens: {
          '2xl-max': {'max': '1535px'},
          // => @media (max-width: 1535px) { ... }
    
          'xl-max': {'max': '1279px'},
          // => @media (max-width: 1279px) { ... }
    
          'lg-max': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'md-max': {'max': '767px'},
          // => @media (max-width: 767px) { ... }
    
          'sm-max': {'max': '639px'},
          // => @media (max-width: 639px) { ... }

          '1125px-max': {'max': '1125px'},
          '985px-max': {'max': '985px'},
        
        },
        
        gridTemplateColumns: {
          // Simple 16 column grid
         '16': 'repeat(16, minmax(0, 1fr))',

          // Complex site-specific column configuration
         'footer': '200px minmax(900px, 1fr) 100px',
        },

        minWidth: {
          '350px': '300px',
          '680px': '750px',
        },

        maxWidth: {
          '900px': '900px'
        },
  
        maxHeight: {
        },

        letterSpacing: {
          youtube: '-.075em',
        },
        
      }, 

    },
    variants: {
      extend: {},
    },
    plugins: [],

  }