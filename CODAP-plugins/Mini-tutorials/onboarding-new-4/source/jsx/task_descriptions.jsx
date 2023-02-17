hasMouse = !('ontouchstart' in window);

taskDescriptions = {
  descriptions: [
    hasMouse ?
      {
        key: 'ToggleToCaseCard', label: 'Switch from table to case card view of the data to make more space on the screen', url: './resources/videos/CaseCard.mp4',
        operation: 'toggle table to card', type: 'DG.CaseTable',
        feedback: <div>
            <p>Now you have a lot more space on the screen.  You can see the range of values for each of the attributes on the case card.  You can also “scroll” through the cases using the right and left arrows at the top of the card. To get back to the card with the range of values, click on the circle between the arrows at the top of the card.</p>
          </div>
      } :
    {
    },
    //4.2 - Need to redo actions
    {
      key: 'AddGNPToMap', label: 'Create a graph of Average GNP on the horizontal axis', url: './resources/videos/4creategraphhoriz.mp4',
      operation: 'legendAttributeChange', type: 'DG.MapModel',
      requiresSpecialHandling: true,
      //constraints: [ {property: 'attributeName', value: 'Average GNP per Person'}],
      feedback: <div>
            <p>Great!  “Average GNP per Person” is one way to measure how much wealth there is in a country. Do you see any geographical patterns in this attribute?</p>
          </div>
    },
    //Need to sense attribute on new graph
    //4.3 - same screencast as Tutorial 1
    {
        key: 'CreateMap', label: 'Create a map.', url: './resources/videos/CreateMap.mp4',
        operation: 'create', type: ['DG.MapView'],
        feedback: <div>
        <p>Great, you’ve opened a map.  Now you can put an attribute on it.</p>
        <p>The colors are all the same because you haven’t dragged data onto the map yet. You will add data from an attribute next.</p>
      </div>
      } :
    {
    },
    //4.4 - Add life expectancy on the vertical axis - need to redo actions
    {
      key: 'MinimizeMap', label: 'Add life expectancy on the vertical axis', url: './resources/videos/AddLifeExp.mp4',
      operation: 'toggle minimize component', type: ['DG.MapView'],
      feedback: <div>
        <p>Feedback text here - Add life expectancy on the vertical axis</p>
      </div>
    },
  //Dunno how to approach this best at all…
    //4.5 - Select countries on the graph that have both high average

    { 
      key: 'SelectTop20Pct', label: 'Select countries on the graph that have both high average', url: './resources/videos/SelectCountriesonGraph.mp4',
      operation: 'selectCases', type: ['DG.GraphView'],
      feedback: <div>
        <p>Select countries on the graph that have both high average</p>
      </div>
    },
    //4.6 - Hide unselected points
    {
      key: 'SelectDarkColorsOnMap', label: 'Hide unselected points', url: './resources/videos/HideCasesonGraph.mp4',
      operation: 'hideUnselected', type: '',
      feedback: <div>
        <p>Hide unselected points</p>
      </div>
    },
     //Issues here – Show All Cases doesn't throw API trigger??
 //   {
 //     key: 'ShowAllCases', label: 'Get all the points to be visible again', url: './resources/videos/ShowAllCases.mp4',
 //     operation: '', type: '',
  //    feedback: <div>
  //      <p>Great. Notice that we also used the “resize” button so that we could see all of the points. Now that you know how to filter, try using filtering in your exploration of other datasets.</p>
  //    </div>
 //   },
 //   {
 //     key: 'AddAvgGNPVertical', label: 'Explore the relationship between GNP and concentrated wealth by putting “Average GNP per person” on the vertical axis of your graph.', url: './resources/videos/MakeBivariatePlot.mp4',
  //    requiresSpecialHandling: true,
   //   feedback: <div>
    //    <p>Now that you have both attributes on one graph, can you see a relationship between them?  Do countries that have high values on one of the attributes have high values on the other?  Or is there some other kind of relationship?</p>
  //    </div>
  //  }
  ],
  getFeedbackFor: function (iKey, iUseAltFeedback, iAllAccomplished) {
    let tDesc = this.descriptions.find(function (iDesc) {
      return iKey === iDesc.key;
    });
    let tFeedback = iUseAltFeedback ? tDesc.alt_feedback : tDesc.feedback;
    if( iAllAccomplished) {
      tFeedback = <div>
        { tFeedback }
        { allAccomplishedFeedback}
      </div>;
    }
    return tFeedback;
  },
  taskExists: function (iKey) {
    return this.descriptions.find(function (iDesc) {
      return iKey === iDesc.key;
    });
  }
};

allAccomplishedFeedback = <div>
  <p>Congratulations! You've done the following:</p>
  <ul>
    <li>Switched to case card view</li>
    <li>Created a graph with an attribute on the horizontal axis</li>
    <li>Created a map</li>
    <li>Add an attribute to the vertical axis</li>
    <li>Select countries on a graph</li>
    <li>Hide unselected points</li>
  </ul>
  <p>You can do a <em>lot</em> with just those seven skills!</p>
  <p>For more information about how to work with CODAP, visit
    the <a href="https://codap.concord.org/help/" target="_blank">CODAP Help</a> page. </p>
</div>;

infoFeedback =
    <div>
      <p>This onboarding plugin for CODAP was created to help new CODAP users get started
        using CODAP. It lives in CODAP as an iFrame. Certain user actions cause CODAP to
        notify the plugin. The plugin responds by providing feedback to the user.</p>
      <p>The open source code is at<br/>
        <a href="https://github.com/concord-consortium/codap-data-interactives/tree/master/onboarding"
           target="_blank">
          CODAP's data interactive GitHub repository</a>. </p>
      <p>This plugin makes use of the CODAP data interactive plugin API whose documentation is at<br/>
        <a href="https://github.com/concord-consortium/codap/wiki/CODAP-Data-Interactive-Plugin-API"
           target="_blank">
          CODAP Data Interactive API</a>.</p>
    </div>;
