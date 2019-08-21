CMS.registerEditorComponent({
  // Internal id of the component
  id: "enhancedImage",
  // Visible label
  label: "Enhanced Image",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'imgURL', label: 'Image', widget: 'image', default: ""},
            {name: 'caption', label: 'Caption', widget: 'string', default: ""},
            {name: 'width', label: 'Width', widget: 'number', valueType: 'int', default: 200},
            {name: 'align', label: 'Align', widget: 'select', options: ["left", "center", "right"], default: 'center'},
            {name: 'alt', label: 'Alternative text', widget: 'string', default: ""}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{< figure src="(\S*)" caption="(.*)" width="(\S+)" class="text-(\S+)" alt="(.*)" >}}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
      console.log(match[1])
    return {
        imgURL: match[1],
        caption: match[2],
        width: match[3],
        align: match[4],
        alt: match[5]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    if(!obj.alt && obj.caption)
        obj.alt = obj.caption;
    else if (!obj.alt)
        obj.alt = ""
    return '{{< figure src="'+ obj.imgURL + '" caption="'+ obj.caption + '" width="'+ obj.width + '" class="text-'+ obj.align + '" alt="'+ obj.alt + '" >}}';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
        
      '<div style="text-align: '+ obj.align + '"><img src="'+ obj.imgURL + '" width="'+ obj.width + '"  alt="'+ obj.alt + '"/><figcaption style="display:block;margin-top:.25rem;color:#666"><p>'+ obj.caption + '</p></figcaption></div>'
    );
  }
});


CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{< youtube (\S+) >}}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '{{< youtube ' + obj.id + ' >}}';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<div style="text-align:center;"><img src="https://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" height="200" alt="Youtube Video"/></div>'
    );
  }
});