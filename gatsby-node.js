exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const services = [
        {icon: Wechat, title: 'WeChat Mini Programs', description: 'We help companies create customized and targeted WeChat Mini Programs for their product offering or company introduction.'},
        {icon: Development, title: 'Websites & WebApps', description: 'Localize your website’s design and deploy it on Chinese servers making it fast, easy, and attractive to your target audience.'},
        {icon: Strategy, title: 'Digital Strategy', description: 'It can be difficult for foreign businesses to succeed in China. We help you make sense of the digital landscape and create a plan which leverages local assets to achieve your business objectives.'},
        {icon: Training, title: 'Technical Training', description: 'Curious about how it all works? We know, we’ve been there. We work with your team to demystify technology and make it a tool for success, rather than a barrier. '}
    ]
  
    services.forEach(service => {
      const node = {
        icon: service.icon,
        title: service.title,
        description: service.description,
        id: createNodeId(`Pokemon-${pokemon.name}`),
        internal: {
          type: "Service",
          contentDigest: createContentDigest(service),
        },
      }
      actions.createNode(node)
    })
  }