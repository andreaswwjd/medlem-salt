const bookshelf = require('./bookshelf')

const Admin = bookshelf.Model.extend({
    tableName: 'admins',
    uuid: true,
    hasTimestamps: true,
    groups: function(){
        return this.belongsToMany(Group, 'admins_groups', 'admin_id', 'group_id', 'id', 'id')
    },
    chats: function(){
      return this.hasMany(Chat, 'admin_id', 'id') //?
    },
    // groups_ids: function(){
    //     return this.hasMany()
    // }
})

const Group = bookshelf.Model.extend({
    tableName: 'groups',
    uuid: true,
    hasTimestamps: true,
    administrators: function(){
        return this.belongsToMany(Admin, 'admins_groups', 'group_id', 'admin_id', 'id', 'id') //?
    },
    members: function(){
        return this.hasMany(Member, 'group_id', 'id') //?
    },
    smstemplates: function(){
        return this.hasMany(Smstemplate, 'group_id', 'id') //?
    }
})

const Member = bookshelf.Model.extend({
    tableName: '_members',
    uuid: true,
    hasTimestamps: true,
    // hidden: ['pnr_hash'],
    // virtuals: {
    //   age(){
    //     return this.get('pnr')
    //   }
    // },
    group: function(){
      return this.belongsTo(Group, 'group_id', 'id')
    },
    messages: function(){
      return this.hasMany(Message, 'member_id', 'id')
    },
    attended_at: function(){
      return this.belongsToMany(Event, 'events_members', 'member_id', 'event_id', 'id', 'id')
    },
    tags: function(){
      return this.belongsToMany(Tag, 'members_tags', 'member_id', 'tag_id', 'id', 'id')
    },
    roles: function(){
      return this.belongsToMany(Role, 'members_roles', 'member_id', 'role_id', 'id', 'id')
    },
    // alerts: function(){
    //   return this.hasMany(Alert, 'member_id', 'id')
    // }
})


const Event = bookshelf.Model.extend({
  tableName: 'events',
  uuid: true,
  hasTimestamps: true,
  attenders: function(){
    return this.belongsToMany(Member, 'events_members', 'event_id', 'member_id', 'id', 'id') //?
  },
})

const Message = bookshelf.Model.extend({
  tableName: 'messages',
  uuid: true,
  hasTimestamps: true,
  member: function(){
      return this.belongsTo(Member, 'member_id', 'id') //?
  },
})

const Chat = bookshelf.Model.extend({
  tableName: 'chats',
  uuid: true,
  hasTimestamps: true,
  admin: function(){
      return this.belongsTo(Admin, 'admin_id', 'id') //?
  },
})

const Tag = bookshelf.Model.extend({
  tableName: 'tags',
  uuid: true,
  hasTimestamps: true,
  members: function(){
    return this.belongsToMany(Member, 'members_tags', 'tag_id', 'member_id', 'id', 'id') //?
  },
})

const Notification = bookshelf.Model.extend({
  tableName: 'notifications',
  uuid: true,
  hasTimestamps: true,
})

const Role = bookshelf.Model.extend({
  tableName: 'roles',
  uuid: true,
  hasTimestamps: true,
  members: function(){
    return this.belongsToMany(Member, 'members_roles', 'role_id', 'member_id', 'id', 'id') //?
  },
})

const Guide = bookshelf.Model.extend({
  tableName: 'guides',
  uuid: true,
  hasTimestamps: true,
})

const Smstemplate = bookshelf.Model.extend({
  tableName: 'smstemplates',
  uuid: true,
  hasTimestamps: true,
})


const Filter = bookshelf.Model.extend({
  tableName: 'members_filters'
})

module.exports = { Admin, Group, Member, Message, Event, Chat, Tag, Notification, Role, Guide, Smstemplate, Filter }