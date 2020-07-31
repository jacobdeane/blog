/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from "netlify-cms-app"

// Youtube

CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^`youtube: (\S+)`$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '`youtube: ' + obj.id + '`';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});

// Juxtapose

CMS.registerEditorComponent({
  // Internal id of the component
  id: "comparison",
  // Visible label
  label: "Comparison",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
  	{name: 'id', label: 'Unique ID', widget: 'string'},
  	{name: 'imageLeft', label: 'Left Image', widget: 'image'},
  	{name: 'captionLeft', label: 'Left Caption', widget: 'string'},
  	{name: 'imageRight', label: 'Right Image', widget: 'image'},
  	{name: 'captionRight', label: 'Right Caption', widget: 'string'},
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /import image_(\S+)_left from '(\S+)';\nimport image_(\S+)_right from '(\S+)';\n\n<Comparison imageLeft={image_(\S+)_left} captionLeft='(\S+)' imageRight={image_(\S+)right} captionRight='(\S+)' ><\/Comparison>/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1],
      imageLeft: match[1],
      captionLeft: match[3],
      imageRight: match[4],
      captionRight: match[5]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
  	return `import image_` + obj.id +`_left from '` + obj.imageLeft + `';\nimport image_` + obj.id +`_right from '` + obj.imageRight + `';\n\n<Comparison imageLeft={image_` + obj.id +`_left} captionLeft='` + obj.captionLeft + `' imageRight={image_` + obj.id +`_right} captionRight='` + obj.captionRight + `' ></Comparison>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="' + obj.imageLeft + '" />'
    );
  }
});