const customTheme ={
  token: {
    // colorPrimary: '#0faf82',  // example of valid global token
    // fontSizeHeading1: 32,     // valid h1 size override
    // colorTextHeading: '#333', // heading color
  },

    components: {
        Input: {
          // Use CSS-in-JS overrides for the addon
          style: {
            // This will affect the inner elements including addon
            // However, you can use `className` targeting if needed
          },
          // Override specific internal class
          css: `
            .ant-input-group-addon {
              background-color: green !important;
            }
          `
        },
      },
   
}
export default customTheme