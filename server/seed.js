const bookshelf = require('./bookshelf')

const seeds = [
  require('../seeds/01_admins.js').seed,
  require('../seeds/02_groups.js').seed,
  require('../seeds/03_members.js').seed,
  require('../seeds/04_admins_groups.js').seed,
  require('../seeds/05_messages.js').seed,
  require('../seeds/06_events.js').seed,
  require('../seeds/07_events_members.js').seed,
  require('../seeds/08_chats.js').seed,
  require('../seeds/09_tags.js').seed,
  require('../seeds/10_members_tags.js').seed,
  require('../seeds/11_notifications.js').seed,
  require('../seeds/12_roles.js').seed,
  require('../seeds/13_members_roles.js').seed,
  require('../seeds/14_guides.js').seed,
  require('../seeds/15_admins_guides.js').seed,
  require('../seeds/16_smstemplates.js').seed,
  require('../seeds/17_smstemplates_tags.js').seed,
  require('../seeds/18_filters.js').seed
];

const run = async function(){
  console.log('Start')
  for (seed of seeds) {
    const insert = await seed(bookshelf.knex)
    console.log(insert)
  }
  console.log('End')
}

run()
