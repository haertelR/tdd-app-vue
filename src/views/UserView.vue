<script>
import { mapState } from 'vuex'
import UserProfile from '@/components/VUserProfile'
import UserSearchForm from '@/components/VUserSearchForm'

export default {
    name: 'UserView',
    components: {
        UserProfile,
        UserSearchForm,
    }, methods: {
        searchUser(username) {
            this.$store.dispatch('SEARCH_USER', { username })
        }
    },
    computed: {
        ...mapState({
            user: 'user',
        })
    }
}
</script>

<template>
    <div>
        <UserSearchForm
            @submitted="searchUser"
        />
        <UserProfile :user="user"/>
    </div>        
</template>

