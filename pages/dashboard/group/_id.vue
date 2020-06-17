<template>
  <div class="container">
    <nav class="breadcrumb is-right" aria-label="breadcrumbs" style="font-size: 13px;">
      <ul>
        <li><nuxt-link to="/dashboard">Startsida</nuxt-link></li>
        <li><nuxt-link to="/dashboard/group">Sök</nuxt-link></li>
      </ul>
    </nav>
    <h1 class="title">
      {{ loggedInUser.groups.find(group=>group.id==$route.params.id) ? loggedInUser.groups.find(group=>group.id==$route.params.id).name : 'Grupp'}}
    </h1>
    <div class="columns">
      <div class="panel column is-shadowless is-6">
        <div class="panel-block column">
          <div class="columns">
            <div class="column">
              <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Sök" v-model="filter.search" @keyup="searchTimer">
                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="panel-block" @click="filterPanelIsOpen = !filterPanelIsOpen">
          <p>
            Filtrera
            <span class="icon">
              <i class="fas fa-chevron-down" :style="{transform: filterPanelIsOpen ? 'rotate(180deg)':''}"></i>
            </span>
          </p>
        </div>
        <div class="panel-block column" v-if="matchedGroups[0] && loggedInUser.groups_ids.length > 1"> <!-- v-if="filterPanelIsOpen && loggedInUser.groups.length > 1"> -->
          <div class="columns">
            <div class="column">
              <p class="control">
                Grupper
              </p>
            </div>
            <div class="column is-11">
              <a class="">
                <div class="tags">
                  <span class="tag is-active is-normal" @click="toggleGroupFilter(group)" :style="{backgroundColor: group.color, opacity: filter.groups.includes(group.id)?1:0.5}" v-for="group in matchedGroups" :key="group.id">{{group.name}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="panel-block column" v-if="matchedTags[0]">
          <div class="columns">
            <div class="column">
              <p class="control">
                Taggar
              </p>
            </div>
            <div class="column is-11">
              <a class="">
                <div class="tags">
                  <span class="tag is-active is-normal" @click="toggleTagFilter(tag)" :style="{backgroundColor: tag.color, opacity: filter.tags.includes(tag.id)?1:0.5}" v-for="tag in matchedTags" :key="tag.id">{{tag.name}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="panel-block column" v-if="matchedCamps[0]">
          <div class="columns">
            <div class="column">
              <p class="control">
                Läger och event
              </p>
            </div>
            <div class="column is-8">
              <a class="">
                <div class="tags">
                  <span class="tag is-active is-normal" @click="toggleCampFilter(camp)" :style="{backgroundColor: camp.color, opacity: filter.camps.includes(camp.id)?1:0.5}" v-for="camp in matchedCamps" :key="camp.id">{{camp.name}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="panel-block column" v-if="filterPanelIsOpen">
          <div class="columns">
            <div class="column is-1">
              <p class="control">
                Ålder
              </p>
            </div>
            <div class="column" style="flex-grow: 0;">
              <div class="select">
                <select>
                  <option>över</option>
                  <option>under</option>
                  <option>mellan</option>
                </select>
              </div>
            </div>
            <div class="column" style="flex-grow: 0;">
              <div class="select">
                <select>
                  <option v-for="age in Array(35).fill().map((a,i)=>i+5)" :key="age">{{age}} år</option>
                </select>
              </div>
            </div>
            <div class="column" style="flex-grow: 0;" v-if="'mellan'">
              <div class="select">
                <select>
                  <option v-for="age in Array(35).fill().map((a,i)=>i+5)" :key="'_'+age">och {{age}} år</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block column" v-if="filterPanelIsOpen">
          <div class="columns">
            <div class="column">
              <p class="control">
                Styrelsen
              </p>
            </div>
            <div class="column is-11">
              <input class="checkbox is-checkradio is-small" type="checkbox">
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <div class="table-container">
      <table class="members-table table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th></th>
            <th>
              <p>Namn</p>
            </th>
            <th>
              <p>Epost</p>
            </th>
            <th>
              <p>Telefon</p>
            </th>
            <!-- <th>Grupp ({{group.members && group.members.length == 1 ?'1 medlem': group.members.length+' medlemmar'}})</th> -->
            <th>
              <p>
                Ålder
              </p>
            </th>
            <th colspan="3">

            </th>
          </tr>
        </thead>
        <!-- <tbody>
          <tr class="tr_template" v-for="(d,i) in Array(pagination.rowCount || 0).fill(1).map(d=>Math.random())">
            <td></td>
            <td><p :style="{animationDelay: i*0.5+  's'}"><span>|</span></p></td>
            <td><p :style="{animationDelay: i*0.5+1+'s'}"><span>|</span></p></td>
            <td><p :style="{animationDelay: i*0.5+2+'s'}"><span>|</span></p></td>
            <td><p :style="{animationDelay: i*0.5+3+'s'}"><span>|</span></p></td>
            <td colspan="3"></td>
          </tr>
        </tbody> -->
        <transition-group name="fadeup" tag="tbody">
          <tr class="fadeup-item" v-for="(member,i) in filteredMembers" :key="member.id" :style="{transitionDelay: i/50+'s'}">
            <td style="width: 30px" class="field"><input class="checkbox is-checkradio is-small" type="checkbox"></td>
            <td><p>{{member.firstname}} {{member.lastname}}</p></td>
            <td><a :href="'mailto:'+member.email">{{member.email}}</a></td>
            <td title="Kontakt via målsman">{{member.tel}}<span style="color: red;" v-if="member.kontakt_via_målsman">*</span></td>
            <td>{{member.age}} år</td>
            <td>
              <nuxt-link :to="'/dashboard/medlem/'+member.id">Redigera</nuxt-link>
            </td>
            <td>
              <div class="tags">
                <span class="tag" :style="{backgroundColor: tag.color}" v-for="tag in member.tags" :key="tag.id">{{tag.name}}</span>
                <span class="tag" :style="{
                  borderTopColor: '#BCD89C',
                  borderBottomColor: '#BCD89C',
                  borderLeftColor: '#BCD89C', 
                  borderRightColor: '#BCD89C'
                  }" style="border: 1px solid;" v-for="tag in member.attended_at" :key="'camp'+tag.id">{{tag.name}}</span>
                <span class="tag" v-for="tag in member.roles" :key="'role'+tag.id">{{tag.name}}</span>
              </div>
            </td>
            <td>
              <i class="fas" :class="{'fa-check': !member.kontakt_via_målsman, 'fa-times-circle': member.kontakt_via_målsman}" :style="{color: !member.kontakt_via_målsman?'lightgray':'indianred'}"></i>
            </td>
          </tr>
          <tr class="tr_template fadeup-item" v-if="pagination.loadmore && pagination.rowCount - filteredMembers.length" :key="'fakeid'">
            <td class="button" :class="{'is-loading': loading}" style="background:transparent;"></td>
            <td><p :style="{animationDelay: '0.5s'}">Laddar...<span>|</span></p></td>
            <td><p :style="{animationDelay: '1.5s'}"><span>|</span></p></td>
            <td><p :style="{animationDelay: '2.5s'}"><span>|</span></p></td>
            <td><p :style="{animationDelay: '3.5s'}"><span>|</span></p></td>
            <td colspan="3"></td>
          </tr>
        </transition-group>

        <tfoot>
          <tr>
            <td colspan="3">
            </td>
            <td><span style="color: red;">*</span><sup style="font-size: 0.5rem;"> = via målsman</sup></td>
            <td colspan="5">
              <button class="button is-light is-rounded is-pulled-right" :class="{'is-loading': loading}" v-if="pagination.loadmore && pagination.rowCount - filteredMembers.length > 0" @click="nextPage()">
                <span>
                  Fler ({{pagination.rowCount - filteredMembers.length}} st)
                </span>
                <span class="icon is-small">
                  <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </span>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="columns" style="margin-bottom: 10vh;">
      <div class="column is-7"></div>
      <div class="column is-shadowless is-5">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical">
            <a :href="pdfQuery" target="_blank" class="tile is-child button">
              <span class="icon"><i class="fas fa-file-pdf"/></span>
              <span>Exportera PDF</span>
            </a>
            <!-- <button class="tile is-child button">
              <span class="icon"><i class="fas fa-file-csv"/></span>
              <span>Exportera CSV</span>
            </button> -->
          </div>
          <div class="tile is-parent is-vertical">
            <!-- <button class="tile is-child button">
              <span class="icon"><i class="fas fa-file-pdf"/></span>
              <span>Exportera PDF</span>
            </button> -->
            <button class="tile is-child button">
              <span class="icon"><i class="fas fa-file-csv"/></span>
              <span>Exportera CSV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <p style="text-align: right;">Har du problem? Skriv vad som inte funkar i <a href="http://">chatten</a>!</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Scrollbox from '~/components/Scrollbox.vue'

export default {
  name: 'Grupper',
  components: { Scrollbox },
  layout: 'dashboard',
  middleware: ["auth"],
  mounted (){
    this.filter.groups = [ ...this.loggedInUser.groups_ids ]
    this.$store.dispatch('loadMembers', this.filter )
    this.$store.dispatch('loadTags')
    this.$root.$on('scrollend', () => {
      this.nextPage()
    })
  },
  data:()=>({
    filterPanelIsOpen: false,
    filter: {
      groups: [],
      include: ['tags','roles','attended_at'],
      search: '',
      tags: [],
      roles: [],
      camps: [],
      notes: [],
      age: undefined,
      condition: '<',
    },
    timer: setTimeout(() => {}, 0)
  }),
  methods: {
    toggleTagFilter(tag){
      if(this.filter.tags.includes(tag.id)) {
        this.filter.tags.splice(this.filter.tags.indexOf(tag.id),1)
      } else { 
        this.filter.tags.push(tag.id)
      }
      this.filter.search = ''
      this.firstPage()
    },
    toggleCampFilter(camp){
      if(this.filter.camps.includes(camp.id)) {
        this.filter.camps.splice(this.filter.camps.indexOf(camp.id),1)
      } else { 
        this.filter.camps.push(camp.id)
      }
      this.filter.search = ''
      this.firstPage()
    },
    toggleGroupFilter(group){
      if(this.filter.groups.includes(group.id)) {
        this.filter.groups.splice(this.filter.groups.indexOf(group.id),1)
      } else { 
        this.filter.groups.push(group.id)
      }
      this.filter.search = ''
      this.firstPage()
    },
    nextPage() {
      // console.log(e.type, this.pagination.loadmore)
      if(this.pagination.loadmore) {
        this.$store.dispatch('loadMembers', { ...this.filter, page: this.pagination.page+1 } )
      }
    },
    firstPage() {
      this.$store.dispatch('loadMembers', { ...this.filter, page: 1 } )
    },
    searchTimer() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.firstPage()
      }, 400);
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'loading', 'groups', 'members', 'tags', 'camps', 'pagination']),
    groupmembers (){
      return this.members.filter(member =>  this.filter.groups.includes(member.group_id))
    },
    hasSeachString () {
      return new RegExp(this.filter.search.replace(' ','.?'), 'i')
    },
    matchedGroups () {
      return this.filter.search ? this.loggedInUser.groups.filter(group=>this.hasSeachString.test(group.name)) : []
    },
    matchedTags () {
      return this.filter.search ? this.tags.filter(tag=>this.hasSeachString.test(tag.name)) : []
    },
    matchedCamps () {
      return this.filter.search ? this.camps.filter(camp=>this.hasSeachString.test(camp.name)) : []
    },
    pdfQuery () {
      let query = '/api/v1/members/pdf?include=tags,roles,attended_at&pagesize=100000'

      // Filters
      query += this.filter.groups    ? '&groups='+this.filter.groups.join(',') : ''
      query += this.filter.search   ? '&search='+this.filter.search : ''
      query += this.filter.age             ? '&age='+this.filter.condition+this.filter.age : ''
      query += this.filter.tags[0]   ? '&tags='+this.filter.tags.join(',') : ''
      query += this.filter.roles[0]  ? '&roles='+this.filter.roles.join(',') : ''
      query += this.filter.camps[0]  ? '&camps='+this.filter.camps.join(',') : ''
      query += this.filter.notes[0] ? '&notes='+this.filter.notes.join(',') : ''
      
      return query
    },
    filteredMembers () {
      return this.groupmembers.filter(member => {
        let matchedSearch = true,
          matchedAge = true,
          matchedTags = true,
          matchedRoles = true,
          matchedCamps = true,
          matchedNoteTypes = true;

        // Search
        if (this.filter.search) {
          // const str = member.firstname + member.lastname + member.email + member.tel + member.age+' år' + member.pnr
          matchedSearch = this.hasSeachString.test(member.firstname)
           || this.hasSeachString.test(member.lastname)
           || this.hasSeachString.test(member.email)
           || this.hasSeachString.test(member.tel)
           || this.hasSeachString.test(member.age)
           || this.hasSeachString.test(member.pnr)
        }

        // Ålder
        if(this.filter.age) {
          matchedAge = eval(`member.age ${this.filter.condition} this.age`);
        }

        // Tags
        if(this.filter.tags[0]) {
          matchedTags = this.filter.tags.every(tagid => member.tags.map(tag=>tag.id).includes(tagid))
        }

        // Roles
        if(this.filter.roles[0]) {
          matchedRoles = this.filter.roles.every(roleid => member.roles.map(role=>role.id).includes(roleid))
        }

        // Camps
        if(this.filter.camps[0]) {
          matchedCamps = this.filter.camps.every(campid => member.attended_at.map(camp=>camp.id).includes(campid))
        }

        // Notetypes
        if(this.filter.notes[0]) {
          matchedNoteTypes = this.filter.notes.every(noteid => member.notes.map(note=>note.id).includes(noteid))
        }

        return matchedSearch && matchedAge && matchedTags && matchedRoles && matchedCamps && matchedNoteTypes
      })
    }
  },
  // watch: {
  //   queryString: function (newQueryString, oldQueryString) {
  //     this.nextPage()(1)
  //   }
  // }
}
</script>

<style lang="scss">
  .panel {
    font-size: 12px;
  }

  .members-table {
    .tr_template {
      background: #FAFAFA;
      p {
        background: linear-gradient(45deg, #F0F0F0, transparent, #F0F0F0); 
        // background: linear-gradient(45deg, #F0F0F0, transparent); 
        animation: loading 4s ease infinite;
        background-size: 400% 400%;
        border-radius: 4px;
        span {
          opacity:0;
        }
      }
    }
    .tags {
      width: 170px;
      // text-overflow: ellipsis;
      // overflow: hidden;
      // white-space: nowrap;
      // display: block;
      // &:hover {
      //   span {
      //     // margin-right: 0.1rem;
      //   }
      // }
    }
    .tag {
      margin-bottom: 0;
      &:not(:last-child) {
        margin-right: 0.1rem;
        // &:hover {

        // }
      }
    }
  }

  @keyframes loading {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* always present */
.fadeup-item {
  transition: all .3s ease;
  transform: translateX(0);
  opacity: 1;
  background: transparent;
  p {
    background: transparent; 
  }
}
/* .fadeup-enter defines the starting state for entering */
/* .fadeup-leave defines the ending state for leaving */
.fadeup-enter {
  transform: translateX(10px);
  opacity: 0;
}
.fadeup-leave {
  transform: translateX(-10px);
  opacity: 0;
}
// .fadeup-item.fadeup-enter {
//   transform: translateX(10px);
//   opacity: 0;
//   background: #FAFAFA;
//   p {
//     background: linear-gradient(45deg, #F0F0F0, transparent, #F0F0F0); 
//     animation: loading 4s ease infinite;
//     background-size: 400% 400%;
//     border-radius: 4px;
//     span {
//       opacity:0;
//     }
//   }
// }
// .fadeup-leave {
//   transform: translateX(-10px);
//   opacity: 0;
//   background: #FAFAFA;
//   p {
//     background: linear-gradient(45deg, #F0F0F0, transparent, #F0F0F0); 
//     animation: loading 4s ease infinite;
//     background-size: 400% 400%;
//     border-radius: 4px;
//     span {
//       opacity:0;
//     }
//   }
// }

</style>
