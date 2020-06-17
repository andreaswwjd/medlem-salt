
export const state = ()=>({
  groupsById: {},
  membersById: {},
  campsById: {},
  members: [],
  member: {
    firstname: '',
    lastname: '',
    age: '',
    tags: [],
    group: {name:''}
  },
  tags: [],
  camps: [],
  pagination: {},
  loading: false,
  
})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
  
  loading(state) {
    return state.loading
  },
  
  groups(state) {
    return state.groupsById
  },
  
  members(state) {
    return state.members
  },
  
  membersById(state) {
    return state.membersById
  },

  member(state) {
    return state.member
  },

  tags(state) {
    return state.tags
  },

  camps(state) {
    return state.camps
  },

  pagination(state) {
    return state.pagination
  },

  breadcrumbs(state) {
    return state.breadcrumbs
  }
}
export const mutations = {
  setLoading(state, loading){
    state.loading = loading
  },
  setGroup (state, group){
    state.groupsById[group.id] = group
  },
  setMembers (state, members){
    for (let member of members) {
      state.membersById[member.id] = member
      if(member.attended_at) {
        member.attended_at.map(camp => {
          if (!state.campsById[camp.id]) state.campsById[camp.id] = camp
        })
      }
    }
    state.members = Object.keys(state.membersById)
      .map(id=>state.membersById[id])
    state.camps = Object.keys(state.campsById)
      .map(id=>state.campsById[id])
  },
  setMember(state, member){
    state.member = member
  },
  setTags (state, tags){
    state.tags = tags
  },
  setPagination (state, pagination){
    const remaining = pagination.rowCount - (pagination.pageSize * pagination.page)
    state.pagination = {
      ...pagination, 
      loadmore: pagination.pageCount != pagination.page,
      remaining: remaining < 0 ? 0 : remaining
    }
  }
}

export const actions = {
  async loadMembers({ commit, state }, { page, include, search, tags, roles, camps, notes, age, condition, groups } ) {
    try {
      commit('setLoading', true)
      page = page || 1
      let query = 'api/v1/members?page='+page

      // Filters
      query += include && include[0]? '&include='+include.join(',') : ''
      query += groups && groups[0] ? '&groups='+groups.join(',') : ''
      query += search             ? '&search='+search : ''
      query += tags && tags[0]    ? '&tags='+tags.join(',') : ''
      query += roles && roles[0]  ? '&roles='+roles.join(',') : ''
      query += camps && camps[0]  ? '&camps='+camps.join(',') : ''
      query += notes && notes[0]  ? '&notes='+notes.join(',') : ''
      query += age                ? '&age='+age : ''
      query += condition          ? '&condition='+condition : ''
      
      let members = await this.$axios.$get(query)
      commit('setMembers', members.data)
      commit('setPagination', members.pagination)
    } catch(error) {
      commit('setPagination', {})
      console.log(error)
    } finally {
      commit('setLoading', false)
    }
  },
  async loadMember({ commit, state }, { id, include} ) {
    try {
      commit('setLoading', true)
      let query = 'api/v1/members/'+id
      
      // Filters
      query += include && include[0]? '?include='+include.join(',') : ''
      
      let member = await this.$axios.$get(query)
      console.log(member)
      
      commit('setMembers', [member])
      commit('setMember', member)
    } catch(error) {
      console.log(error)
    } finally {
      commit('setLoading', false)
    }
  },
  async loadTags({ commit }) {
    try {
      commit('setLoading', true)
      let tags = await this.$axios.$get(`api/v1/tags`)
      commit('setTags', tags)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setLoading', false)
    }
  }
}


// function delay(t, v) {
//   return new Promise(function(resolve) { 
//       setTimeout(resolve.bind(null, v), t)
//   });
// }