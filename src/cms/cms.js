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
  label: "Image Comparison",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
  	{name: 'image1', label: 'Left Image', widget: 'image'},
  	{name: 'label1', label: 'Left Label', widget: 'string'},
  	{name: 'image2', label: 'Right Image', widget: 'image'},
  	{name: 'label2', label: 'Right Label', widget: 'string'}
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<comparison image1="(\S+)" label1="(\S+)" image2="(\S+)" label2="(\S+)" \/>/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      image1: match[1],
      label1: match[2],
      image2: match[3],
      label2: match[4],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '<comparison image1="' + obj.image1 + '" label1="' + obj.label1 + '" image2="' + obj.image2 + '" label2="' + obj.label2 + '" />';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      'Image Comparison - Preview is WIP.'
    );
  }
});