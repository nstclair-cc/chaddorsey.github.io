(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
hasMouse = !('ontouchstart' in window);

taskDescriptions = {
  descriptions: [hasMouse ? {
    key: 'CreateMap', label: 'Create a map.', url: './resources/videos/CreateMap.mp4',
    operation: 'create', type: ['DG.MapView'],
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Great, you\u2019ve opened a map.  Now you can put an attribute on it.'
      ),
      React.createElement(
        'p',
        null,
        'The colors on the map are all the same because you haven\u2019t dragged data onto the map yet.'
      )
    )
  } : {}, {
    key: 'AddLifeExpectancy', label: 'Drag the attribute "Average Life Expectancy" onto the map', url: './resources/videos/DragAttributeMap.mp4',
    operation: 'legendAttributeChange', type: 'DG.MapModel',
    constraints: [{ property: 'attributeName', value: 'Average Life Expectancy' }],
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Well done.  You dragged \u201CAverage Life Expectancy\u201D from the table to the map.'
      ),
      React.createElement(
        'p',
        null,
        'Now the countries on the map are colored according to the values of \u201CAverage Life Expectancy.\u201D'
      ),
      React.createElement(
        'p',
        null,
        'Countries with a high value are darker and those with a low value are lighter. When you select a country, notice that the corresponding row highlights on the table. You can select lighter or darker portions of the map using the legend at the bottom.'
      ),
      React.createElement(
        'p',
        null,
        'Take a look at the legend. Which areas of the map have high values for Average Life Expectancy?'
      )
    )
  }, {
    key: 'MoveMap', label: 'Move the map', url: './resources/videos/MoveMap.mp4',
    operation: 'move', type: 'DG.MapView',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'You can always move a map (or a graph or a table) to make more space on the screen.'
      )
    )
  }, {
    key: 'MinimizeMap', label: 'Minimize the map', url: './resources/videos/MinimizeMap.mp4',
    operation: 'toggle minimize component', type: 'DG.MapView',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Now you have a lot more space.'
      ),
      React.createElement(
        'p',
        null,
        'You can restore the map to its original size by clicking on the \u201Cminus\u201D sign again.'
      )
    )
  },
  //* Issues here – operation already captured? {also bug — need to reposition the map after restoring size}
  {
    key: 'RestoreMap', label: 'Restore the map to its full size', url: './resources/videos/RestoreMap.mp4',
    operation: 'toggle minimize component', type: 'DG.MapView',
    prereq: 'MinimizeMap',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Now you have your map back.'
      ),
      React.createElement(
        'p',
        null,
        'You can always minimize or restore any CODAP object (called a \u201Ctile\u201D).  There is a list of all of your tiles under \u201Ctiles\u201D in the upper right of your screen.'
      )
    )
  },
  //Issues here – differentiating whether user has selected the top-most bin of an arbitrarily selected attribute
  {
    key: 'SelectDarkColorsOnMap', label: 'Click on the colored legend bars to select a subset of countries. Try selecting the countries with higher values of the attribute (darker colors).', url: './resources/videos/SelectDarkColorsOnMap.mp4',
    operation: 'selectCases', type: '',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Well done! You selected a set of countries that have similar life expectancy and highlighted them on the map. How do you think you could select countries that have different values? For example, which countries have relatively low life expectancies?'
      )
    )
  },
  //Issues here — a) not triggering this at the same time as the first, b) etermining whether user has added a new attribute rather than dragging the old one again
  {
    key: 'ChangeMapLegend', label: 'Color the map by a different attribute.', url: './resources/videos/ColorMap2ndAttribute.mp4',
    operation: 'legendAttributeChange', type: 'DG.MapModel',
    prereq: 'AddLifeExpectancy',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Wonderful! You dragged a different attribute from the table to the map.'
      ),
      React.createElement(
        'p',
        null,
        'You can drag any of the attributes in your table to the map to create a different map display in CODAP.'
      )
    )
  }],
  getFeedbackFor: function (iKey, iUseAltFeedback, iAllAccomplished) {
    let tDesc = this.descriptions.find(function (iDesc) {
      return iKey === iDesc.key;
    });
    let tFeedback = iUseAltFeedback ? tDesc.alt_feedback : tDesc.feedback;
    if (iAllAccomplished) {
      tFeedback = React.createElement(
        'div',
        null,
        tFeedback,
        allAccomplishedFeedback
      );
    }
    return tFeedback;
  },
  taskExists: function (iKey) {
    return this.descriptions.find(function (iDesc) {
      return iKey === iDesc.key;
    });
  }
};

allAccomplishedFeedback = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Congratulations! You\'ve done the following:'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'Created a map'
    ),
    React.createElement(
      'li',
      null,
      'Dragged an attribute onto the map'
    ),
    React.createElement(
      'li',
      null,
      'Moved the map'
    ),
    React.createElement(
      'li',
      null,
      'Minimized the map'
    ),
    React.createElement(
      'li',
      null,
      'Restored the map to its full size'
    ),
    React.createElement(
      'li',
      null,
      'Selected attributes with higher values on a map'
    ),
    React.createElement(
      'li',
      null,
      'Colored the map by a different attribute'
    )
  ),
  React.createElement(
    'p',
    null,
    'You can do a ',
    React.createElement(
      'em',
      null,
      'lot'
    ),
    ' with just those seven skills!'
  ),
  React.createElement(
    'p',
    null,
    'For more information about how to work with CODAP, visit the ',
    React.createElement(
      'a',
      { href: 'https://codap.concord.org/help/', target: '_blank' },
      'CODAP Help'
    ),
    ' page. '
  ),
  React.createElement(
    'button',
    { onClick: () => window.parent.location.reload() },
    'Start Over'
  )
);

infoFeedback = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'This onboarding plugin for CODAP was created to help new CODAP users get started using CODAP. It lives in CODAP as an iFrame. Certain user actions cause CODAP to notify the plugin. The plugin responds by providing feedback to the user.'
  ),
  React.createElement(
    'p',
    null,
    'The open source code is at',
    React.createElement('br', null),
    React.createElement(
      'a',
      { href: 'https://github.com/concord-consortium/codap-data-interactives/tree/master/onboarding',
        target: '_blank' },
      'CODAP\'s data interactive GitHub repository'
    ),
    '. '
  ),
  React.createElement(
    'p',
    null,
    'This plugin makes use of the CODAP data interactive plugin API whose documentation is at',
    React.createElement('br', null),
    React.createElement(
      'a',
      { href: 'https://github.com/concord-consortium/codap/wiki/CODAP-Data-Interactive-Plugin-API',
        target: '_blank' },
      'CODAP Data Interactive API'
    ),
    '.'
  )
);

},{}]},{},[1]);
