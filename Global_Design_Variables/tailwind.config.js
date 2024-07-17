module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      extend: {
        colors: {
          'bbt-color-base-black': '#1b1c1b',
          'bbt-color-base-white': '#ffffff',
          'bbt-color-blue-100': '#ecf5fd',
          'bbt-color-blue-1000': '#3d9cea',
          'bbt-color-blue-1100': '#228fe8',
          'bbt-color-blue-1200': '#1680d6',
          'bbt-color-blue-1300': '#1470bb',
          'bbt-color-blue-1400': '#1160a1',
          'bbt-color-blue-1500': '#0e5086',
          'bbt-color-blue-1600': '#0b406b',
          'bbt-color-blue-1700': '#083050',
          'bbt-color-blue-1800': '#062036',
          'bbt-color-blue-1900': '#03101b',
          'bbt-color-blue-200': '#d8ebfb',
          'bbt-color-blue-300': '#c5e1f9',
          'bbt-color-blue-400': '#b1d8f7',
          'bbt-color-blue-500': '#9ecef5',
          'bbt-color-blue-600': '#8bc4f3',
          'bbt-color-blue-700': '#77baf1',
          'bbt-color-blue-800': '#64b0ef',
          'bbt-color-blue-900': '#51a6ed',
          'bbt-color-brand-100': '#e5fff2',
          'bbt-color-brand-1000': '#00ff80',
          'bbt-color-brand-1100': '#00e673',
          'bbt-color-brand-1200': '#00cc66',
          'bbt-color-brand-1300': '#00b359',
          'bbt-color-brand-1400': '#00994d',
          'bbt-color-brand-1500': '#008040',
          'bbt-color-brand-1600': '#006633',
          'bbt-color-brand-1700': '#004d26',
          'bbt-color-brand-1800': '#00331a',
          'bbt-color-brand-1900': '#001a0d',
          'bbt-color-brand-200': '#ccffe5',
          'bbt-color-brand-300': '#b3ffd9',
          'bbt-color-brand-400': '#99ffcc',
          'bbt-color-brand-500': '#80ffbf',
          'bbt-color-brand-600': '#66ffb2',
          'bbt-color-brand-700': '#4dffa6',
          'bbt-color-brand-800': '#4dffa6',
          'bbt-color-brand-900': '#1aff8c',
          'bbt-color-brand-alpha-100': '#00b35914',
          'bbt-color-brand-alpha-200': '#00b35929',
          'bbt-color-brand-alpha-25': '#00b35900',
          'bbt-color-brand-alpha-300': '#00b35959',
          'bbt-color-brand-alpha-400': '#00b35980',
          'bbt-color-brand-alpha-50': '#00b3590a',
          'bbt-color-brand-alpha-500': '#00b3598f',
          'bbt-color-brand-alpha-600': '#00b359cc',
          'bbt-color-brand-alpha-700': '#00b359eb',
          'bbt-color-brand-alpha-800': '#00b359f0',
          'bbt-color-brand-alpha-900': '#00b359f5',
          'bbt-color-brand-alpha-950': '#00b359fa',
          'bbt-color-error-100': '#fde8e7',
          'bbt-color-error-1000': '#ec1713',
          'bbt-color-error-1100': '#d51411',
          'bbt-color-error-1200': '#bd120f',
          'bbt-color-error-1300': '#a5100d',
          'bbt-color-error-1400': '#8d0e0b',
          'bbt-color-error-1500': '#750b0a',
          'bbt-color-error-1600': '#5e0908',
          'bbt-color-error-1700': '#470706',
          'bbt-color-error-1800': '#2f0504',
          'bbt-color-error-1900': '#170202',
          'bbt-color-error-200': '#fbd1d0',
          'bbt-color-error-300': '#f9b9b8',
          'bbt-color-error-400': '#f7a2a1',
          'bbt-color-error-500': '#f58b89',
          'bbt-color-error-600': '#f47471',
          'bbt-color-error-700': '#f25c5a',
          'bbt-color-error-800': '#f04542',
          'bbt-color-error-900': '#ee2e2b',
          'bbt-color-gray-100': '#f8f8f6',
          'bbt-color-gray-1000': '#848483',
          'bbt-color-gray-1100': '#777776',
          'bbt-color-gray-1200': '#6b6b6a',
          'bbt-color-gray-1300': '#5f5f5e',
          'bbt-color-gray-1400': '#535352',
          'bbt-color-gray-1500': '#464746',
          'bbt-color-gray-1600': '#3b3c3b',
          'bbt-color-gray-1700': '#303130',
          'bbt-color-gray-1800': '#252625',
          'bbt-color-gray-1900': '#1b1c1b',
          'bbt-color-gray-200': '#f1f2ef',
          'bbt-color-gray-300': '#e3e3e0',
          'bbt-color-gray-400': '#d4d5d2',
          'bbt-color-gray-500': '#c7c7c5',
          'bbt-color-gray-600': '#b9b9b7',
          'bbt-color-gray-700': '#abacaa',
          'bbt-color-gray-800': '#9e9e9c',
          'bbt-color-gray-900': '#91918f',
          'bbt-color-gray-alpha-100': '#1b1c1b14',
          'bbt-color-gray-alpha-200': '#1b1c1b29',
          'bbt-color-gray-alpha-25': '#1b1c1b00',
          'bbt-color-gray-alpha-300': '#1b1c1b59',
          'bbt-color-gray-alpha-400': '#1b1c1b80',
          'bbt-color-gray-alpha-50': '#1b1c1b0a',
          'bbt-color-gray-alpha-500': '#1b1c1b8f',
          'bbt-color-gray-alpha-600': '#1b1c1bcc',
          'bbt-color-gray-alpha-700': '#1b1c1beb',
          'bbt-color-gray-alpha-800': '#1b1c1bf0',
          'bbt-color-gray-alpha-900': '#1b1c1bf5',
          'bbt-color-gray-alpha-950': '#1b1c1bfa',
          'bbt-color-orange-100': '#fffaf7',
          'bbt-color-orange-1000': '#cc5e12',
          'bbt-color-orange-1100': '#b55410',
          'bbt-color-orange-1200': '#a04a0e',
          'bbt-color-orange-1300': '#8d410d',
          'bbt-color-orange-1400': '#78380b',
          'bbt-color-orange-1500': '#652e09',
          'bbt-color-orange-1600': '#532707',
          'bbt-color-orange-1700': '#401d06',
          'bbt-color-orange-1800': '#2f1504',
          'bbt-color-orange-1900': '#1d0d03',
          'bbt-color-orange-200': '#feede1',
          'bbt-color-orange-300': '#fdd9bf',
          'bbt-color-orange-400': '#fdc7a2',
          'bbt-color-orange-500': '#fcb380',
          'bbt-color-orange-600': '#fb9f60',
          'bbt-color-orange-700': '#fa893a',
          'bbt-color-orange-800': '#f77216',
          'bbt-color-orange-900': '#e06814',
          'bbt-color-pink-100': '#fef9fc',
          'bbt-color-pink-1000': '#da438d',
          'bbt-color-pink-1100': '#c23b7e',
          'bbt-color-pink-1200': '#ac3470',
          'bbt-color-pink-1300': '#982e62',
          'bbt-color-pink-1400': '#812754',
          'bbt-color-pink-1500': '#6d2147',
          'bbt-color-pink-1600': '#5a1c3a',
          'bbt-color-pink-1700': '#46152d',
          'bbt-color-pink-1800': '#330f21',
          'bbt-color-pink-1900': '#1f0a14',
          'bbt-color-pink-200': '#fdebf4',
          'bbt-color-pink-300': '#fbd7e9',
          'bbt-color-pink-400': '#f9c3dd',
          'bbt-color-pink-500': '#f7add1',
          'bbt-color-pink-600': '#f499c6',
          'bbt-color-pink-700': '#f282b9',
          'bbt-color-pink-800': '#f06aac',
          'bbt-color-pink-900': '#ed4d9c',
          'bbt-color-purple-100': '#fcfbff',
          'bbt-color-purple-1000': '#8e60f6',
          'bbt-color-purple-1100': '#7e54e0',
          'bbt-color-purple-1200': '#704ac7',
          'bbt-color-purple-1300': '#6341af',
          'bbt-color-purple-1400': '#543894',
          'bbt-color-purple-1500': '#462f7d',
          'bbt-color-purple-1600': '#3a2667',
          'bbt-color-purple-1700': '#2d1d4f',
          'bbt-color-purple-1800': '#201539',
          'bbt-color-purple-1900': '#140d23',
          'bbt-color-purple-200': '#f3eefe',
          'bbt-color-purple-300': '#e6dcfd',
          'bbt-color-purple-400': '#dacbfc',
          'bbt-color-purple-500': '#ceb9fb',
          'bbt-color-purple-600': '#c1a8fa',
          'bbt-color-purple-700': '#b496f9',
          'bbt-color-purple-800': '#a885f8',
          'bbt-color-purple-900': '#9b72f7',
          'bbt-color-success-100': '#e5fff2',
          'bbt-color-success-1000': '#00ff80',
          'bbt-color-success-1100': '#00e673',
          'bbt-color-success-1200': '#00cc66',
          'bbt-color-success-1300': '#00b359',
          'bbt-color-success-1400': '#00994d',
          'bbt-color-success-1500': '#008040',
          'bbt-color-success-1600': '#006633',
          'bbt-color-success-1700': '#004d26',
          'bbt-color-success-1800': '#00331a',
          'bbt-color-success-1900': '#001a0d',
          'bbt-color-success-200': '#ccffe5',
          'bbt-color-success-300': '#b3ffd9',
          'bbt-color-success-400': '#99ffcc',
          'bbt-color-success-500': '#80ffbf',
          'bbt-color-success-600': '#66ffb2',
          'bbt-color-success-700': '#4dffa6',
          'bbt-color-success-800': '#4dffa6',
          'bbt-color-success-900': '#1aff8c',
          'bbt-color-warning-100': '#fef8e6',
          'bbt-color-warning-1000': '#f9b806',
          'bbt-color-warning-1100': '#e0a606',
          'bbt-color-warning-1200': '#c79305',
          'bbt-color-warning-1300': '#ae8104',
          'bbt-color-warning-1400': '#956e04',
          'bbt-color-warning-1500': '#7c5c03',
          'bbt-color-warning-1600': '#634a03',
          'bbt-color-warning-1700': '#4b3702',
          'bbt-color-warning-1800': '#322501',
          'bbt-color-warning-1900': '#191201',
          'bbt-color-warning-200': '#fef1cd',
          'bbt-color-warning-300': '#fdeab4',
          'bbt-color-warning-400': '#fdeab4',
          'bbt-color-warning-500': '#fdeab4',
          'bbt-color-warning-600': '#fbd46a',
          'bbt-color-warning-700': '#fbcd51',
          'bbt-color-warning-800': '#fac638',
          'bbt-color-warning-900': '#f9bf1f',
          'bbt-color-white-alpha-100': '#ffffff14',
          'bbt-color-white-alpha-200': '#ffffff29',
          'bbt-color-white-alpha-25': '#ffffff00',
          'bbt-color-white-alpha-300': '#ffffff59',
          'bbt-color-white-alpha-400': '#ffffff80',
          'bbt-color-white-alpha-50': '#ffffff0a',
          'bbt-color-white-alpha-500': '#ffffff8f',
          'bbt-color-white-alpha-600': '#ffffffcc',
          'bbt-color-white-alpha-700': '#ffffffeb',
          'bbt-color-white-alpha-800': '#fffffff0',
          'bbt-color-white-alpha-900': '#fffffff5',
          'bbt-color-white-alpha-950': '#fffffffa',
        },
        spacing: {
          'bbt-spacing-0px': '0px',
          'bbt-spacing-2px': '2px',
          'bbt-spacing-4px': '4px',
          'bbt-spacing-6px': '6px',
          'bbt-spacing-8px': '8px',
          'bbt-spacing-12px': '12px',
          'bbt-spacing-16px': '16px',
          'bbt-spacing-20px': '20px',
          'bbt-spacing-24px': '24px',
          'bbt-spacing-32px': '32px',
          'bbt-spacing-40px': '40px',
          'bbt-spacing-48px': '48px',
          'bbt-spacing-64px': '64px',
          'bbt-spacing-80px': '80px',
          'bbt-spacing-96px': '96px',
          'bbt-spacing-100px': '100px',
          'bbt-spacing-128px': '128px',
          'bbt-spacing-160px': '160px',
          'bbt-spacing-192px': '192px',
          'bbt-spacing-224px': '224px',
          'bbt-spacing-240px': '240px',
          'bbt-spacing-256px': '256px',
          'bbt-spacing-320px': '320px',
          'bbt-spacing-384px': '384px',
          'bbt-spacing-480px': '480px',
          'bbt-spacing-560px': '560px',
          'bbt-spacing-640px': '640px',
          'bbt-spacing-720px': '720px',
          'bbt-spacing-768px': '768px',
          'bbt-spacing-1024px': '1024px',
          'bbt-spacing-1240px': '1240px',
          'bbt-spacing-1280px': '1280px',
          'bbt-spacing-1440px': '1440px',
          'bbt-spacing-1600px': '1600px',
          'bbt-spacing-1920px': '1920px',
        },
        borderRadius: {
          'radius-none': '0px',
          'radius-xxs': '2px',
          'radius-xs': '4px',
          'radius-sm': '6px',
          'radius-md': '8px',
          'radius-lg': '10px',
          'radius-xl': '12px',
          'radius-2xl': '16px',
          'radius-3xl': '18px',
          'radius-4xl': '20px',
          'radius-5xl': '24px',
          'radius-6xl': '32px',
          'radius-7xl': '64px',
          'radius-full': '9999px',
        },
        fontFamily: {
          'font-family-bbt': 'GraphikTH',
        },
        fontSize: {
          'font-size-100': '8px',
          'font-size-200': '10px',
          'font-size-300': '12px',
          'font-size-400': '14px',
          'font-size-500': '16px',
          'font-size-600': '18px',
          'font-size-700': '20px',
          'font-size-800': '24px',
          'font-size-900': '32px',
          'font-size-1000': '40px',
          'font-size-1100': '48px',
          'font-size-1200': '60px',
          'font-size-1300': '72px',
        },
        lineHeight: {
          'font-line-height-100': '16px',
          'font-line-height-200': '22px',
          'font-line-height-300': '24px',
          'font-line-height-400': '32px',
          'font-line-height-500': '40px',
          'font-line-height-600': '48px',
          'font-line-height-700': '90px',
          'font-line-height-800': '100px',
        },
        fontWeight: {
          'font-weight-400': '400',
          'font-weight-500': '500',
          'font-weight-600': '600',
          'font-weight-700': '700',
        },
      },
      screens: {
        'desktop': {
          'min': '1024px',
        },
        'mobile': {
          'max': '1023px',
        },
      },
    },
    plugins: [],
  }
  
  
  