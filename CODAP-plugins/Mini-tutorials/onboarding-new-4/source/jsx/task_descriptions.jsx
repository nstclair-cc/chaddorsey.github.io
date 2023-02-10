hasMouse = !('ontouchstart' in window);

taskDescriptions = {
  descriptions: [
    hasMouse ?
      {
        key: 'ToggleToCaseCard', label: 'Switch from table to case card view of the data to make more space on the screen', url: './resources/videos/CaseCard.mp4',
        operation: 'toggle table to card', type: 'DG.CaseTable',
        feedback: <div>
            <p>Now you have a lot more space on the screen. You can see the range of values for each of the attributes on the case card. You can also “scroll” through the cases using the right and left arrows at the top of the card.</p>
          </div>
      } :
    {
    },
    //Need to make specific to attribute
    {
      key: 'AddGNPToMap', label: 'Create a map and color it by values of “Average GNP per Person.”', url: './resources/videos/4CreateMap.mp4',
      operation: 'legendAttributeChange', type: 'DG.MapModel',
      requiresSpecialHandling: true,
      //constraints: [ {property: 'attributeName', value: 'Average GNP per Person'}],
      feedback: <div>
            <p>Great!  “Average GNP per Person” is one way to measure how much wealth there is in a country. Do you see any geographical patterns in this attribute?</p>
          </div>
    },
    //Need to sense attribute on new graph
    {
      key: 'CreateIncomeGraph', label: 'Create a graph with “Share of Income Owned by Top 1%” on the horizontal axis.', url: './resources/videos/CreateGraph-income.mp4',
      operation: 'attributeChange', type: '',
      requiresSpecialHandling: true,
      feedback: <div>
        <p>“Share of Income Owned by Top 1%” is a measure of how much of a country’s wealth is held by just 1% of the population. What do you notice about the graph?</p>
      </div>,
    },
    {
      key: 'MinimizeMap', label: 'Minimize the map', url: './resources/videos/MinimizeMap.mp4',
      operation: 'toggle minimize component', type: ['DG.MapView'],
      feedback: <div>
        <p>Now you have a lot more space.</p>
	<p>You can restore the map to its original size by clicking on the “minus” sign again.</p>
      </div>
    },
  //Dunno how to approach this best at all…
    { 
      key: 'SelectTop20Pct', label: 'Drag to select only some of the countries. (In which countries does the top 1% own over 20% of the wealth?)', url: './resources/videos/SelectSomeCases.mp4',
      operation: 'selectCases', type: ['DG.GraphView'],
      feedback: <div>
        <p>Because all of the objects on your screen are connected, the countries you’ve selected are highlighted on the graph, on the map and in the table. What can you tell about these countries by looking at the map?</p>
      </div>
    },
    {
      key: 'SelectDarkColorsOnMap', label: 'Hide all the points except the ones you’ve selected', url: './resources/videos/HideUnselected.mp4',
      operation: 'hideUnselected', type: '',
      feedback: <div>
        <p>Now all you can see are the points you’ve selected. This action of looking at only a subset of the points is called “filtering." How do you think you could get the rest of the points back?</p>
      </div>
    },
     //Issues here – Show All Cases doesn't throw API trigger??
    {
      key: 'ShowAllCases', label: 'Get all the points to be visible again', url: './resources/videos/ShowAllCases.mp4',
      operation: '', type: '',
      feedback: <div>
        <p>Great. Notice that we also used the “resize” button so that we could see all of the points. Now that you know how to filter, try using filtering in your exploration of other datasets.</p>
      </div>
    },
    {
      key: 'AddAvgGNPVertical', label: 'Explore the relationship between GNP and concentrated wealth by putting “Average GNP per person” on the vertical axis of your graph.', url: './resources/videos/MakeBivariatePlot.mp4',
      requiresSpecialHandling: true,
      feedback: <div>
        <p>Now that you have both attributes on one graph, can you see a relationship between them?  Do countries that have high values on one of the attributes have high values on the other?  Or is there some other kind of relationship?</p>
      </div>
    }
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
    <li>Created a map</li>
    <li>Dragged an attribute onto the map</li>
    <li>Moved the map</li>
    <li>Minimized the map</li>
    <li>Restored the map to its full size</li>
    <li>Selected attributes with higher values on a map</li>
    <li>Colored the map by a different attribute</li>
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
