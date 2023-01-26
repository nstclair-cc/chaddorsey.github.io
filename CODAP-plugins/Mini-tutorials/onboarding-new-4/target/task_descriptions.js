(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
hasMouse = !('ontouchstart' in window);

taskDescriptions = {
  descriptions: [hasMouse ? {
    key: 'ToggleToCaseCard', label: 'Switch from table to case card view of the data to make more space on the screen', url: './resources/CreateMap.mp4',
    operation: 'toggle table to card', type: 'DG.CaseTable',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Now you have a lot more space on the screen. You can see the range of values for each of the attributes on the case card. You can also \u201Cscroll\u201D through the cases using the right and left arrows at the top of the card.'
      )
    )
  } : {},
  //Need to make specific to attribute
  {
    key: 'AddGNPToMap', label: 'Create a map and color it by values of “Average GNP per Person.”', url: './resources/DragAttributeMap.mp4',
    operation: 'legendAttributeChange', type: 'DG.MapModel',
    requiresSpecialHandling: true,
    //constraints: [ {property: 'attributeName', value: 'Average GNP per Person'}],
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Great!  \u201CAverage GNP per Person\u201D is one way to measure how much wealth there is in a country. Do you see any geographical patterns in this attribute?'
      )
    )
  },
  //Need to sense attribute on new graph
  {
    key: 'CreateIncomeGraph', label: 'Create a graph with “Share of Income Owned by Top 1%” on the horizontal axis.', url: './resources/MoveMap.mp4',
    operation: 'attributeChange', type: '',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '\u201CShare of Income Owned by Top 1%\u201D is a measure of how much of a country\u2019s wealth is held by just 1% of the population. What do you notice about the graph?'
      )
    )
  }, {
    key: 'MinimizeMap', label: 'Minimize the map', url: './resources/MinimizeMap.mp4',
    operation: 'toggle minimize component', type: ['DG.MapView'],
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
  //Dunno how to approach this best at all…
  {
    key: 'SelectTop20Pct', label: 'Drag to select only some of the countries. (In which countries does the top 1% own over 20% of the wealth?)', url: './resources/RestoreMap.mp4',
    operation: 'selectCases', type: ['DG.GraphView'],
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Because all of the objects on your screen are connected, the countries you\u2019ve selected are highlighted on the graph, on the map and in the table. What can you tell about these countries by looking at the map?'
      )
    )
  }, {
    key: 'SelectDarkColorsOnMap', label: 'Hide all the points except the ones you’ve selected', url: './resources/SelectDarkColorsOnMap.mp4',
    operation: 'hideUnselected', type: '',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Now all you can see are the points you\u2019ve selected. This action of looking at only a subset of the points is called \u201Cfiltering." How do you think you could get the rest of the points back?'
      )
    )
  },
  //Issues here – Show All Cases doesn't throw API trigger??
  {
    key: 'ShowAllCases', label: 'Get all the points to be visible again', url: './resources/ColorMap2ndAttribute.mp4',
    operation: '', type: '',
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Great. Notice that we also used the \u201Cresize\u201D button so that we could see all of the points. Now that you know how to filter, try using filtering in your exploration of other datasets.'
      )
    )
  }, {
    key: 'AddAvgGNPVertical', label: 'Explore the relationship between GNP and concentrated wealth by putting “Average GNP per person” on the vertical axis of your graph.', url: './resources/MakeBivariatePlot.mp4',
    operation: 'attributeChange', type: '',
    requiresSpecialHandling: true,
    feedback: React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Now that you have both attributes on one graph, can you see a relationship between them?  Do countries that have high values on one of the attributes have high values on the other?  Or is there some other kind of relationship?'
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
