<template>
             <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
             <nuxt-link to="/">Accueil</nuxt-link>
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
             <nuxt-link to="register">Inscription</nuxt-link>
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                test
            </template>
            <MenuGroup title="test">
                <MenuItem name="3-1">tets</MenuItem>
                <MenuItem name="3-2">tets</MenuItem>
                <MenuItem name="3-3">test</MenuItem>
            </MenuGroup>
            <MenuGroup title="test">
                <MenuItem name="3-4">test</MenuItem>
                <MenuItem name="3-5">test</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
             <nuxt-link to="/">API-DOC</nuxt-link>
            
        </MenuItem>
    </Menu>
</template>

<style>

    
</style>

