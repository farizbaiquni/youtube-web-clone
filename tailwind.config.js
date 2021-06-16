module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        // Adds a new breakpoint in addition to the default breakpoints
        spacing: {
          'thumbnails-width' : '360px',
          'thumbnails-height' : '480px'
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
        },
  
        maxWidth: {
        },
  
        maxHeight: {
        },

        letterSpacing: {
          youtube: '-.075em',
        }

      }, 

    },
    variants: {
      extend: {},
    },
    plugins: [],

  }