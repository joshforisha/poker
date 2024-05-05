module.exports = (config) => {
  config.setTemplateFormats(['css', 'html', 'js', 'md'])

  return {
    dir: {
      output: 'public'
    },
    passthroughFileCopy: true
  }
}
