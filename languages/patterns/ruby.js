module.exports = {
  name: 'Ruby',
  nameMatchers: ['.rb', '.ru', '.gemspec', '.jbuilder'],
  singleLineComment: ['#'],
  multiLineComment: [{
    start: '=begin',
    middle: '',
    end: '=end'
  }]
}
