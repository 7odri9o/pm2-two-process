const [ , cronName ] = process.argv[2].split('=')

require(`./${cronName}`)