/* eslint-disable no-unused-vars */
module.exports.execute = async (
    client,
    message,
    locale,
    embed,
    tools,
    knex,
    props,
    data
  ) => {
    u = client.users.cache.filter(r=> r.tag.includes(message.data.arg[0]))
    if(u.size > 1) return message.reply('More Than 1')
    id = u.first().id
    await knex('blacklist').insert({ id: id, why: '버그 악용', time: 1589610577 })
    await knex('users').where({ id: id}).del()
  }
  
  module.exports.props = {
    name: 'fuck',
    perms: 'dev',
    alias: ['f'],
    args: [
      {
        name: 'script',
        type: 'text'
      }
    ]
  }
  